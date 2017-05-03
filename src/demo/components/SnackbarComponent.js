/**
 * Created by ruslan on 27.03.17.
 */
import React from 'react';
//import TestSnackbar from './test/testSnackbar'

import {
    Snackbar,
    SnackbarText,
    SnackbarActionWrapper,
    SnackbarActionButton
} from '../../app/lib'
export default class SnackbarComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false,
            checkedMultiline: false,
            checkedAction: false,
            valueMessage: 'default message',
            valueAction: 'action',
            valueTimeout: '2750',//default
        };

        this.handel = this.handel.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handelAction = this.handelAction.bind(this);
        this.handleChangeMessage = this.handleChangeMessage.bind(this);
        this.handleChangeAction = this.handleChangeAction.bind(this);
        this.handleChangeTimeout = this.handleChangeTimeout.bind(this);
        this.handleChangeCheckedMultiline = this.handleChangeCheckedMultiline.bind(this);
        this.handleChangeCheckedAction = this.handleChangeCheckedAction.bind(this);
    }


    handel() {
        this.setState({
            open: !this.state.open
        })
    }

    handleChangeMessage({target}) {
        this.setState({
            valueMessage: target.value
        })
    }

    handleChangeAction({target}) {
        this.setState({
            valueAction: target.value
        })
    }

    handleChangeTimeout({target}) {
        this.setState({
            valueTimeout: target.value
        })
    }

    handleChangeCheckedMultiline() {
        this.setState({
            checkedMultiline: !this.state.checkedMultiline
        })
    }

    handleChangeCheckedAction() {
        this.setState({
            checkedAction: !this.state.checkedAction
        })
    }

    handelAction() {
        console.log('action')
    }
    handleClose() {
        this.setState({
            open: false
        })
    }

    render() {
        const {open} = this.state;
        return (
            <div >
                <fieldset>
                    <legend>Snackbar</legend>
                    <div>
                        <span>Multiline</span>
                        <input type="checkbox" checked={this.state.checkedMultiline}
                               onChange={this.handleChangeCheckedMultiline}/>
                        <span>Action On Bottom</span>
                        <input type="checkbox" checked={this.state.checkedAction}
                               onChange={this.handleChangeCheckedAction}/>

                    </div>
                    <div>
                        <span>Message Text:</span>
                        <input type="text" value={this.state.valueMessage || ''} onChange={this.handleChangeMessage}/>
                    </div>
                    <div>
                        <span>Action Text:</span>
                        <input type="text" value={this.state.valueAction || ''} onChange={this.handleChangeAction}/>
                    </div>
                    <div>
                        <span>timeout:</span>
                        <input type="text" value={this.state.valueTimeout || ''} onChange={this.handleChangeTimeout}/>
                    </div>


                    <button onClick={this.handel}>Open</button>
                    <div>
                        {/*<TestSnackbar
                            open={open}
                            message={this.state.valueMessage}
                            timeout={this.state.valueTimeout}
                            actionHandler={this.handelAction}
                            actionText={this.state.valueAction}
                            multiline={this.state.checkedMultiline}
                            actionOnBottom={this.state.checkedAction}

                            onOpen={this.handleOpen}
                            onClose={this.handleClose}
                        />*/}
                    </div>
                    <div>
                        <Snackbar
                            open={open}
                            message={this.state.valueMessage}
                            timeout={this.state.valueTimeout}
                            actionHandler={this.handelAction}
                            actionText={this.state.valueAction}
                            multiline={this.state.checkedMultiline}
                            actionOnBottom={this.state.checkedAction}
                            onClose={this.handleClose}
                        >
                            <SnackbarText/>
                            <SnackbarActionWrapper>
                                <SnackbarActionButton/>
                            </SnackbarActionWrapper>
                        </Snackbar>
                    </div>
                </fieldset>
            </div>
        );
    }
}