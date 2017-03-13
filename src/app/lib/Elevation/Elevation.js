/**
 * Created by ruslan on 13.03.17.
 */
import React, {PropTypes} from 'react';

const propTypes = {
    children: PropTypes.node,
    zSpace: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
    ]),
    className: PropTypes.string,
    id: PropTypes.string,
    elementType: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.string
    ]),
};
const Elevation = ({
    children,
    zSpace,
    id,
    className,
    elementType,
    ...otherProp// todo: Describe the possible properties
}) => {

    const ElementType = elementType || 'div';
    const zSpaceNumber = zSpace || '0';////0-24 z-space
    const classNameProp = className || '';
    const idProp = id || '';
    return (
        <ElementType className={`mdc-elevation--z${zSpaceNumber} ${classNameProp}`}
                     id={idProp}
                     {...otherProp}
        >
            {children}
        </ElementType>);
};

Elevation.propTypes = propTypes;
export default Elevation;