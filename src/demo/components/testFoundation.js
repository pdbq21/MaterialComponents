/**
 * Created by ruslan on 21.03.17.
 */
import React, {Component} from 'react';
import '@material/textfield/dist/mdc.textfield.min.css';
import {textfield as test}  from 'material-components-web/dist/material-components-web';
const {MDCTextfield, MDCTextfieldFoundation} = test;
import classnames from 'classnames';
export default class TestFoundation extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            classNames: [],
            classNamesLabel: [],
            classNamesHelpText: [],
            value: '',
            nameHelpText: []
        };
        console.log(MDCTextfieldFoundation);
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
            removeHelptextAttr: name => this.setState(({nameHelpText}) => ({
                nameHelpText: nameHelpText.filter(cn => cn !== name)
            })),
            /*helptextHasClass
             setHelptextAttr
             removeHelptextAttr*/
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

    /* getInitialState() {
     return {
     classNames: [],
     classNamesLabel: [],
     classNamesHelpText: [],
     value: '25'
     };
     }*/

    componentDidMount() {
        this.foundation_.init();
    }

    componentWillUnmount() {
        this.foundation_.destroy();
    }

    render() {
        //console.log(this.state.classNames);
        return (

            <section>
                <h2>Password field with validation</h2>

                <div>
                    <div ref="root" className={classnames('mdc-textfield', this.state.classNames)}>
                        <input
                            pattern=".{8,}"
                            type="password"
                            required=""
                            ref="rootInput"
                            id="my-textfield"
                            aria-controls="pw-validation-msg"
                            //value={this.state.value}
                            autoComplete="current-password"
                            className="mdc-textfield__input"
                            onChange={() => {
                                this.setState({
                                    value: this.refs.rootInput.value
                                });
                                //this.props.onChange(evt);
                            }}
                        />
                        <label className={['mdc-textfield__label'].concat(this.state.classNamesLabel).join(' ')}
                               htmlFor="my-textfield">Choose password</label>
                    </div>
                    <p id="pw-validation-msg"
                       className={
                           ['mdc-textfield-helptext mdc-textfield-helptext--persistent mdc-textfield-helptext--validation-msg']
                               .concat(this.state.classNamesHelpText).join(' ')}
                    >
                        Must be at least 8 characters long
                    </p>


                </div>
            </section>
        );
    }
}
/*
 export default function TestFoundation() {

 return (
 <div ref="root" className='mdc-textfield'>
 <input ref="rootInput" type="text" id="my-textfield" className="mdc-textfield__input" />
 <label className="mdc-textfield__label" htmlFor="my-textfield">Hint text</label>
 </div>
 );
 }*/
/*

 {
 key: 'defaultAdapter',
 get: function get() {
 return {
 addClass: function addClass() /!* className: string *!/{},
 removeClass: function removeClass() /!* className: string *!/{},
 addClassToLabel: function addClassToLabel() /!* className: string *!/{},
 removeClassFromLabel: function removeClassFromLabel() /!* className: string *!/{},
 addClassToHelptext: function addClassToHelptext() /!* className: string *!/{},
 removeClassFromHelptext: function removeClassFromHelptext() /!* className: string *!/{},
 helptextHasClass: function helptextHasClass() {
 return (/!* className: string *!/ /!* boolean *!/false
 );
 },
 registerInputFocusHandler: function registerInputFocusHandler() /!* handler: EventListener *!/{},
 deregisterInputFocusHandler: function deregisterInputFocusHandler() /!* handler: EventListener *!/{},
 registerInputBlurHandler: function registerInputBlurHandler() /!* handler: EventListener *!/{},
 deregisterInputBlurHandler: function deregisterInputBlurHandler() /!* handler: EventListener *!/{},
 registerInputInputHandler: function registerInputInputHandler() /!* handler: EventListener *!/{},
 deregisterInputInputHandler: function deregisterInputInputHandler() /!* handler: EventListener *!/{},
 registerInputKeydownHandler: function registerInputKeydownHandler() /!* handler: EventListener *!/{},
 deregisterInputKeydownHandler: function deregisterInputKeydownHandler() /!* handler: EventListener *!/{},
 setHelptextAttr: function setHelptextAttr() /!* name: string, value: string *!/{},
 removeHelptextAttr: function removeHelptextAttr() /!* name: string *!/{},
 getNativeInput: function getNativeInput() {
 return (/!* HTMLInputElement *!/{}
 );
 }
 };
 }
 }*/
