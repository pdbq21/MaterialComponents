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
const Display = ({
    children,
    className,
    elementType,
    size,
    adjustMargin,
    ...otherProp
}) => {
    const ElementType =  elementType || 'h1';
    const classes = classnames(
        {
            'mdc-typography--display4': size === '4',
            'mdc-typography--display3': size === '3',
            'mdc-typography--display2': size === '2',
            'mdc-typography--display1': !size || size === '1',
            'mdc-typography--adjust-margin': adjustMargin,
        },className);
    return (
        <ElementType
            className={classes}
            {...otherProp}
        >
            {children}
        </ElementType>);
};

Display.propTypes = propTypes;
export default Display;