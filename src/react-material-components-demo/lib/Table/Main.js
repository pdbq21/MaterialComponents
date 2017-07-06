/**
 * Created by ruslan on 05.07.17.
 */
import React, {PureComponent} from 'react';
import {
  Checkbox,
  CheckboxInput,
  CheckboxBG
} from '../index'

export default class Main extends PureComponent {

  render() {
    const {
      children,
      columns,
    } = this.props;
    return (
      <main>
        <table className="table-props">
          <thead>
          <tr>
            <th>
              <Checkbox
                ripple
                /*disabled={(dataTable.childrenId.length === 0)}*/
              >
                <CheckboxInput
                /*  checked={selectAll}
                  onChange={({target}) => onSelectAll(target.checked)}*/
                />
                <CheckboxBG/>
              </Checkbox>
            </th>
            {columns.map(({name}, index) => (
              <th
                key={`key-table_column-${index}`}
              >{name}</th>
            ))}
          </tr>
          </thead>
          <tbody>
          {children}
          </tbody>
        </table>
      </main>
    );
  }
}