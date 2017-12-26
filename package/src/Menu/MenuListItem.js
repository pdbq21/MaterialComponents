/**
 * Created by ruslan on 12.04.17.
 */
import React from 'react';
import {ListItem} from '../index'

export default function MenuListItem ({elementType, children, className, role, tabIndex, ...otherProps}){
        const ElementType = elementType || 'li';
        return (
            <ListItem
                elementType={ElementType}
                className={className}
                role={role || "menuitem"}
                tabIndex={tabIndex || "0"}
                {...otherProps}
            >
                {children}
            </ListItem>
        );
}