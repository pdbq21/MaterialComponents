/**
 * Created by ruslan on 05.07.17.
 */
import React from 'react';
import {TypographySubheading, TypographyTitle} from '../index'
export default function Header ({
      items, //  selected row length
      title,
      action,
      multi,
      single,
    }){
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
            <TypographyTitle className="rmd-table__title__text">{title}</TypographyTitle>
            <div className="rmd-table__title-action">
              {/* buttons for actions */}
              {action}
            </div>
          </div>

      </header>
    );
}