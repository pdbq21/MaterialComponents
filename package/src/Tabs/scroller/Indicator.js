/**
 * Created by ruslan on 27.06.17.
 */
import React from 'react';
import classnames from 'classnames';

export default function Indicator ({
      elementType,
      className,
      children,
      back,
      forward,
    ...otherProp
    }){
    const ElementType = elementType || 'div';
    const classes = classnames('mdc-tab-bar-scroller__indicator', {
      'mdc-tab-bar-scroller__indicator--back': back,
      'mdc-tab-bar-scroller__indicator--forward': forward,
    }, className);
    return (
      <ElementType
        className={classes}
        {...otherProp}
      >
        {children}
      </ElementType>
    );
}