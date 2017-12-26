/**
 * Created by ruslan on 27.06.17.
 */
import React from 'react';
import classnames from 'classnames';
import {Icon} from '../base'

export default function TabIcon ({
      elementType,
      className,
      children,
    ...otherProp
    }){
    const ElementType = elementType || Icon;
    const classes = classnames('mdc-tab__icon', className);
    return (
      <ElementType
        className={classes}
        {...otherProp}
      >
        {children}
      </ElementType>
    );
}