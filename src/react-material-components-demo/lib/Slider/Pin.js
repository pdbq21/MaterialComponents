/**
 * Created by ruslan on 12.07.17.
 */
import React from 'react';
import classnames from 'classnames';

export default function Pin ({
      elementType,
      children,
      className,
      ...otherProps
    }){
    const ElementType = elementType || 'div';
    const classes = classnames('mdc-slider__pin', className);
    return (
      <ElementType
        className={classes}
        {...otherProps}
      >
        {children}
      </ElementType>
    );
}