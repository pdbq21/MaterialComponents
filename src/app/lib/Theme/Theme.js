/**
 * Created by ruslan on 11.05.17.
 */
import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default class Theme extends PureComponent {
    static propTypes = {
        id: PropTypes.string,
    };

    render() {
        const {
            children,
            className,
            elementType,
            primary,
            accent,
            background,
            primaryBg,
            accentBg,
            dark,
            primaryPrimary,
            secondaryPrimary,
            hintPrimary,
            disabledPrimary,
            iconPrimary,
            primaryAccent,
            secondaryAccent,
            hintAccent,
            disabledAccent,
            iconAccent,
            primaryBackground,
            secondaryBackground,
            hintBackground,
            disabledBackground,
            iconBackground,
            primaryLight,
            secondaryLight,
            hintLight,
            disabledLight,
            iconLight,
            primaryDark,
            secondaryDark,
            hintDark,
            disabledDark,
            iconDark,
            ...otherProps
        } = this.props;
        const ElementType = elementType || null;

        const classes = classnames(
            className, {
                'mdc-theme--dark': dark,
                'mdc-theme--primary': primary,
                'mdc-theme--accent': accent,
                'mdc-theme--background': background,
                'mdc-theme--primary-bg': primaryBg,
                'mdc-theme--accent-bg': accentBg,
                'mdc-theme--text-primary-on-primary': primaryPrimary,
                'mdc-theme--text-secondary-on-primary': secondaryPrimary,
                'mdc-theme--text-hint-on-primary': hintPrimary,
                'mdc-theme--text-disabled-on-primary': disabledPrimary,
                'mdc-theme--text-icon-on-primary': iconPrimary,
                'mdc-theme--text-primary-on-accent': primaryAccent,
                'mdc-theme--text-secondary-on-accent': secondaryAccent,
                'mdc-theme--text-hint-on-accent': hintAccent,
                'mdc-theme--text-disabled-on-accent': disabledAccent,
                'mdc-theme--text-icon-on-accent': iconAccent,
                'mdc-theme--text-primary-on-background': primaryBackground,
                'mdc-theme--text-secondary-on-background': secondaryBackground,
                'mdc-theme--text-hint-on-background': hintBackground,
                'mdc-theme--text-disabled-on-background': disabledBackground,
                'mdc-theme--text-icon-on-background': iconBackground,
                'mdc-theme--text-primary-on-light': primaryLight,
                'mdc-theme--text-secondary-on-light': secondaryLight,
                'mdc-theme--text-hint-on-light': hintLight,
                'mdc-theme--text-disabled-on-light': disabledLight,
                'mdc-theme--text-icon-on-light': iconLight,
                'mdc-theme--text-primary-on-dark': primaryDark,
                'mdc-theme--text-secondary-on-dark': secondaryDark,
                'mdc-theme--text-hint-on-dark': hintDark,
                'mdc-theme--text-disabled-on-dark': disabledDark,
                'mdc-theme--text-icon-on-dark': iconDark,
            });


        return (ElementType) ? <ElementType
            className={classes}
            {...otherProps}
        >
            {children}
        </ElementType> :
            React.cloneElement(children, {
                className: classes + ' ' + children.props.className,
            });
    }
}