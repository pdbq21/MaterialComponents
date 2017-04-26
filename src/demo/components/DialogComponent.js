/**
 * Created by ruslan on 11.04.17.
 */
import React from 'react';

import DialogTest from './test/Dialog'

export default class DialogComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
        };

        this.handel = this.handel.bind(this);
    }


    handel() {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    render() {
        const {isOpen} = this.state;

        return (
            <div>
                <fieldset>
                    <legend>Dialog</legend>
                    <button onClick={this.handel}>Open</button>
                    <div>
                        <DialogTest isOpen={isOpen} />
                    </div>
                </fieldset>
            </div>
        );
    }

}