/**
 * Created by ruslan on 26.06.17.
 */
import React from 'react';
import classnames from 'classnames';
import {CheckboxCheckmark, CheckboxPath, CheckboxMixedmark} from './index'

const BG = ({
                      className,
                      elementType,
                      ...otherProp
                    }) => {
  const ElementType = elementType || 'div';
  const classes = classnames('mdc-checkbox__background', className);
  return (
    <ElementType
      className={classes}
      {...otherProp}
    >
      <CheckboxCheckmark>
        <CheckboxPath/>
      </CheckboxCheckmark>
      <CheckboxMixedmark/>
    </ElementType>);
};

export default BG;