/**
 * Created by ruslan on 12.04.17.
 */
import React from 'react';
import classnames from 'classnames';

function Header ({elementType, children, className, ...otherProps}){
        const ElementType = elementType || 'header';
        const classes = classnames('mdc-persistent-drawer__header', className);
        return (
            <ElementType
                className={classes}
                {...otherProps}
            >
                {children}
            </ElementType>
        );
}

export default Header;