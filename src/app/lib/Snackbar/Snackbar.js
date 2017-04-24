/**
 * Created by ruslan on 27.03.17.
 */
import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {snackbar}  from 'material-components-web/dist/material-components-web';
const {MDCSnackbar, MDCSnackbarFoundation} = snackbar;

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

export default class Snackbar extends PureComponent {
    static propTypes = {
        children: PropTypes.node,
    };

    constructor(props, context) {
        super(props, context);
        this.state = {
            classNames: [],
        };
        this.foundation = new MDCSnackbarFoundation({

            addClass: className => this.setState(({classNames}) => ({
                classNames: classNames.concat([className])
            })),
            removeClass: className => this.setState(({classNames}) => ({
                classNames: classNames.filter(cn => cn !== className)
            })),
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
        this.foundation.init();
    }

    componentWillUnmount() {
        this.foundation.destroy();
    }

    componentDidUpdate() {
        if (this.props.isOpen) {
            let drawer = new MDCSnackbar(this.refs.root);
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
            drawer.show(data);
        }
    }

    render() {
        const ownProps = Object.assign({}, this.props);
        delete ownProps.message;
        delete ownProps.actionText;
        delete ownProps.timeout;
        delete ownProps.multiline;
        delete ownProps.actionOnBottom;
        delete ownProps.actionHandler;
        const {
            elementType,
            className,
            ...otherProp
        } = ownProps;
        const ElementType = elementType || 'div';
        return (
            <ElementType ref='root'
                 className={classnames('mdc-snackbar', this.state.classNames, className)}
                 aria-live="assertive"
                 aria-atomic="true"
                         {...otherProp}
            >
                <div ref='text' className="mdc-snackbar__text"/>
                <div className="mdc-snackbar__action-wrapper">
                    <button type="button" ref='button' className="mdc-button mdc-snackbar__action-button"/>
                </div>
            </ElementType>

        );
    }

}
