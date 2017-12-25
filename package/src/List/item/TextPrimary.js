/**
 * Created by ruslan on 15.03.17.
 */
import React from 'react';
import classnames from 'classnames';

const TextPrimary = ({
    children,
    className,
    elementType,
    ...otherProp
}) => {
    const classes = classnames('mdc-list-item__text__primary',  className);
    const ElementType =  elementType || 'span';
    return (
        <ElementType className={classes}
                     {...otherProp}
        >
            {children}
        </ElementType>);
};

export default TextPrimary;