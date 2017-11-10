/**
 * Created by ruslan on 22.06.17.
 */
import React, {PureComponent} from 'react';
import classnames from 'classnames';

export default class Track extends PureComponent {

  render() {
    const {
      elementType,
      children,
      marker,
      className,
      ...otherProps
    } = this.props;
    const ElementType = elementType || 'div';
    const classes = classnames({
      'mdc-slider__track': !marker,
      'mdc-slider__track-marker-container': marker
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