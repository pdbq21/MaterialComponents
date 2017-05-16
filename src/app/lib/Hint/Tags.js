/**
 * Created by ruslan on 16.05.17.
 */
import React, {PureComponent} from 'react';
import {List, ListItem, ListItemDetail} from '../index'

export default class Tags extends PureComponent {

    render() {
        const {activeItems, handleTagRemove, ...otherProps} = this.props;
        console.log(activeItems);
        return (
            <List
                {...otherProps}
            >
                {
                    activeItems.map((item, index) => (
                        <ListItem
                            key={`key-${Date.now()}-${index}`}
                        >
                            {item.name}
                            <ListItemDetail
                                end
                                style={{'backgroundColor': 'grey'}}
                            onClick={handleTagRemove}
                            />
                        </ListItem>
                    ))
                }
            </List>
        );
    }
}