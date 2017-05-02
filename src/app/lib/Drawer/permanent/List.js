/**
 * Created by ruslan on 12.04.17.
 */
import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import DrawerList from '../DrawerList';

class List extends PureComponent {
    static propTypes = {
        children: PropTypes.node,
        className: PropTypes.string,
    };

    render() {
        const {elementType, children, className, ...otherProps} = this.props;
        const ElementType = elementType || 'nav';
        return (
            <DrawerList
                elementType={ElementType}
                className={className}
                {...otherProps}
            >
                {children}
            </DrawerList>
        );
    }
}

export default List;