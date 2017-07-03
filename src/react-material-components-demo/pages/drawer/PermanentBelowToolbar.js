/**
 * Created by ruslan on 20.06.17.
 */
import React, {Component} from 'react'
import {
  DrawerPermanent,
  PermanentList,
  PermanentListItem,
  DrawerListItemDetail,
  Toolbar,
  ToolbarRow,
  ToolbarSection,
  ToolbarTitle,
  ToolbarMain,
  ToolbarIcon,
} from '../../lib/index'


export default class PermanentBelowToolbarPage extends Component {

  render() {
    return (
      <section
        style={{
          'display': 'flex',
          'flexDirection': 'column',
          'padding': 0,
          'margin': 0,
          'boxSizing': 'border-box',
          'minHeight': '100%',
        }}
      >
        <Toolbar>
          <ToolbarRow>
            <ToolbarSection start>
              <ToolbarIcon>menu</ToolbarIcon>
              <ToolbarTitle>Permanent Drawer Below Toolbar</ToolbarTitle>
            </ToolbarSection>
          </ToolbarRow>
        </Toolbar>
        <div
          style={{
            'display': 'flex',
            'flex': '1 1 auto'
          }}
        >
          <DrawerPermanent>
            <PermanentList>
              <PermanentListItem selected>
                <DrawerListItemDetail icon start>
                  inbox
                </DrawerListItemDetail>
                Inbox
              </PermanentListItem>
              <PermanentListItem>
                <DrawerListItemDetail icon start>
                  star
                </DrawerListItemDetail>
                Star
              </PermanentListItem>
            </PermanentList>
          </DrawerPermanent>
          <ToolbarMain>
            <h2>Permanent Drawer Below Toolbar</h2>
            <p>
              Lorem...
            </p>
          </ToolbarMain>
        </div>
      </section>
    )
  }
}