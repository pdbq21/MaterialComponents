/**
 * Created by ruslan on 27.03.17.
 */
import React, {PureComponent} from 'react';
import classnames from 'classnames';
import {snackbar}  from 'material-components-web/dist/material-components-web';
const {MDCSnackbarFoundation} = snackbar;
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

export default class Snackbar extends PureComponent {

  constructor(props, context) {
    super(props, context);
    this.state = {
      classNames: [],
      open: false,
    };

    //
    this.actionButton_ = () => (this.refs.root.querySelector('.mdc-snackbar__action-button'));
    this.rootText_ = () => (this.refs.root.querySelector('.mdc-snackbar__text'));

    this.foundation = new MDCSnackbarFoundation({
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
        if (rootText) {
          return rootText.textContent = text;
        }
      },
      setActionText: text => {
        const actionButton = this.actionButton_();
        if (actionButton) {
          return actionButton.textContent = text;
        }
      },
      setActionAriaHidden: () => {
        const actionButton = this.actionButton_();
        if (actionButton) {
          return actionButton.setAttribute('aria-hidden', 'true');
        }
      },
      unsetActionAriaHidden: () => {
        const actionButton = this.actionButton_();
        if (actionButton) {
          return actionButton.removeAttribute('aria-hidden');
        }
      },
      registerActionClickHandler: handler => {
        const actionButton = this.actionButton_();
        if (actionButton) {
          actionButton.addEventListener('click', handler, {passive: true});
        }
      },
      deregisterActionClickHandler: handler => {
        const actionButton = this.actionButton_();
        if (actionButton) {
          actionButton.removeEventListener('click', handler);
        }
      },
      registerTransitionEndHandler: handler => {
        if (this.refs.root) {
          this.refs.root.addEventListener(getCorrectEventName(window, 'transitionend'), handler, {passive: true});
        }
      },
      deregisterTransitionEndHandler: handler => {
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
    const classes = classnames('mdc-snackbar',{
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
