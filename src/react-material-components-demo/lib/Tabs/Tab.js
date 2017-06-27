/**
 * Created by ruslan on 27.06.17.
 */
import React, {PureComponent} from 'react';
import classnames from 'classnames';

export default class Tab extends PureComponent {

  render() {
    const ownProps = Object.assign({}, this.props);
    const {
      elementType,
      className,
      active,
      iconText,
      children
    } = ownProps;
    const ElementType = elementType || 'a';
    const classes = classnames('mdc-tab', {
      'mdc-tab--active': active,
      'mdc-tab--with-icon-and-text': iconText,
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
