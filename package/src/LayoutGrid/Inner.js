/**
 * Created by ruslan on 26.06.17.
 */
import React from 'react';
import classnames from 'classnames';

export default function Inner ({
      children,
      className,
      elementType,
      ...otherProp
    }){
    const ElementType = elementType || 'div';
    const classes = classnames('mdc-layout-grid__inner', className);
    return (
      <ElementType
        className={classes}
        {...otherProp}
      >
        {children}
      </ElementType>
    );
}