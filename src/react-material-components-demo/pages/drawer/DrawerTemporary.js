import React, {Component} from 'react'
import {
  Elevation,
  TypographyDisplay,
} from '../../lib/index'
import {OriginalDoc, Footer, Example, Demo, Table, code} from '../../templates'
export default class DrawerTemporaryPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      components: [
        {
          name: 'DrawerTemporary',
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
          name: 'TemporaryContent',
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
          name: 'TemporaryListItem',
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
          name: 'TemporaryDrawer',
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
          name: 'TemporaryHeader',
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
          name: 'TemporaryHeaderContent',
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
          name: 'TemporaryToolbarSpacer',
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
    return components.map(({name, property}, index) => (
        <Table
          key={`key-table-${index}`}
          name={name}
          property={property}
        />
      )
    )
  }

  render() {
    return (
      <section
        className="content"
      >
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
          <TypographyDisplay size="1">Drawer Temporary</TypographyDisplay>

          <Example
            flex
            title="Temporary with ToolbarSpacer"
            code={code.drawer.temporary.source1}
          >
            <iframe
              src="/drawer/temporary_toolbar_spacer"
              frameBorder="0"
              width='320px'
              height='420px'
            />
          </Example>
          <Example
            flex
            title="Temporary with Header"
            code={code.drawer.temporary.source2}
          >
            <iframe
              src="/drawer/temporary_header"
              frameBorder="0"
              width='320px'
              height='420px'
            />
          </Example>

        </Elevation>
        <Footer/>
      </section>
    )
  }
}