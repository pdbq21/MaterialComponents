import React, {Component} from 'react';
import classnames from 'classnames';
import {textField} from 'material-components-web/dist/material-components-web';

const {MDCTextFieldBottomLineFoundation} = textField;

const {
  strings: {
    ANIMATION_END_EVENT: ANIMATION_END_EVENT_NAME,
  }
} = MDCTextFieldBottomLineFoundation;


export default class BottomLine extends Component {
  state = {
    classNames: [],
  };
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

  foundation = new MDCTextFieldBottomLineFoundation({
    addClass: className => this.setState(({classNames}) => ({
      classNames: classNames.concat([className])
    })),

    removeClass: className => this.setState(({classNames}) => ({
      classNames: classNames.filter(cn => cn !== className)
    })),

    setAttr: (attr, value) => {
      if (!!this.refs.root) {
        this.refs.root.setAttribute(attr, value)
      }
    },
    registerEventHandler: (evtType, handler) => {
      if (!!this.refs.root) {
        this.refs.root.addEventListener(evtType, handler)
      }
    },
    deregisterEventHandler: (evtType, handler) => {
      if (!!this.refs.root) {
        this.refs.root.removeEventListener(evtType, handler)
      }
    },
    notifyAnimationEnd: () => {
      //todo: onAnimation
      this.emit(ANIMATION_END_EVENT_NAME, {});
    },
  });

  componentDidMount() {
    if (!this.props.cssOnly) {
      this.foundation.init();
    }
  }

  componentWillUnmount() {
    if (!this.props.cssOnly) {
      this.foundation.destroy();
    }
  }

  render() {
    const ownProps = Object.assign({}, this.props);
    const {
      elementType,
      className,
      active,
      children,
      ...otherProp
    } = ownProps;

    const classes = classnames('mdc-text-field__bottom-line', {
      'mdc-text-field-bottom-line--active': active
    }, this.state.classNames, className);
    const ElementType = elementType || 'div';
    return (
      <ElementType
        ref="root"
        className={classes}
        {...otherProp}
      >
        {children}
      </ElementType>
    );
  }
}