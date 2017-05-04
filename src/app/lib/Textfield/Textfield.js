/**
 * Created by ruslan on 20.03.17.
 */
import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {textfield}  from 'material-components-web/dist/material-components-web';
const {MDCTextfieldFoundation} = textfield;

export default class Textfield extends PureComponent {
    static propTypes = {
        children: PropTypes.node,
        disabled: PropTypes.bool,
        upgraded: PropTypes.bool,
        multiline: PropTypes.bool,
        fullwidth: PropTypes.bool,
        dense: PropTypes.bool,
    };

    constructor(props, context) {
        super(props, context);
        this.state = {
            classNames: [],
            classNamesLabel: [],
            classNamesHelpText: [],
            nameHelpText: []
        };


        this.helptextElement = () => {
            const input = this.child.Input.refs.rootInput;
            return input.hasAttribute('aria-controls') ?
                document.getElementById(input.getAttribute('aria-controls')) :
                null;
        };

        this.foundation = new MDCTextfieldFoundation({

            addClass: className => this.setState(({classNames}) => ({
                classNames: classNames.concat([className])
            })),
            removeClass: className => this.setState(({classNames}) => ({
                classNames: classNames.filter(cn => cn !== className)
            })),

            addClassToLabel: className => {
                if (this.child.Label.refs.label) {
                    return this.child.Label.refs.label.classList.add(className);
                }
            },
            removeClassFromLabel: className => {
                if (this.child.Label.refs.label) {
                    return this.child.Label.refs.label.classList.remove(className);
                }
            },

            registerInputFocusHandler: handler => {
                if (this.child.Input.refs.rootInput) {
                    return this.child.Input.refs.rootInput.addEventListener('focus', handler);
                }
            },
            registerInputBlurHandler: handler => {
                if (this.child.Input.refs.rootInput) {
                    return this.child.Input.refs.rootInput.addEventListener('blur', handler);
                }
            },
            registerInputInputHandler: handler => {
                if (this.child.Input.refs.rootInput) {
                    return this.child.Input.refs.rootInput.addEventListener('input', handler);
                }
            },
            registerInputKeydownHandler: handler => {
                if (this.child.Input.refs.rootInput) {
                    return this.child.Input.refs.rootInput.addEventListener('keydown', handler);
                }
            },
            deregisterInputFocusHandler: handler => {
                if (this.child.Input.refs.rootInput) {
                    return this.child.Input.refs.rootInput.removeEventListener('focus', handler);
                }
            },
            deregisterInputBlurHandler: handler => {
                if (this.child.Input.refs.rootInput) {
                    return this.child.Input.refs.rootInput.removeEventListener('blur', handler);
                }
            },
            deregisterInputInputHandler: handler => {
                if (this.child.Input.refs.rootInput) {
                    return this.child.Input.refs.rootInput.removeEventListener('input', handler);
                }
            },
            deregisterInputKeydownHandler: handler => {
                if (this.child.Input.refs.rootInput) {
                    return this.child.Input.refs.rootInput.removeEventListener('keydown', handler);
                }
            },
            getNativeInput: () => {
                if (this.child.Input.refs.rootInput) {
                    return this.child.Input.refs.rootInput;
                }
            },
            addClassToHelptext: className => {
                if (this.helptextElement()) {
                    const helptext = this.helptextElement();
                    return helptext.classList.add(className);
                }
            },
            removeClassFromHelptext: className => {
                if (this.helptextElement()) {
                    const helptext = this.helptextElement();
                    return helptext.classList.remove(className);
                }
            },
            helptextHasClass: className => {
                if (!this.helptextElement()) {
                    return false;
                }
                const helptext = this.helptextElement();
                return helptext.classList.contains(className);
            },
            setHelptextAttr: (name, value) => {
                if (this.helptextElement()) {
                    const helptext = this.helptextElement();
                    return helptext.setAttribute(name, value);
                }
            },
            removeHelptextAttr: name => {
                if (this.helptextElement()) {
                    const helptext = this.helptextElement();
                    return helptext.removeAttribute(name);
                }
            }
        });
    }

    componentDidMount() {
        if (!this.props['data-only-css']) {
            this.foundation.init();
        }
    }

    componentWillUnmount() {
        if (!this.props['data-only-css']) {
            this.foundation.destroy();
        }
    }

    render() {
        const ownProps = Object.assign({}, this.props);
        const {
            disabled,
            upgraded,
            multiline,
            fullwidth,
            dense,
            children,
            elementType,
            className,
            ...otherProps
        } = ownProps;

        const childElement = child => {
            if (child.type.name === 'Input' || 'Label') {
                return React.cloneElement(child, {
                    onRef: (ref) => {
                        this.child = Object.assign({}, this.child);
                        return this.child[child.type.name] = ref;
                    }
                })
            } else {
                return child
            }
        };

        let renderChildren = React.Children.map(children, childElement);

        const classes = classnames(
            'mdc-textfield', {
                'mdc-textfield--disabled': disabled,
                'mdc-textfield--upgraded': upgraded,
                'mdc-textfield--multiline': multiline,
                'mdc-textfield--fullwidth': fullwidth,
                'mdc-textfield--dense': dense,
            }, this.state.classNames, className);
        const ElementType = elementType || 'div';
        return (
            <ElementType
                ref="root"
                className={classes}
                {...otherProps}
            >
                {renderChildren}
            </ElementType>);
    }

}
