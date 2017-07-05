/**
 * Created by ruslan on 05.07.17.
 */
import React, {PureComponent} from 'react';
import {Button} from '../index'
import TitleContext from './TitleContext'
export default class Header extends PureComponent {
  render() {
    const {
      items,
      onAdd,
      onRemove,
      onEdit,
      title,
    } = this.props;
    return (
      <header
        className="rmd-table__header"
      >
        {(items) ?
          <TitleContext
            onRemove={onRemove}
            onEdit={onEdit}
            items={items}
          />
          :
          <div className="rmd-table__title">
            <h2 className="rmd-table__title__title">{title}</h2>
            <Button
              ripple
              className='rmd-table__title__active'
              onClick={onAdd}
            >Add</Button>
          </div>
        }
      </header>
    );
  }
}