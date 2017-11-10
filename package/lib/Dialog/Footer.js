/**
 * Created by ruslan on 29.04.17.
 */
import React, {PureComponent} from 'react';
import classnames from 'classnames';

export default class Footer extends PureComponent {

    render() {
        const ownProps = Object.assign({}, this.props);
        const {
            children,
            className,
            elementType,
            ...otherProp
        } = ownProps;

        const classes = classnames('mdc-dialog__footer', className);
        const ElementType = elementType || 'footer';
        return (
            <ElementType
                className={classes}
                {...otherProp}
            >
                {children}
            </ElementType>);
    }
}