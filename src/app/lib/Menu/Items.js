/**
 * Created by ruslan on 12.04.17.
 */

import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
// but here use .mdc-list
import '@material/list/dist/mdc.list.min.css';

export default class Items extends PureComponent {
    static propTypes = {
        className: PropTypes.string,
    };

    componentDidMount() {
        this.props.onRef(this)
    }

    componentWillUnmount() {
        this.props.onRef(null)
    }

    render() {
        const ownProps = Object.assign({}, this.props);
        delete ownProps.onRef;
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
                ref="items"
                role={role || "menu"}
                className={classes}
                {...otherProps}
            >
                {children}
            </ElementType>
        );
    }

}