/**
 * Created by ruslan on 02.05.17.
 */
import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default class ActionWrapper extends PureComponent {
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
        const classes = classnames('mdc-snackbar__action-wrapper', className);
        const ElementType = elementType || 'div';
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