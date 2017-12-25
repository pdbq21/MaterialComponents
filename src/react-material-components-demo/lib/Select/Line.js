import React from 'react';
import classnames from 'classnames';

export default function Line ({
                                elementType,
                                children,
                                className,
                                ...otherProps
                              }){
  const ElementType = elementType || 'div';
  const classes = classnames('mdc-select__bottom-line', className);
  return (
    <ElementType
      className={classes}
      {...otherProps}
    >
      {children}
    </ElementType>
  );
}