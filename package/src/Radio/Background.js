/**
 * Created by ruslan on 04.07.17.
 */
import React from 'react';
import classnames from 'classnames';

export default function Background ({
      className,
      elementType,
      ...otherProps
    }){
    const ElementType = elementType || 'div';
    const classes = classnames('mdc-radio__background', className);
    return (
      <ElementType
        className={classes}
        {...otherProps}
      >
        <div className="mdc-radio__outer-circle"/>
        <div className="mdc-radio__inner-circle"/>
      </ElementType>);
}