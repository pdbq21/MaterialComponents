/**
 * Created by ruslan on 29.04.17.
 */
import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default class Footer extends PureComponent {
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
            className,
            id,
            elementType,
            ...otherProp
        } = ownProps;
        const childElement = child => {
            if (child.type.name === 'FooterButton') {
                return React.cloneElement(child, {
                    onRef: (ref) => (this.child = ref)
                })
            } else {
                return child
            }
        };
        let renderChildren = React.Children.map(children, childElement);
        const classes = classnames('mdc-dialog__footer', className);
        const ElementType = elementType || 'footer';
        return (
            <ElementType
                className={classes}
                id={id}
                {...otherProp}
            >
                {renderChildren}
            </ElementType>);
    }
}