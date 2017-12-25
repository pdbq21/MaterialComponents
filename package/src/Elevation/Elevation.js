/**
 * Created by ruslan on 13.03.17.
 */
import React from 'react';
import classnames from 'classnames';

const Elevation = ({
                       children,
                       zSpace,
                       className,
                       transition,
                       elementType,
                       ...otherProp
                   }) => {
    const ElementType = elementType || 'div';
    const zSpaceNumber = zSpace || '0';////0-24 z-space
    const classes = classnames(`mdc-elevation--z${zSpaceNumber}`,
        {
            'mdc-elevation-transition': transition,
        }, className);
    return (
        <ElementType
            className={classes}
            {...otherProp}
        >
            {children}
        </ElementType>);
};

export default Elevation;