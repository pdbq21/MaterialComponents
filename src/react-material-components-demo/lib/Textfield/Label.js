/**
 * Created by ruslan on 20.03.17.
 */
import React from 'react';
import classnames from 'classnames';

export default function Label({
                                children,
                                elementType,
                                className,
                                floatAbove,
                                ...otherProps
                              }) {
  const classes = classnames(
    'mdc-text-field__label', {
      'mdc-text-field__label--float-above': floatAbove
    },
    className
  );
  const ElementType = elementType || 'label';
  return (
    <ElementType
      className={classes}
      {...otherProps}
    >
      {children}
    </ElementType>);
}
