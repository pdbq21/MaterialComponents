import React, {Component} from 'react';
import classnames from 'classnames';
import {Icon as i} from '../index'
import {textField} from 'material-components-web/dist/material-components-web';

const {MDCTextFieldIconFoundation} = textField;
const {
  strings: {
    ICON_EVENT: ICON_EVENT_NAME
  }
} = MDCTextFieldIconFoundation;
export default class Icon extends Component {
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

  foundation = new MDCTextFieldIconFoundation({
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
    registerInteractionHandler: (evtType, handler) => {
      if (!!this.refs.root) {
        this.refs.root.addEventListener(evtType, handler)
      }
    },
    deregisterInteractionHandler: (evtType, handler) => {
      if (!!this.refs.root) {
        this.refs.root.removeEventListener(evtType, handler)
      }
    },
    notifyIconAction: () => this.emit(this.refs.root, ICON_EVENT_NAME, {}, true)
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
      children,
      ...otherProp
    } = ownProps;

    const classes = classnames('mdc-text-field__icon', this.state.classNames, className);
    const ElementType = elementType || i;
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