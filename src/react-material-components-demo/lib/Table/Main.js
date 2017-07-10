/**
 * Created by ruslan on 05.07.17.
 */
import React, {PureComponent} from 'react';
import {
  Checkbox,
  CheckboxInput,
  CheckboxBG
} from '../index'
import Row from './Row'

export default class Main extends PureComponent {

  render() {
    const {
      rows,
      columns,
      onCheckbox,
      dataRows,
      selectAll,
      onSelectAll
    } = this.props;
    console.log('dataRows', dataRows, selectAll);
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
                  checked={selectAll}
                  onChange={({target}) => onSelectAll(target.checked)}
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
          {(rows)? rows.map((row, index) => {
           // const dataRow = childrenTable[row];
            // console.log('row', dataRow);
            return (<Row
              key={`key-table_row-${index}`}
              checked={(dataRows[index])? dataRows[index].checked : false}
              onCheckbox={({target}) => onCheckbox({index: index, checked: target.checked})}
              columns={row}
            />)}) : null
          }
          </tbody>
        </table>
      </main>
    );
  }
}