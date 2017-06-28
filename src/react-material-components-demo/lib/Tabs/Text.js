/**
 * Created by ruslan on 27.06.17.
 */
import React, {PureComponent} from 'react';
import classnames from 'classnames';

export default class Text extends PureComponent {

  render() {
    const ownProps = Object.assign({}, this.props);
    const {
      elementType,
      className,
      children,
      ...otherProp
    } = ownProps;
    const ElementType = elementType || 'span';
    const classes = classnames('mdc-tab__icon-text', className);
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