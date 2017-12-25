/**
 * Created by ruslan on 22.06.17.
 */
import React, {PureComponent} from 'react';
import classnames from 'classnames';

export default class FocusRing extends PureComponent {

  render() {
    const {
      elementType,
      children,
      className,
      ...otherProps
    } = this.props;
    const ElementType = elementType || 'div';
    const classes = classnames('mdc-slider__focus-ring', className);
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