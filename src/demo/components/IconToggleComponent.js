/**
 * Created by ruslan on 13.04.17.
 */
import React from 'react';
import '@material/icon-toggle/dist/mdc.icon-toggle.min.css';
import IconToggleComponentTest from './test/IconToggle'


export default class IconToggleComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            toggle: false
        };

        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e){
        this.setState({
            toggle: !this.state.toggle
        });
        console.log(e);
    }
    render() {

        return (
            <div>
                <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.6.3/css/font-awesome.css"/>

                <fieldset>
                    <h3>Icon Toggle</h3>
                    <legend>Using material-icons</legend>
                    <div>
                        <IconToggleComponentTest
                            toggle={this.state.toggle}
                            ripple
                            onChange={this.handleChange}
                        />
                    </div>
                </fieldset>
            </div>
        );
    }

}
