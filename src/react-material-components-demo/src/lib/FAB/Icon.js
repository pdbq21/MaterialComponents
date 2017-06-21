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
const Icon = ({
    children,
    className,
    elementType,
    ...otherProp
}) => {
    const classes = classnames('mdc-fab__icon', className);
    const ElementType =  elementType || 'span';
    return (
        <ElementType className={classes}
                     {...otherProp}
        >
            {children}
        </ElementType>);
};

Icon.propTypes = propTypes;
export default Icon;