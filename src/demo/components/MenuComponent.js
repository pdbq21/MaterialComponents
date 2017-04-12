/**
 * Created by ruslan on 16.03.17.
 */
import React from 'react';
import '@material/menu/dist/mdc.menu.min.css';
import MenuComponentTest from './test/Menu'


export default class MenuComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
        }

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
                    <legend>Sample Menu</legend>
                    <button onClick={this.handel}>Open</button>
                    <div>
                        <MenuComponentTest isOpen={isOpen} />
                    </div>
                </fieldset>
            </div>
        );
    }

}
