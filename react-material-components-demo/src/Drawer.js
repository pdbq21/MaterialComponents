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
                },{
                    name: 'Button',
                    icon: 'add_circle',
                    link: '/button',
                    todo: false
                },{
                    name: 'Card',
                    icon: 'dashboard',
                    link: '/card',
                    todo: false
                },{
                    name: 'Checkbox',
                    icon: 'check_box',
                    link: '/checkbox',
                    todo: false
                },{
                    name: 'Dialog',
                    icon: 'chat_bubble',
                    link: '/dialog',
                    todo: true
                },{
                    name: 'Drawer Temporary',
                    icon: 'chrome_reader_mode',
                    link: '/drawer_temporary',
                    todo: true
                },{
                    name: 'Drawer Persistent',
                    icon: 'chrome_reader_mode',
                    link: '/drawer_persistent',
                    todo: true
                },{
                    name: 'Drawer Permanent Above Toolbar',
                    icon: 'chrome_reader_mode',
                    link: '/drawer_permanent_above_toolbar',
                    todo: true
                },{
                    name: 'Drawer Permanent Below Toolbar',
                    icon: 'chrome_reader_mode',
                    link: '/drawer_permanent_below_toolbar',
                    todo: true
                },{
                    name: 'Elevation',
                    icon: 'filter_none',
                    link: '/elevation',
                    todo: false
                },{
                    name: 'FAB',
                    icon: 'add_circle',
                    link: '/fab',
                    todo: true
                },{
                    name: 'Grid List',
                    icon: 'grid_on',
                    link: '/grid_list',
                    todo: true
                },{
                    name: 'Icon',
                    icon: 'filter_hdr',
                    link: '/icon',
                    todo: true
                },{
                    name: 'Icon Toggle',
                    icon: 'favorite',
                    link: '/icon_toggle',
                    todo: true
                },{
                    name: 'Layout Grid',
                    icon: 'line_style',
                    link: '/layout_grid',
                    todo: true
                },{
                    name: 'List',
                    icon: 'list',
                    link: '/list',
                    todo: true
                },{
                    name: 'Radio',
                    icon: 'radio_button_checked',
                    link: '/radio',
                    todo: true
                },{
                    name: 'Ripple',
                    icon: 'leak_add',
                    link: '/ripple',
                    todo: true
                },{
                    name: 'Select',
                    icon: 'select_all',
                    link: '/select',
                    todo: true
                },{
                    name: 'Simple Menu',
                    icon: 'menu',
                    link: '/simple_menu',
                    todo: true
                },{
                    name: 'Snackbar',
                    icon: 'video_label',
                    link: '/snackbar',
                    todo: true
                },{
                    name: 'Switch',
                    icon: 'toll',
                    link: '/switch',
                    todo: true
                },{
                    name: 'Tabs',
                    icon: 'tab',
                    link: '/tabs',
                    todo: true
                },{
                    name: 'Textfield',
                    icon: 'text_format',
                    link: '/textfield',
                    todo: true
                },{
                    name: 'Theme',
                    icon: 'palette',
                    link: '/theme',
                    todo: true
                },{
                    name: 'Toolbar',
                    icon: 'web_asset',
                    link: '/toolbar',
                    todo: true
                },{
                    name: 'Typography',
                    icon: 'format_size',
                    link: '/typography',
                    todo: true
                },

            ]
        };
        this.handleMenuItem = this.handleMenuItem.bind(this)
    }
    handleMenuItem(e, name){
        console.log(e, name)
    }
    render() {
        const {
            isOpenMenu,
            handleOpen,
            handleClose
        } = this.props;
        const {catalogList} = this.state;
        return (
            <DrawerTemporary
                open={isOpenMenu}
                onOpen={handleOpen}
                onClose={handleClose}
            >
                <TemporaryDrawer>
                    <TemporaryHeader

                    >
                        <Theme
                            primaryBg
                            primaryPrimary
                        >
                            <TemporaryHeaderContent>Components</TemporaryHeaderContent>
                        </Theme>
                    </TemporaryHeader>
                    <TemporaryContent
                    >
                        {catalogList.map(({name, icon, link, todo}, index) => {
                           return (
                                <TemporaryListItem
                                    key={`key-${index}-${icon}`}
                                    to={link}
                                    elementType={Link}
                                    className={(todo)? 'todo-page' : ''}
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
                        })
                        }
                    </TemporaryContent>
                </TemporaryDrawer>
            </DrawerTemporary>
        )
    }
}