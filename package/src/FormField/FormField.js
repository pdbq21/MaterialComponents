/**
 * Created by ruslan on 20.03.17.
 */
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    alignEnd: PropTypes.bool,
};
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

FormField.propTypes = propTypes;
export default FormField;