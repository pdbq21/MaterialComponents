/**
 * Created by ruslan on 30.03.17.
 */
import React, {Component, PropTypes} from 'react';
import '@material/ripple/dist/mdc.ripple.min.css';
import {ripple as test}  from 'material-components-web/dist/material-components-web';
const {MDCRipple, MDCRippleFoundation} = test;
import classnames from 'classnames';

export default function (props) {
    return (
        <RippleSelect />
    )
}

function getMatchesProperty(HTMLElementPrototype) {
    return [
        'webkitMatchesSelector', 'msMatchesSelector', 'matches',
    ].filter((p) => p in HTMLElementPrototype).pop();
}

const MATCHES = getMatchesProperty(HTMLElement.prototype);

export function supportsCssVariables (windowObj) {
    const supportsFunctionPresent = windowObj.CSS && typeof windowObj.CSS.supports === "function";
    if (!supportsFunctionPresent) {
        return false;
    }

    const explicitlySupportsCssVars = windowObj.CSS.supports("--css-vars", "yes");
    // See: https://bugs.webkit.org/show_bug.cgi?id=154669
    // See: README section on Safari
    const weAreFeatureDetectingSafari10plus = (
        windowObj.CSS.supports("(--css-vars: yes)") &&
        windowObj.CSS.supports("color", "#00000000")
    );
    return explicitlySupportsCssVars || weAreFeatureDetectingSafari10plus;
}

class RippleSelect extends Component {
    static propTypes = {
        id: PropTypes.string,
    }


    state = {
        classNames: [],
        rippleCss: {},
        XY: {}
    }


    foundation = new MDCRippleFoundation(Object.assign(MDCRipple.createAdapter(this), {
        // for FAB this. === true \ for other component === false
        isUnbounded: () => false,
        browserSupportsCssVars: () => {
            return supportsCssVariables(window);
        },
        isSurfaceActive: () => this.refs.root[MATCHES](':active'),
        addClass: className => this.setState(({classNames}) => ({
            classNames: classNames.concat([className])
        })),
        removeClass: className => this.setState(({classNames}) => ({
            classNames: classNames.filter(cn => cn !== className)
        })),
        registerInteractionHandler: (evtType, handler) => {
            this.refs.root.addEventListener(evtType, handler);
        },
        deregisterInteractionHandler: (evtType, handler) => {
            this.refs.root.removeEventListener(evtType, handler);
        },
        registerResizeHandler: handler => {
            window.addEventListener('resize', handler);
        },
        deregisterResizeHandler: handler => {
            window.removeEventListener('resize', handler);
        },


        updateCssVariable: (varName, value) => this.setState(({rippleCss}) => ({
            rippleCss: {
                ...rippleCss,
                [varName]: value
            }
        })),
        computeBoundingRect: () => {
            console.log(this.refs.root.getBoundingClientRect());
           /* const {left, top} = this.refs.root.getBoundingClientRect();
            console.log(left, top);
            const DIM = 100;*/
            return this.refs.root.getBoundingClientRect();
        },
        getWindowPageOffset: () => {
            return {
                x: window.pageXOffset,
                y: window.pageYOffset
            }
        },

    }));


    render() {
       // console.log(test, MDCRippleFoundation);
        return (
            <div ref="root"  style={{    'width': '10em',
                'height': '6em',
                'backgroundColor': 'deepskyblue'
            }}  className={classnames('mdc-ripple-surface', this.state.classNames)}>

            </div>
        );
    }

    componentDidMount() {
        this.foundation.init();
        console.log(this.foundation)
    }

    componentWillUnmount() {
        this.foundation.destroy();
    }

    componentDidUpdate(props) {
        if (this.refs.root) {
            for (let key in this.state.rippleCss){
                this.refs.root.style.setProperty(key, this.state.rippleCss[key]);
            }
        }
    }
}
