/**
 * Created by ruslan on 22.06.17.
 */
import React, {PureComponent} from 'react';
import classnames from 'classnames';
import {
  Icon as IconBase
} from '../base'

export default class Icon extends PureComponent {
  render() {
    const ownProps = Object.assign({}, this.props);
    const {
      elementType,
      className,
      children,
      menu,
      ...otherProps
    } = ownProps;

    const classes = classnames((menu)? 'mdc-toolbar__menu-icon' : 'mdc-toolbar__icon', className);
    const ElementType = elementType || (menu)? 'i' : 'a';

    return (
      <IconBase
        elementType={ElementType}
        className={classes}
        {...otherProps}
      >
        {children}
      </IconBase>
    );
  }
}