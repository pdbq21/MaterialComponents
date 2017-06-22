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
            const rootInput = this.rootInput_();
            if (rootInput){
                return rootInput.hasAttribute('aria-controls') ?
                    document.getElementById(rootInput.getAttribute('aria-controls')) :
                    null;
            }
        };

        this.rootInput_ = () => (this.refs.root.querySelector('.mdc-textfield__input'));
        this.rootLabel_ = () => (this.refs.root.querySelector('.mdc-textfield__label'));

        this.foundation = new MDCTextfieldFoundation({

            addClass: className => this.setState(({classNames}) => ({
                classNames: classNames.concat([className])
            })),
            removeClass: className => this.setState(({classNames}) => ({
                classNames: classNames.filter(cn => cn !== className)
            })),

            addClassToLabel: className => {
                const rootLabel = this.rootLabel_();
                if (rootLabel) {
                    return rootLabel.classList.add(className);
                }
            },
            removeClassFromLabel: className => {
                const rootLabel = this.rootLabel_();
                if (rootLabel) {
                    return rootLabel.classList.remove(className);
                }
            },

            registerInputFocusHandler: handler => {
                const rootInput = this.rootInput_();
                if (rootInput) {
                    return rootInput.addEventListener('focus', handler, {passive: true});
                }
            },
            registerInputBlurHandler: handler => {
                const rootInput = this.rootInput_();
                if (rootInput) {
                    return rootInput.addEventListener('blur', handler, {passive: true});
                }
            },
            registerInputInputHandler: handler => {
                const rootInput = this.rootInput_();
                if (rootInput) {
                    return rootInput.addEventListener('input', handler, {passive: true});
                }
            },
            registerInputKeydownHandler: handler => {
                const rootInput = this.rootInput_();
                if (rootInput) {
                    return rootInput.addEventListener('keydown', handler, {passive: true});
                }
            },
            deregisterInputFocusHandler: handler => {
                const rootInput = this.rootInput_();
                if (rootInput) {
                    return rootInput.removeEventListener('focus', handler);
                }
            },
            deregisterInputBlurHandler: handler => {
                const rootInput = this.rootInput_();
                if (rootInput) {
                    return rootInput.removeEventListener('blur', handler);
                }
            },
            deregisterInputInputHandler: handler => {
                const rootInput = this.rootInput_();
                if (rootInput) {
                    return rootInput.removeEventListener('input', handler);
                }
            },
            deregisterInputKeydownHandler: handler => {
                const rootInput = this.rootInput_();
                if (rootInput) {
                    return rootInput.removeEventListener('keydown', handler);
                }
            },
            getNativeInput: () => {
                const rootInput = this.rootInput_();
                if (rootInput) {
                    return rootInput;
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
                {children}
            </ElementType>);
    }
}
