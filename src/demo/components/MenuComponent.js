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
            isActive: 'Top Left'
        }

        this.handel = this.handel.bind(this);
        this.handelRadio = this.handelRadio.bind(this);
    }


    handel() {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    handelRadio = (e) => this.setState({isActive: e.target.parentNode.textContent});

    render() {
        const {isOpen, isActive} = this.state;

        return (
            <div>
                <div>
                    <p>
                        Position:
                        <span>
                        Top left
                        <input onChange={this.handelRadio}
                            type="radio"
                            checked={isActive === 'Top Left'}
                        />
                    </span>
                        <span>
               Top right
                        <input onChange={this.handelRadio}
                            type="radio"
                            checked={isActive === 'Top right'}
                        />
                    </span>
                        <span>
                        Bottom left
                        <input onChange={this.handelRadio}
                            type="radio"
                        checked={isActive === 'Bottom left'}
                        />
                    </span>
                        <span>
                       Bottom right
                        <input  onChange={this.handelRadio}
                            type="radio"
                        checked={isActive === 'Bottom right'}
                        />
                    </span>
                    </p>
                </div>

                <fieldset>
                    <legend>Sample Menu</legend>
                    <button onClick={this.handel}>Open</button>
                    <div>
                        <MenuComponentTest
                            isOpen={isOpen}
                            className="mdc-simple-menu--open-from-top-left"
                        />
                    </div>
                </fieldset>
            </div>
        );
    }

}
