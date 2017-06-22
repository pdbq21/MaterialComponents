/**
 * Created by ruslan on 22.06.17.
 */
import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default class Bar extends PureComponent {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  };

  render() {
    const {
      elementType,
      children,
      className,
      primary,
      secondary,
      ...otherProps
    } = this.props;
    const ElementType = elementType || 'div';
    const classes = classnames('mdc-linear-progress__bar', {
      'mdc-linear-progress__primary-bar': primary,
      'mdc-linear-progress__secondary-bar': secondary
    }, className);
    return (
      <ElementType
        className={classes}
        {...otherProps}
      >
        {children}
      </ElementType>
    );
  }
}