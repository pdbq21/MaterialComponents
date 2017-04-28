/**
 * Created by ruslan on 08.03.17.
 */

import React, {PureComponent}from 'react';
import classnames from 'classnames';
// After (15.5)
import PropTypes from 'prop-types';

import '@material/ripple/dist/mdc.ripple.min.css';
import {ripple}  from 'material-components-web/dist/material-components-web';
const {MDCRippleFoundation} = ripple;
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

export default class Button extends PureComponent {
    static propTypes = {
        accent: PropTypes.bool,
        children: PropTypes.node,
        className: PropTypes.string,
        compact: PropTypes.bool,
        dense: PropTypes.bool,
        primary: PropTypes.bool,
        raised: PropTypes.bool,
    };

    static defaultProps = {
//empty
    };

    state = {
        classNamesRipple: [],
        rippleCss: {},
    };

    foundationRipple = new MDCRippleFoundation({
        isUnbounded: () => false,
        browserSupportsCssVars: () => {
            return supportsCssVariables(window);
        },
        isSurfaceActive: () => this.refs.root[MATCHES](':active'),
        addClass: className => this.setState(({classNamesRipple}) => ({
            classNamesRipple: classNamesRipple.concat([className])
        })),
        removeClass: className => {
            if (this.refs.root) {
                this.setState(({classNamesRipple}) => ({
                    classNamesRipple: classNamesRipple.filter(cn => cn !== className)
                }))
            }
        },
        registerInteractionHandler: (evtType, handler) => {
            if (this.refs.root) {
                this.refs.root.addEventListener(evtType, handler);
            }
        },
        deregisterInteractionHandler: (evtType, handler) => {
            if (this.refs.root) {
                this.refs.root.removeEventListener(evtType, handler);
            }
        },
        registerResizeHandler: handler => {
            window.addEventListener('resize', handler);
        },
        deregisterResizeHandler: handler => {
            window.removeEventListener('resize', handler);
        },
        updateCssVariable: (varName, value) => {
            if (this.refs.root) {
                this.setState(({rippleCss}) => ({
                    rippleCss: {
                        ...rippleCss,
                        [varName]: value
                    }
                }))
            }
        },
        computeBoundingRect: () => (this.refs.root.getBoundingClientRect()),
        getWindowPageOffset: () => ({
            x: window.pageXOffset,
            y: window.pageYOffset
        }),
    });

    render() {
        const ownProps = Object.assign({}, this.props);
        delete ownProps.ripple;
        const {
            elementType,
            className,
            accent,
            compact,
            dense,
            primary,
            raised,
            children,
            ...otherProp
        } = ownProps;
        const ElementType = elementType || 'button';
        return (
            <ElementType
                ref="root"
                className={
                    classnames(
                        'mdc-button', {
                            'mdc-button--accent': accent,
                            'mdc-button--compact': compact,
                            'mdc-button--dense': dense,
                            'mdc-button--primary': primary,
                            'mdc-button--raised': raised,
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