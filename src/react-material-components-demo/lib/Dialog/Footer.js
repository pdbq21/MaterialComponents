/**
 * Created by ruslan on 29.04.17.
 */
import React from 'react';
import classnames from 'classnames';

export default function Footer ({
            children,
            className,
            elementType,
            ...otherProp
        }){
        const classes = classnames('mdc-dialog__footer', className);
        const ElementType = elementType || 'footer';
        return (
            <ElementType
                className={classes}
                {...otherProp}
            >
                {children}
            </ElementType>);
}