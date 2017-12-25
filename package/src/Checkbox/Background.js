/**
 * Created by ruslan on 04.05.17.
 */
import React from 'react';
import classnames from 'classnames';

const Background = ({
                    children,
                    className,
                    elementType,
                    ...otherProp
                }) => {
    const ElementType = elementType || 'div';
    const classes = classnames('mdc-checkbox__background', className);
    return (
        <ElementType
            className={classes}
            {...otherProp}
        >
            {children}
        </ElementType>);
};

export default Background;