/**
 * Created by ruslan on 12.04.17.
 */
import React from 'react';
import classnames from 'classnames';

function DrawerListItem ({
            elementType, selected, temporary, permanent, persistent, children, className, ...otherProps
        }){
        const ElementType = elementType || 'a';
        const classes = classnames(
          'mdc-list-item',
          {
            'mdc-temporary-drawer--selected': temporary && selected,
            'mdc-permanent-drawer--selected': permanent && selected,
            'mdc-persistent-drawer--selected': persistent && selected,
          },
          className
        );
        return (
            <ElementType
                className={classes}
                {...otherProps}
            >
                {children}
            </ElementType>
        );
}

export default DrawerListItem;