/**
 * Created by ruslan on 05.05.17.
 */
import React, {PureComponent} from 'react';
import classnames from 'classnames';

export default class Items extends PureComponent {

    render() {
        const {
            elementType,
            children,
            className,
            ...otherProps
        } = this.props;
        const ElementType = elementType || 'ul';
        const classes = classnames('mdc-list mdc-simple-menu__items', className);
        return (
            <ElementType
                className={classes}
                {...otherProps}
            >
                {children}
            </ElementType>
        );
    }
}