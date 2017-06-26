/**
 * Created by ruslan on 26.06.17.
 */
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {CheckboxCheckmark, CheckboxPath, CheckboxMixedmark} from './index'
const propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};
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
BG.propTypes = propTypes;
export default BG;