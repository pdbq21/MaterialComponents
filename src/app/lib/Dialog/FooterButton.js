/**
 * Created by ruslan on 29.04.17.
 */
import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {Button} from '../../lib'

export default class FooterButton extends PureComponent {
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
            accept,
            cancel,
            className,
            ...otherProp
        } = ownProps;
        const classes = classnames('mdc-dialog__footer__button', {
            'mdc-dialog__footer__button--accept': accept,
            'mdc-dialog__footer__button--cancel': cancel
        }, className);
        const ElementType = elementType || Button;
        return (
            <ElementType
                ref={(accept)? "acceptSelector" : null}
                className={classes}
                {...otherProp}
            >
                {children}
            </ElementType>);
    }
}