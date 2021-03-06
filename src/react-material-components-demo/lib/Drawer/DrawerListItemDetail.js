/**
 * Created by ruslan on 12.04.17.
 */
import React from 'react';
import classnames from 'classnames';

function DrawerListItemDetail ({elementType, children, className, icon, start, end, ...otherProps}){
        const ElementType = elementType || 'i';
        const classes = classnames({
            'material-icons': icon,
            'mdc-list-item__start-detail': start,
            'mdc-list-item__end-detail': end
        }, className);
        return (
            <ElementType
                className={classes}
                {...otherProps}
            >
                {children}
            </ElementType>
        );
}

export default DrawerListItemDetail;