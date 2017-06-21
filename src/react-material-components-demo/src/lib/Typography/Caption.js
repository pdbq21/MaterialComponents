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
const Caption = ({
    children,
    className,
    adjustMargin,
    elementType,
    ...otherProp
}) => {
    const ElementType =  elementType || 'span';
    const classes = classnames(
        'mdc-typography--caption', {
            'mdc-typography--adjust-margin': adjustMargin
        }, className);
    return (
        <ElementType
            className={classes}
            {...otherProp}
        >
            {children}
        </ElementType>);
};

Caption.propTypes = propTypes;
export default Caption;