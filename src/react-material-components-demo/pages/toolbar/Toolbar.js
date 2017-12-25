/**
 * Created by ruslan on 19.06.17.
 */
import React, {Component} from 'react'
import {
  Toolbar,
  ToolbarRow,
  ToolbarSection,
  ToolbarIcon,
  ToolbarTitle,
  Elevation,
  TypographyDisplay,
} from '../../lib'
import {OriginalDoc, Footer, Example, Demo, Table, code} from '../../templates'

export default class ToolbarPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      components: [
        {
          name: 'Toolbar',
          property: [
            {
              name: 'elementType',
              type: 'string | React Component',
              required: 'no',
              defaultValue: 'header',
              description: 'задає тег елемента'
            },
            {
              name: 'onChange',
              type: 'function',
              required: 'no',
              defaultValue: '-',
              description: '-'
            }, {
              name: 'fixed',
              type: 'bool',
              required: 'no',
              defaultValue: 'false',
              description: '-'
            }, {
              name: 'waterfall',
              type: 'bool',
              required: 'no',
              defaultValue: 'false',
              description: '-'
            }, {
              name: 'lastRow',
              type: 'bool',
              required: 'no',
              defaultValue: 'false',
              description: '-'
            }, {
              name: 'defaultBehavior',
              type: 'bool',
              required: 'no',
              defaultValue: 'false',
              description: '-'
            }, {
              name: 'flexible',
              type: 'bool',
              required: 'no',
              defaultValue: 'false',
              description: '-'
            },
          ]
        }, {
          name: 'ToolbarRow',
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
          name: 'ToolbarSection',
          property: [
            {
              name: 'elementType',
              type: 'string | React Component',
              required: 'no',
              defaultValue: 'section',
              description: 'задає тег елемента'
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
            }, {
              name: 'shrink',
              type: 'bool',
              required: 'no',
              defaultValue: 'false',
              description: '-'
            },
          ]
        }, {
          name: 'ToolbarTitle',
          property: [
            {
              name: 'elementType',
              type: 'string | React Component',
              required: 'no',
              defaultValue: 'span',
              description: 'задає тег елемента'
            }
          ]
        }, {
          name: 'ToolbarMain',
          property: [
            {
              name: 'elementType',
              type: 'string | React Component',
              required: 'no',
              defaultValue: 'main',
              description: 'задає тег елемента'
            }, {
              name: 'fixed',
              type: 'bool',
              required: 'no',
              defaultValue: 'false',
              description: '-'
            }
          ]
        }, {
          name: 'ToolbarIcon',
          property: [
            {
              name: 'elementType',
              type: 'string | React Component',
              required: 'no',
              defaultValue: 'i',
              description: 'задає тег елемента'
            }, {
              name: 'menu',
              type: 'bool',
              required: 'no',
              defaultValue: 'false',
              description: '-'
            }
          ]
        },
      ],
    };
    this.renderTable = this.renderTable.bind(this);
    this.handleViewCode = this.handleViewCode.bind(this);
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

  handleViewCode(source) {
    this.setState({
      isActive: {
        ...this.state.isActive,
        [source]: !this.state.isActive[source]
      }
    })
  }

  render() {
    return (
      <section
        className="content"
      >
        <Demo>
          <Toolbar
            style={{
              'width': '50%'
            }}
          >
            <ToolbarRow>
              <ToolbarSection start>
                <ToolbarIcon menu>menu</ToolbarIcon>
                <ToolbarTitle>Toolbar</ToolbarTitle>
              </ToolbarSection>
              <ToolbarSection end>
                <ToolbarIcon aria-label="Download" alt="Download">file_download</ToolbarIcon>
                <ToolbarIcon aria-label="Print this page" alt="Print this page">print</ToolbarIcon>
                <ToolbarIcon aria-label="Bookmark this page"
                             alt="Bookmark this page">more_vert</ToolbarIcon>
              </ToolbarSection>
            </ToolbarRow>
          </Toolbar>
        </Demo>
        {this.renderTable()}
        <OriginalDoc
          name="Toolbar"
          href="mdc-toolbar"
        />


        <Elevation
          zSpace="2"
          className="demo-page-toolbar"
        >
          <TypographyDisplay size="1">Toolbar</TypographyDisplay>

          <Example
            flex
            title="Normal Toolbar"
            code={code.toolbar.source1}
          >
            <iframe
              title="Normal Toolbar"
              src="/toolbar_normal"
              frameBorder="0"
              width='320px'
              height='420px'
            />
          </Example>
          <Example
            flex
            title="Fixed Toolbar"
            code={code.toolbar.source2}
          >
            <iframe
              title="Fixed Toolbar"
              src="/toolbar_fixed"
              frameBorder="0"
              width='320px'
              height='420px'
            />
          </Example>
          <Example
            flex
            title="Waterfall Toolbar"
            code={code.toolbar.source3}
          >
            <iframe
              title="Waterfall Toolbar"
              src="/toolbar_waterfall"
              frameBorder="0"
              width='320px'
              height='420px'
            />
          </Example>
          <Example
            flex
            title="Default Flexible Toolbar"
            code={code.toolbar.source4}
          >
            <iframe
              title="Default Flexible Toolbar"
              src="/toolbar_flexible"
              frameBorder="0"
              width='320px'
              height='420px'
            />
          </Example>
          <Example
            flex
            title="Waterfall Flexible Toolbar"
            code={code.toolbar.source5}
          >
            <iframe
              title="Waterfall Flexible Toolbar"
              src="/toolbar_wf"
              frameBorder="0"
              width='320px'
              height='420px'
            />
          </Example>
          <Example
            flex
            title="Waterfall Toolbar Fix Last Row"
            code={code.toolbar.source6}
          >
            <iframe
              title="Waterfall Toolbar Fix Last Row"
              src="/toolbar_wflr"
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
