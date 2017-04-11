/**
 * Created by ruslan on 13.03.17.
 */
import React from 'react';
import PropTypes from 'prop-types';
const propTypes = {
    children: PropTypes.node,
    zSpace: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
    ]),
    className: PropTypes.string,
};
const Elevation = ({
    children,
    zSpace,
    className,
    elementType,
    ...otherProp// todo: Describe the possible properties
}) => {

    const ElementType = elementType || 'div';
    const zSpaceNumber = zSpace || '0';////0-24 z-space
    const classNameProp = className || '';
    return (
        <ElementType className={`mdc-elevation--z${zSpaceNumber} ${classNameProp}`}
                     {...otherProp}
        >
            {children}
        </ElementType>);
};

Elevation.propTypes = propTypes;
export default Elevation;