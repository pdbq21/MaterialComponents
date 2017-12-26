/**
 * Created by ruslan on 22.06.17.
 */
import React from 'react';
import classnames from 'classnames';

export default function Bar ({
      elementType,
      children,
      className,
      primary,
      secondary,
      ...otherProps
    }){
    const ElementType = elementType || 'div';
    const classes = classnames('mdc-linear-progress__bar', {
      'mdc-linear-progress__primary-bar': primary,
      'mdc-linear-progress__secondary-bar': secondary
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