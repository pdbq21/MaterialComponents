/**
 * Created by ruslan on 12.04.17.
 */
import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {ListItem} from '../../index'

export default class MenuListItem extends PureComponent {
    static propTypes = {
        id: PropTypes.string,
    };

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