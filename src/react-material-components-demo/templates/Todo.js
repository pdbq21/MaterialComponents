/**
 * Created by ruslan on 02.07.17.
 */
import React, {Component} from 'react'
import {
  Elevation,
  List,
  ListItem,
  ListItemDetail,
  ListDivider,
  TypographyHeadline
} from '../lib'

export default class Todo extends Component {
  render() {
    const {
      list,
      ...otherProps
    } = this.props;
    return (
      <Elevation
        zSpace="2"
        elementType="aside"
        style={{
          'backgroundColor': 'rgba(0, 0, 0, 0.05)',
          'display': 'flex',
          'alignItems': 'center',
          'justifyContent': 'center',
          'position': 'fixed',
          'bottom': 0,
          'right': '1em'
        }}
        {...otherProps}
      >
        <List>
          <ListItem>
            <TypographyHeadline>Todo list</TypographyHeadline>
            <ListItemDetail end icon>expand_more
            </ListItemDetail>
          </ListItem>
          <ListDivider />
          {list.map(({name, completed}, index)=> (
            <ListItem
            key={`key-todo-${index}`}
            >
              <ListItemDetail start icon>
                {(completed)? 'check_box' : 'check_box_outline_blank'}
              </ListItemDetail>
              {name}
            </ListItem>
          ))}
        </List>
      </Elevation>
    )
  }
}