/**
 * Created by ruslan on 12.04.17.
 */
import React, {PureComponent} from 'react';
import classnames from 'classnames';

class DrawerListItem extends PureComponent {

    render() {
        const {
            elementType, selected, temporary, permanent, persistent, children, className, ...otherProps
        } = this.props;
        const ElementType = elementType || 'a';
        return (
            <ElementType
                className={
                    classnames(
                        'mdc-list-item',
                        {
                            'mdc-temporary-drawer--selected': temporary && selected,
                            'mdc-permanent-drawer--selected': permanent && selected,
                            'mdc-persistent-drawer--selected': persistent && selected,
                        },
                        className
                    )
                }
                {...otherProps}
            >
                {children}
            </ElementType>
        );
    }
}

export default DrawerListItem;