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
const Icons = ({
                       children,
                       className,
                       elementType,
                       ...otherProp
                   }) => {
    const ElementType =  elementType || 'i';
    const classes = classnames('material-icons', className);
    return (
        <ElementType
            className={classes}
            {...otherProp}
        >
            {children}
        </ElementType>);
};

Icons.propTypes = propTypes;
export default Icons;