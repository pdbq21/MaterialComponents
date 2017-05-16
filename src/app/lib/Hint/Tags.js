/**
 * Created by ruslan on 16.05.17.
 */
import React, {PureComponent} from 'react';
import {List, ListItem, ListItemDetail} from '../index'

export default class Tags extends PureComponent {

    render() {
        const {data, handleTagRemove, ...otherProps} = this.props;
        return (
            <List
                {...otherProps}
            >
                {
                    data.map((item, index) => (
                        <ListItem
                            key={`key-${Date.now()}-${index}`}
                        >
                            {item}
                            <ListItemDetail
                            onClick={handleTagRemove}
                            />
                        </ListItem>
                    ))
                }
            </List>
        );
    }
}