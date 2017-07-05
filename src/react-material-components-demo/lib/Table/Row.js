/**
 * Created by ruslan on 05.07.17.
 */
import React, {PureComponent} from 'react';
import {
  Checkbox,
  CheckboxInput,
  CheckboxBG
} from '../index'

export default class Row extends PureComponent {
  render() {
    const {
      checked,
      onCheckbox,
      columns,
    } = this.props;
    return (
      <tr>
        <td><Checkbox
          ripple
        >
          <CheckboxInput
            checked={checked}
            onChange={onCheckbox}
          />
          <CheckboxBG/>
        </Checkbox></td>
        {Object.keys(columns).map((col, index) => {
          return (<td
            key={`key-table_col-${index}`}
          >{columns[col]}</td>)
        })}
      </tr>
    );
  }
}