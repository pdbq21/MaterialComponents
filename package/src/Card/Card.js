/**
 * Created by ruslan on 14.03.17.
 */
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
};
const Card = ({
    children,
    className,
    elementType,
    ...otherProp
}) => {
    const ElementType =  elementType || 'div';
    const classes = classnames(
        'mdc-card', className);
    return (
        <ElementType
            className={classes}
            {...otherProp}
        >
            {children}
        </ElementType>);
};

Card.propTypes = propTypes;
export default Card;