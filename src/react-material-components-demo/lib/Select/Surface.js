import React from 'react';
import classnames from 'classnames';

export default function Surface ({
                                elementType,
                                children,
                                className,
                                   tabindex,
                                ...otherProps
                              }){
  const ElementType = elementType || 'div';
  const classes = classnames('mdc-select__surface', className);
  return (
    <ElementType
      className={classes}
      tabindex={tabindex || '0'}
      {...otherProps}
    >
      {children}
    </ElementType>
  );
}