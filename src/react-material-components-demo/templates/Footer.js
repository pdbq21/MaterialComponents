/**
 * Created by ruslan on 27.06.17.
 */
import React, {Component} from 'react'
import {
  Elevation,
  FAB,
  FABIcon
} from '../lib'
import Logo from '../static/GitHub-Mark-64px.png'
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
          'marginTop': '1em',
          'padding': '0.5em'
        }}
        {...otherProps}
      >
        <FAB
          ripple
          plain
          elementType="a"
          href="https://github.com/pdbq21/MaterialComponents"
        >
          <FABIcon
            style={{
              'backgroundImage': `url(${Logo})`,
              'backgroundRepeat': 'round',
              'height': 'inherit',
            }}
          />
        </FAB>
      </Elevation>
    )
  }
}