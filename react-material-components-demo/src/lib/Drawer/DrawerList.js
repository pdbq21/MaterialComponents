/**
 * Created by ruslan on 02.05.17.
 */
import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

class DrawerList extends PureComponent {
    static propTypes = {
        id: PropTypes.string,
    };

    render() {
        const {elementType, children, className, ...otherProps} = this.props;
        const ElementType = elementType || 'nav';
        const classes = classnames('mdc-list', className);
        return (
            <ElementType
                className={classes}
                {...otherProps}
            >
                {children}
            </ElementType>
        );
    }
}

export default DrawerList;