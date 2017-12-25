/**
 * Created by ruslan on 12.04.17.
 */
import React, {PureComponent} from 'react';
import classnames from 'classnames';

class Header extends PureComponent {

    render() {
        const {elementType, children, className, ...otherProps} = this.props;
        const ElementType = elementType || 'header';
        const classes = classnames('mdc-persistent-drawer__header', className);
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

export default Header;