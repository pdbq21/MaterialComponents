/**
 * Created by ruslan on 12.04.17.
 */
import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';


class Items extends PureComponent {
    static propTypes = {
        children: PropTypes.node,
        className: PropTypes.string,
    };

    render() {
        const {
            elementType, children, className,
            ...otherProps
        } = this.props;
        const ElementType = elementType || 'ul';
        return (
            <ElementType
                className={
                    classnames(
                        'mdc-simple-menu__items',
                        'mdc-list',
                        className
                    )}
                {...otherProps}
            >
                {children}
            </ElementType>
        );
    }
}

export default Items;