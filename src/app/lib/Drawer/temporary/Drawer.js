/**
 * Created by ruslan on 12.04.17.
 */
import React, {PureComponent} from 'react';
import classnames from 'classnames';

export default class Drawer extends PureComponent {

    render() {
        const ownProps = Object.assign({}, this.props);
        const {
            className,
            children,
            elementType,
            ...otherProps
        } = ownProps;
        const ElementType = elementType || 'nav';
        const classes = classnames('mdc-temporary-drawer__drawer', className);
        return (
            <ElementType
                className={classes}
                {...otherProps}
            >
                {children}
            </ElementType>);
    }
}