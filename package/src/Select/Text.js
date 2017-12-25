/**
 * Created by ruslan on 05.05.17.
 */
import React, {PureComponent} from 'react';
import classnames from 'classnames';

export default class Text extends PureComponent {

    render() {
        const {
            elementType,
            children,
            className,
            ...otherProps
        } = this.props;
        const ElementType = elementType || 'span';
        const classes = classnames('mdc-select__selected-text', className);
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