/**
 * Created by ruslan on 02.05.17.
 */
import React from 'react';
import classnames from 'classnames';

const Icon = ({
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

export default Icon;