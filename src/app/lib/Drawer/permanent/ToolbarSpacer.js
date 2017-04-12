/**
 * Created by ruslan on 12.04.17.
 */
import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import {ToolbarSpacer as Item} from '../ToolbarSpacer';

class ToolbarSpacer extends PureComponent {
    static propTypes = {
        children: PropTypes.node,
        className: PropTypes.string,
    };

    render() {
        const {elementType, children, className, ...otherProps} = this.props;
        const ElementType =  elementType || 'div';
        return (
            <Item
                permanent
                elementType={ElementType}
                className={className}
                {...otherProps}
            >
                {children}
            </Item>
        );
    }
}

export default ToolbarSpacer;