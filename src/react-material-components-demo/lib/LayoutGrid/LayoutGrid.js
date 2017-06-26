/**
 * Created by ruslan on 15.03.17.
 */
import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default class LayoutGrid extends PureComponent {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  };

  setPropertyLayoutGrid(margin, gutter, marginDesktop,
                        gutterDesktop, marginTablet, gutterTablet, marginPhone, gutterPhone) {

    if (this.refs.root) {
      if (margin){
        this.refs.root.style.setProperty('--mdc-layout-grid-margin-desktop', margin);
        this.refs.root.style.setProperty('--mdc-layout-grid-margin-tablet', margin);
        this.refs.root.style.setProperty('--mdc-layout-grid-margin-phone', margin);
      }
      if (gutter) {
        this.refs.root.style.setProperty('--mdc-layout-grid-gutter-desktop', gutter);
        this.refs.root.style.setProperty('--mdc-layout-grid-gutter-tablet', gutter);
        this.refs.root.style.setProperty('--mdc-layout-grid-gutter-phone', gutter);
      }
      if (marginDesktop) {
        this.refs.root.style.setProperty('--mdc-layout-grid-margin-desktop', marginDesktop);
      }
      if (gutterDesktop) {
        this.refs.root.style.setProperty('--mdc-layout-grid-gutter-desktop', gutterDesktop);
      }
      if (marginTablet) {
        this.refs.root.style.setProperty('--mdc-layout-grid-margin-tablet', marginTablet);
      }
      if (gutterTablet) {
        this.refs.root.style.setProperty('--mdc-layout-grid-gutter-tablet', gutterTablet);
      }
      if (marginPhone) {
        this.refs.root.style.setProperty('--mdc-layout-grid-margin-phone', marginPhone);
      }
      if (gutterPhone) {
        this.refs.root.style.setProperty('--mdc-layout-grid-gutter-phone', gutterPhone);
      }
    }
  }

  componentDidMount() {
    const {
      gutter,
      margin,
      marginDesktop,
      gutterDesktop,
      marginTablet,
      gutterTablet,
      marginPhone,
      gutterPhone
    } = this.props;
    this.setPropertyLayoutGrid(
      margin, gutter, marginDesktop, gutterDesktop, marginTablet, gutterTablet, marginPhone, gutterPhone
    );
  }

  componentWillReceiveProps(props) {
    const {
      gutter,
      margin,
      marginDesktop,
      gutterDesktop,
      marginTablet,
      gutterTablet,
      marginPhone,
      gutterPhone
    } = props;
    this.setPropertyLayoutGrid(
      margin, gutter, marginDesktop, gutterDesktop, marginTablet, gutterTablet, marginPhone, gutterPhone
    );
  }

  render() {
    const ownProps = Object.assign({}, this.props);
    delete ownProps.gutter;
    delete ownProps.margin;
    delete ownProps.marginDesktop;
    delete ownProps.gutterDesktop;
    delete ownProps.marginTablet;
    delete ownProps.gutterTablet;
    delete ownProps.marginPhone;
    delete ownProps.gutterPhone;
    const {
      children,
      className,
      elementType,
      ...otherProp
    } = ownProps;
    const ElementType = elementType || 'div';
    const classes = classnames('mdc-layout-grid', className);
    return (
      <ElementType
        ref="root"
        className={classes}
        {...otherProp}
      >
        {children}
      </ElementType>
    );
  }
}