/**
 * Created by ruslan on 12.07.17.
 */
import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default class Marker extends PureComponent {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  };

  render() {
    const {
      elementType,
      children,
      className,
      ...otherProps
    } = this.props;
    const ElementType = elementType || 'span';
    const classes = classnames('mdc-slider__pin-value-marker', className);
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