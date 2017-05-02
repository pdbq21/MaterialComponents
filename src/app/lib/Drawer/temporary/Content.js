/**
 * Created by ruslan on 12.04.17.
 */
import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import {Content as Item} from '../DrawerContent';

class Content extends PureComponent {
    static propTypes = {
        children: PropTypes.node,
        className: PropTypes.string,
    };

    render() {
        const {elementType, children, className, ...otherProps} = this.props;
        const ElementType = elementType || 'nav';
        return (
            <Item
                temporary
                list
                elementType={ElementType}
                className={className}
                {...otherProps}
            >
                {children}
            </Item>
        );
    }
}

export default Content;