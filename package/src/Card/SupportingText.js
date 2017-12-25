/**
 * Created by ruslan on 14.03.17.
 */
import React from 'react';
import classnames from 'classnames';

const SupportingText = ({
    children,
    className,
    elementType,
    ...otherProp
}) => {
    const ElementType =  elementType || 'section';
    const classes = classnames(
        'mdc-card__supporting-text', className);
    return (
        <ElementType
            className={classes}
            {...otherProp}
        >
            {children}
        </ElementType>);
};

export default SupportingText;