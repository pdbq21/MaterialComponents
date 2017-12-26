/**
 * Created by ruslan on 27.06.17.
 */
import React from 'react';
import classnames from 'classnames';

export default function ScrollFrame ({
      elementType,
      className,
      children,
    ...otherProp
    }){
    const ElementType = elementType || 'div';
    const classes = classnames('mdc-tab-bar-scroller__scroll-frame', className);
    return (
      <ElementType
        className={classes}
        {...otherProp}
      >
        {children}
      </ElementType>
    );
}