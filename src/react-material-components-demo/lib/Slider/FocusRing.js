/**
 * Created by ruslan on 22.06.17.
 */
import React from 'react';
import classnames from 'classnames';

export default function FocusRing ({
      elementType,
      children,
      className,
      ...otherProps
    }){
    const ElementType = elementType || 'div';
    const classes = classnames('mdc-slider__focus-ring', className);
    return (
      <ElementType
        className={classes}
        {...otherProps}
      >
        {children}
      </ElementType>
    );
}