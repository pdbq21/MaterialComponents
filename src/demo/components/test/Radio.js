/**
 * Created by ruslan on 29.03.17.
 */
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import '@material/radio/dist/mdc.radio.min.css';
import {radio as test}  from 'material-components-web/dist/material-components-web';
const {MDCRadioFoundation} = test;
import classnames from 'classnames';

/*
class TestRadio extends Component {


    constructor(props, context) {
        super(props, context);
        this.state = {
            classNames: [],
            checkedInternal: this.props.checked,
            disabledInternal: this.props.disabled,

        };

        this.foundation_ = new MDCRadioFoundation({

            addClass: className => this.setState(({classNames}) => ({
                classNames: classNames.concat([className])
            })),
            removeClass: className => this.setState(({classNames}) => ({
                classNames: classNames.filter(cn => cn !== className)
            })),
            getNativeControl: () => {
                if (!this.refs.rootInput) {
                    throw new Error('Invalid state for operation');
                }
                return this.refs.rootInput;
            }
        });
    }


    componentDidMount() {
        this.foundation_.init();
    }

    componentWillUnmount() {
        this.foundation_.destroy();
    }

    // Here we synchronize the internal state of the UI component based on what the user has specified.
    componentWillReceiveProps(props) {
        if (props.checked !== this.props.checked) {
            this.setState({checkedInternal: props.checked});
        }
        if (props.disabled !== this.props.disabled) {
            this.setState({disabledInternal: props.disabled});
        }
    }

    componentDidUpdate() {
        console.log('did update');
    }

    render() {
        console.log(this);
        return (
            <div>
                <div className={classnames('mdc-radio', this.state.classNames)}>
                    <input ref="rootInput"
                           className="mdc-radio__native-control"
                           type="radio"
                           id="radio-1"
                           name="radios"
                           checked={this.state.checkedInternal}
                           disabled={this.state.disabledInternal}
                           onChange={evt => {
                               this.setState({
                                   checkedInternal: this.refs.rootInput.checked
                               });
                               // this.props.onChange(evt);
                           }}
                    />
                    <div className="mdc-radio__background">
                        <div className="mdc-radio__outer-circle"/>
                        <div className="mdc-radio__inner-circle"/>
                    </div>
                </div>
                <label id="radio-1-label" htmlFor="radio-1">Radio 1</label>
            </div>

        );
    }
}
*/

export default function (props) {
    console.log(MDCRadioFoundation);
    return (
        <TestRadio />
    )
}


class TestRadio extends Component {
    static propTypes = {
        id: PropTypes.string,
        labelId: PropTypes.string,
       // checked: PropTypes.bool,
        disabled: PropTypes.bool,
        onChange: PropTypes.func
    }

    static defaultProps = {
        //checked: false,
        disabled: false,
        onChange: () => {}
    }

    state = {
        classNames: [],
        checkedInternal: false,
        disabledInternal: this.props.disabled,
    }

    // Here we initialize a foundation class, passing it an adapter which tells it how to
    // work with the React component in an idiomatic way.
    foundation = new MDCRadioFoundation({

        addClass: className => this.setState(({classNames}) => ({
            classNames: classNames.concat([className])
        })),
        removeClass: className => this.setState(({classNames}) => ({
            classNames: classNames.filter(cn => cn !== className)
        })),
        getNativeControl: () => {
            if (!this.refs.rootInput) {
                throw new Error('Invalid state for operation');
            }
            return this.refs.rootInput;
        }
    });


    render() {
        return (
        <div>
            <div ref="root" className={classnames('mdc-radio', this.state.classNames)}>
                <input ref="rootInput"
                       className="mdc-radio__native-control"
                       type="radio"
                       id="radio-1"
                       name="radios"
                       checked={this.state.checkedInternal}
                       disabled={this.state.disabledInternal}
                       onChange={() => {
                           this.setState({
                               checkedInternal: this.refs.rootInput.checked
                           });
                          // this.props.onChange(evt);
                       }}
                />
                <div className="mdc-radio__background">
                    <div className="mdc-radio__outer-circle"/>
                    <div className="mdc-radio__inner-circle"/>
                </div>
            </div>
            <label id="radio-1-label" htmlFor="radio-1">Radio 1</label>
        </div>
        );
    }

    // Within the two component lifecycle methods below, we invoke the foundation's lifecycle hooks
    // so that proper work can be performed.
    componentDidMount() {
        this.foundation.init();
    }

    componentWillUnmount() {
        this.foundation.destroy();
    }

    // Here we synchronize the internal state of the UI component based on what the user has specified.
    componentWillReceiveProps(props) {
        if (props.checked !== this.props.checked) {
            this.setState({checkedInternal: props.checked});
        }
        if (props.disabled !== this.props.disabled) {
            this.setState({disabledInternal: props.disabled});
        }
    }
}
