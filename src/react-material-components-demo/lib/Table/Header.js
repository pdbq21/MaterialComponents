/**
 * Created by ruslan on 05.07.17.
 */
import React, {PureComponent} from 'react';
import {TypographySubheading} from '../index'
export default class Header extends PureComponent {
  render() {
    const {
      items, //  selected row length
      title,
      action,
      multi,
      single,
    } = this.props;
    return (
      <header
        className="rmd-table__header"
      >
        {(items) ?
          <div
            className={`rmd-table__title__context rmd-table__title__context-active`}
          >
            <TypographySubheading
              className="rmd-table__title__text"
            >
              {`${items} item${items > 1 ? 's' : ''} selected`}
            </TypographySubheading>
            <div className="rmd-table__title-action">
              {(items === 1) ? single : multi}
            </div>
          </div>
          : null }
          <div className="rmd-table__title">
            <h2 className="rmd-table__title__text">{title}</h2>
            <div className="rmd-table__title-action">
              {/* buttons for actions */}
              {action}
            </div>
          </div>

      </header>
    );
  }
}

/*<Button
 ripple
 className='rmd-table__title__active'
 onClick={onAdd}
 >Add</Button>*/