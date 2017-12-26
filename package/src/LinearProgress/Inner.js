/**
 * Created by ruslan on 22.06.17.
 */
import React from 'react';
import classnames from 'classnames';

export default function Inner ({
      elementType,
      children,
      className,
      ...otherProps
    }){
    const ElementType = elementType || 'span';
    const classes = classnames('mdc-linear-progress__bar-inner', className);
    return (
      <ElementType
        className={classes}
        {...otherProps}
      >
        {children}
      </ElementType>
    );
}