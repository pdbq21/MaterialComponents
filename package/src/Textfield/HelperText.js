/**
 * Created by ruslan on 20.03.17.
 */
import React, {Component} from 'react';
import classnames from 'classnames';
import {textField} from 'material-components-web/dist/material-components-web';

const {MDCTextFieldHelperTextFoundation} = textField;

export default class HelperText extends Component {
  state = {
    classNames: [],
  };

  foundation = new MDCTextFieldHelperTextFoundation({
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
    hasClass: (className) => {
      if (!!this.refs.root) {
        this.refs.root.classList.contains(className)
      }
    },
    removeAttr: (attr) => {
      if (!!this.refs.root) {
        this.refs.root.removeAttribute(attr)
      }
    },
    setContent: (content) => {
      if (!!this.refs.root) {
        this.refs.root.textContent = content;
      }
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
      persistent,
      validation,
      children,
      ...otherProp
    } = ownProps;

    const classes = classnames(
      'mdc-text-field-helper-text', {
        'mdc-text-field-helper-text--persistent': persistent,
        'mdc-text-field-helper-text--validation-msg': validation
      }, this.state.classNames, className);
    const ElementType = elementType || 'p';
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