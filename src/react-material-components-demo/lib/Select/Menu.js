/**
 * Created by ruslan on 05.05.17.
 */
import React from 'react';
import classnames from 'classnames';

export default function Menu ({
            elementType,
            children,
            className,
            ...otherProps
        }){
        const ElementType = elementType || 'div';
        const classes = classnames('mdc-simple-menu mdc-select__menu', className);
        return (
            <ElementType
                className={classes}
                {...otherProps}
            >
                {children}
            </ElementType>
        );
}