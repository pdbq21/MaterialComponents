/**
 * Created by ruslan on 12.04.17.
 */
import React from 'react';

import DrawerToolbarSpacer from '../DrawerToolbarSpacer';

function ToolbarSpacer ({elementType, children, className, ...otherProps}){
        const ElementType =  elementType || 'div';
        return (
            <DrawerToolbarSpacer
                permanent
                elementType={ElementType}
                className={className}
                {...otherProps}
            >
                {children}
            </DrawerToolbarSpacer>
        );
}

export default ToolbarSpacer;