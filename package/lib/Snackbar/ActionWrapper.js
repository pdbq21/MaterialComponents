/**
 * Created by ruslan on 02.05.17.
 */
import React, {PureComponent} from 'react';
import classnames from 'classnames';

export default class ActionWrapper extends PureComponent {

    render() {
        const ownProps = Object.assign({}, this.props);
        const {
            children,
            className,
            elementType,
            ...otherProp
        } = ownProps;
        const classes = classnames('mdc-snackbar__action-wrapper', className);
        const ElementType = elementType || 'div';
        return (
            <ElementType
                className={classes}
                {...otherProp}
            >
                {children}
            </ElementType>);
    }
}