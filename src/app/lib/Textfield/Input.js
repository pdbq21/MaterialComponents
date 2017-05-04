/**
 * Created by ruslan on 20.03.17.
 */
import React, {PureComponent} from 'react';
import classnames from 'classnames';

/*
 const propTypes = {
 children: PropTypes.node,
 className: PropTypes.string,
 };
 const Input = ({
 children,
 className,
 elementType,
 ...otherProp
 }) => {
 const classes = classnames(
 'mdc-textfield__input', className);
 const ElementType = elementType || 'input';
 return (
 <ElementType className={classes}
 {...otherProp}
 >
 {children}
 </ElementType>);
 };

 Input.propTypes = propTypes;
 export default Input;*/

export default class Input extends PureComponent {
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


        const classes = classnames('mdc-textfield__input', className);
        const ElementType = elementType || 'input';
        return (

            <ElementType
                ref="rootInput"
                className={classes}
                {...otherProps}
            >
                {children}
            </ElementType>);
    }

}
