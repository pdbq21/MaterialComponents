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
const {
    strings: {
        ARIA_LABEL,
        ARIA_PRESSED,
        DATA_TOGGLE_OFF,
        DATA_TOGGLE_ON
    }
} = MDCIconToggleFoundation;
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

    iconEl_ = () => {
        const sel = this.refs.root.dataset.iconInnerSelector;
        return sel ? this.refs.root.querySelector(sel) : this.refs.root;
    };
    foundation = new MDCIconToggleFoundation({
        /*addClass: className => this.setState(({classes}) => ({
         classes: classes.concat([className])
         })),
         removeClass: className => this.setState(({classes}) => ({
         classes: classes.filter(cn => cn !== className)
         })),*/
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
        /*setText: text => {
         if (this.refs.root) {
         this.refs.root.textContent = text;
         }
         },*/
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
                this.props.onChange(evtData);
            }
        },

        addClass: className => {
            const iconEl_ = this.iconEl_();
            return iconEl_.classList.add(className);
        },
        removeClass: className => {
            const iconEl_ = this.iconEl_();
            return iconEl_.classList.remove(className);
        },

        setText: text => {
            const iconEl_ = this.iconEl_();
            return iconEl_.textContent = text;
        },
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

    parseJsonDataAttr_ = (dataAttr) => {
        const val = this.refs.root.getAttribute(dataAttr);
        if (!val) {
            return {};
        }
        return JSON.parse(val);
    };

    toggle_ = (isOn) => {
        const _ref = isOn ?
                this.foundation.toggleOnData_ :
                this.foundation.toggleOffData_,
            content = _ref.content,
            label = _ref.label,
            cssClass = _ref.cssClass;

        const _ref2 = isOn ?
                this.foundation.toggleOffData_ :
                this.foundation.toggleOnData_,
            classToRemove = _ref2.cssClass;

        if (isOn) {
            this.foundation.adapter_.setAttr(ARIA_PRESSED, 'true');
        } else {
            this.foundation.adapter_.setAttr(ARIA_PRESSED, 'false');
        }

        if (classToRemove) {
            this.foundation.adapter_.removeClass(classToRemove);
        }
        if (cssClass) {
            this.foundation.adapter_.addClass(cssClass);
        }
        if (content) {
            this.foundation.adapter_.setText(content);
        }
        if (label) {
            this.foundation.adapter_.setAttr(ARIA_LABEL, label);
        }
    };

    refreshToggleData = (toggle) => {
        this.foundation.toggleOnData_ = this.parseJsonDataAttr_(DATA_TOGGLE_ON);
        this.foundation.toggleOffData_ = this.parseJsonDataAttr_(DATA_TOGGLE_OFF);
        this.toggle_(toggle);
    };

    componentWillReceiveProps(props) {
        if (typeof props.toggle !== 'undefined') {
            this.refreshToggleData(props.toggle);
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

    render() {
        const ownProps = Object.assign({}, this.props);
        delete ownProps.ripple;
        delete ownProps.toggle;
        const {
            className,
            ...otherProp
        } = ownProps;
/*        return (
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
        );*/
        return (
            <span
                ref='root'
                className={
                    classnames(
                        'mdc-icon-toggle',
                        this.state.classes,
                        this.state.classNamesRipple,
                        className
                    )}
                role="button"
                aria-pressed="false"
                aria-label="Star this item"
                tabIndex="0"
                data-icon-inner-selector=".fa"
                data-toggle-on='{"cssClass": "fa-star", "label": "Unstar this item"}'
                data-toggle-off='{"cssClass": "fa-star-o", "label": "Star this item"}'
                {...otherProp}
            >
  <i
      className="fa fa-star-o"
      aria-hidden="true"
  />
</span>


        );
    }
}