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
      selectAll,
      onSelectAll,
      selectedItems,
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

           //const dataRow = (dataRows[index])? dataRows[index].row === row : 'null';

//const isChecked = (dataRows[index])? dataRows[index].row === row && selectedItems.indexOf(index) !== -1 : false;
            return (<Row
              key={`key-table_row-${index}`}
              checked={ selectedItems.indexOf(index) !== -1 }
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