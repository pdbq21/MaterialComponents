/**
 * Created by ruslan on 05.07.17.
 */
import React, {PureComponent} from 'react';
import {
  Checkbox,
  CheckboxInput,
  CheckboxBG,
  IconToggle
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
      toggle,
      onSort
    } = this.props;

    return (
      <main className="rmd-table__main">
        <table className="table-props rmd-table__table">
          <thead>
          <tr>
            <th
              className="rmg-table_main__checkbox"
            >
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
            {columns.map(({name, type, align, sort}, index) => (
              <th
                className={`rmg-table_main__secondary
                rmg-table_main__column
                rmg-table_main__header
                rmg-table__align-text-${(align) ? align : 'center'}
                ${(index === 0) ? 'rmg-table__grow' : ''}
                `}
                key={`key-table_column-${index}`}
              >
                {(sort) ?
                  <IconToggle
                    className="rmg-table_main__toggle mdc-ripple-bg-radius mdc-ripple-fg-radius"
                    icon
                    toggle={toggle}
                    ripple
                    dim={15}
                    onChange={({isOn}) => onSort(isOn, name)}
                    aria-pressed="false"
                    aria-label="Add to favorites"
                    tabIndex="0"
                    data-toggle-on='{"label": "--", "content": "arrow_downward"}'
                    data-toggle-off='{"label": "--", "content": "arrow_upward"}'
                  >
                    arrow_upward
                  </IconToggle> : null}<span>{name}</span></th>
            ))}
          </tr>
          </thead>
          <tbody>
          {(rows) ? rows.map((row, index) => {
//console.log(row)
            //const dataRow = (dataRows[index])? dataRows[index].row === row : 'null';

//const isChecked = (dataRows[index])? dataRows[index].row === row && selectedItems.indexOf(index) !== -1 : false;
            return (<Row
              key={`key-table_row-${index}`}
              checked={ selectedItems.indexOf(index) !== -1 }
              onCheckbox={({target}) => onCheckbox({index: index, checked: target.checked})}
              dataRow={row}
              columns={columns}
            />)
          }) : null
          }
          </tbody>
        </table>
      </main>
    );
  }
}