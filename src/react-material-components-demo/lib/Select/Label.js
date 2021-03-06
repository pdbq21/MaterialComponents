import React from 'react';
import classnames from 'classnames';

export default function Label ({
                                elementType,
                                children,
                                className,
                                ...otherProps
                              }){
  const ElementType = elementType || 'div';
  const classes = classnames('mdc-select__label', className);
  return (
    <ElementType
      className={classes}
      {...otherProps}
    >
      {children}
    </ElementType>
  );
}