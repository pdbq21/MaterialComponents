/**
 * Created by ruslan on 14.03.17.
 */
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    adjustMargin: PropTypes.bool,
};
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
            'adjust-margin': adjustMargin,
        }, className);
    return (
        <ElementType
            className={classes}
            {...otherProp}
        >
            {children}
        </ElementType>);
};

Subheading.propTypes = propTypes;
export default Subheading;