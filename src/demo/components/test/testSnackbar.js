/**
 * Created by ruslan on 27.03.17.
 */
import React, {Component} from 'react';
import '@material/textfield/dist/mdc.textfield.min.css';
import {textfield as test}  from 'material-components-web/dist/material-components-web';
const {MDCTextfieldFoundation} = test;
import classnames from 'classnames';


class TestInput extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            value: '',
        };
    }


    componentDidMount() {
        this.props.onRef(this)
    }

    componentWillUnmount() {
        this.props.onRef(null)
    }

    render() {
        console.log(MDCTextfieldFoundation);
        return (
            <input
                ref="rootInput"
                type="text"
                id="my-textfield"
                //value={this.state.value}
                className="mdc-textfield__input"
                onChange={() => {
                    this.setState({
                        value: this.refs.rootInput.value
                    });
                    //this.props.onChange(evt);
                }}
            />

        );
    }
}
class Testlabel extends Component {
    render() {
        return (
            <label ref='rootLabel'
                   className={['mdc-textfield__label'].concat(this.props.classNamesLabel).join(' ')}
                   htmlFor="my-textfield"
            >Hint text</label>

        );
    }
}
class Helptext extends Component {
    render() {
        return (
            <p className="mdc-textfield-helptext mdc-textfield-helptext--persistent">
                We will <em>never</em> share your email address with third parties
            </p>

        );
    }
}
class TestFoundation extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            classNames: [],
            classNamesLabel: [],
            classNamesHelpText: [],
            value: '',
            nameHelpText: []
        };
        //console.log(MDCTextfieldFoundation);
        this.foundation_ = new MDCTextfieldFoundation({
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
            setHelptextAttr: (name, value) => this.setState(({nameHelpText}) => ({
                nameHelpText: nameHelpText.filter(_name => _name !== name)
            })),
            removeHelptextAttr: name => this.setState(({nameHelpText}) => ({
                nameHelpText: nameHelpText.filter(_name => _name !== name)
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
        this.foundation_.init();
    }

    componentWillUnmount() {
        this.foundation_.destroy();
    }

    componentDidUpdate() {
        console.log('did update');
    }

    render() {
        //console.log(this);
//const self = this.refs.rootInput;
        const {classNamesLabel} = this.state;
        const testFunc = child => React.cloneElement(child, {
            onRef: (ref) => (this.child = ref),
            'classNamesLabel': classNamesLabel
        });

        let renderChildren = React.Children.map(this.props.children, testFunc);
        return (
            <div>
                <div ref="root" className={classnames('mdc-textfield', this.state.classNames)}>
                    {renderChildren}
                    {/*      <TestInput />
                     <Testlabel />*/}

                    {/* Todo: need fix this */}

                    {/* <label className={['mdc-textfield__label'].concat(this.state.classNamesLabel).join(' ')}
                     htmlFor="my-textfield">Hint text</label>*/}
                </div>
                <p id="my-textfield-helptext" className="mdc-textfield-helptext" aria-hidden="true">
                    Help Text (possibly validation message)
                </p>

            </div>
        );
    }
}

export default function (props) {
    return (
        <TestFoundation>
            <TestInput />
            <Testlabel />
        </TestFoundation>
    )
}