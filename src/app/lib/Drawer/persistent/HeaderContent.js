/**
 * Created by ruslan on 12.04.17.
 */
import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

class HeaderContent extends PureComponent {
    static propTypes = {
        id: PropTypes.string,
    };

    render() {
        const {elementType, children, className, ...otherProps} = this.props;
        const ElementType =  elementType || 'div';
        return (
            <ElementType
                className={
                classnames(
                    'mdc-persistent-drawer__header-content',
                    className
                )}
                {...otherProps}
            >
                {children}
            </ElementType>
        );
    }
}

export default HeaderContent;