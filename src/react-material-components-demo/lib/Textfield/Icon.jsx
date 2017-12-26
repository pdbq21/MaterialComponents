import React from 'react';
import classnames from 'classnames';
import {Icon as i} from '../index'

const Icon = ({
                 children,
                 elementType,
                 className,
                 ...otherProps
               }) => {
  const classes = classnames('mdc-text-field__icon', className);
  const ElementType = elementType || i;
  return (
    <ElementType
      className={classes}
      {...otherProps}
    >
      {children}
    </ElementType>);
};

export default Icon;