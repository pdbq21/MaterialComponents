/**
 * Created by ruslan on 20.06.17.
 */
import React, {Component} from 'react'
import {
  DrawerListItemDetail,
  DrawerPersistent,
  PersistentContent,
  PersistentDrawer,
  PersistentHeader,
  PersistentHeaderContent,
  PersistentListItem,
  Toolbar,
  ToolbarRow,
  ToolbarSection,
  ToolbarTitle,
  ToolbarMain,
  ToolbarIcon,
  Theme
} from '../../lib/index'


export default class PersistentHeaderPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };

    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  setOpen(open) {
    this.setState({open});
  }

  handleOpen() {
    this.setOpen(true);
  }

  handleClose() {
    this.setOpen(false);
  }

  render() {
    const {open} = this.state;
    return (
      <section
        style={{
          'display': 'flex',
          'flexDirection': 'row',
          'padding': 0,
          'margin': 0,
          'boxSizing': 'border-box',
          'height': '100%',
          'width': '100%',
        }}
      >
        <DrawerPersistent
          open={open}
          onOpen={this.handleOpen}
          onClose={this.handleClose}
        >
          <PersistentDrawer>
            <Theme
              primaryBg
            >
              <PersistentHeader>
                <PersistentHeaderContent>
                  Header here
                </PersistentHeaderContent>
              </PersistentHeader>
            </Theme>
            <PersistentContent>
              <PersistentListItem selected>
                <DrawerListItemDetail start>
                  inbox
                </DrawerListItemDetail>
                Inbox
              </PersistentListItem>
              <PersistentListItem >
                <DrawerListItemDetail start>
                  star
                </DrawerListItemDetail>
                Star
              </PersistentListItem>
            </PersistentContent>
          </PersistentDrawer>
        </DrawerPersistent>
        <div
          style={{
            'display': 'inline-flex',
            'flexDirection': 'column',
            'flexGrow': 1,
            'height': '100%',
            'boxSizing': 'border-box'
          }}
        >
          <Toolbar>
            <ToolbarRow>
              <ToolbarSection start>
                <ToolbarIcon
                  onClick={() => this.setState({
                    open: !open
                  })}
                >menu</ToolbarIcon>
                <ToolbarTitle>Persistent Drawer</ToolbarTitle>
              </ToolbarSection>
            </ToolbarRow>
          </Toolbar>
          <ToolbarMain>
            <h2>Persistent Drawer with Header</h2>
            <p>
              Click the menu icon above to open.
            </p>
          </ToolbarMain>
        </div>
      </section>
    )
  }
}