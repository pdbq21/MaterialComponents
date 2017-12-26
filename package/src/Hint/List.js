/**
 * Created by ruslan on 15.05.17.
 */
import React from 'react';
import {List, ListItem} from '../index'

function filterActiveItem(item, active) {
  let isActive = false;
  active.forEach((active) => {
    if (active.name === item) {
      isActive = true;
    }
  });
  return isActive;
}

export default function Items({data, handelItem, activeItems, ...otherProps}) {
  return (
    <List
      {...otherProps}
    >
      {
        data.map((item, index) => (
          <ListItem
            aria-selected={filterActiveItem(item, activeItems)}
            onClick={(e) => handelItem(e, index)}
            key={`key-list_item-${index}`}
          >
            {item}
          </ListItem>
        ))
      }
    </List>
  );
}