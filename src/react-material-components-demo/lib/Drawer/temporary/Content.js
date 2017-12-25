/**
 * Created by ruslan on 12.04.17.
 */
import React from 'react';
import DrawerContent from '../DrawerContent';

function Content({
                   elementType,
                   children,
                   className,
                   ...otherProps
                 }) {
  const ElementType = elementType || 'nav';
  return (
    <DrawerContent
      temporary
      list
      elementType={ElementType}
      className={className}
      {...otherProps}
    >
      {children}
    </DrawerContent>
  );
}

export default Content;