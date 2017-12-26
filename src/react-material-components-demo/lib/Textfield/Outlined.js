import React from 'react';
import classnames from 'classnames';

export default function Outline({
                                  children,
                                  idel,
                                  elementType,
                                  className,
                                  ...otherProps
                                }) {

  if (idel){
    const classes = classnames('mdc-text-field__idle-outline', className);
    const ElementType = elementType || 'div';
    return (
      <ElementType
        className={classes}
        {...otherProps}
      >
        {children}
      </ElementType>);
  } else {
    const classes = classnames('mdc-text-field__outline', className);
    const ElementType = elementType || 'div';
    return (
      <ElementType
        className={classes}
        {...otherProps}
      >
        <svg>
          <path className="mdc-text-field__outline-path"/>
        </svg>
      </ElementType>);
  }

}
