/**
 * Created by ruslan on 02.05.17.
 */
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
};
const Primary = ({
                  children,
                  className,
                  elementType,
                  ...otherProp
              }) => {
    const ElementType =  elementType || 'div';
    const classes = classnames('mdc-grid-tile__primary', className);
    return (
        <ElementType
            className={classes}
            {...otherProp}
        >
            {children}
        </ElementType>);
};

Primary.propTypes = propTypes;
export default Primary;