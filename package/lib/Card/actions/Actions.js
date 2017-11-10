/**
 * Created by ruslan on 14.03.17.
 */
import React from 'react';
import classnames from 'classnames';

const Actions = ({
    children,
    className,
    vertical,
    elementType,
    ...otherProp
}) => {
    const ElementType =  elementType || 'section';
    const classes = classnames(
        'mdc-card__actions', {
            'mdc-card__actions--vertical': vertical
        }, className);
    return (
        <ElementType
            className={classes}
            {...otherProp}
        >
            {children}
        </ElementType>);
};

export default Actions;