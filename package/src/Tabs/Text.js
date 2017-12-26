/**
 * Created by ruslan on 27.06.17.
 */
import React from 'react';
import classnames from 'classnames';

export default function Text ({
      elementType,
      className,
      children,
      ...otherProp
    }){
    const ElementType = elementType || 'span';
    const classes = classnames('mdc-tab__icon-text', className);
    return (
      <ElementType
        className={classes}
        {...otherProp}
      >
        {children}
      </ElementType>
    );
}