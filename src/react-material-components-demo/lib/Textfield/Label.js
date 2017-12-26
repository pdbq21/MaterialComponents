import React, {Component} from 'react';
import classnames from 'classnames';
import {textField} from 'material-components-web/dist/material-components-web';

const {MDCTextFieldLabelFoundation} = textField;

export default class Label extends Component {
  state = {
    classNames: [],
  };

  foundation = new MDCTextFieldLabelFoundation({
    addClass: className => this.setState(({classNames}) => ({
      classNames: classNames.concat([className])
    })),
    removeClass: className => this.setState(({classNames}) => ({
      classNames: classNames.filter(cn => cn !== className)
    })),
    getWidth: () => {
      if (!!this.refs.root) {
        return this.refs.root.offsetWidth
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
      children,
      floatAbove,
      shake,
      ...otherProp
    } = ownProps;
    const classes = classnames(
      'mdc-text-field__label', {
        'mdc-text-field__label--float-above': floatAbove,
        'mdc-text-field__label--shake': shake,
      },
      this.state.classNames,
      className
    );
    const ElementType = elementType || 'label';
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