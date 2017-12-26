/**
 * Created by ruslan on 20.03.17.
 */
import React from 'react';
import classnames from 'classnames';

export default function Input({
                                className,
                                children,
                                elementType,
                                ...otherProps
                              }) {
  const classes = classnames('mdc-text-field__input', className);
  const ElementType = elementType || 'input';
  return (
    <ElementType
      className={classes}
      {...otherProps}
    >
      {children}
    </ElementType>);
}
