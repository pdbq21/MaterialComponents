/**
 * Created by ruslan on 12.04.17.
 */
import React from 'react';
import classnames from 'classnames';

function Drawer({
                  className,
                  children,
                  elementType,
                  ...otherProps
                }) {
  const ElementType = elementType || 'nav';
  const classes = classnames('mdc-temporary-drawer__drawer', className);
  return (
    <ElementType
      className={classes}
      {...otherProps}
    >
      {children}
    </ElementType>);
}

export default Drawer;