/**
 * Created by ruslan on 18.05.17.
 */
import React, {Component} from 'react'
import {
    Button,
    Card,
    Checkbox,
    Dialog,
    DrawerListItemDetail,
    DrawerPermanent,
    DrawerPersistent,
    DrawerTemporary,
    Elevation,
    FAB,
    FormField,
    GridList,
    Hint,
    IconToggle,
    LayoutGrid,
    List,
    PersistentDrawer,
    Radio,
    Ripple,
    Select,
    SimpleMenu,
    Snackbar,
    Switch,
    TemporaryContent,
    TemporaryDrawer,
    TemporaryHeader,
    TemporaryHeaderContent,
    TemporaryListItem,
    Textfield,
    Theme,
    Toolbar,
    Typography,
} from './lib'

export default class Drawer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            catalogList: [
                {
                    name: 'Home',
                    icon: 'home'
                },{
                    name: 'Button',
                    icon: 'add_circle'
                },{
                    name: 'Card',
                    icon: 'dashboard'
                },{
                    name: 'Checkbox',
                    icon: 'check_box'
                },{
                    name: 'Dialog',
                    icon: 'chat_bubble'
                },{
                    name: 'Drawer Temporary',
                    icon: 'chrome_reader_mode'
                },{
                    name: 'Drawer Persistent',
                    icon: 'chrome_reader_mode'
                },{
                    name: 'Drawer Permanent Above Toolbar',
                    icon: 'chrome_reader_mode'
                },{
                    name: 'Drawer Permanent Below Toolbar',
                    icon: 'chrome_reader_mode'
                },{
                    name: 'Elevation',
                    icon: 'filter_none'
                },{
                    name: 'FAB',
                    icon: 'add_circle'
                },{
                    name: 'Grid List',
                    icon: 'grid_on'
                },{
                    name: 'Icon',
                    icon: 'filter_hdr'
                },{
                    name: 'Icon Toggle',
                    icon: 'favorite'
                },{
                    name: 'Layout Grid',
                    icon: 'line_style'
                },{
                    name: 'List',
                    icon: 'list'
                },{
                    name: 'Radio',
                    icon: 'radio_button_checked'
                },{
                    name: 'Ripple',
                    icon: 'leak_add'
                },{
                    name: 'Select',
                    icon: 'select_all'
                },{
                    name: 'SimpleMenu',
                    icon: 'menu'
                },{
                    name: 'Snackbar',
                    icon: 'video_label'
                },{
                    name: 'Switch',
                    icon: 'toll'
                },{
                    name: 'Tabs',
                    icon: 'tab'
                },{
                    name: 'Textfield',
                    icon: 'text_format'
                },{
                    name: 'Theme',
                    icon: 'palette'
                },{
                    name: 'Toolbar',
                    icon: 'web_asset'
                },{
                    name: 'Typography',
                    icon: 'format_size'
                },

            ]
        };
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
                    <TemporaryHeader>
                        <Theme
                            primaryBg
                            primaryPrimary
                        >
                            <TemporaryHeaderContent>Components</TemporaryHeaderContent>
                        </Theme>
                    </TemporaryHeader>
                    <TemporaryContent>
                        {catalogList.map(({name, icon}, index) => {
                            return (
                                <TemporaryListItem
                                    key={`key-${index}-${Date.now()}`}
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