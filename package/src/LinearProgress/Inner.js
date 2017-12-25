/**
 * Created by ruslan on 22.06.17.
 */
import React, {PureComponent} from 'react';
import classnames from 'classnames';

export default class Inner extends PureComponent {

  render() {
    const {
      elementType,
      children,
      className,
      ...otherProps
    } = this.props;
    const ElementType = elementType || 'span';
    const classes = classnames('mdc-linear-progress__bar-inner', className);
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