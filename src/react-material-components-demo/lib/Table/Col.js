/**
 * Created by ruslan on 05.07.17.
 */
import React, {PureComponent} from 'react';
import {
  LayoutGrid,
  LayoutGridInner,
  LayoutGridCell,
  Textfield,
  TextfieldInput,
  TextfieldLabel,
} from '../index'

export default class Col extends PureComponent {
  render() {
    const {
      title,
      handleChange,
      columns,
      ...otherProps
    } = this.props;
    return (
      <LayoutGrid
        {...otherProps}
      >
        <LayoutGridInner>
          {/* title => New Row # */}
          <LayoutGridCell columns='12'>{title}</LayoutGridCell>
          {/* ? need dynamic # for columns */}
          {columns.map(({type, name,}, index) => (
            <LayoutGridCell
              columns="4"
              key={`key-new_row-${index}`}
            >
              <Textfield>
                {/* type => text | number | ? may be select list */}
                <TextfieldInput onBlur={({target}) => handleChange(name, target.value)} type={type}/>
                {/* label => name current col */}
                <TextfieldLabel>{name}</TextfieldLabel>
              </Textfield>
            </LayoutGridCell>
          ))}
        </LayoutGridInner>
      </LayoutGrid>
    );
  }
}