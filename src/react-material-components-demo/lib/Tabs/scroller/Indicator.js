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
      children,
      back,
      forward
    } = ownProps;
    const ElementType = elementType || 'div';
    const classes = classnames('mdc-tab-bar-scroller__indicator', {
      'mdc-tab-bar-scroller__indicator--back': back,
      'mdc-tab-bar-scroller__indicator--forward': forward,
    }, className);
    return (
      <ElementType
        className={classes}
      >
        {children}
      </ElementType>
    );
  }
}