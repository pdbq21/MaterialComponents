/**
 * Created by ruslan on 27.06.17.
 */
import React, {PureComponent} from 'react';
import classnames from 'classnames';
import {Icon} from '../base'

export default class TabIcon extends PureComponent {

  render() {
    const ownProps = Object.assign({}, this.props);
    const {
      elementType,
      className,
      children
    } = ownProps;
    const ElementType = elementType || Icon;
    const classes = classnames('mdc-tab__icon', className);
    return (
      <ElementType
        className={classes}
      >
        {children}
      </ElementType>
    );
  }
}