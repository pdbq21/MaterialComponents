/**
 * Created by ruslan on 16.05.17.
 */
import React from 'react';
import {List, ListItem, ListItemDetail, Elevation, Theme} from '../index'

export default function Tags ({activeItems, handleTagRemove, ...otherProps}){
        return (
            <List
                {...otherProps}
            >
                {
                    activeItems.map((item, index) => (
                    <Theme
                        primaryBg
                        key={`key-${Date.now()}-${index}`}
                    >
                    <Elevation
                        zSpace="2"

                        style={{
                            'marginRight': '5px',
                            'marginTop': '2.5px',
                            'marginBottom': '2.5px',
                        }}
                    >
                        <ListItem
                            style={{
                                'paddingLeft': '10px',
                                'paddingRight': '5px',
                            }}
                        >
                            {item.name}
                            <ListItemDetail
                                className="material-icons"
                                end
                            onClick={() => handleTagRemove(item.index)}
                            style={{
                            'marginLeft': '5px',
                            'marginRight': '5px',
                                'cursor': 'pointer',
                                'marginTop': '-2px'
                        }}
                            >
                                 highlight_off
                            </ListItemDetail>
                        </ListItem>
                    </Elevation>
                    </Theme>
                    ))
                }
            </List>
        );
}