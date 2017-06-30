/**
 * Created by ruslan on 30.06.17.
 */
import React, {Component} from 'react'
import {
  Elevation,
  TypographyDisplay,
} from '../lib'

export default class Table extends Component {
  render() {
    const {
      name,
      property,
      ...otherProps
    } = this.props;
    return (
      <Elevation
        zSpace="2"
        {...otherProps}
      >
        <TypographyDisplay size="1">{name}</TypographyDisplay>
        <table className="table-props">
          <thead>
          <tr>
            <th>Property</th>
            <th>Type</th>
            <th>Default</th>
            <th>Required</th>
            <th>Description</th>
          </tr>
          </thead>
          <tbody>
          {property.map((prop, index) => (
            <tr key={`key-table-tr-${index}`}>
              <td><code>{prop.name}</code></td>
              <td><code>{prop.type}</code></td>
              <td>{prop.defaultValue}</td>
              <td>{prop.required}</td>
              <td>{prop.description}</td>
            </tr>
          ))}
          </tbody>
        </table>
      </Elevation>
    )
  }
}