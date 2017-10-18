import React from 'react';
import classnames from 'classnames';
import {Icon} from '../index'

const ButtonIcon = ({
                 children,
                 className,
                 elementType,
                 ...otherProp
               }) => {
  const ElementType =  elementType || Icon;
  const classes = classnames('mdc-button__icon', className);
  return (
    <ElementType
      className={classes}
      {...otherProp}
    >
      {children}
    </ElementType>);
};

export default ButtonIcon;