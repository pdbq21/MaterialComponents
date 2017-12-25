/**
 * Created by ruslan on 12.04.17.
 */
import React, {PureComponent} from 'react';
import classnames from 'classnames';

class DrawerContent extends PureComponent {

    render() {
        const {
            elementType,
            children,
            className,
            temporary,
            permanent,
            list,
            persistent,
            ...otherProps
        } = this.props;
        const ElementType = elementType || 'div';
        return (
            <ElementType
                className={
                    classnames(
                        {
                            'mdc-temporary-drawer__content': temporary,
                            'mdc-permanent-drawer__content': permanent,
                            'mdc-persistent-drawer__content': persistent,
                            'mdc-list': list,
                        },
                        className
                    )}
                {...otherProps}
            >
                {children}
            </ElementType>
        );
    }
}

export default DrawerContent;