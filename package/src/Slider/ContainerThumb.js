/**
 * Created by ruslan on 22.06.17.
 */
import React from 'react';
import classnames from 'classnames';

export default function ContainerThumb ({
      elementType,
      children,
      className,
      ...otherProps
    }){
    const ElementType = elementType || 'div';
    const classes = classnames('mdc-slider__thumb-container', className);
    return (
      <ElementType
        className={classes}
        {...otherProps}
      >
        {children}
      </ElementType>
    );
}