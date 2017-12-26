/**
 * Created by ruslan on 02.07.17.
 */
import React from 'react';
import classnames from 'classnames';

export default function Line({
                               children,
                               elementType,
                               className,
                               active,
                               ...otherProps
                             }) {
  const classes = classnames('mdc-text-field__bottom-line', {
    'mdc-text-field-bottom-line--active': active
  }, className);
  const ElementType = elementType || 'div';
  return (
    <ElementType
      className={classes}
      {...otherProps}
    >
      {children}
    </ElementType>);
}
