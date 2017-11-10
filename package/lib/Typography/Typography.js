/**
 * Created by ruslan on 14.03.17.
 */
import React from 'react';
import classnames from 'classnames';

const Typography = ({
    children,
    className,
    adjustMargin,
    elementType,
    ...otherProp
}) => {
    const classes = classnames(
        'mdc-typography', {
            'mdc-typography--adjust-margin': adjustMargin,
        }, className);
    const ElementType =  elementType || 'section';
    return (
        <ElementType className={classes}
                     {...otherProp}
        >
            {children}
        </ElementType>);
};

export default Typography;