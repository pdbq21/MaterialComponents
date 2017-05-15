/**
 * Created by ruslan on 15.05.17.
 */
import React, {PureComponent} from 'react';
import {List, ListItem} from '../index'

export default class Items extends PureComponent {

    render() {
        const {data, handelItem, ...otherProps} = this.props;
        return (
            <List
                {...otherProps}
            >
                {
                    data.map((item, index) => (
                        <ListItem
                            onClick={handelItem}
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