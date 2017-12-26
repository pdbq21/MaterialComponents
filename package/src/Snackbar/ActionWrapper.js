/**
 * Created by ruslan on 02.05.17.
 */
import React from 'react';
import classnames from 'classnames';

export default function ActionWrapper ({
            children,
            className,
            elementType,
            ...otherProp
        }){
        const classes = classnames('mdc-snackbar__action-wrapper', className);
        const ElementType = elementType || 'div';
        return (
            <ElementType
                className={classes}
                {...otherProp}
            >
                {children}
            </ElementType>);
}