/**
 * Created by ruslan on 12.04.17.
 */
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const propTypes = {
  id: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  temporary: PropTypes.bool,
  permanent: PropTypes.bool,
  persistent: PropTypes.bool,
  list: PropTypes.bool,
};

function DrawerContent({
                         elementType,
                         children,
                         className,
                         temporary,
                         permanent,
                         list,
                         persistent,
                         ...otherProps
                       }) {
  const ElementType = elementType || 'div';
  const classNames = classnames(
    {
      'mdc-temporary-drawer__content': temporary,
      'mdc-permanent-drawer__content': permanent,
      'mdc-persistent-drawer__content': persistent,
      'mdc-list': list,
    },
    className
  );
  return (
    <ElementType
      className={classNames}
      {...otherProps}
    >
      {children}
    </ElementType>
  );
}

DrawerContent.propTypes = propTypes;
export default DrawerContent;