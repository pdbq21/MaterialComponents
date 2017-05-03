/**
 * Created by ruslan on 27.03.17.
 */
import React, {Component} from 'react';
import classnames from 'classnames';
import '@material/snackbar/dist/mdc.snackbar.min.css';
import {snackbar}  from 'material-components-web/dist/material-components-web';
const {MDCSnackbar, MDCSnackbarFoundation} = snackbar;
const {
    cssClasses: {
        ACTIVE: ACTIVE_CLASS_NAME,
    },
} = MDCSnackbarFoundation;
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

export default class TestSnackbar extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            classNames: [],
            open: false
        };


        this.foundation = new MDCSnackbarFoundation({

            addClass: className => {
                this.setState(({classNames}) => ({
                    classNames: classNames.concat([className])
                }));
                if (className === ACTIVE_CLASS_NAME) {
                    this.setState({
                        open: true,
                    });
                    if (this.props.onOpen) {
                        this.props.onOpen(this);
                    }
                }
            },
            removeClass: className => {
                this.setState(({classNames}) => ({
                    classNames: classNames.filter(cn => cn !== className)
                }));
                // MDCDialog does not provide opening/closing event.
                // But we can assume open/close by adding/removing OPEN_CLASS_NAME
                if (className === ACTIVE_CLASS_NAME) {
                    this.setState({
                        open: false,
                    });
                    if (this.props.onClose) {
                        this.props.onClose(this);
                    }
                }
            },
            setAriaHidden: () => {
                if (this.refs.root) {
                    this.refs.root.setAttribute('aria-hidden', 'true');
                }
            },
            unsetAriaHidden: () => {
                if (this.refs.root) {
                    this.refs.root.removeAttribute('aria-hidden');
                }
            },

            setMessageText: text => {
                if (this.refs.text) {
                    this.refs.text.textContent = text;
                }
            },
            setActionText: text => {
                if (this.refs.button) {
                    this.refs.button.textContent = text;
                }
            },

            setActionAriaHidden: () => {
                if (this.refs.button) {
                    this.refs.button.setAttribute('aria-hidden', 'true');
                }
            },
            unsetActionAriaHidden: () => {
                if (this.refs.button) {
                    this.refs.button.removeAttribute('aria-hidden');
                }
            },


            registerActionClickHandler: handler => {
                if (this.refs.button) {
                    this.refs.button.addEventListener('click', handler);
                }
            },
            deregisterActionClickHandler: handler => {
                if (this.refs.button) {
                    this.refs.button.removeEventListener('click', handler);
                }
            },

            registerTransitionEndHandler: function registerTransitionEndHandler(handler) {
                if (this.refs.root) {
                    this.refs.root.addEventListener(getCorrectEventName(window, 'transitionend'), handler);
                }
            },
            deregisterTransitionEndHandler: function deregisterTransitionEndHandler(handler) {
                if (this.refs.root) {
                    this.refs.root.removeEventListener(getCorrectEventName(window, 'transitionend'), handler);
                }
            }

        });
    }

    componentDidMount() {
        console.dir(this.foundation);
        this.foundation.init();
    }

    componentWillUnmount() {
        this.foundation.destroy();
    }
    componentWillReceiveProps(props) {
        if (props.open !== this.state.open) {
            const {
                message,
                actionText,
                timeout,
                multiline,
                actionOnBottom,
                actionHandler
            } = props;
            let data = {
                message: message,
                actionOnBottom: actionOnBottom,
                multiline: multiline,
                timeout: timeout
            };
            if (actionText) {
                data.actionText = actionText;
                data.actionHandler = actionHandler;
            }
            this.foundation.show(data);
        }
    }
    componentDidUpdate() {
/*        if (this.props.isOpen) {
            let drawer = new MDCSnackbar(this.refs.root);
            //console.log(drawer, this.foundation);
            const {
                message,
                actionText,
                timeout,
                multiline,
                actionOnBottom,
                actionHandler
            } = this.props;
            let data = {
                message: message,
                actionOnBottom: actionOnBottom,
                multiline: multiline,
                timeout: timeout
            };
            if (actionText) {
                data.actionText = actionText;
                data.actionHandler = actionHandler;
            }
            console.log(drawer, this.foundation);
            this.foundation.show(data);
            drawer.show(data);
        }*/
    }

    render() {
//const self = this.refs.rootInput;
        return (
            <div ref='root'
                 className={classnames('mdc-snackbar', this.state.classNames)}
                 aria-live="assertive"
                 aria-atomic="true"
            >
                <div ref='text' className="mdc-snackbar__text"/>
                <div className="mdc-snackbar__action-wrapper">
                    <button type="button" ref='button' className="mdc-button mdc-snackbar__action-button"/>
                </div>
            </div>

        );
    }
}


/*
 import {ripple as test1}  from 'material-components-web/dist/material-components-web';

 const {MDCRipple, MDCRippleFoundation} = test1;

 class Text extends Component {
 render() {
 const {children} = this.props;
 return (
 <div className="mdc-snackbar__text">{children}</div>
 );
 }
 }
 class ActionWrapper extends Component {
 render() {
 const {children} = this.props;
 return (
 <div className="mdc-snackbar__action-wrapper">
 {children}
 </div>
 );
 }
 }
 class ActionButton extends Component {
 render() {
 const {children} = this.props;
 return (
 <button type="button" className="mdc-button mdc-snackbar__action-button">{children}</button>
 );
 }
 }*/