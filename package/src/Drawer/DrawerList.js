/**
 * Created by ruslan on 02.05.17.
 */
import React from 'react';
import classnames from 'classnames';

function DrawerList ({elementType, children, className, ...otherProps}){
        const ElementType = elementType || 'nav';
        const classes = classnames('mdc-list', className);
        return (
            <ElementType
                className={classes}
                {...otherProps}
            >
                {children}
            </ElementType>
        );
}

export default DrawerList;