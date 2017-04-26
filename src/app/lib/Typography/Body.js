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
const Body = ({
    children,
    className,
    size,
    adjustMargin,
    elementType,
    ...otherProp
}) => {
    const ElementType =  elementType || ((size)? ((size === '1')? 'p' : 'span') : 'p');
    const classes = classnames(
        {
            'mdc-typography--body2': size === '2',
            'mdc-typography--body1': !size || size === '1',
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

Body.propTypes = propTypes;
export default Body;