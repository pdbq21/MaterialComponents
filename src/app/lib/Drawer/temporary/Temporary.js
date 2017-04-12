/**
 * Created by ruslan on 12.04.17.
 */
import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import Drawer from '../Drawer';

class Temporary extends PureComponent {
    static propTypes = {
        children: PropTypes.node,
        className: PropTypes.string,
    };

    render() {
        const {elementType, children, className, ...otherProps} = this.props;
        const ElementType = elementType || 'aside';
        return (
            <Drawer
                temporary
                elementType={ElementType}
                className={className}
                {...otherProps}
            >
                {children}
            </Drawer>
        );
    }
}

export default Temporary;