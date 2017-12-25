/**
 * Created by ruslan on 20.06.17.
 */
import React, {Component} from 'react'
import {
  Elevation,
  TypographyDisplay,
} from '../../lib/index'
import {OriginalDoc, Footer, Example, Demo, Table, code} from '../../templates'

export default class DrawerPersistentPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      components: [
        {
          name: 'DrawerPersistent',
          property: [
            {
              name: 'elementType',
              type: 'string | React Component',
              required: 'no',
              defaultValue: 'aside',
              description: 'задає тег елемента'
            }, {
              name: 'onOpen',
              type: 'function',
              required: 'no',
              defaultValue: '-',
              description: '-'
            }, {
              name: 'onClose',
              type: 'function',
              required: 'no',
              defaultValue: '-',
              description: '-'
            },
          ]
        }, {
          name: 'PersistentContent',
          property: [
            {
              name: 'elementType',
              type: 'string | React Component',
              required: 'no',
              defaultValue: 'nav',
              description: 'задає тег елемента'
            },
          ]
        }, {
          name: 'PersistentListItem',
          property: [
            {
              name: 'elementType',
              type: 'string | React Component',
              required: 'no',
              defaultValue: 'a',
              description: 'задає тег елемента'
            }, {
              name: 'selected',
              type: 'bool',
              required: 'no',
              defaultValue: 'false',
              description: '-'
            },
          ]
        }, {
          name: 'DrawerListItemDetail',
          property: [
            {
              name: 'elementType',
              type: 'string | React Component',
              required: 'no',
              defaultValue: 'a',
              description: 'задає тег елемента'
            }, {
              name: 'icon',
              type: 'bool',
              required: 'no',
              defaultValue: 'false',
              description: '-'
            }, {
              name: 'start',
              type: 'bool',
              required: 'no',
              defaultValue: 'false',
              description: '-'
            }, {
              name: 'end',
              type: 'bool',
              required: 'no',
              defaultValue: 'false',
              description: '-'
            },
          ]
        }, {
          name: 'PersistentDrawer',
          property: [
            {
              name: 'elementType',
              type: 'string | React Component',
              required: 'no',
              defaultValue: 'nav',
              description: 'задає тег елемента'
            }
          ]
        }, {
          name: 'PersistentHeader',
          property: [
            {
              name: 'elementType',
              type: 'string | React Component',
              required: 'no',
              defaultValue: 'header',
              description: 'задає тег елемента'
            }
          ]
        }, {
          name: 'PersistentHeaderContent',
          property: [
            {
              name: 'elementType',
              type: 'string | React Component',
              required: 'no',
              defaultValue: 'div',
              description: 'задає тег елемента'
            }
          ]
        }, {
          name: 'PersistentToolbarSpacer',
          property: [
            {
              name: 'elementType',
              type: 'string | React Component',
              required: 'no',
              defaultValue: 'div',
              description: 'задає тег елемента'
            }
          ]
        },
      ],
    };
    this.renderTable = this.renderTable.bind(this);
  }

  renderTable() {
    const {components} = this.state;
    return components.map(({name, property}, index) => (<Table
          key={`key-table-${index}`}
          name={name}
          property={property}
        />
      )
    )
  }

  render() {
    return (
      <section>
        <Demo>

        </Demo>
        {this.renderTable()}
        <OriginalDoc
          name="Drawer"
          href="mdc-drawer"
        />

        <Elevation
          zSpace="2"
          className="demo-page-drawer_temporary"
        >
          <TypographyDisplay size="1">Persistent Drawer</TypographyDisplay>
          <Example
            flex
            title="Persistent with ToolbarSpacer"
            code={code.drawer.persistent.source1}
          >
            <iframe
              title="Persistent with ToolbarSpacer"
              src="/drawer/persistent_toolbar_spacer"
              frameBorder="0"
              width='640px'
              height='420px'
            />
          </Example>
          <Example
            flex
            title="Persistent with Header"
            code={code.drawer.persistent.source2}
          >
            <iframe
              title="Persistent with Header"
              src="/drawer/persistent_header"
              frameBorder="0"
              width='640px'
              height='420px'
            />
          </Example>

        </Elevation>
        <Footer/>
      </section>
    )
  }
}