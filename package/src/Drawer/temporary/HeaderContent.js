/**
 * Created by ruslan on 12.04.17.
 */
import React from 'react';
import classnames from 'classnames';

function HeaderContent ({elementType, children, className, ...otherProps}){
        const ElementType =  elementType || 'div';
        const classes = classnames('mdc-temporary-drawer__header-content', className);
        return (
            <ElementType
                className={classes}
                {...otherProps}
            >
                {children}
            </ElementType>
        );
}

export default HeaderContent;