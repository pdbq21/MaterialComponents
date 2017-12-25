/**
 * Created by ruslan on 05.07.17.
 */
import React, {PureComponent} from 'react';
import {
  LayoutGrid,
  LayoutGridInner,
  LayoutGridCell,
} from '../index'
import Input from './Input';

export default class DialogMain extends PureComponent {

  render() {
    const {
      title,
      onBlur,
      columns,
      row,
      openDialog,
      ...otherProps
    } = this.props;
    return (
      <LayoutGrid
        {...otherProps}
      >{(openDialog)? <LayoutGridInner>
        {/* title => New Row # */}
        <LayoutGridCell columns='12'>{title}</LayoutGridCell>
        {/* ? need dynamic # for columns */}
        {columns.map(({type, name, defaultValue}, index) => (
          <LayoutGridCell
            columns="4"
            key={`key-new_row-${index}`}
          >
            <Input
              name={name}
              defaultValue={row[name] || defaultValue || ''}
              onBlur={onBlur}
              type={type}
            />
          </LayoutGridCell>
        ))}
      </LayoutGridInner> : null}

      </LayoutGrid>
    );
  }
}