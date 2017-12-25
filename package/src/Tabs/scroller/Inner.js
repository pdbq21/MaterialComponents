/**
 * Created by ruslan on 27.06.17.
 */
import React, {PureComponent} from 'react';
import classnames from 'classnames';
import {Icon} from '../../base'

export default class Inner extends PureComponent {

  render() {
    const ownProps = Object.assign({}, this.props);
    const {
      elementType,
      className,
      children,
    ...otherProp
    } = ownProps;
    const ElementType = elementType || Icon;
    const classes = classnames('mdc-tab-bar-scroller__indicator__inner', className);
    return (
      <ElementType
        className={classes}
        elementType={(!elementType)? "a" : null}
        {...otherProp}
      >
        {children}
      </ElementType>
    );
  }
}