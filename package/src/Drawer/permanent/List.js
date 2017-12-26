/**
 * Created by ruslan on 12.04.17.
 */
import React from 'react';

import DrawerList from '../DrawerList';

function List ({elementType, children, className, ...otherProps}){
        const ElementType = elementType || 'nav';
        return (
            <DrawerList
                elementType={ElementType}
                className={className}
                {...otherProps}
            >
                {children}
            </DrawerList>
        );
}

export default List;