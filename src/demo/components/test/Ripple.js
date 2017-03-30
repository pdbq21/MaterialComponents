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

class RippleSelect extends Component {
    static propTypes = {
        id: PropTypes.string,
    }


    state = {
        classNames: [],
        rippleCss: {}
    }


    foundation = new MDCRippleFoundation(Object.assign(MDCRipple.createAdapter(this), {
        isUnbounded: () => true,
        isSurfaceActive: () => this.refs.nativeCb[MATCHES](':active'),
        addClass: className => this.setState(({classNames}) => ({
            classNames: classNames.concat([className])
        })),
        removeClass: className => this.setState(({classNames}) => ({
            classNames: classNames.filter(cn => cn !== className)
        })),
        registerInteractionHandler: (evtType, handler) => {
            this.refs.nativeCb.addEventListener(evtType, handler);
        },
        deregisterInteractionHandler: (evtType, handler) => {
            this.refs.nativeCb.removeEventListener(evtType, handler);
        },
        /*registerResizeHandler: handler => {
            this.refs.nativeCb
        },
        deregisterResizeHandler: handler => {
            this.refs.nativeCb
        },*/


        updateCssVariable: (varName, value) => this.setState(({rippleCss}) => ({
            rippleCss: {
                ...rippleCss,
                [varName]: value
            }
        })),
        computeBoundingRect: () => {
            const {left, top} = this.refs.root.getBoundingClientRect();
            console.log(left, top);
            const DIM = 100;
            return {
                top,
                left,
                right: left + DIM,
                bottom: top + DIM,
                width: DIM,
                height: DIM,
            };
        },
        getWindowPageOffset: () => {

        },
    }));


    render() {
       // console.log(test, MDCRippleFoundation);
        return (
            <div ref="root" className={classnames('mdc-ripple-surface', this.state.classNames)}>
                <div ref="nativeCb"
                     style={{    'width': '10em',
                    'height': '6em',
                    'backgroundColor': 'deepskyblue'
                }} />
            </div>
        );
    }

    componentDidMount() {
        this.foundation.init();
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
