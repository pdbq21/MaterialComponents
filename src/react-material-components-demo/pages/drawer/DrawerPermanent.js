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
          name: 'DrawerPermanent',
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
          name: 'PermanentContent',
          property: [
            {
              name: 'elementType',
              type: 'string | React Component',
              required: 'no',
              defaultValue: 'div',
              description: 'задає тег елемента'
            },
          ]
        }, {
          name: 'PermanentListItem',
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
          name: 'PermanentList',
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
          name: 'PermanentToolbarSpacer',
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
          <TypographyDisplay size="1">Permanent Drawer</TypographyDisplay>
          <Example
            flex
            title="Permanent Above Toolbar"
            code={code.drawer.permanent.source1}
          >
            <iframe
              title="Permanent Above Toolbar"
              src="/drawer/permanent_above_toolbar"
              frameBorder="0"
              width='640px'
              height='420px'
            />
          </Example>
          <Example
            flex
            title="Permanent Below Toolbar"
            code={code.drawer.permanent.source2}
          >
            <iframe
              title="Permanent Below Toolbar"
              src="/drawer/permanent_below_toolbar"
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