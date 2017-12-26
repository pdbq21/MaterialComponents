/**
 * Created by ruslan on 05.05.17.
 */
import React from 'react';
import classnames from 'classnames';

export default function Items ({
            elementType,
            children,
            className,
            ...otherProps
        }){
        const ElementType = elementType || 'ul';
        const classes = classnames('mdc-list mdc-simple-menu__items', className);
        return (
            <ElementType
                className={classes}
                {...otherProps}
            >
                {children}
            </ElementType>
        );
}