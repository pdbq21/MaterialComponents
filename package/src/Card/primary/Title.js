/**
 * Created by ruslan on 14.03.17.
 */
import React from 'react';
import classnames from 'classnames';

const Title = ({
    children,
    className,
    large,
    elementType,
    ...otherProp
}) => {
    const ElementType =  elementType || 'h1';
    const classes = classnames(
        'mdc-card__title', {
            'mdc-card__title--large': large
        }, className);
    return (
        <ElementType
            className={classes}
            {...otherProp}
        >
            {children}
        </ElementType>);
};

export default Title;