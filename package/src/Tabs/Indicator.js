/**
 * Created by ruslan on 27.06.17.
 */
import React from 'react';
import classnames from 'classnames';

export default function Indicator ({
      elementType,
      className,
      children,
    ...otherProp
    }){
    const ElementType = elementType || 'span';
    const classes = classnames('mdc-tab-bar__indicator', className);
    return (
      <ElementType
        className={classes}
        {...otherProp}
      >
        {children}
      </ElementType>
    );
}