/**
 * Created by ruslan on 16.03.17.
 */
import React, {PureComponent} from 'react';
import classnames from 'classnames';

export default class Anchor extends PureComponent {

    render() {
        const {
            elementType, children, className,
            ...otherProps
        } = this.props;
        const ElementType = elementType || 'div';
        const classes = classnames('mdc-menu-anchor', className);
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