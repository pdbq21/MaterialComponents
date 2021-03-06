/**
 * Created by ruslan on 15.03.17.
 */
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  icon: PropTypes.bool,
  start: PropTypes.bool,
  end: PropTypes.bool,
  graphic: PropTypes.bool,
};
const StartDetail = ({
                       children,
                       className,
                       elementType,
                       icon,
                       start,
                       end,
                       graphic,
                       meta,
                       ...otherProp
                     }) => {
  const classes = classnames({
    'material-icons': icon,
    'mdc-list-item__start-detail': start,
    'mdc-list-item__end-detail': end,
    'mdc-list-item__graphic': graphic,
    'mdc-list-item__meta': meta,
  }, className);
  const ElementType = elementType || 'span';
  return (
    <ElementType
      className={classes}
      {...otherProp}
    >
      {children}
    </ElementType>);
};

StartDetail.propTypes = propTypes;
export default StartDetail;