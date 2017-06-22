/**
 * Created by ruslan on 16.03.17.
 */
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
};
const Label = ({
                   children,
                   className,
                   elementType,
                   ...otherProp
               }) => {
    const classes = classnames('mdc-switch-label', className);
    const ElementType = elementType || 'label';
    return (
        <ElementType className={classes}
                     {...otherProp}
        >
            {children}
        </ElementType>);
};

Label.propTypes = propTypes;
export default Label;