/**
 * Created by ruslan on 12.04.17.
 */
import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {ListItem as Item} from '../index'

class ListItem extends PureComponent {
    static propTypes = {
        id: PropTypes.string,
    };

    render() {
        const {elementType, selected, temporary, permanent, children, className, ...otherProps} = this.props;
        const ElementType = elementType || 'a';
        return (
            <Item
                elementType={ElementType}
                className={
                    classnames(
                        {
                            'mdc-temporary-drawer--selected': temporary && selected,
                            'mdc-permanent-drawer--selected': permanent && selected,
                        },
                        className
                    )
                }
                {...otherProps}
            >
                {children}
            </Item>
        );
    }
}

export default ListItem;