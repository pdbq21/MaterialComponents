/**
 * Created by ruslan on 29.04.17.
 */
import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default class Surface extends PureComponent {
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
            children,
            elementType,
            className,
            ...otherProp
        } = ownProps;
        const classes = classnames('mdc-dialog__surface', className);
        const ElementType = elementType || 'div';
        return (
            <ElementType
                ref="dialogSurface"
                className={classes}
                {...otherProp}
            >
                {children}
            </ElementType>);
    }
}