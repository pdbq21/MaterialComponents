/**
 * Created by ruslan on 14.03.17.
 */
import React from 'react';
import classnames from 'classnames';

const Card = ({
    children,
    className,
    elementType,
    ...otherProp
}) => {
    const ElementType =  elementType || 'div';
    const classes = classnames(
        'mdc-card', className);
    return (
        <ElementType
            className={classes}
            {...otherProp}
        >
            {children}
        </ElementType>);
};

export default Card;