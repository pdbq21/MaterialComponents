/**
 * Created by ruslan on 15.03.17.
 */
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default class LayoutGrid extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  };

  setPropertyLayoutGrid(margin, gutter, marginDesktop,
                        gutterDesktop, marginTablet, gutterTablet, marginPhone, gutterPhone,
                        columnPhone, columnDesktop, columnTablet) {

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
      if (columnPhone) {
        this.refs.root.style.setProperty('--mdc-layout-grid-column-width-phone', columnPhone);
      }
      if (columnDesktop) {
        this.refs.root.style.setProperty('--mdc-layout-grid-column-width-desktop', columnDesktop);
      }
      if (columnTablet) {
        this.refs.root.style.setProperty('--mdc-layout-grid-column-width-tablet', columnTablet);
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
      gutterPhone,
      columnPhone,
      columnDesktop,
      columnTablet
    } = props;
    this.setPropertyLayoutGrid(
      margin, gutter, marginDesktop, gutterDesktop, marginTablet, gutterTablet, marginPhone, gutterPhone,
      columnPhone, columnDesktop, columnTablet
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
    delete ownProps.columnPhone;
    delete ownProps.columnDesktop;
    delete ownProps.columnTablet;
    const {
      children,
      className,
      elementType,
      fixed,
      left,
      right,
      ...otherProp
    } = ownProps;
    const ElementType = elementType || 'div';
    const classes = classnames('mdc-layout-grid', {
      'mdc-layout-grid--fixed-column-width': fixed,
      'mdc-layout-grid--align-left': left,
      'mdc-layout-grid--align-right': right,
    }, className);
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