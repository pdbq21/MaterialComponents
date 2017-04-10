/**
 * Created by ruslan on 16.03.17.
 */
import React, {PureComponent, PropTypes} from 'react';
import classnames from 'classnames';

import '@material/ripple/dist/mdc.ripple.min.css';
import {ripple as ripple}  from 'material-components-web/dist/material-components-web';
const {MDCRipple, MDCRippleFoundation} = ripple;
/*
const propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    icon: PropTypes.bool,
    mini: PropTypes.bool,
    plain: PropTypes.bool,
};
const FAB = ({
    children,
    className,
    elementType,
    icon,
    mini,
    plain,
    ...otherProp
}) => {
    const classes = classnames(
        'mdc-fab', {
            'material-icons': icon,
            'mdc-fab--mini': mini,
            'mdc-fab--plain': plain,
        }, className);
    const ElementType = elementType || 'button';
    return (
        <ElementType className={classes}
                     {...otherProp}
        >
                {children}
        </ElementType>);
};

FAB.propTypes = propTypes;
export default FAB;
*/


//Ripple
function getMatchesProperty(HTMLElementPrototype) {
    return [
        'webkitMatchesSelector', 'msMatchesSelector', 'matches',
    ].filter((p) => p in HTMLElementPrototype).pop();
}

const MATCHES = getMatchesProperty(HTMLElement.prototype);

function supportsCssVariables(windowObj) {
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

class FAB extends PureComponent {
    static propTypes = {
        children: PropTypes.node,
        className: PropTypes.string,
        icon: PropTypes.bool,
        mini: PropTypes.bool,
        plain: PropTypes.bool,
    };

    static defaultProps = {
//empty
    };

    state = {
        classNamesRipple: [],
        rippleCss: {},
    }


    foundationRipple = new MDCRippleFoundation(Object.assign(MDCRipple.createAdapter(this), {
        // for Checkbox this. === true \ for other component === false
        isUnbounded: () => false,
        browserSupportsCssVars: () => {
            return supportsCssVariables(window);
        },
        isSurfaceActive: () => this.refs.root[MATCHES](':active'),
        addClass: className => this.setState(({classNamesRipple}) => ({
            classNamesRipple: classNamesRipple.concat([className])
        })),
        removeClass: className => this.setState(({classNamesRipple}) => ({
            classNamesRipple: classNamesRipple.filter(cn => cn !== className)
        })),
        // root / nativeCb
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
            //console.log(this.refs.root.getBoundingClientRect());
            /*
             const {left, top} = this.refs.root.getBoundingClientRect();
             console.log(left, top);
             const DIM = 40;*/
            return this.refs.root.getBoundingClientRect();
            /*            return {
             top,
             left,
             right: left + DIM,
             bottom: top + DIM,
             width: DIM,
             height: DIM,
             };*/
        },
        getWindowPageOffset: () => {
            return {
                x: window.pageXOffset,
                y: window.pageYOffset
            }
        },

    }));

    render() {
        const {
            children,
            className,
            elementType,
            icon,
            mini,
            plain,
            ...otherProp
        } = this.props;
        const ElementType = elementType || 'button';
        return (
            <ElementType
                ref="root"
                className={
                    classnames(
                        'mdc-fab', {
                            'material-icons': icon,
                            'mdc-fab--mini': mini,
                            'mdc-fab--plain': plain,
                        },
                        this.state.classNamesRipple,
                        className
                    )}
                {...otherProp}
            >
                {children}
            </ElementType>
        );
    }

    // Within the two component lifecycle methods below, we invoke the foundation's lifecycle hooks
    // so that proper work can be performed.
    componentDidMount() {
        if (this.props.ripple) {
            this.foundationRipple.init();
        }
    }

    componentWillUnmount() {
        if (this.props.ripple) {
            this.foundationRipple.destroy();
        }
    }

    componentDidUpdate() {

        if (this.props.ripple && this.refs.root) {
            for (let key in this.state.rippleCss) {
                if (this.state.rippleCss.hasOwnProperty(key)) {
                    this.refs.root.style.setProperty(key, this.state.rippleCss[key]);
                }
            }
        }
    }
}

export default FAB;