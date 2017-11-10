/**
 * Created by ruslan on 26.06.17.
 */
import React, {PureComponent} from 'react';
import classnames from 'classnames';

export default class Inner extends PureComponent {

  render() {
    const {
      children,
      className,
      elementType,
      ...otherProp
    } = this.props;
    const ElementType = elementType || 'div';
    const classes = classnames('mdc-layout-grid__inner', className);
    return (
      <ElementType
        className={classes}
        {...otherProp}
      >
        {children}
      </ElementType>
    );
  }
}