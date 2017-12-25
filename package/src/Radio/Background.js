/**
 * Created by ruslan on 04.07.17.
 */
import React, {PureComponent} from 'react';
import classnames from 'classnames';

export default class Background extends PureComponent {

  render() {
    const ownProps = Object.assign({}, this.props);
    const {
      className,
      elementType,
      ...otherProps
    } = ownProps;
    const ElementType = elementType || 'div';
    const classes = classnames('mdc-radio__background', className);
    return (
      <ElementType
        className={classes}
        {...otherProps}
      >
        <div className="mdc-radio__outer-circle"/>
        <div className="mdc-radio__inner-circle"/>
      </ElementType>);
  }

}