/**
 * Created by ruslan on 13.04.17.
 */
/**
 * Created by ruslan on 12.04.17.
 */
import React, {Component} from 'react';
import classnames from 'classnames';

import '@material/icon-toggle/dist/mdc.icon-toggle.min.css';
import {iconToggle}  from 'material-components-web/dist/material-components-web';
const {MDCIconToggleFoundation} = iconToggle;
import '@material/ripple/dist/mdc.ripple.min.css';
import {ripple}  from 'material-components-web/dist/material-components-web';
const {MDCRipple, MDCRippleFoundation} = ripple;
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

export default class IconToggleComponentTest extends Component {

    state = {
        classes: [],
        classNamesRipple: [],
        rippleCss: {},
    };

    foundation = new MDCIconToggleFoundation({
        addClass: className => this.setState(({classes}) => ({
            classes: classes.concat([className])
        })),
        removeClass: className => this.setState(({classes}) => ({
            classes: classes.filter(cn => cn !== className)
        })),
        registerInteractionHandler: (type, handler) => {
            if (this.refs.root) {
                this.refs.root.addEventListener(type, handler);
            }
        },
        deregisterInteractionHandler: (type, handler) => {
            if (this.refs.root) {
                this.refs.root.removeEventListener(type, handler);
            }
        },
        setText: text => {
            if (this.refs.root) {
                this.refs.root.textContent = text;
            }
        },
        getTabIndex: () => {
            if (this.refs.root) {
                return this.refs.root.tabIndex;
            }
        },
        setTabIndex: tabIndex => {
            if (this.refs.root) {
                this.refs.root.tabIndex = tabIndex;
            }
        },
        getAttr: name => {
            if (this.refs.root) {
                this.refs.root.getAttribute(name);
            }
        },
        setAttr: (name, value) => {
            if (this.refs.root) {
                this.refs.root.setAttribute(name, value);
            }
        },
        rmAttr: name => {
            if (this.refs.root) {
                this.refs.root.removeAttribute(name);
            }
        },

        notifyChange: evtData => {
            if (this.props.onChange !== null) {
                this.props.onChange(this, evtData);
            }
        },

 /*Todo: fix error emit() not a function
        notifyChange: function notifyChange(evtData) {
            return _this3.emit('MDCIconToggle:change', evtData);
        }*/
    });


    foundationRipple = new MDCRippleFoundation(Object.assign(MDCRipple.createAdapter(this), {
        // for FAB this. === true \ for other component === false
        isUnbounded: () => true,
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
            const {left, top} = this.refs.root.getBoundingClientRect();
            const DIM = 48;
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
            return {
                x: window.pageXOffset,
                y: window.pageYOffset
            }
        },

    }));

    componentDidMount() {
        this.foundation.init();
       if (this.props.ripple) {
            this.foundationRipple.init();
        }

    }

    componentWillUnmount() {
        if (this.props.ripple) {
            this.foundationRipple.destroy();
        }
        this.foundation.destroy();
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

    render() {
        console.log(iconToggle);
        const ownProps = Object.assign({}, this.props);
        delete ownProps.ripple;
        const {
            className,
            ...otherProp
        } = ownProps;
        return (
                <i
                    ref='root'
                    className={
                        classnames(
                            'mdc-icon-toggle material-icons',
                            this.state.classes,
                            this.state.classNamesRipple,
                            className
                        )}
                     role="button" aria-pressed="false"
                   aria-label="Add to favorites" tabIndex="0"
                   data-toggle-on='{"label": "Remove from favorites", "content": "favorite"}'
                   data-toggle-off='{"label": "Add to favorites", "content": "favorite_border"}'
                    {...otherProp}
                >
                    favorite_border
                </i>
        );
    }
}