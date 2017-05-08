/*
/!**
 * Created by ruslan on 30.03.17.
 *!/
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import '@material/ripple/dist/mdc.ripple.min.css';
import {ripple as test}  from 'material-components-web/dist/material-components-web';
const {MDCRippleFoundation} = test;
import '@material/fab/dist/mdc.fab.min.css';

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

export default class RippleSelect extends Component {
    static propTypes = {
        id: PropTypes.string,
    }

    constructor(props) {
        super(props);
        this.foundation = null;
    }

    foundation_ = () => (new MDCRippleFoundation({
        isUnbounded: () => false,
        browserSupportsCssVars: () => {
            return supportsCssVariables(window);
        },
        isSurfaceActive: () => this.refs.root[MATCHES](':active'),
        addClass: (className) => {
            if (this.refs.root) {
                return this.refs.root.classList.add(className);
            }
        },
        removeClass: (className) => {
            if (this.refs.root) {
                return this.refs.root.classList.remove(className);
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
                return this.refs.root.style.setProperty(varName, value);
            }
        },
        computeBoundingRect: () => (this.refs.root.getBoundingClientRect()),
        getWindowPageOffset: () => ({
            x: window.pageXOffset,
            y: window.pageYOffset
        }),
    }));

    render() {
        return (
            React.cloneElement(this.props.children, {
                ref: 'root'
            })
        );
    }

    componentDidMount() {
        this.foundation = this.foundation_();
        this.foundation.init();
    }

    componentWillUnmount() {
        this.foundation.destroy();
    }
}
*/
