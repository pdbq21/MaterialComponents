/**
 * Created by ruslan on 14.03.17.
 */
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {Button} from '../../index'

const propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
};
const ActionItem = ({
    children,
    className,
    elementType,
    ...otherProp
}) => {
    const ElementType =  elementType || Button;
    const classes = classnames(
        'mdc-card__action', className);
    return (
        <ElementType
            className={classes}
            {...otherProp}
        >
            {children}
        </ElementType>);
};

ActionItem.propTypes = propTypes;
export default ActionItem;