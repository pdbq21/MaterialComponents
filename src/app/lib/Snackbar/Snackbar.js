/**
 * Created by ruslan on 27.03.17.
 */
import React, {PropTypes, PureComponent} from 'react';
import classnames from 'classnames';
import {snackbar as mdcSnackbar}  from 'material-components-web/dist/material-components-web';
const {MDCSnackbarFoundation} = mdcSnackbar;

export default class Snackbar extends PureComponent {
    static propTypes = {
        children: PropTypes.node,
        disabled: PropTypes.bool,
        upgraded: PropTypes.bool,
        multiline: PropTypes.bool,
        fullwidth: PropTypes.bool,
    };

    constructor(props, context) {
        super(props, context);
        this.state = {
            classNames: [],
            classNamesLabel: [],
            classNamesHelpText: [],
            nameHelpText: []
        };
        this.foundation = new MDCSnackbarFoundation({
            /// textfield
            addClass: className => this.setState(({classNames}) => ({
                classNames: classNames.concat([className])
            })),
            removeClass: className => this.setState(({classNames}) => ({
                classNames: classNames.filter(cn => cn !== className)
            })),
            // label
            addClassToLabel: className => this.setState(({classNamesLabel}) => ({
                classNamesLabel: classNamesLabel.concat([className])
            })),
            removeClassFromLabel: className => this.setState(({classNamesLabel}) => ({
                classNamesLabel: classNamesLabel.filter(cn => cn !== className)
            })),
            // help text
            addClassToHelptext: className => this.setState(({classNamesHelpText}) => ({
                classNamesHelpText: classNamesHelpText.concat([className])
            })),
            removeClassFromHelptext: className => this.setState(({classNamesHelpText}) => ({
                classNamesHelpText: classNamesHelpText.filter(cn => cn !== className)
            })),
            // Todo: helpText functions
            // removeClassFromHelptext: (_className: string) {}
            /*helptextHasClass: className: boolean {
             return false;
             }*/

            //setHelptextAttr (_name: string, _value: string) {}
            removeHelptextAttr: name => this.setState(({nameHelpText}) => ({
                nameHelpText: nameHelpText.filter(cn => cn !== name)
            })),
            /*helptextHasClass
             setHelptextAttr
             removeHelptextAttr*/
            // input
            registerInputFocusHandler: handler => {
                if (this.child.refs.rootInput) {
                    this.child.refs.rootInput.addEventListener('focus', handler)
                }
            },
            deregisterInputFocusHandler: handler => {
                if (this.child.refs.rootInput) {
                    this.child.refs.rootInput.removeEventListener('focus', handler)
                }
            },
            registerInputBlurHandler: handler => {
                if (this.child.refs.rootInput) {
                    this.child.refs.rootInput.addEventListener('blur', handler)
                }
            },
            deregisterInputBlurHandler: handler => {
                if (this.child.refs.rootInput) {
                    this.child.refs.rootInput.removeEventListener('blur', handler)
                }
            },
            registerInputInputHandler: handler => {
                if (this.child.refs.rootInput) {
                    this.child.refs.rootInput.addEventListener('input', handler)
                }
            },
            deregisterInputInputHandler: handler => {
                if (this.child.refs.rootInput) {
                    this.child.refs.rootInput.removeEventListener('input', handler)
                }
            },
            registerInputKeydownHandler: handler => {
                if (this.child.refs.rootInput) {
                    this.child.refs.rootInput.addEventListener('keydown', handler)
                }
            },
            deregisterInputKeydownHandler: handler => {
                if (this.child.refs.rootInput) {
                    this.child.refs.rootInput.removeEventListener('keydown', handler)
                }
            },
            getNativeInput: () => {
                if (!this.child.refs.rootInput) {
                    throw new Error('Invalid state for operation');
                }
                return this.child.refs.rootInput;
            },
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
        const {classNamesLabel} = this.state;
        const childElement = child => {
            if (child.type.name === 'Input') {
                return React.cloneElement(child, {
                    onRef: (ref) => (this.child = ref)
                })
            } else if (child.type.name === 'Label') {
                return React.cloneElement(child, {
                    'classNamesLabel': classNamesLabel
                })
            } else {
                return child
            }
        };

        let renderChildren = React.Children.map(this.props.children, childElement);
        const {elementType, className, ...otherProp} = this.props;
        const classes = classnames(
            'mdc-snackbar', this.state.classNames, className);
        const ElementType = elementType || 'div';
        return (
            <ElementType ref="root" className={classes}
                         {...otherProp}
            >
                {renderChildren}
            </ElementType>);
    }

}