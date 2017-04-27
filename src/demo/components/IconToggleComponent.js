/**
 * Created by ruslan on 13.04.17.
 */
import React from 'react';
import '@material/icon-toggle/dist/mdc.icon-toggle.min.css';
import IconToggleComponentTest from './test/IconToggle'


export default class IconToggleComponent extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(){
        console.log("Decline");
    }
    render() {

        return (
            <div>
                <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>
                <fieldset>
                    <h3>Icon Toggle</h3>
                    <legend>Using material-icons</legend>
                    <div>
                        <IconToggleComponentTest
                            ripple
                            onChange={this.handleChange}
                        />
                    </div>
                </fieldset>
            </div>
        );
    }

}
