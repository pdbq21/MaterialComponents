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
const Subtitle = ({
    children,
    className,
    elementType,
    ...otherProp
}) => {
    const ElementType =  elementType || 'h2';
    const classes = classnames(
        'mdc-card__subtitle', className);
    return (
        <ElementType
            className={classes}
            {...otherProp}
        >
            {children}
        </ElementType>);
};

Subtitle.propTypes = propTypes;
export default Subtitle;