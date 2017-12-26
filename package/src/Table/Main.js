/**
 * Created by ruslan on 05.07.17.
 */
import React from 'react';
import {
  Checkbox,
  CheckboxInput,
  CheckboxBG,
  IconToggle
} from '../index'
import Row from './Row'

export default function Main ({
      rows,
      columns,
      onCheckbox,
      selectAll,
      onSelectAll,
      selectedItems,
      toggle,
      onSort,
      checkbox,
      onKeyDown,
      onFocus
    }){

    return (
      <main className="rmd-table__main">
        <table className="table-props rmd-table__table">
          <thead>
          <tr>
            {(checkbox)?  <th
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
            </th> : null }

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
                    className="rmg-table_main__toggle"
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
          <tbody
            onKeyDown={onKeyDown}
          >
          {(rows) ? rows.map((row, index) => {
            return (<Row
              onFocus={() => onFocus(index)}
              key={`key-table_row-${index}`}
              checked={ selectedItems.indexOf(index) !== -1 }
              onCheckbox={({target}) => onCheckbox({index: index, checked: target.checked})}
              dataRow={row}
              columns={columns}
              checkbox={checkbox}
            />)
          }) : null
          }
          </tbody>
        </table>
      </main>
    );
}