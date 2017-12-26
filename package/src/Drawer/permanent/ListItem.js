/**
 * Created by ruslan on 12.04.17.
 */
import React from 'react';

import DrawerListItem from '../DrawerListItem';

function ListItem ({elementType, children, className, ...otherProps}){
        const ElementType = elementType || 'a';
        return (
            <DrawerListItem
                permanent
                elementType={ElementType}
                className={className}
                {...otherProps}
            >
                {children}
            </DrawerListItem>
        );
}

export default ListItem;