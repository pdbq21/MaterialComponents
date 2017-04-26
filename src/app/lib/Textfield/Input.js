/**
 * Created by ruslan on 20.03.17.
 */
import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
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
    static propTypes = {
        children: PropTypes.node,
    };

    componentDidMount() {
        this.props.onRef(this)
    }

    componentWillUnmount() {
        this.props.onRef(null)
    }

    render() {

        const {children, elementType, className, ...otherProp} = this.props;
        delete otherProp.onRef;
        const classes = classnames(
            'mdc-textfield__input', className);
        const ElementType = elementType || 'input';
        return (
            <ElementType
                ref="rootInput"
                className={classes}
                {...otherProp}
                /*onChange={(event) => {
                 this.setState({
                 value: this.refs.rootInput.value
                 });
                 //this.props.onChange(event);
                 }}*/
            >
                {children}
            </ElementType>);
    }

}
