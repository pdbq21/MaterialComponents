/**
 * Created by ruslan on 15.03.17.
 */
import React from 'react';
import classnames from 'classnames';

const ListGroup = ({
    children,
    className,
    elementType,
    ...otherProp
}) => {
    const classes = classnames('mdc-list-group',  className);
    const ElementType =  elementType || 'div';
    return (
        <ElementType className={classes}
                     {...otherProp}
        >
            {children}
        </ElementType>);
};

export default ListGroup;