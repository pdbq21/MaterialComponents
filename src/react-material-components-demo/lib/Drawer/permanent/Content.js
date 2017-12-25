/**
 * Created by ruslan on 12.04.17.
 */
import React from 'react';

import DrawerContent from '../DrawerContent';

function Content ({elementType, children, className, ...otherProps}){
        const ElementType = elementType || 'div';
        return (
            <DrawerContent
                permanent
                elementType={ElementType}
                className={className }
                {...otherProps}
            >
                {children}
            </DrawerContent>
        );
}

export default Content;