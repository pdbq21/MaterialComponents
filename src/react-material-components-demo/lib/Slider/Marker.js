/**
 * Created by ruslan on 12.07.17.
 */
import React from 'react';
import classnames from 'classnames';

export default function Marker ({
      elementType,
      children,
      className,
      ...otherProps
    }){
    const ElementType = elementType || 'span';
    const classes = classnames('mdc-slider__pin-value-marker', className);
    return (
      <ElementType
        className={classes}
        {...otherProps}
      >
        {children}
      </ElementType>
    );
}