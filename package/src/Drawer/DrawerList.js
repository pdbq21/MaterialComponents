/**
 * Created by ruslan on 02.05.17.
 */
import React, {PureComponent} from 'react';
import classnames from 'classnames';

class DrawerList extends PureComponent {
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