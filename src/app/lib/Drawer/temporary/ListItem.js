/**
 * Created by ruslan on 12.04.17.
 */
import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import {ListItem as Item} from '../ListItem';

class ListItem extends PureComponent {
    static propTypes = {
        children: PropTypes.node,
        className: PropTypes.string,
    };

    render() {
        const {elementType, children, className, ...otherProps} = this.props;
        const ElementType = elementType || 'a';
        return (
            <Item
                temporary
                elementType={ElementType}
                className={className}
                {...otherProps}
            >
                {children}
            </Item>
        );
    }
}

export default ListItem;