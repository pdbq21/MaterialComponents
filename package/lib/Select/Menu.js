/**
 * Created by ruslan on 05.05.17.
 */
import React, {PureComponent} from 'react';
import classnames from 'classnames';

export default class Menu extends PureComponent {

    render() {
        const {
            elementType,
            children,
            className,
            ...otherProps
        } = this.props;
        const ElementType = elementType || 'div';
        const classes = classnames('mdc-simple-menu mdc-select__menu', className);
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