/**
 * Created by ruslan on 12.04.17.
 */
import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

class DrawerListItemDetail extends PureComponent {
    static propTypes = {
        id: PropTypes.string,
    };

    render() {
        const {elementType, children, className, icon, start, end, ...otherProps} = this.props;
        const ElementType = elementType || 'i';
        const classes = classnames({
            'material-icons': icon,
            'mdc-list-item__start-detail': start,
            'mdc-list-item__end-detail': end
        }, className);
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

export default DrawerListItemDetail;