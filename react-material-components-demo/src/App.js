/**
 * Created by ruslan on 18.05.17.
 */
import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {
    Button,
    Card,
    CardActionItem,
    CardActions,
    CardHorizontalBlock,
    CardMedia,
    CardMediaItem,
    CardPrimary,
    CardPrimarySubtitle,
    CardPrimaryTitle,
    CardSupportingText,
    Checkbox,
    CheckboxBackground,
    CheckboxCheckmark,
    CheckboxInput,
    CheckboxLabel,
    CheckboxMixedmark,
    CheckboxPath,
    Dialog,
    DialogBody,
    DialogFooter,
    DialogFooterButton,
    DialogHeader,
    DialogSurface,
    DialogTitle,
    DrawerListItemDetail,
    DrawerPermanent,
    DrawerPersistent,
    DrawerTemporary,
    Elevation,
    FAB,
    FABIcon,
    FormField,
    GridList,
    GridListTile,
    GridListTileContent,
    GridListTileIcon,
    GridListTilePrimary,
    GridListTileSecondary,
    GridListTileSupportText,
    GridListTileTitle,
    GridListTiles,
    Hint,
    HintElevation,
    HintInput,
    HintLabel,
    HintList,
    HintTags,
    HintTextfield,
    IconToggle,
    LayoutGrid,
    LayoutGridCell,
    List,
    ListDivider,
    ListGroup,
    ListGroupSubheader,
    ListItem,
    ListItemDetail,
    ListItemText,
    ListItemTextPrimary,
    ListItemTextSecondary,
    PermanentContent,
    PermanentList,
    PermanentListItem,
    PermanentToolbarSpacer,
    PersistentContent,
    PersistentDrawer,
    PersistentHeader,
    PersistentHeaderContent,
    PersistentListItem,
    PersistentToolbarSpacer,
    Radio,
    RadioInput,
    Ripple,
    Select,
    SelectItem,
    SelectItems,
    SelectMenu,
    SelectText,
    SimpleMenu,
    SimpleMenuAnchor,
    SimpleMenuItems,
    SimpleMenuListItem,
    Snackbar,
    SnackbarActionButton,
    SnackbarActionWrapper,
    SnackbarText,
    Switch,
    SwitchInput,
    SwitchLabel,
    TemporaryContent,
    TemporaryDrawer,
    TemporaryHeader,
    TemporaryHeaderContent,
    TemporaryListItem,
    TemporaryToolbarSpacer,
    Textfield,
    TextfieldHelptext,
    TextfieldInput,
    TextfieldLabel,
    Theme,
    Toolbar,
    ToolbarMain,
    ToolbarRow,
    ToolbarSection,
    ToolbarTitle,
    Typography,
    TypographyBody,
    TypographyCaption,
    TypographyDisplay,
    TypographyHeadline,
    TypographySubheading,
    TypographyTitle,
} from './lib'
import Header from './Header'
import Main from './main'
import Drawer from './Drawer'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpenMenu: false
        };

        this.handleShowMenu = this.handleShowMenu.bind(this);
        this.handleOpen = this.handleOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    handleShowMenu() {
        this.setState({
            isOpenMenu: true
        })
    }

    setOpen(isOpenMenu) {
        this.setState({isOpenMenu});
    }

    handleOpen() {
        this.setOpen(true);
    }

    handleClose() {
        this.setOpen(false);
    }

    render() {
        const {isOpenMenu} = this.state;
        return (
            <div    onClick={() => console.log(25)}        >
                <Header
                    handleShowMenu={this.handleShowMenu}
                />
                <Drawer
                    isOpenMenu={isOpenMenu}
                    handleOpen={this.handleOpen}
                    handleClose={this.handleClose}
                />
                <Main/>
            </div>
        )
    }
}

ReactDOM.render(
    <App/>, document.getElementById('root')
);