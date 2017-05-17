/**
 * Created by ruslan on 02.05.17.
 */
import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {List} from '../../index'

class DrawerList extends PureComponent {
    static propTypes = {
        id: PropTypes.string,
    };

    render() {
        const {elementType, children, className, ...otherProps} = this.props;
        const ElementType = elementType || 'nav';
        const classes = classnames(className);
        return (
            <List
                elementType={ElementType}
                className={classes}
                {...otherProps}
            >
                {children}
            </List>
        );
    }
}

export default DrawerList;