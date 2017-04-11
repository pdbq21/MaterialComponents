/**
 * Created by ruslan on 13.03.17.
 */
/*
 import React from 'react';

 const propTypes = {};

 const Checkbox = ({
 ...otherProp
 }) => {

 return (
 <div className={`mdc-checkbox`}
 {...otherProp}
 >
 <input
 type="checkbox"
 className="mdc-checkbox__native-control"
 />
 <div className="mdc-checkbox__background">
 <svg version="1.1"
 className="mdc-checkbox__checkmark"
 xmlns="http://www.w3.org/2000/svg"
 viewBox="0 0 24 24">
 <path className="mdc-checkbox__checkmark__path"
 fill="none"
 stroke="white"
 d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
 </svg>
 <div className="mdc-checkbox__mixedmark"></div>
 </div>
 </div>);
 };

 Checkbox.propTypes = propTypes;
 export default Checkbox;*/


import React, {PureComponent, PropTypes} from 'react';
import classnames from 'classnames';
import {checkbox}  from 'material-components-web/dist/material-components-web';
const {MDCCheckboxFoundation} = checkbox;

import '@material/ripple/dist/mdc.ripple.min.css';
import {ripple}  from 'material-components-web/dist/material-components-web';
const {MDCRipple, MDCRippleFoundation} = ripple;

const eventTypeMap = {
    animationstart: {
        noPrefix: 'animationstart',
        webkitPrefix: 'webkitAnimationStart',
    },
    animationend: {
        noPrefix: 'animationend',
        webkitPrefix: 'webkitAnimationEnd',
    },
    animationiteration: {
        noPrefix: 'animationiteration',
        webkitPrefix: 'webkitAnimationIteration',
    },
    transitionend: {
        noPrefix: 'transitionend',
        webkitPrefix: 'webkitTransitionEnd',
    },
};

const cssPropertyMap = {
    animation: {
        noPrefix: 'animation',
        webkitPrefix: '-webkit-animation',
    },
    transform: {
        noPrefix: 'transform',
        webkitPrefix: '-webkit-transform',
    },
    transition: {
        noPrefix: 'transition',
        webkitPrefix: '-webkit-transition',
    },
};

// If 'animation' or 'transition' exist as style property, webkit prefix isn't necessary. Since we are unable to
// see the event types on the element, we must rely on the corresponding style properties.
function getJavaScriptEventName(eventType, map, el) {
    switch (eventType) {
        case 'animationstart':
        case 'animationend':
        case 'animationiteration':
            return 'animation' in el.style ? map[eventType].noPrefix : map[eventType].webkitPrefix;
        case 'transitionend':
            return 'transition' in el.style ? map[eventType].noPrefix : map[eventType].webkitPrefix;
        default:
            return map[eventType].noPrefix;
    }
}

function eventFoundInMaps(eventType) {
    return eventType in eventTypeMap || eventType in cssPropertyMap;
}

function hasProperShape(windowObj) {
    return (windowObj.document !== undefined && typeof windowObj.document.createElement === 'function');
}

function getCorrectEventName(windowObj, eventType) {
    if (!hasProperShape(windowObj) || !eventFoundInMaps(eventType)) {
        return eventType;
    }

    let map = eventType in eventTypeMap ? eventTypeMap : cssPropertyMap;
    let el = windowObj.document.createElement('div');
    let eventName = '';

    if (map === eventTypeMap) {
        eventName = getJavaScriptEventName(eventType, map, el);
    } else {
        eventName = map[eventType].noPrefix in el.style ? map[eventType].noPrefix : map[eventType].webkitPrefix;
    }

    return eventName;
}

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


class Checkbox extends PureComponent {
    static propTypes = {
        id: PropTypes.string,
        labelId: PropTypes.string,
        checked: PropTypes.bool,
        disabled: PropTypes.bool,
        indeterminate: PropTypes.bool,
        onChange: PropTypes.func
    }

    static defaultProps = {
        checked: false,
        disabled: false,
        indeterminate: false,
        onChange: () => {
        }
    }

    state = {
        classes: [],
        checkedInternal: this.props.checked,
        disabledInternal: this.props.disabled,
        indeterminateInternal: this.props.indeterminate,

        classNamesRipple: [],
        rippleCss: {},
    }


    // Here we initialize a foundation class, passing it an adapter which tells it how to
    // work with the React component in an idiomatic way.
    foundation = new MDCCheckboxFoundation({
        addClass: className => this.setState(({classes}) => ({
            classes: classes.concat([className])
        })),
        removeClass: className => this.setState(({classes}) => ({
            classes: classes.filter(cn => cn !== className)
        })),
        //this for Ripple
        registerAnimationEndHandler: handler => {
            if (this.refs.root) {
                this.refs.root.addEventListener(getCorrectEventName(window, 'animationend'), handler);
            }
        },
        deregisterAnimationEndHandler: handler => {
            if (this.refs.root) {
                this.refs.root.removeEventListener(getCorrectEventName(window, 'animationend'), handler)
            }
        },
        registerChangeHandler: handler => {
            // Note that this could also be handled outside of using the native DOM API.
            // For example, onChange within render could delegate to a function which calls
            // the handler passed here, as well as performs the other business logic. The point
            // being our foundations are designed to be adaptable enough to fit the needs of the host
            // platform.
            if (this.refs.nativeCb) {
                this.refs.nativeCb.addEventListener('change', handler);
            }
        },
        deregisterChangeHandler: handler => {
            if (this.refs.nativeCb) {
                this.refs.nativeCb.removeEventListener('change', handler);
            }
        },
        getNativeControl: () => {
            if (!this.refs.nativeCb) {
                throw new Error('Invalid state for operation');
            }
            return this.refs.nativeCb;
        },
        forceLayout: () => {
            if (this.refs.nativeCb) {
                this.refs.nativeCb.offsetWidth;
            }
        },
        isAttachedToDOM: () => Boolean(this.refs.nativeCb),
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
            this.refs.nativeCb.addEventListener(evtType, handler);
        },
        deregisterInteractionHandler: (evtType, handler) => {
            this.refs.nativeCb.removeEventListener(evtType, handler);
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

            const {left, top} = this.refs.root.getBoundingClientRect();
            console.log(left, top);
            const DIM = 40;
            //return this.refs.root.getBoundingClientRect();
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

    render() {
        // Within render, we generate the html needed to render a proper MDC-Web checkbox.
        return (
            <div ref="root" className={
                classnames(
                    'mdc-checkbox',
                    this.state.classes,
                    this.state.classNamesRipple
                )}>
                <input ref="nativeCb"
                       id={this.props.id}
                       type="checkbox"
                       className="mdc-checkbox__native-control"
                       aria-labelledby={this.props.labelId}
                       checked={this.state.checkedInternal}
                       disabled={this.state.disabledInternal}
                       onChange={evt => {
                           this.setState({
                               checkedInternal: this.refs.nativeCb.checked,
                               indeterminateInternal: false
                           });
                           this.props.onChange(evt);
                       }}/>
                <div className="mdc-checkbox__background">
                    <svg version="1.1"
                         className="mdc-checkbox__checkmark"
                         xmlns="http://www.w3.org/2000/svg"
                         viewBox="0 0 24 24">
                        <path className="mdc-checkbox__checkmark__path"
                              fill="none"
                              stroke="white"
                              d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
                    </svg>
                    <div className="mdc-checkbox__mixedmark"/>
                </div>
            </div>
        );
    }

    // Within the two component lifecycle methods below, we invoke the foundation's lifecycle hooks
    // so that proper work can be performed.
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

    // Here we synchronize the internal state of the UI component based on what the user has specified.
    componentWillReceiveProps(props) {
        if (props.checked !== this.props.checked) {
            this.setState({checkedInternal: props.checked, indeterminateInternal: false});
        }
        if (props.indeterminate !== this.props.indeterminate) {
            this.setState({indeterminateInternal: props.indeterminate});
        }
        if (props.disabled !== this.props.disabled) {
            this.setState({disabledInternal: props.disabled});
        }
    }

    // Since we cannot set an indeterminate attribute on a native checkbox, we use componentDidUpdate to update
    // the indeterminate value of the native checkbox whenever a change occurs (as opposed to doing so within
    // render()).
    componentDidUpdate() {
        if (this.refs.nativeCb) {
            this.refs.nativeCb.indeterminate = this.state.indeterminateInternal;
        }

        if (this.props.ripple && this.refs.root) {
            for (let key in this.state.rippleCss) {
                if (this.state.rippleCss.hasOwnProperty(key)) {
                    this.refs.root.style.setProperty(key, this.state.rippleCss[key]);
                }
            }
        }
    }
}

export default Checkbox;