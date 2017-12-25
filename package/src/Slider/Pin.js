/**
 * Created by ruslan on 12.07.17.
 */
import React, {PureComponent} from 'react';
import classnames from 'classnames';

export default class Pin extends PureComponent {

  render() {
    const {
      elementType,
      children,
      className,
      ...otherProps
    } = this.props;
    const ElementType = elementType || 'div';
    const classes = classnames('mdc-slider__pin', className);
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