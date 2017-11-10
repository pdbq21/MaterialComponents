/**
 * Created by ruslan on 12.04.17.
 */

import React, {PureComponent} from 'react';
import classnames from 'classnames';
// because here use .mdc-list
import '@material/list/dist/mdc.list.min.css';

export default class Items extends PureComponent {

    render() {
        const ownProps = Object.assign({}, this.props);
        const {
            elementType,
            className,
            role,
            children,
            ...otherProps
        } = ownProps;

        const classes = classnames('mdc-simple-menu__items mdc-list', className);
        const ElementType = elementType || 'ul';

        return (
            <ElementType
                role={role || "menu"}
                className={classes}
                {...otherProps}
            >
                {children}
            </ElementType>
        );
    }

}