/**
 * Created by ruslan on 05.05.17.
 */
import React from 'react';
import classnames from 'classnames';

export default function Text ({
            elementType,
            children,
            className,
            ...otherProps
        }){
        const ElementType = elementType || 'span';
        const classes = classnames('mdc-select__selected-text', className);
        return (
            <ElementType
                className={classes}
                {...otherProps}
            >
                {children}
            </ElementType>
        );
}