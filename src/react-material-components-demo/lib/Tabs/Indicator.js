/**
 * Created by ruslan on 27.06.17.
 */
import React, {PureComponent} from 'react';
import classnames from 'classnames';

export default class Indicator extends PureComponent {

  render() {
    const ownProps = Object.assign({}, this.props);
    const {
      elementType,
      className,
      children
    } = ownProps;
    const ElementType = elementType || 'span';
    const classes = classnames('mdc-tab-bar__indicator', className);
    return (
      <ElementType
        className={classes}
      >
        {children}
      </ElementType>
    );
  }
}