/**
 * Created by ruslan on 27.03.17.
 */
import React, {Component} from 'react';
import '@material/textfield/dist/mdc.textfield.min.css';
import {snackbar as test}  from 'material-components-web/dist/material-components-web';
const {MDCSnackbarFoundation} = test;
import classnames from 'classnames';
import '@material/ripple/dist/mdc.ripple.min.css';
/*
import {ripple as test1}  from 'material-components-web/dist/material-components-web';

const {MDCRipple, MDCRippleFoundation} = test1;

class Text extends Component {
    render() {
        const {children} = this.props;
        return (
            <div className="mdc-snackbar__text">{children}</div>
        );
    }
}
class ActionWrapper extends Component {
    render() {
        const {children} = this.props;
        return (
            <div className="mdc-snackbar__action-wrapper">
                {children}
            </div>
        );
    }
}
class ActionButton extends Component {
    render() {
        const {children} = this.props;
        return (
            <button type="button" className="mdc-button mdc-snackbar__action-button">{children}</button>
        );
    }
}*/

class TestSnackbar extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            classNames: []
        };


        this.foundation_ = new MDCSnackbarFoundation({

            addClass: className => this.setState(({classNames}) => ({
                classNames: classNames.concat([className])
            })),
            removeClass: className => this.setState(({classNames}) => ({
                classNames: classNames.filter(cn => cn !== className)
            })),
            registerActionClickHandler: handler => {
                if (this.refs.button) {
                    this.refs.button.addEventListener('click', handler)
                }
            },
            deregisterActionClickHandler: handler => {
                if (this.refs.button) {
                    this.refs.button.removeEventListener('click', handler)
                }
            },
            setAriaHidden: () => {
                console.log(25)
            },
            unsetAriaHidden: () => {
                console.log(26)
            },
            setActionAriaHidden: () => {
                console.log(27)
            },
            unsetActionAriaHidden: () => {
                console.log(28)
            }

            /*
            setMessageText
            setActionText



            registerTransitionEndHandler
            deregisterTransitionEndHandler*/

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
        console.log(this);
//const self = this.refs.rootInput;
        return (
            <div>
                <button ref="button">Show</button>
                <div ref='root'
                     className={classnames('mdc-snackbar', this.state.classNames)}
                     aria-live="assertive"
                     aria-atomic="true"
                >
                    <div className="mdc-snackbar__text">Text</div>
                    <div className="mdc-snackbar__action-wrapper">
                        <button type="button" className="mdc-button mdc-snackbar__action-button">Button</button>
                    </div>
                </div>
            </div>

        );
    }
}

export default function (props) {
    console.log(MDCSnackbarFoundation);
    return (
            <TestSnackbar />
    )
}