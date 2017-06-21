/**
 * Created by ruslan on 15.03.17.
 */
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    inset: PropTypes.bool,
};
const Divider = ({
                     children,
                     className,
                     elementType,
                     inset,
                     role,
                     ...otherProp
                 }) => {
    const classes = classnames(
        'mdc-list-divider', {
            'mdc-list-divider--inset': inset
        }, className);
    const ElementType = elementType || 'li';
    return (
        <ElementType
            className={classes}
            role={role || "separator"}
            {...otherProp}
        >
            {children}
        </ElementType>);
};

Divider.propTypes = propTypes;
export default Divider;