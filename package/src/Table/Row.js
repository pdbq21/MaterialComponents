/**
 * Created by ruslan on 05.07.17.
 */
import React from 'react';
import {
  Checkbox,
  CheckboxInput,
  CheckboxBG
} from '../index'

export default function Row ({
      checked,
      onCheckbox,
      columns,
      dataRow,
      checkbox,
      onFocus,
    }){
    return (
      <tr
        onFocus={onFocus}
        tabIndex="0"
        className={`rmg-table_main__row ${(checked) ? 'rmg-table_main__row-active' : ''}`}
      >
        {(checkbox)? <td
          className={`rmg-table_main__checkbox `}
        >
          <Checkbox
            ripple
          >
            <CheckboxInput
              checked={checked}
              onChange={onCheckbox}
            />
            <CheckboxBG/>
          </Checkbox>
        </td> : null}

        {Object.keys(dataRow).map((col, index) => {
          return (<td
            className={`
            rmg-table__align-text-${(columns[index].align) ? columns[index].align : 'center'}
            ${(index === 0) ? 'rmg-table__grow' : ''}
            `}
            key={`key-table_col-${index}`}
          >{dataRow[col]}</td>)
        })}
      </tr>
    );
}