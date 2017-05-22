/**
 * Created by ruslan on 17.05.17.
 */
import React, {Component} from 'react'
import {
    Button,
    Elevation,
    Ripple,
    CardHorizontalBlock,
    CardMedia,
    CardMediaItem,
    CardSupportingText,
    CardPrimary,
    CardPrimaryTitle,
    CardPrimarySubtitle,
    CardActions,
    CardActionItem,
    Typography,
    TypographyDisplay,
    TypographyHeadline,
    TypographyTitle,
    TypographySubheading,
    TypographyBody,
    TypographyCaption,
    LayoutGrid,
    LayoutGridCell,
    List,
    ListGroup,
    ListItem,
    ListGroupSubheader,
    ListDivider,
    ListItemText,
    ListItemTextPrimary,
    ListItemTextSecondary,
    ListItemDetail,
    FAB,
    FABIcon,
    Toolbar,
    ToolbarRow,
    ToolbarSection,
    ToolbarTitle,
    ToolbarMain,
    Switch,
    SwitchInput,
    SwitchLabel,
    Textfield,
    TextfieldInput,
    TextfieldLabel,
    TextfieldHelptext,
    FormField,
    Radio,
    RadioInput,
    Checkbox,
    CheckboxLabel,
    CheckboxBackground,
    CheckboxCheckmark,
    CheckboxInput,
    CheckboxMixedmark,
    CheckboxPath,
    DrawerTemporary,
    TemporaryContent,
    TemporaryToolbarSpacer,
    TemporaryDrawer,
    TemporaryHeader,
    TemporaryHeaderContent,
    TemporaryListItem,
    DrawerPermanent,
    PermanentContent,
    PermanentList,
    PermanentListItem,
    PermanentToolbarSpacer,
    DrawerListItemDetail,
    DrawerPersistent,
    PersistentContent,
    PersistentToolbarSpacer,
    PersistentDrawer,
    PersistentHeader,
    PersistentHeaderContent,
    PersistentListItem,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
    DialogFooterButton,
    DialogSurface,
    DialogTitle,
    GridList,
    GridListTiles,
    GridListTile,
    GridListTilePrimary,
    GridListTileContent,
    GridListTileSecondary,
    GridListTileTitle,
    GridListTileSupportText,
    GridListTileIcon,
    Snackbar,
    SnackbarText,
    SnackbarActionWrapper,
    SnackbarActionButton,
    SimpleMenu,
    SimpleMenuItems,
    SimpleMenuListItem,
    SimpleMenuAnchor,
    IconToggle,
    Select,
    SelectMenu,
    SelectText,
    SelectItems,
    SelectItem,
    Hint,
    HintElevation,
    HintTextfield,
    HintInput,
    HintLabel,
    HintList,
    HintTags
} from '../../app/index'

export default class App extends Component{
    render(){
        return(
            <div>
                <Toolbar
                    onChange={this.handleChange}
                    fixed
                >
                    <ToolbarRow>
                        <ToolbarSection start>
                            <a className="material-icons">menu</a>
                            <ToolbarTitle>Title</ToolbarTitle>
                        </ToolbarSection>
                        <ToolbarSection end>
                            <a className="material-icons" aria-label="Download" alt="Download">file_download</a>
                            <a className="material-icons" aria-label="Print this page"
                               alt="Print this page">print</a>
                            <a className="material-icons" aria-label="Bookmark this page" alt="Bookmark this page">bookmark</a>
                        </ToolbarSection>
                    </ToolbarRow>
                </Toolbar>
                <ToolbarMain fixed>
                    <h3>Is Top</h3>
                    <p>
                        Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis
                        egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante.
                        Donec
                        eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Pellentesque
                        habitant
                        morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum
                        tortor
                        quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet
                        quam
                        egestas semper. Aenean ultricies mi vitae est.
                    </p>
                    <p>
                        Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis
                        egestas.
                        Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu
                        libero
                        sit amet quam egestas semper. Aenean ultricies mi vitae est. Pellentesque habitant morbi
                        tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor
                        quam,
                        feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam
                        egestas
                        semper. Aenean ultricies mi vitae est.
                    </p>
                </ToolbarMain>
            </div>
        )
    }
}