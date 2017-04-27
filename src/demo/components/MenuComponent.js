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
            open: false,
        };

        this.handle = this.handle.bind(this);
        this.handleSelected = this.handleSelected.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
    }

    setOpen(open) {
        this.setState({open});
    }

    handle() {
        console.log(0);
        this.setOpen(true);
    }

    handleSelected(...e) {
        console.log(e);
        //this.setOpen(true);
    }

    handleCancel() {
        console.log(1);
        this.setOpen(false);
    }


    render() {
        const {open} = this.state;

        return (
            <div>
                <div>
                    {/* <p>
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
                    </p>*/}
                </div>

                <fieldset>
                    <legend>Sample Menu</legend>
                    <button onClick={this.handle}>Open</button>
                    <div>
                        <MenuComponentTest
                            open={open}
                            onSelected={this.handleSelected}
                            onCancel={this.handleCancel}
                            className="mdc-simple-menu--open-from-top-left"
                        />
                    </div>
                </fieldset>
            </div>
        );
    }

}
