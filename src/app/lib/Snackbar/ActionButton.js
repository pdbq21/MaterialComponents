/**
 * Created by ruslan on 02.05.17.
 */
import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {Button} from '../../index'

export default class ActionButton extends PureComponent {
    static propTypes = {
        className: PropTypes.string,
    };

    render() {
        const ownProps = Object.assign({}, this.props);
        const {
            children,
            elementType,
            className,
            ...otherProp
        } = ownProps;
        const classes = classnames('mdc-snackbar__action-button', className);
        const ElementType = elementType || Button;
        return (
            <ElementType
                className={classes}
                {...otherProp}
            >
                {children}
            </ElementType>);
    }
}