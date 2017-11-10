/**
 * Created by ruslan on 16.03.17.
 */
import React from 'react';
import classnames from 'classnames';

const Icon = ({
    children,
    className,
    elementType,
    ...otherProp
}) => {
    const classes = classnames('mdc-fab__icon', className);
    const ElementType =  elementType || 'span';
    return (
        <ElementType className={classes}
                     {...otherProp}
        >
            {children}
        </ElementType>);
};

export default Icon;