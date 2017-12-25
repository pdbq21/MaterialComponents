/**
 * Created by ruslan on 20.03.17.
 */
import React from 'react';
import classnames from 'classnames';

const FormField = ({
    children,
    className,
    elementType,
    alignEnd,
    ...otherProp
}) => {
    const classes = classnames(
        'mdc-form-field', {
            'mdc-form-field--align-end': alignEnd
        }, className);
    const ElementType = elementType || 'div';
    return (
        <ElementType className={classes}
                     {...otherProp}
        >
            {children}
        </ElementType>);
};

export default FormField;