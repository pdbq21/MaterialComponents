/**
 * Created by ruslan on 14.03.17.
 */
import React from 'react';
import classnames from 'classnames';

const Headline = ({
    children,
    className,
    elementType,
    adjustMargin,
    ...otherProp
}) => {
    const ElementType =  elementType || 'h1';
    const classes = classnames(
        'mdc-typography--headline', {
            'mdc-typography--adjust-margin': adjustMargin,
        }, className);
    return (
        <ElementType
            className={classes}
            {...otherProp}
        >
            {children}
        </ElementType>);
};

export default Headline;