/**
 * Created by ruslan on 26.06.17.
 */
import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default class Inner extends PureComponent {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  };

  render() {
    const {
      children,
      className,
      elementType,
      ...otherProp
    } = this.props;
    const ElementType = elementType || 'div';
    const classes = classnames('mdc-layout-grid__inner', className);
    return (
      <ElementType
        className={classes}
        {...otherProp}
      >
        {children}
      </ElementType>
    );
  }
}