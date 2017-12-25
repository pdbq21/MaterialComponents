/**
 * Created by ruslan on 22.06.17.
 */
import React, {PureComponent} from 'react';
import classnames from 'classnames';

export default class Thumb extends PureComponent {

  render() {
    const {
      elementType,
      children,
      className,
      width,
      circle,
      height,
      cx,
      cy,
      r,
      ...otherProps
    } = this.props;
    const ElementType = elementType || 'svg';
    const classes = classnames('mdc-slider__thumb', className);
    return (
      <ElementType
        className={classes}
        width={width || "21"}
        height={height || "21"}
        {...otherProps}
      >
        {(circle)? <circle
          cx={cx || "10.5"}
          cy={cy || "10.5"}
          r={r || "7.875"}
        /> : children}
      </ElementType>
    );
  }
}