/**
 * Created by ruslan on 12.04.17.
 */
import React, {PureComponent} from 'react';
import {ListItem} from '../index'

export default class MenuListItem extends PureComponent {

    render() {
        const {elementType, children, className, role, tabIndex, ...otherProps} = this.props;
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
}