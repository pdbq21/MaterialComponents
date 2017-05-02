/**
 * Created by ruslan on 12.04.17.
 */
import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

class DrawerContent extends PureComponent {
    static propTypes = {
        id: PropTypes.string,
        children: PropTypes.node,
        className: PropTypes.string,
        temporary: PropTypes.bool,
        permanent: PropTypes.bool,
        list: PropTypes.bool,
    };

    render() {
        const {
            elementType, children, className, temporary, permanent, list,
            ...otherProps
        } = this.props;
        const ElementType = elementType || 'div';
        return (
            <ElementType className={
                classnames(
                    {
                        'mdc-temporary-drawer__content': temporary,
                        'mdc-permanent-drawer__content': permanent,
                        'mdc-list': list,
                    },
                    className
                )}
                         {...otherProps}
            >
                {children}
            </ElementType>
        );
    }
}

export default DrawerContent;