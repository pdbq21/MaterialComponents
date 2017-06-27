/**
 * Created by ruslan on 27.06.17.
 */
import React, {Component} from 'react'
import {
  Elevation,
  TypographyDisplay,
  TypographyBody
} from '../lib'

export default class OriginalDoc extends Component {
  render() {
    const {
      name,
      url,
      href,
      ...otherProps
    } = this.props;
    return (
      <Elevation
        zSpace="2"
        style={{
          'minHeight': '10em',
          'display': 'flex',
          'alignItems': 'center',
          'flexDirection': 'column'
        }}
        {...otherProps}
      >
        <TypographyDisplay size="1">Original documentation</TypographyDisplay>
        <TypographyBody>
          This component is based on the MDC {name}, you can refer to its documentation <a
          href={
            (url) ? url :
              `https://github.com/material-components/material-components-web/tree/master/packages/${href}`
          }
        >here</a>.
        </TypographyBody>
      </Elevation>
    )
  }
}