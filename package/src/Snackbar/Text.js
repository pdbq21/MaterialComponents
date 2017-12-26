/**
 * Created by ruslan on 02.05.17.
 */
import React from 'react';
import classnames from 'classnames';

export default function Text({
                               children,
                               className,
                               elementType,
                               ...otherProp
                             }) {
  const classes = classnames('mdc-snackbar__text', className);
  const ElementType = elementType || 'div';
  return (
    <ElementType
      className={classes}
      {...otherProp}
    >
      {children}
    </ElementType>
  );

}