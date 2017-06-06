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
                    link: '/'
                },{
                    name: 'Button',
                    icon: 'add_circle',
                    link: '/button'
                },{
                    name: 'Card',
                    icon: 'dashboard',
                    link: '/card'
                },{
                    name: 'Checkbox',
                    icon: 'check_box',
                    link: '/checkbox'
                },{
                    name: 'Dialog',
                    icon: 'chat_bubble',
                    link: '/dialog'
                },{
                    name: 'Drawer Temporary',
                    icon: 'chrome_reader_mode',
                    link: '/drawer_temporary'
                },{
                    name: 'Drawer Persistent',
                    icon: 'chrome_reader_mode',
                    link: '/drawer_persistent'
                },{
                    name: 'Drawer Permanent Above Toolbar',
                    icon: 'chrome_reader_mode',
                    link: '/drawer_permanent_above_toolbar'
                },{
                    name: 'Drawer Permanent Below Toolbar',
                    icon: 'chrome_reader_mode',
                    link: '/drawer_permanent_below_toolbar'
                },{
                    name: 'Elevation',
                    icon: 'filter_none',
                    link: '/elevation'
                },{
                    name: 'FAB',
                    icon: 'add_circle',
                    link: '/fab'
                },{
                    name: 'Grid List',
                    icon: 'grid_on',
                    link: '/grid_list'
                },{
                    name: 'Icon',
                    icon: 'filter_hdr',
                    link: '/icon'
                },{
                    name: 'Icon Toggle',
                    icon: 'favorite',
                    link: '/icon_toggle'
                },{
                    name: 'Layout Grid',
                    icon: 'line_style',
                    link: '/layout_grid'
                },{
                    name: 'List',
                    icon: 'list',
                    link: '/list'
                },{
                    name: 'Radio',
                    icon: 'radio_button_checked',
                    link: '/radio'
                },{
                    name: 'Ripple',
                    icon: 'leak_add',
                    link: '/ripple'
                },{
                    name: 'Select',
                    icon: 'select_all',
                    link: '/select'
                },{
                    name: 'Simple Menu',
                    icon: 'menu',
                    link: '/simple_menu'
                },{
                    name: 'Snackbar',
                    icon: 'video_label',
                    link: '/snackbar'
                },{
                    name: 'Switch',
                    icon: 'toll',
                    link: '/switch'
                },{
                    name: 'Tabs',
                    icon: 'tab',
                    link: '/tabs'
                },{
                    name: 'Textfield',
                    icon: 'text_format',
                    link: '/textfield'
                },{
                    name: 'Theme',
                    icon: 'palette',
                    link: '/theme'
                },{
                    name: 'Toolbar',
                    icon: 'web_asset',
                    link: '/toolbar'
                },{
                    name: 'Typography',
                    icon: 'format_size',
                    link: '/typography'
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
                        {catalogList.map(({name, icon, link}, index) => {
                           return (
                                <TemporaryListItem
                                    key={`key-${index}-${icon}`}
                                    to={link}
                                    elementType={Link}

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