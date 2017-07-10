/**
 * Created by ruslan on 05.07.17.
 */
import React, {PureComponent} from 'react';
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
              className="rmd-table__title__context"
            >
              <h2
                className="rmd-table__title__title"
              >
                {`${items} item${items > 1 ? 's' : ''} selected`}
              </h2>
              {(items === 1) ? single : multi}
            </div>

          :
          <div className="rmd-table__title">
            <h2 className="rmd-table__title__title">{title}</h2>
            {/* buttons for actions */}
            {action}
          </div>
        }
      </header>
    );
  }
}

/*<Button
 ripple
 className='rmd-table__title__active'
 onClick={onAdd}
 >Add</Button>*/