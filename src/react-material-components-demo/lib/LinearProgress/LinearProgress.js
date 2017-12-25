/**
 * Created by ruslan on 22.06.17.
 */

import React, {Component} from 'react';
import classnames from 'classnames';

import {linearProgress}  from 'material-components-web/dist/material-components-web';
const {MDCLinearProgressFoundation} = linearProgress;

const {
  strings: {
    PRIMARY_BAR_SELECTOR: PRIMARY_BAR_SELECTOR_CLASS_NAME,
    BUFFER_SELECTOR: BUFFER_SELECTOR_CLASS_NAME,
  }
} = MDCLinearProgressFoundation;

export default class LinearProgress extends Component {
  state = {
    classNames: [],
  };

  foundation = new MDCLinearProgressFoundation({
    addClass: className => this.setState(({classNames}) => ({
      classNames: classNames.concat([className])
    })),

    getPrimaryBar: () => {
      if (this.refs.root) {
        return this.refs.root.querySelector(PRIMARY_BAR_SELECTOR_CLASS_NAME)
      }
    },
    getBuffer: () => {
      if (this.refs.root) {
        return this.refs.root.querySelector(BUFFER_SELECTOR_CLASS_NAME)
      }
    },
    hasClass: (className) => {
      if (this.refs.root) {
        return this.refs.root.classList.contains(className)
      }
    },
    removeClass: className => this.setState(({classNames}) => ({
      classNames: classNames.filter(cn => cn !== className)
    })),

    setStyle: (el, styleProperty, value) => {
      if (el) {
        return el.style[styleProperty] = value;
      }
    }
  });

  componentDidMount() {
    this.foundation.init();
    if (this.props.open) {
      this.foundation.open();
    } else {
      this.foundation.close();
    }
    if (this.props.determinate) {
      this.foundation.setDeterminate(this.props.determinate);
    } else {
      this.foundation.setDeterminate(this.props.determinate);
    }
    if (this.props.progress) {
      this.foundation.setProgress(this.props.progress);
    }
    if (this.props.buffer) {
      this.foundation.setBuffer(this.props.buffer);
    }
    if (this.props.reverse) {
      this.foundation.setReverse(this.props.reverse);
    } else {
      this.foundation.setReverse(this.props.reverse);
    }
  }

  componentWillUnmount() {
    this.foundation.destroy();
  }

  componentWillReceiveProps(props) {
    if (props.open) {
      this.foundation.open();
    } else {
      this.foundation.close();
    }
    if (props.determinate) {
      this.foundation.setDeterminate(props.determinate);
    } else {
      this.foundation.setDeterminate(props.determinate);
    }
    if (props.progress) {
      this.foundation.setProgress(props.progress);
    }
    if (props.buffer) {
      this.foundation.setBuffer(props.buffer);
    }
    if (props.reverse) {
      this.foundation.setReverse(props.reverse);
    } else {
      this.foundation.setReverse(props.reverse);
    }
  }

  render() {
    const ownProps = Object.assign({}, this.props);
    delete ownProps.open;
    delete ownProps.determinate;
    delete ownProps.reverse;
    delete ownProps.buffer;
    delete ownProps.progress;
    const {
      elementType,
      className,
      accent,
      role,
      reversed,
      indeterminate,
      children
    } = ownProps;
    const ElementType = elementType || 'div';
    const classes = classnames('mdc-linear-progress', {
      'mdc-linear-progress--accent': accent,
      'mdc-linear-progress--reversed': reversed,
      'mdc-linear-progress--indeterminate': indeterminate,
    }, this.state.classNames, className);
    return (
      <ElementType
        ref='root'
        role={role || 'progressbar'}
        className={classes}
      >
        {children}
      </ElementType>

    );
  }
}
