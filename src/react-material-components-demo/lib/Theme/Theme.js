/**
 * Created by ruslan on 11.05.17.
 */
import React, {PureComponent} from 'react';
import classnames from 'classnames';

export default class Theme extends PureComponent {

  render() {
    const {
      children,
      className,
      elementType,
      primary,
      primaryLight,
      secondaryLight,
      primaryDark,
      secondaryDark,
      secondary,
      background,
      primaryBg,
      primaryLightBg,
      primaryDarkBg,
      secondaryBg,
      secondaryLightBg,
      secondaryDarkBg,
      textStyle,
      themeColor,
      ...otherProps
    } = this.props;
    const ElementType = elementType || null;

    const classes = classnames(
      className, {
        'mdc-theme--primary': primary,
        'mdc-theme--primary-light': primaryLight,
        'mdc-theme--primary-dark': primaryDark,
        'mdc-theme--secondary': secondary,
        'mdc-theme--secondary-light': secondaryLight,
        'mdc-theme--secondary-dark': secondaryDark,
        'mdc-theme--background': background,
        'mdc-theme--primary-bg': primaryBg,
        'mdc-theme--primary--light-bg': primaryLightBg,
        'mdc-theme--primary--dark-bg': primaryDarkBg,
        'mdc-theme--secondary-bg': secondaryBg,
        'mdc-theme--secondary--light-bg': secondaryLightBg,
        'mdc-theme--secondary--dark-bg': secondaryDarkBg,
        [`mdc-theme--text-${textStyle}-on-${themeColor}`]: textStyle && themeColor,
      });

    return (ElementType) ? <ElementType
        className={classes}
        {...otherProps}
      >
        {children}
      </ElementType> :
      React.cloneElement(children, {
        className: `${classes} ${(children.props.className) ? children.props.className : ''}`,
      });
  }
}