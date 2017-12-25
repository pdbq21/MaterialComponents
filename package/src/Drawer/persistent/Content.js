/**
 * Created by ruslan on 12.04.17.
 */
import React, {PureComponent} from 'react';

import DrawerContent from '../DrawerContent';

class Content extends PureComponent {

    render() {
        const {elementType, children, className, ...otherProps} = this.props;
        const ElementType = elementType || 'nav';
        return (
            <DrawerContent
                persistent
                list
                elementType={ElementType}
                className={className}
                {...otherProps}
            >
                {children}
            </DrawerContent>
        );
    }
}

export default Content;