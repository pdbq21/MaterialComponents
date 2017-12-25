/**
 * Created by ruslan on 14.03.17.
 */
import React from 'react';
import classnames from 'classnames';
import {Button} from '../../index'

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

export default ActionItem;