/**
 * Created by ruslan on 27.06.17.
 */
import React from 'react';
import classnames from 'classnames';
import {Icon} from '../../base'

export default function Inner ({
      elementType,
      className,
      children,
    ...otherProp
    }){
    const ElementType = elementType || Icon;
    const classes = classnames('mdc-tab-bar-scroller__indicator__inner', className);
    return (
      <ElementType
        className={classes}
        elementType={(!elementType)? "a" : null}
        {...otherProp}
      >
        {children}
      </ElementType>
    );
}