/**
 * Created by ruslan on 16.03.17.
 */
import React from 'react';
import classnames from 'classnames';

export default function Anchor ({
            elementType, children, className,
            ...otherProps
        }){
        const ElementType = elementType || 'div';
        const classes = classnames('mdc-menu-anchor', className);
        return (
            <ElementType
                className={classes}
                {...otherProps}
            >
                {children}
            </ElementType>
        );
}