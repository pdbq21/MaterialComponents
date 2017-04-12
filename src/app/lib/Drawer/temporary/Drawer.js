/**
 * Created by ruslan on 12.04.17.
 */
import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

class Drawer extends PureComponent {
    static propTypes = {
        id: PropTypes.string,
    };

    render() {
        const {elementType, children, className, ...otherProps} = this.props;
        const ElementType = elementType || 'nav';
        return (
            <ElementType
                ref="root"
                className={
                    classnames(
                        'mdc-temporary-drawer__drawer',
                        className
                    )}
                {...otherProps}
            >
                {children}
            </ElementType>
        );
    }
}

export default Drawer;