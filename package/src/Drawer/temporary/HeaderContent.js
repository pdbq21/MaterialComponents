/**
 * Created by ruslan on 12.04.17.
 */
import React, {PureComponent} from 'react';
import classnames from 'classnames';

class HeaderContent extends PureComponent {

    render() {
        const {elementType, children, className, ...otherProps} = this.props;
        const ElementType =  elementType || 'div';
        const classes = classnames('mdc-temporary-drawer__header-content', className);
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

export default HeaderContent;