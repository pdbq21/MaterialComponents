/**
 * Created by ruslan on 27.03.17.
 */
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {snackbar} from 'material-components-web/dist/material-components-web';

const {MDCSnackbarFoundation} = snackbar;
const {
  cssClasses: {
    ACTIVE: ACTIVE_CLASS_NAME,
  },
  strings: {
    ACTION_BUTTON_SELECTOR: ACTION_BUTTON_SELECTOR_NAME,
    TEXT_SELECTOR: TEXT_SELECTOR_NAME,
    SHOW_EVENT: SHOW_EVENT_NAME,
    HIDE_EVENT: HIDE_EVENT_NAME,
  }
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

export default class Snackbar extends Component {
  static propTypes = {
    children: PropTypes.node,
  };

  constructor(props, context) {
    super(props, context);
    this.state = {
      classNames: [],
      open: false,
    };
  }

  emit = (root, evtType, evtData, shouldBubble = false) => {
    let evt;
    if (typeof CustomEvent === 'function') {
      evt = new CustomEvent(evtType, {
        detail: evtData,
        bubbles: shouldBubble
      });
    } else {
      evt = document.createEvent('CustomEvent');
      evt.initCustomEvent(evtType, shouldBubble, false, evtData);
    }
    root.dispatchEvent(evt);
  };


  //
  actionButton_ = () => this.refs.root.querySelector(ACTION_BUTTON_SELECTOR_NAME);
  rootText_ = () => this.refs.root.querySelector(TEXT_SELECTOR_NAME);

  foundation = new MDCSnackbarFoundation({
    addClass: className => {
      this.setState(({classNames}) => ({
        classNames: classNames.concat([className])
      }));

      if (className === ACTIVE_CLASS_NAME) {
        this.setState({
          open: true,
        });
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
        return this.refs.root.setAttribute('aria-hidden', 'true');
      }
    },
    unsetAriaHidden: () => {
      if (this.refs.root) {
        return this.refs.root.removeAttribute('aria-hidden');
      }
    },
    setMessageText: text => {
      const rootText = this.rootText_();
      if (!!rootText) {
        return rootText.textContent = text;
      }
    },
    setActionText: text => {
      const actionButton = this.actionButton_();
      if (!!actionButton) {
        return actionButton.textContent = text;
      }
    },
    setActionAriaHidden: () => {
      const actionButton = this.actionButton_();
      if (!!actionButton) {
        return actionButton.setAttribute('aria-hidden', 'true');
      }
    },
    unsetActionAriaHidden: () => {
      const actionButton = this.actionButton_();
      if (!!actionButton) {
        return actionButton.removeAttribute('aria-hidden');
      }
    },
    registerActionClickHandler: handler => {
      const actionButton = this.actionButton_();
      if (!!actionButton) {
        actionButton.addEventListener('click', handler, {passive: true});
      }
    },
    deregisterActionClickHandler: handler => {
      const actionButton = this.actionButton_();
      if (!!actionButton) {
        actionButton.removeEventListener('click', handler);
      }
    },
    registerTransitionEndHandler: handler => {
      if (!!this.refs.root) {
        this.refs.root.addEventListener(getCorrectEventName(window, 'transitionend'), handler, {passive: true});
      }
    },
    deregisterTransitionEndHandler: handler => {
      if (!!this.refs.root) {
        this.refs.root.removeEventListener(getCorrectEventName(window, 'transitionend'), handler);
      }
    },
    setFocus: () => {
      const actionButton = this.actionButton_();
      if (!!actionButton) {
        actionButton.focus();
      }
    },
    visibilityIsHidden: () => document.hidden,
    registerCapturedBlurHandler: (handler) => {
      const actionButton = this.actionButton_();
      if (!!actionButton) {
        actionButton.addEventListener('blur', handler, true);
      }
    },
    deregisterCapturedBlurHandler: (handler) => {
      const actionButton = this.actionButton_();
      if (!!actionButton) {
        actionButton.removeEventListener('blur', handler, true);
      }
    },
    registerVisibilityChangeHandler: (handler) =>
      document.addEventListener('visibilitychange', handler),
    deregisterVisibilityChangeHandler: (handler) =>
      document.removeEventListener('visibilitychange', handler),
    registerCapturedInteractionHandler: (evt, handler) =>
      document.body.addEventListener(evt, handler, true),
    deregisterCapturedInteractionHandler: (evt, handler) =>
      document.body.removeEventListener(evt, handler, true),

    notifyShow: () => {
      if (!!this.refs.root) {
        return this.emit(this.refs.root, SHOW_EVENT_NAME);
      }
      //this.emit(MDCSnackbarFoundation.strings.SHOW_EVENT)
    },
    notifyHide: () => {
      if (!!this.refs.root) {
        return this.emit(this.refs.root, HIDE_EVENT_NAME);
      }
      //this.emit(MDCSnackbarFoundation.strings.HIDE_EVENT)
    },
  });

  componentDidMount() {
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

  render() {
    const ownProps = Object.assign({}, this.props);
    delete ownProps.message;
    delete ownProps.actionText;
    delete ownProps.timeout;
    delete ownProps.multiline;
    delete ownProps.actionOnBottom;
    delete ownProps.actionHandler;
    delete ownProps.open;
    delete ownProps.onClose;
    const {
      elementType,
      className,
      children,
      start,
      ...otherProp
    } = ownProps;
    const ElementType = elementType || 'div';
    const classes = classnames('mdc-snackbar', {
      'mdc-snackbar--align-start': start
    }, this.state.classNames, className);
    return (
      <ElementType
        ref='root'
        className={classes}

        {...otherProp}
      >
        {children}
      </ElementType>

    );
  }

}
