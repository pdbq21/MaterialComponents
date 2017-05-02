/**
 * Created by ruslan on 20.03.17.
 */
import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default class Drawer extends PureComponent {
    static propTypes = {
        id: PropTypes.string,
        children: PropTypes.node,
        className: PropTypes.string,
        temporary: PropTypes.bool,
        permanent: PropTypes.bool,
    };


    render() {
        const {
            elementType, children, className, temporary, permanent,
            ...otherProps
        } = this.props;
        const ElementType = elementType || 'div';
        return (
            <ElementType
                className={
                    classnames(
                        {
                            'mdc-temporary-drawer': temporary,
                            'mdc-permanent-drawer': permanent
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