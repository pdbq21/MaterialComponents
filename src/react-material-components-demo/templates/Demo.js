/**
 * Created by ruslan on 30.06.17.
 */
import React, {Component} from 'react'
import {
  Elevation,
} from '../lib'

export default class Demo extends Component {
  render() {
    const {
      children,
      ...otherProps
    } = this.props;
    return (
      <Elevation
        zSpace="2"
        style={{
          'backgroundColor': 'rgba(0, 0, 0, 0.05)',
          'minHeight': '360px',
          'display': 'flex',
          'alignItems': 'center',
          'justifyContent': 'center',
          'flexFlow': 'row nowrap',
          'height': '360px',
        }}
        {...otherProps}
      >
        {children}
      </Elevation>
    )
  }
}