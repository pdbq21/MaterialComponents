/**
 * Created by ruslan on 02.05.17.
 */
import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {Button} from '../../lib'

export default class ActionButton extends PureComponent {
    static propTypes = {
        className: PropTypes.string,
    };

    componentDidMount() {
        this.props.onRef(this)
    }

    componentWillUnmount() {
        this.props.onRef(null)
    }

    render() {
        const ownProps = Object.assign({}, this.props);
        delete ownProps.onRef;
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
                ref='actionButton'
                className={classes}
                {...otherProp}
            >
                {children}
            </ElementType>);
    }
}