/**
 * Created by ruslan on 16.03.17.
 */
import React from 'react';
//import MenuComponentTest from './test/Menu'

import {
    SimpleMenu,
    SimpleMenuItems,
    SimpleMenuListItem,
    SimpleMenuAnchor
} from '../../app/lib'
export default class MenuComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false,
            open1: false,
            isActive: 'Top Left',
            styles: {'top': 0, 'left': 0}
        };

        this.handle = this.handle.bind(this);
        this.handelRadio = this.handelRadio.bind(this);
        this.handleSelected = this.handleSelected.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
        this.handle1 = this.handle1.bind(this);
        this.handleSelected1 = this.handleSelected1.bind(this);
        this.handleCancel1 = this.handleCancel1.bind(this);
    }

    setOpen(open) {
        this.setState({open});
    }

    handle() {
        this.setOpen(true);
    }

    setOpen1(open1) {
        this.setState({open1});
    }

    handle1() {
        this.setOpen1(true);
    }

    handelRadio(name) {
        const styles = (name === 'Top Left') ? {'top': 0, 'left': 0} :
            (name === 'Top right') ? {'top': 0, 'right': 0} :
                (name === 'Bottom left') ? {'bottom': 0, 'left': 0} :
                    (name === 'Bottom right') ? {'bottom': 0, 'right': 0} : null;
        this.setState({isActive: name, styles: styles});
    }

    handleSelected(...e) {
        console.log(e);
        this.setOpen(false);
    }

    handleSelected1(...e) {
        console.log(e);
        this.setOpen1(false);
    }

    handleCancel() {
        this.setOpen(false);
    }

    handleCancel1() {
        this.setOpen1(false);
    }


    render() {
        const {open1, open, isActive, styles} = this.state;

        return (
            <div>
                <fieldset>
                    <legend>Sample Menu</legend>
                    <button onClick={this.handle1}>Open</button>
                    <div>
                        <SimpleMenu
                            open={open1}
                            onSelected={this.handleSelected1}
                            onCancel={this.handleCancel1}
                        >
                            <SimpleMenuItems>
                                <SimpleMenuListItem>
                                    Item Menu 1
                                </SimpleMenuListItem>
                                <SimpleMenuListItem>
                                    Item Menu 2
                                </SimpleMenuListItem>
                                <SimpleMenuListItem>
                                    Item Menu 3
                                </SimpleMenuListItem>
                                <SimpleMenuListItem>
                                    Item Menu 4
                                </SimpleMenuListItem>
                            </SimpleMenuItems>
                        </SimpleMenu>
                    </div>
                </fieldset>
                <fieldset>
                    <legend>Sample Menu with Anchor</legend>
                    <div>
                        <p>
                            Position:
                            <span>
                        Top left
                        <input onChange={() => this.handelRadio('Top Left')}
                               type="radio"
                               checked={isActive === 'Top Left'}
                        />
                    </span>
                            <span>
               Top right
                        <input onChange={() => this.handelRadio('Top right')}
                               type="radio"
                               checked={isActive === 'Top right'}
                        />
                    </span>
                            <span>
                        Bottom left
                        <input onChange={() => this.handelRadio('Bottom left')}
                               type="radio"
                               checked={isActive === 'Bottom left'}
                        />
                    </span>
                            <span>
                       Bottom right
                        <input onChange={() => this.handelRadio('Bottom right')}
                               type="radio"
                               checked={isActive === 'Bottom right'}
                        />
                    </span>
                        </p>
                    </div>
                    <div
                        className="demo-simple-menu"
                    >
                        <SimpleMenuAnchor style={styles}>
                            <button onClick={this.handle}>Open</button>
                            <SimpleMenu
                                open={open}
                                onSelected={this.handleSelected}
                                onCancel={this.handleCancel}
                            >
                                <SimpleMenuItems>
                                    <SimpleMenuListItem>
                                        Item Menu 1
                                    </SimpleMenuListItem>
                                    <SimpleMenuListItem>
                                        Item Menu 2
                                    </SimpleMenuListItem>
                                    <SimpleMenuListItem>
                                        Item Menu 3
                                    </SimpleMenuListItem>
                                    <SimpleMenuListItem>
                                        Item Menu 4
                                    </SimpleMenuListItem>
                                </SimpleMenuItems>
                            </SimpleMenu>
                        </SimpleMenuAnchor>
                    </div>
                </fieldset>
            </div>
        );
    }

}
