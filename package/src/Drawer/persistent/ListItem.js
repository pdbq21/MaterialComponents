/**
 * Created by ruslan on 12.04.17.
 */
import React, {PureComponent} from 'react';

import DrawerListItem from '../DrawerListItem';

class ListItem extends PureComponent {

    render() {
        const {elementType, children, className, ...otherProps} = this.props;
        const ElementType = elementType || 'a';
        return (
            <DrawerListItem
                persistent
                elementType={ElementType}
                className={className}
                {...otherProps}
            >
                {children}
            </DrawerListItem>
        );
    }
}

export default ListItem;