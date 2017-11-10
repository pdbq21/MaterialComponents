/**
 * Created by ruslan on 29.04.17.
 */
import React, {PureComponent} from 'react';
import classnames from 'classnames';
import {Button} from '../index'

export default class FooterButton extends PureComponent {

  render() {
    const ownProps = Object.assign({}, this.props);
    const {
      children,
      elementType,
      accept,
      cancel,
      icon,
      action,
      className,
      ...otherProp
    } = ownProps;
    const classes = classnames('mdc-dialog__footer__button', {
      'mdc-dialog__footer__button--accept': accept,
      'mdc-dialog__footer__button--cancel': cancel,
      'material-icons': icon,
      'mdc-dialog__action': action,
    }, className);
    const ElementType = elementType || Button;
    return (
      <ElementType
        className={classes}
        {...otherProp}
      >
        {children}
      </ElementType>);
  }
}