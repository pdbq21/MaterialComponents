/**
 * Created by ruslan on 20.03.17.
 */
import React, {PropTypes, PureComponent} from 'react';
import classnames from 'classnames';
import {textfield as MDCTextfield}  from 'material-components-web/dist/material-components-web';
const {MDCTextfieldFoundation} = MDCTextfield;
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
    }

    constructor(props, context) {
        super(props, context);
        this.state = {
            value: '',
        };
        this.foundation = new MDCTextfieldFoundation({
            // input
            registerInputFocusHandler: handler => {
                if (this.refs.rootInput) {
                    this.refs.rootInput.addEventListener('focus', handler)
                }
            },
            deregisterInputFocusHandler: handler => {
                if (this.refs.rootInput) {
                    this.refs.rootInput.removeEventListener('focus', handler)
                }
            },
            registerInputBlurHandler: handler => {
                if (this.refs.rootInput) {
                    this.refs.rootInput.addEventListener('blur', handler)
                }
            },
            deregisterInputBlurHandler: handler => {
                if (this.refs.rootInput) {
                    this.refs.rootInput.removeEventListener('blur', handler)
                }
            },
            registerInputInputHandler: handler => {
                if (this.refs.rootInput) {
                    this.refs.rootInput.addEventListener('input', handler)
                }
            },
            deregisterInputInputHandler: handler => {
                if (this.refs.rootInput) {
                    this.refs.rootInput.removeEventListener('input', handler)
                }
            },
            registerInputKeydownHandler: handler => {
                if (this.refs.rootInput) {
                    this.refs.rootInput.addEventListener('keydown', handler)
                }
            },
            deregisterInputKeydownHandler: handler => {
                if (this.refs.rootInput) {
                    this.refs.rootInput.removeEventListener('keydown', handler)
                }
            },
            getNativeInput: () => {
                if (!this.refs.rootInput) {
                    throw new Error('Invalid state for operation');
                }
                return this.refs.rootInput;
            },
        });
    }

    componentDidMount() {
        this.foundation.init();
    }

    componentWillUnmount() {
        this.foundation.destroy();
    }

    render() {
        const {children, elementType, className, ...otherProp} = this.props;
        const classes = classnames(
            'mdc-textfield__input',  className);
        const ElementType = elementType || 'input';
        return (
            <ElementType ref="rootInput" className={classes}
                         {...otherProp}
            >
                {children}
            </ElementType>);
    }

}
