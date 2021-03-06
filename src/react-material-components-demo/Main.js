/**
 * Created by ruslan on 18.05.17.
 */
import React, {Component} from 'react'
import {
  Route,
  Switch as SwitchRoute
  // etc.
} from 'react-router-dom'
import {
  ToolbarMain,
} from './lib'
import {
  Home,
  Button,
  Card,
  Checkbox,
  Dialog,
  Elevation,
  Typography,
  List,
  IconToggle,
  Switch,
  Radio,
  FAB,
  LayoutGrid,
  Icon,
  Ripple,
  FormField,
  GridList,
  SimpleMenu,
  Textfield,
  Snackbar,
  Toolbar,
  Theme,
  DrawerTemporary,
  DrawerPersistent,
  DrawerPermanent,
  Select,
  HintList,
  Slider,
  LinearProgress,
  Tabs,
  Table
} from './pages'

export default class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      routes: [
        {
          path: 'button',
          component: Button
        },
        {
          path: 'card',
          component: Card
        },
        {
          path: 'checkbox',
          component: Checkbox
        },
        {
          path: 'dialog',
          component: Dialog
        },
        {
          path: 'elevation',
          component: Elevation
        },
        {
          path: 'typography',
          component: Typography
        },
        {
          path: 'list',
          component: List
        },
        {
          path: 'icon_toggle',
          component: IconToggle
        },
        {
          path: 'switch',
          component: Switch
        },
        {
          path: 'radio',
          component: Radio
        },
        {
          path: 'fab',
          component: FAB
        },
        {
          path: 'layout_grid',
          component: LayoutGrid
        },
        {
          path: 'icon',
          component: Icon
        },
        {
          path: 'ripple',
          component: Ripple
        },
        {
          path: 'form_field',
          component: FormField
        },
        {
          path: 'grid_list',
          component: GridList
        },
        {
          path: 'simple_menu',
          component: SimpleMenu
        },
        {
          path: 'slider',
          component: Slider
        },
        {
          path: 'textfield',
          component: Textfield
        },
        {
          path: 'snackbar',
          component: Snackbar
        },
        {
          path: 'toolbar',
          component: Toolbar
        },
        {
          path: 'theme',
          component: Theme
        },
        {
          path: 'drawer_temporary',
          component: DrawerTemporary
        },
        {
          path: 'drawer_persistent',
          component: DrawerPersistent
        },
        {
          path: 'drawer_permanent',
          component: DrawerPermanent
        },
        {
          path: 'select',
          component: Select
        },
        {
          path: 'hint_list',
          component: HintList
        },
        {
          path: 'linear_progress',
          component: LinearProgress
        },
        {
          path: 'tabs',
          component: Tabs
        },
        {
          path: 'table',
          component: Table
        },
      ]
    };
    this.renderRoute = this.renderRoute.bind(this);
  }

  renderRoute() {
    const {routes} = this.state;
    return routes.map(({path, component}, index) => (
        <Route
          key={`key-route-${index}`}
          path={`/${path}`}
          component={component}
        />
      )
    )
  }

  render() {
    return (
      <ToolbarMain
        fixed
      >
        <SwitchRoute>
          <Route exact path='/' component={Home}/>
          {this.renderRoute()}
        </SwitchRoute>
      </ToolbarMain>
    )
  }
}