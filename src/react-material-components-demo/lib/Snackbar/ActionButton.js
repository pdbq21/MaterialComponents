/**
 * Created by ruslan on 02.05.17.
 */
import React from 'react';
import classnames from 'classnames';
import {Button} from '../index'

export default function ActionButton ({
            children,
            elementType,
            className,
            ...otherProp
        }){
        const classes = classnames('mdc-snackbar__action-button', className);
        const ElementType = elementType || Button;
        return (
            <ElementType
                className={classes}
                {...otherProp}
            >
                {children}
            </ElementType>);
}