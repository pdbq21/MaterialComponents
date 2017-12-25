/**
 * Created by ruslan on 29.04.17.
 */
import React from 'react';
import classnames from 'classnames';

const Header = ({
                    children,
                    className,
                    elementType,
                    ...otherProp
                }) => {
    const ElementType = elementType || 'header';
    const classes = classnames('mdc-dialog__header', className);
    return (
        <ElementType
            className={classes}
            {...otherProp}
        >
            {children}
        </ElementType>);
};

export default Header;