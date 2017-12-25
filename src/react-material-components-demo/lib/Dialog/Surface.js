/**
 * Created by ruslan on 29.04.17.
 */
import React from 'react';
import classnames from 'classnames';

export default function Surface ({
            children,
            elementType,
            className,
            ...otherProp
        }){

        const classes = classnames('mdc-dialog__surface', className);
        const ElementType = elementType || 'div';
        return (
            <ElementType
                className={classes}
                {...otherProp}
            >
                {children}
            </ElementType>);
}