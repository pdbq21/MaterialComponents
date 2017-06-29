/**
 * Created by ruslan on 05.05.17.
 */
import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default class Item extends PureComponent {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  };

  render() {
    const {
      elementType,
      children,
      className,
      role,
      tabIndex,
      disabled,
      style,
      ...otherProps
    } = this.props;
    const ElementType = elementType || 'li';
    const classes = classnames('mdc-list-item', className);
    const styles = (disabled) ? Object.assign({}, style, {'pointerEvents': 'none'}) : style;
    return (
      <ElementType
        className={classes}
        role={role || 'option'}
        tabIndex={tabIndex || (disabled) ? '-1' : '0'}
        {...otherProps}
        style={styles}
      >
        {children}
      </ElementType>
    );
  }
}