/**
 * Created by ruslan on 15.05.17.
 */
import React, {PureComponent} from 'react';
import {List, ListItem} from '../../index'

export default class Items extends PureComponent {

    filterActiveItem(item, active) {
        let isActive = false;
        active.forEach((active) => {
            if (active.name === item) {
                isActive = true;
            }
        });
        return isActive;
    }

    render() {
        const {data, handelItem, activeItems, ...otherProps} = this.props;
        return (
            <List
                {...otherProps}
            >
                {
                    data.map((item, index) => (
                        <ListItem
                            aria-selected={this.filterActiveItem(item, activeItems)}
                            onClick={(e) => handelItem(e, index)}
                            key={`key-${Date.now()}-${index}`}
                        >
                            {item}
                        </ListItem>
                    ))
                }
            </List>
        );
    }
}