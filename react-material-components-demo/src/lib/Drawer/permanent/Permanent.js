/**
 * Created by ruslan on 20.03.17.
 */
import React, {PureComponent} from 'react';
import classnames from 'classnames';

class Permanent extends PureComponent {

    render() {
        const {elementType, children, className, ...otherProps} = this.props;
        const ElementType = elementType || 'nav';
        const classes = classnames('mdc-permanent-drawer', className);
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

export default Permanent;