/**
 * Created by ruslan on 12.04.17.
 */
import React, {PureComponent} from 'react';
import classnames from 'classnames';

export default class Drawer extends PureComponent {
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
            className,
            children,
            elementType,
            ...otherProps
        } = ownProps;
        const ElementType = elementType || 'nav';
        const classes = classnames('mdc-temporary-drawer__drawer', className);
        return (
            <ElementType
                ref="drawer"
                className={classes}
                {...otherProps}
            >
                {children}
            </ElementType>);
    }
}