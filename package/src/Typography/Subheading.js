/**
 * Created by ruslan on 14.03.17.
 */
import React from 'react';
import classnames from 'classnames';

const Subheading = ({
    children,
    className,
    elementType,
    size,
    adjustMargin,
    ...otherProp
}) => {
    const ElementType =  elementType || ((size)? ((size === '1')? 'h4' : 'h3') : 'h4');
    const classes = classnames(
        {
            'mdc-typography--subheading2': size === '2',
            'mdc-typography--subheading1': !size || size === '1',
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

export default Subheading;