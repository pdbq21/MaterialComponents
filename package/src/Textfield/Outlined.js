import React, {Component} from 'react';
import classnames from 'classnames';
import {textField} from 'material-components-web/dist/material-components-web';

const {MDCTextFieldOutlineFoundation} = textField;
const {
  strings: {
    PATH_SELECTOR: PATH_SELECTOR_NAME
  }
} = MDCTextFieldOutlineFoundation;

export default class Outlined extends Component {

  path_ = () => this.refs.root.querySelector(PATH_SELECTOR_NAME);

  foundation = new MDCTextFieldOutlineFoundation({
    getWidth: () => {
      if (!!this.refs.root) {
        return this.refs.root.offsetWidth
      }
    },
    getHeight: () => {
      if (!!this.refs.root) {
        return this.refs.root.offsetHeight
      }
    },
    setOutlinePathAttr: (value) => {
      const path = this.path_();
      if (!!path) {
        path.setAttribute('d', value);
      }
    },
  });

  componentDidMount() {
    if (!this.props.cssOnly) {
      this.foundation.init();
    }
  }

  componentWillUnmount() {
    if (!this.props.cssOnly) {
      this.foundation.destroy();
    }
  }

  render() {
    const ownProps = Object.assign({}, this.props);
    const {
      elementType,
      className,
      children,
      ...otherProp
    } = ownProps;

    const classes = classnames('mdc-text-field__outline', className);
    const ElementType = elementType || 'div';

    return (
      <ElementType
        ref="root"
        className={classes}
        {...otherProp}
      >
        <svg>
          <path className="mdc-text-field__outline-path"/>
        </svg>
        {children}
      </ElementType>
    );
  }
}