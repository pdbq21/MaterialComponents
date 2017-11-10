/**
 * Created by ruslan on 05.05.17.
 */
import React, {PureComponent} from 'react';
import classnames from 'classnames';

export default class Item extends PureComponent {

  render() {
    const {
      elementType,
      children,
      className,
      role,
      tabIndex,
      disabled,
      ...otherProps
    } = this.props;
    const ElementType = elementType || 'li';
    const classes = classnames('mdc-list-item', className);
    return (
      <ElementType
        className={classes}
        role={role || 'option'}
        tabIndex={tabIndex || (disabled) ? '-1' : '0'}
        aria-disabled={disabled}
        {...otherProps}
      >
        {children}
      </ElementType>
    );
  }
}