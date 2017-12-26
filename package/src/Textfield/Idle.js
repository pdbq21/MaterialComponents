import React from 'react';
import classnames from 'classnames';

export default function Idle({
                                className,
                                children,
                                elementType,
                                ...otherProps
                              }) {
  const classes = classnames('mdc-text-field__idle-outline', className);
  const ElementType = elementType || 'div';
  return (
    <ElementType
      className={classes}
      {...otherProps}
    >
      {children}
    </ElementType>);
}
