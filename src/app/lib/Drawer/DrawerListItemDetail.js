/**
 * Created by ruslan on 12.04.17.
 */
import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {ListItemDetail} from '../../index'


class DrawerListItemDetail extends PureComponent {
    static propTypes = {
        id: PropTypes.string,
    };

    render() {
        const {elementType, children, className, ...otherProps} = this.props;
        const ElementType = elementType || 'i';
        return (
            <ListItemDetail
                icon
                start
                elementType={ElementType}
                className={className}
                {...otherProps}
            >
                {children}
            </ListItemDetail>
        );
    }
}

export default DrawerListItemDetail;