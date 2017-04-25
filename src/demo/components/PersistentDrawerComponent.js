/**
 * Created by ruslan on 25.04.17.
 */
import React from 'react';

import PersistentDrawerTest from './test/PersistentDrawer'

export default class PersistentDrawerComponent extends React.Component {

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
                    <legend>Persistent Drawer</legend>
                    <button onClick={this.handel}>Open</button>
                    <div>
                        <PersistentDrawerTest isOpen={isOpen} />
                    </div>
                </fieldset>
            </div>
        );
    }

}
