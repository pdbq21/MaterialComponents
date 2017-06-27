/**
 * Created by ruslan on 27.06.17.
 */
import React, {Component} from 'react'
import {
  Elevation,
} from '../lib'

export default class Footer extends Component {
  render() {
    const {
      ...otherProps
    } = this.props;
    return (
      <Elevation
        zSpace="2"
        style={{
          'backgroundColor': 'rgba(0, 0, 0, 0.05)',
          'minHeight': '50px',
          'display': 'flex',
          'alignItems': 'center',
          'justifyContent': 'center',
          'marginTop': '1em'
        }}
        {...otherProps}
      >
        github
      </Elevation>
    )
  }
}