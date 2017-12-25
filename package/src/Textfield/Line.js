/**
 * Created by ruslan on 02.07.17.
 */
import React, {PureComponent} from 'react';
import classnames from 'classnames';

export default class Line extends PureComponent {

  render() {
    const ownProps = Object.assign({}, this.props);
    const {
      children,
      elementType,
      className,
      ...otherProps
    } = ownProps;

    const classes = classnames('mdc-textfield__bottom-line', className);
    const ElementType = elementType || 'div';
    return (
      <ElementType
        className={classes}
        {...otherProps}
      >
        {children}
      </ElementType>);
  }
}
