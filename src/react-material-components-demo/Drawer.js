/**
 * Created by ruslan on 18.05.17.
 */
import React, {Component} from 'react'
import {
  Link
} from 'react-router-dom'

import {
  DrawerListItemDetail,
  DrawerTemporary,
  TemporaryContent,
  TemporaryDrawer,
  TemporaryHeader,
  TemporaryHeaderContent,
  TemporaryListItem,
  Theme,
  ListDivider,
} from './lib'

export default class Drawer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      catalogList: [
        {
          name: 'Home',
          icon: 'home',
          link: '/',
          todo: true
        }, {
          name: 'Button',
          icon: 'add_circle',
          link: '/button',
          todo: false
        }, {
          name: 'Card',
          icon: 'dashboard',
          link: '/card',
          todo: false
        }, {
          name: 'Checkbox',
          icon: 'check_box',
          link: '/checkbox',
          todo: false
        }, {
          name: 'Dialog',
          icon: 'chat_bubble',
          link: '/dialog',
          todo: false
        }, {
          name: 'Drawer Temporary',
          icon: 'chrome_reader_mode',
          link: '/drawer_temporary',
          todo: false
        }, {
          name: 'Drawer Persistent',
          icon: 'chrome_reader_mode',
          link: '/drawer_persistent',
          todo: false
        }, {
          name: 'Drawer Permanent',
          icon: 'chrome_reader_mode',
          link: '/drawer_permanent',
          todo: false
        }, {
          name: 'Elevation',
          icon: 'filter_none',
          link: '/elevation',
          todo: false
        }, {
          name: 'FAB',
          icon: 'add_circle',
          link: '/fab',
          todo: false
        }, {
          name: 'FormField',
          icon: 'code',
          link: '/form_field',
          todo: false
        }, {
          name: 'Grid List',
          icon: 'grid_on',
          link: '/grid_list',
          todo: false
        }, {
          name: 'Icon',
          icon: 'filter_hdr',
          link: '/icon',
          todo: false
        }, {
          name: 'Icon Toggle',
          icon: 'favorite',
          link: '/icon_toggle',
          todo: false
        }, {
          name: 'Layout Grid',
          icon: 'line_style',
          link: '/layout_grid',
          todo: false
        }, {
          name: 'Linear Progress',
          icon: 'data_usage',
          link: '/linear_progress',
          todo: false
        }, {
          name: 'List',
          icon: 'list',
          link: '/list',
          todo: false
        }, {
          name: 'Radio',
          icon: 'radio_button_checked',
          link: '/radio',
          todo: false
        }, {
          name: 'Ripple',
          icon: 'leak_add',
          link: '/ripple',
          todo: false
        }, {
          name: 'Select',
          icon: 'select_all',
          link: '/select',
          todo: false
        }, {
          name: 'Simple Menu',
          icon: 'menu',
          link: '/simple_menu',
          todo: false
        }, {
          name: 'Slider',
          icon: 'linear_scale',
          link: '/slider',
          todo: false
        }, {
          name: 'Snackbar',
          icon: 'video_label',
          link: '/snackbar',
          todo: false
        }, {
          name: 'Switch',
          icon: 'toll',
          link: '/switch',
          todo: false
        }, {
          name: 'Tabs',
          icon: 'tab',
          link: '/tabs',
          todo: false
        }, {
          name: 'Textfield',
          icon: 'text_format',
          link: '/textfield',
          todo: false
        }, {
          name: 'Theme',
          icon: 'palette',
          link: '/theme',
          todo: false
        }, {
          name: 'Toolbar',
          icon: 'web_asset',
          link: '/toolbar',
          todo: false
        }, {
          name: 'Typography',
          icon: 'format_size',
          link: '/typography',
          todo: false
        },
      ],
      widgetList: [
        {
          name: 'Hint List',
          icon: 'filter_list',
          link: '/hint_list',
          todo: false
        },

      ]
    };
    this.renderListItem = this.renderListItem.bind(this);
  }

  renderListItem(list) {
    return list.map(({name, icon, link, todo}, index) => {
      return (
        <TemporaryListItem
          key={`key-${index}-${icon}`}
          to={link}
          elementType={Link}
          className={(todo) ? 'todo-page' : ''}
        >
          <DrawerListItemDetail
            start
            icon
          >
            {icon}
          </DrawerListItemDetail>
          {name}
        </TemporaryListItem>
      )
    });
  }

  render() {
    const {
      isOpenMenu,
      handleOpen,
      handleClose
    } = this.props;
    const {catalogList, widgetList} = this.state;
    return (
      <DrawerTemporary
        open={isOpenMenu}
        onOpen={handleOpen}
        onClose={handleClose}
      >
        <TemporaryDrawer>
          <TemporaryHeader>
            <Theme
              primaryBg
              primaryPrimary
            >
              <TemporaryHeaderContent>Components</TemporaryHeaderContent>
            </Theme>
          </TemporaryHeader>
          <TemporaryContent
            className="demo-navigation"
          >
            {this.renderListItem(catalogList)}
            <ListDivider
              elementType="hr"
            />
            {this.renderListItem(widgetList)}
          </TemporaryContent>
        </TemporaryDrawer>
      </DrawerTemporary>
    )
  }
}