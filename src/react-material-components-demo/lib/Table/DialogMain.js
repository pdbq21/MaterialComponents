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

export default class DialogMain extends PureComponent {
  render() {
    const {
      title,
      onBlur,
      columns,
      ...otherProps
    } = this.props;
    console.log(onBlur);
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
                <TextfieldInput onBlur={({target}) => onBlur(name, target.value)} type={type}/>
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