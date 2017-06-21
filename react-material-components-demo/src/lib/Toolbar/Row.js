/**
 * Created by ruslan on 03.05.17.
 */
import React, {PureComponent} from 'react';
import classnames from 'classnames';

export default class Row extends PureComponent {
    render() {
        const ownProps = Object.assign({}, this.props);
        const {
            elementType,
            className,
            children,
            ...otherProps
        } = ownProps;

        const classes = classnames('mdc-toolbar__row', className);
        const ElementType = elementType || 'div';

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