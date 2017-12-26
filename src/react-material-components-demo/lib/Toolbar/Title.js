/**
 * Created by ruslan on 16.03.17.
 */
import React from 'react';
import classnames from 'classnames';

export default function Title ({
            children,
            elementType,
            className,
            ...otherProp
        }){
        const classes = classnames('mdc-toolbar__title', className);
        const ElementType = elementType || 'span';
        return (
            <ElementType
                className={classes}
                {...otherProp}
            >
                {children}
            </ElementType>);
}