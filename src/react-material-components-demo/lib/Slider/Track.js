/**
 * Created by ruslan on 22.06.17.
 */
import React from 'react';
import classnames from 'classnames';

export default function Track ({
      elementType,
      children,
      marker,
      className,
      ...otherProps
    }){
    const ElementType = elementType || 'div';
    const classes = classnames({
      'mdc-slider__track': !marker,
      'mdc-slider__track-marker-container': marker
    }, className);
    return (
      <ElementType
        className={classes}
        {...otherProps}
      >
        {children}
      </ElementType>
    );
}