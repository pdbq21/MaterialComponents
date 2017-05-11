/**
 * Created by ruslan on 29.04.17.
 */
import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default class Footer extends PureComponent {
    static propTypes = {
        className: PropTypes.string,
    };


    render() {
        const ownProps = Object.assign({}, this.props);
        const {
            children,
            className,
            id,
            elementType,
            ...otherProp
        } = ownProps;

        const classes = classnames('mdc-dialog__footer', className);
        const ElementType = elementType || 'footer';
        return (
            <ElementType
                className={classes}
                id={id}
                {...otherProp}
            >
                {children}
            </ElementType>);
    }
}