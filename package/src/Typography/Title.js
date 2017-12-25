/**
 * Created by ruslan on 14.03.17.
 */
import React from 'react';
import classnames from 'classnames';

const Title = ({
    children,
    className,
    adjustMargin,
    elementType,
    ...otherProp
}) => {
    const ElementType =  elementType || 'h2';
    const classes = classnames(
        'mdc-typography--title', {
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

export default Title;