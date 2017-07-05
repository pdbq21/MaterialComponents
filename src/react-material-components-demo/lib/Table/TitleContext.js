/**
 * Created by ruslan on 05.07.17.
 */
import React, {PureComponent} from 'react';
import {
  Button
} from '../index'

export default class TitleContext extends PureComponent {
  render() {
    const {
      onRemove,
      onEdit,
      items,
    } = this.props;

    return (<div className="rmd-table__title__context">
        <h2
          className="rmd-table__title__title"
        >
          {`${items} selected ${(items > 1) ? `items` : `item` }`}
        </h2>
        <Button
          ripple
          className='rmd-table__title__active'
          onClick={onRemove}
        >remove</Button>
        {(items === 1) ? <Button
          ripple
          className='rmd-table__title__active'
          onClick={onEdit}
        >edit</Button> : null}
      </div>
    );
  }
}

/*
 - if 1 =>
 -- 'item'
 -- action: Remove, Edit
 - if > 1 =>
 -- 'Items'
 -- action: Remove
 */