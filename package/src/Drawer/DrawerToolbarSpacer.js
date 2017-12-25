/**
 * Created by ruslan on 12.04.17.
 */
import React, {PureComponent} from 'react';
import classnames from 'classnames';

class DrawerToolbarSpacer extends PureComponent {

    render() {
        const {
            elementType, children, temporary, permanent, persistent, className,
            ...otherProps
        } = this.props;
        const ElementType = elementType || 'div';
        const classes = classnames(
            {
                'mdc-temporary-drawer__toolbar-spacer': temporary,
                'mdc-permanent-drawer__toolbar-spacer': permanent,
                'mdc-persistent-drawer__toolbar-spacer': persistent,

            },
            className
        );
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

export default DrawerToolbarSpacer;