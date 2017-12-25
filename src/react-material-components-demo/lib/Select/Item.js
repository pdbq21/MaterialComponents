/**
 * Created by ruslan on 05.05.17.
 */
import React from 'react';
import classnames from 'classnames';

export default function Item ({
      elementType,
      children,
      className,
      role,
      tabIndex,
      disabled,
      ...otherProps
    }){
    const ElementType = elementType || 'li';
    const classes = classnames('mdc-list-item', className);
    return (
      <ElementType
        className={classes}
        role={role || 'option'}
        tabIndex={tabIndex || (disabled) ? '-1' : '0'}
        aria-disabled={disabled}
        {...otherProps}
      >
        {children}
      </ElementType>
    );
}