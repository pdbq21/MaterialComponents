/**
 * Created by ruslan on 20.06.17.
 */
import React, {Component} from 'react'
import {
  DrawerPermanent,
  PermanentList,
  PermanentListItem,
  DrawerListItemDetail,
  PermanentContent,
  PermanentToolbarSpacer,
  Toolbar,
  ToolbarRow,
  ToolbarSection,
  ToolbarTitle,
  ToolbarMain,
  ToolbarIcon,
} from '../../lib/index'


export default class PermanentAboveToolbarPage extends Component {

  render() {
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
        <DrawerPermanent>
          <PermanentToolbarSpacer/>
          <PermanentContent>
            <PermanentList>
              <PermanentListItem selected>
                <DrawerListItemDetail icon start>inbox
                </DrawerListItemDetail>
                Inbox
              </PermanentListItem>
              <PermanentListItem>
                <DrawerListItemDetail icon start>star
                </DrawerListItemDetail>
                Star
              </PermanentListItem>
            </PermanentList>
          </PermanentContent>
        </DrawerPermanent>
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
                <ToolbarIcon>menu</ToolbarIcon>
                <ToolbarTitle>Permanent Drawer Above Toolbar</ToolbarTitle>
              </ToolbarSection>
            </ToolbarRow>
          </Toolbar>
          <ToolbarMain>
            <h2>Permanent Drawer Above Toolbar</h2>
            <p>
              Lorem...
            </p>
          </ToolbarMain>
        </div>
      </section>
    )
  }
}