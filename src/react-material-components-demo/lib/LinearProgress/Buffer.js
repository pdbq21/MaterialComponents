/**
 * Created by ruslan on 22.06.17.
 */
import React from 'react';
import classnames from 'classnames';

export default function Buffer({
      elementType,
      children,
      className,
      ...otherProps
    }){
    const ElementType = elementType || 'div';
    const classes = classnames('mdc-linear-progress__buffer', className);
    return (
      <ElementType
        className={classes}
        {...otherProps}
      >
        {children}
      </ElementType>
    );
}