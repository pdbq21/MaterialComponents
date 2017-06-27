/**
 * Created by ruslan on 27.06.17.
 */
import React, {PureComponent} from 'react';
import classnames from 'classnames';

export default class ScrollFrame extends PureComponent {

  render() {
    const ownProps = Object.assign({}, this.props);
    const {
      elementType,
      className,
      children,
    } = ownProps;
    const ElementType = elementType || 'div';
    const classes = classnames('mdc-tab-bar-scroller__scroll-frame', className);
    return (
      <ElementType
        className={classes}
      >
        {children}
      </ElementType>
    );
  }
}