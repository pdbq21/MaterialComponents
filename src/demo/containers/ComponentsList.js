/**
 * Created by ruslan on 13.03.17.
 */
// import lib
import React, {Component} from 'react';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import '../styles/style.sass'
// import container

//import component
import Buttons from '../components/Buttons'
import Checkbox from '../components/Checkboxes'
import Elevations from '../components/Elevations'
import Cards from '../components/Cards'
import RadioComponent from '../components/RadioComponent'
import TypographyComponent from '../components/TypographyComponent'
import LayoutGrids from '../components/LayoutGrids'
import Lists from '../components/Lists'
import MenuComponent from '../components/MenuComponent'
import FABComponent from '../components/FABComponent'
import ToolbarComponent from '../components/ToolbarComponent'
import SwitchComponent from '../components/SwitchComponent'
import DrawerComponent from '../components/DrawerTemporaryComponent'
import TextfieldComponent from '../components/TextfieldComponent'
import SnackbarComponent from '../components/SnackbarComponent'
import SelectComponent from '../components/SelectComponent'
import RippleComponent from '../components/RippleComponent'
import DialogComponent from '../components/DialogComponent'
import IconToggleComponent from '../components/IconToggleComponent'
import GridListComponent from '../components/GridListComponent'
import PersistentDrawerComponent from '../components/PersistentDrawerComponent'
import FormFieldComponent from '../components/FormFieldComponent'
import DrawerPermanentBelow from '../components/DrawerPermanentBelow'
import DrawerPermanentAbove from '../components/DrawerPermanentAbove'
// import actions
import * as Actions from '../actions/ComponentsListActions'


class ComponentsList extends Component {
    constructor(props) {
        super(props);
        this.handelNavigation = this.handelNavigation.bind(this);
        this.renderListItem = this.renderListItem.bind(this);
    }

    handelNavigation({target}) {
        //console.log(target.textContent);
        if (target.classList.contains('navigation-item')) {
            const {activeMenuItem} = this.props.mapStateReducer;
            if (target.textContent !== activeMenuItem) {
                const {ActionNavigation} = this.props.mapDispactchActions;
                ActionNavigation(target.textContent);
            }
        }
    }

    renderListItem(name) {
        switch (name) {
            case 'Button':
                return (<Buttons />);
            case 'Checkbox':
                return (<Checkbox />);
            case 'Elevation':
                return (<Elevations />);
            case 'Card':
                return (<Cards />);
            case 'Radio':
                return (<RadioComponent />);
            case 'Typography':
                return (<TypographyComponent />);
            case 'LayoutGrid':
                return (<LayoutGrids />);
            case 'List':
                return (<Lists />);
            case 'Menu':
                return (<MenuComponent />);
            case 'FAB':
                return (<FABComponent />);
            case 'Toolbar':
                return (<ToolbarComponent />);
            case 'Switch':
                return (<SwitchComponent />);
            case 'Drawer (Temporary)':
                return (<DrawerComponent />);
            case 'Textfield':
                return (<TextfieldComponent />);
            case 'Snackbar':
                return (<SnackbarComponent />);
            case 'Select':
                return (<SelectComponent />);
            case 'Ripple':
                return (<RippleComponent />);
            case 'Dialog':
                return (<DialogComponent />);
            case 'Icon Toggle':
                return (<IconToggleComponent />);
            case 'Grid List':
                return (<GridListComponent />);
            case 'Drawer (Persistent)':
                return (<PersistentDrawerComponent />);
case 'Form Field':
                return (<FormFieldComponent />);
case 'Drawer Permanent Below':
                return (<DrawerPermanentBelow />);
case 'Drawer Permanent Above':
                return (<DrawerPermanentAbove />);

            default:
                return null;
        }
    }

    render() {
        const {activeMenuItem} = this.props.mapStateReducer;
        return (
            <div className="App">
                <h2>Components List</h2>
                <ul
                    className="navigation"
                    onClick={this.handelNavigation}
                >
                    <li className={`navigation-item ${(activeMenuItem === 'Button') ? 'active' : ''}`}>
                        Button
                    </li>
                    <li className={`navigation-item ${(activeMenuItem === 'Checkbox') ? 'active' : ''}`}>
                        Checkbox
                    </li>
                    <li className={`navigation-item ${(activeMenuItem === 'Card') ? 'active' : ''}`}>
                        Card
                    </li>
                    <li className={`navigation-item ${(activeMenuItem === 'Dialog') ? 'active' : ''} `}>
                        Dialog
                    </li>
                    <li className={`navigation-item ${(activeMenuItem === 'Elevation') ? 'active' : ''}`}>
                        Elevation
                    </li>
                    <li className={`navigation-item ${(activeMenuItem === 'Radio') ? 'active' : ''}`}>
                        Radio
                    </li>
                    <li className={`navigation-item ${(activeMenuItem === 'Typography') ? 'active' : ''}`}>
                        Typography
                    </li>
                    <li className={`navigation-item ${(activeMenuItem === 'LayoutGrid') ? 'active' : ''}`}>
                        LayoutGrid
                    </li>
                    <li className={`navigation-item ${(activeMenuItem === 'List') ? 'active' : ''}`}>
                        List
                    </li>
                    <li className={`navigation-item ${(activeMenuItem === 'Menu') ? 'active' : ''} todo-lite`}>
                        Menu
                    </li>
                    <li className={`navigation-item ${(activeMenuItem === 'FAB') ? 'active' : ''}`}>
                        FAB
                    </li>
                    <li className={`navigation-item ${(activeMenuItem === 'Grid List') ? 'active' : ''} `}>
                        Grid List
                    </li>
                    <li className={`navigation-item ${(activeMenuItem === 'Icon Toggle') ? 'active' : ''} todo`}>
                        Icon Toggle
                    </li>
                    <li className={`navigation-item ${(activeMenuItem === 'Toolbar') ? 'active' : ''}`}>
                        Toolbar
                    </li>
                    <li className={`navigation-item ${(activeMenuItem === 'Switch') ? 'active' : ''}`}>
                        Switch
                    </li>
                    <li
                        className={`navigation-item ${(activeMenuItem === 'Drawer (Temporary)') ? 'active' : ''} `}>
                        Drawer (Temporary)
                    </li>
                    <li
                        className={`navigation-item ${(activeMenuItem === 'Drawer (Persistent)') ? 'active' : ''} todo`}>
                        Drawer (Persistent)
                    </li>
                    <li className={`navigation-item ${(activeMenuItem === 'Textfield') ? 'active' : ''}`}>
                        Textfield
                    </li>
                    <li className={`navigation-item ${(activeMenuItem === 'Snackbar') ? 'active' : ''} todo-lite`}>
                        Snackbar
                    </li>
                    <li className={`navigation-item ${(activeMenuItem === 'Select') ? 'active' : ''} todo`}>
                        Select
                    </li>
                    <li className={`navigation-item ${(activeMenuItem === 'Ripple') ? 'active' : ''} todo`}>
                        Ripple
                    </li>
                    <li className={`navigation-item ${(activeMenuItem === 'Drawer Permanent Below') ? 'active' : ''}`}>
                        Drawer Permanent Below
                    </li>
                    <li className={`navigation-item ${(activeMenuItem === 'Drawer Permanent Above') ? 'active' : ''} `}>
                        Drawer Permanent Above
                    </li>
                    <li className={`navigation-item ${(activeMenuItem === 'Form Field') ? 'active' : ''}`}>
                        Form Field
                    </li>
                </ul>

                <div>
                    {this.renderListItem(activeMenuItem)}
                </div>
            </div>
        );
    }
}


function mapStateToProps(state) {
    return {
        mapStateReducer: state.Reducer,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        mapDispactchActions: bindActionCreators(Actions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ComponentsList)
