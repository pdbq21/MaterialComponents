/**
 * Created by ruslan on 12.04.17.
 */
import React, {PureComponent} from 'react';

import DrawerToolbarSpacer from '../DrawerToolbarSpacer';

class ToolbarSpacer extends PureComponent {

    render() {
        const {elementType, children, className, ...otherProps} = this.props;
        const ElementType =  elementType || 'div';
        return (
            <DrawerToolbarSpacer
                persistent
                elementType={ElementType}
                className={className}
                {...otherProps}
            >
                {children}
            </DrawerToolbarSpacer>
        );
    }
}

export default ToolbarSpacer;