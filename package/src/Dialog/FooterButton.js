/**
 * Created by ruslan on 29.04.17.
 */
import React from 'react';
import classnames from 'classnames';
import {Button} from '../index'

export default function FooterButton ({
      children,
      elementType,
      accept,
      cancel,
      icon,
      action,
      className,
      ...otherProp
    }){
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