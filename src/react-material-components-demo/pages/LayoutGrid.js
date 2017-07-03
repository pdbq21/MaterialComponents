/**
 * Created by ruslan on 16.06.17.
 */
import React, {Component} from 'react'

import {
  LayoutGrid,
  LayoutGridCell,
  LayoutGridInner,
  Elevation,
  TypographyDisplay,
  FormField,
  Select,
  SelectMenu,
  SelectText,
  SelectItems,
  SelectItem,
} from '../lib'

import {OriginalDoc, Footer, Example, Demo, Table, code} from '../templates'

export default class LayoutGridPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      marginDesktop: '24px',
      gutterDesktop: '24px',
      marginTablet: '16px',
      gutterTablet: '16px',
      marginPhone: '16px',
      gutterPhone: '16px',
      select: [
        {
          name: 'Desktop Margin:',
          text: '24px'
        },
        {
          name: 'Desktop Gutter:',
          text: '24px'
        },
        {
          name: 'Tablet Margin:',
          text: '16px'
        },
        {
          name: 'Tablet Gutter:',
          text: '16px'
        },
        {
          name: 'Phone Margin:',
          text: '16px'
        },
        {
          name: 'Phone Gutter:',
          text: '16px'
        },
      ],
      examples: [
        {
          name: 'Grid of default wide (4 columns) items',
          source: 'source1',
          cell: [
            {
              text: 4
            },
            {
              text: 4
            },
            {
              text: 4
            },
          ]
        },
        {
          name: 'Grid of 1 column wide items',
          source: 'source2',
          cell: [
            {
              span: 1,
              text: 1
            },
            {
              span: 1,
              text: 1
            },
            {
              span: 1,
              text: 1
            },
            {
              span: 1,
              text: 1
            },
            {
              span: 1,
              text: 1
            },
            {
              span: 1,
              text: 1
            },
            {
              span: 1,
              text: 1
            },
            {
              span: 1,
              text: 1
            },
            {
              span: 1,
              text: 1
            },
            {
              span: 1,
              text: 1
            },
            {
              span: 1,
              text: 1
            },
            {
              span: 1,
              text: 1
            },
          ]
        },
        {
          name: 'Grid of differently sized items',
          source: 'source3',
          cell: [
            {
              span: 6,
              text: 6
            },
            {
              span: 4,
              text: 4
            },
            {
              span: 2,
              text: 2
            }
          ]
        },
        {
          name: 'Grid of items with tweaks at different screen sizes',
          source: 'source4',
          cell: [
            {
              span: 6,
              table: 8,
              text: '6 (8 tablet)'
            },
            {
              span: 4,
              table: 6,
              text: '4 (6 tablet)'
            },
            {
              span: 2,
              phone: 4,
              text: '2 (4 phone)'
            }
          ]
        },
        {
          name: 'Grid nested within parent grid cell',
          source: 'source5',
          cell: [
            {
              span: 4,
              text: '4',
              child: [
                {
                  cell: [
                    {
                      span: 4,
                      text: 'Child 4',
                    },
                    {
                      span: 4,
                      text: 'Child 4',
                    },
                    {
                      span: 4,
                      text: 'Child 4',
                    }
                  ]
                },
                {
                  span: 4,
                  text: 'Parent 4',
                }
              ]
            },
            {
              span: 4,
              text: '4'
            },
            {
              span: 4,
              text: '4'
            }
          ]
        },
        {
          name: 'Grid with max width (1280px) and center alignment',
          source: 'source6',
          cell: [
            {
              span: 4,
              text: '4',
              position: 'middle'
            },
            {
              span: 4,
              text: '4',
              position: 'middle'
            },
            {
              span: 4,
              text: '4',
              position: 'middle'
            }
          ]
        },
        {
          name: 'Grid with max width (1280px) and left alignment',
          source: 'source7',
          cell: [
            {
              span: 4,
              text: '4'
            },
            {
              span: 4,
              text: '4'
            },
            {
              span: 4,
              text: '4'
            }
          ]
        },
      ],
      components: [
        {
          name: 'LayoutGrid',
          property: [
            {
              name: 'elementType',
              type: 'string | React Component',
              required: 'no',
              defaultValue: 'div',
              description: 'задає тег елемента'
            },
            {
              name: 'gutter',
              type: 'string',
              required: 'no',
              defaultValue: '24px',
              description: '8px | 16px | 24px | 40px'
            }, {
              name: 'margin',
              type: 'string',
              required: 'no',
              defaultValue: '24px',
              description: '8px | 16px | 24px | 40px'
            }, {
              name: 'marginDesktop',
              type: 'string',
              required: 'no',
              defaultValue: '24px',
              description: '8px | 16px | 24px | 40px'
            }, {
              name: 'gutterDesktop',
              type: 'string',
              required: 'no',
              defaultValue: '24px',
              description: '8px | 16px | 24px | 40px'
            }, {
              name: 'marginTablet',
              type: 'string',
              required: 'no',
              defaultValue: '16px',
              description: '8px | 16px | 24px | 40px'
            }, {
              name: 'gutterTablet',
              type: 'string',
              required: 'no',
              defaultValue: '16px',
              description: '8px | 16px | 24px | 40px'
            }, {
              name: 'marginPhone',
              type: 'string',
              required: 'no',
              defaultValue: '16px',
              description: '8px | 16px | 24px | 40px'
            }, {
              name: 'gutterPhone',
              type: 'string',
              required: 'no',
              defaultValue: '16px',
              description: '8px | 16px | 24px | 40px'
            },
          ]
        },
        {
          name: 'LayoutGridInner',
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
        {
          name: 'LayoutGridCell',
          property: [
            {
              name: 'elementType',
              type: 'string | React Component',
              required: 'no',
              defaultValue: 'div',
              description: 'задає тег елемента'
            },
            {
              name: 'columns',
              type: 'string',
              required: 'no',
              defaultValue: `''`,
              description: '1..12'
            }, {
              name: 'desktop',
              type: 'string',
              required: 'no',
              defaultValue: `''`,
              description: '1..12'
            }, {
              name: 'tablet',
              type: 'string',
              required: 'no',
              defaultValue: `''`,
              description: '1..12'
            }, {
              name: 'phone',
              type: 'string',
              required: 'no',
              defaultValue: `''`,
              description: '1..12'
            }, {
              name: 'order',
              type: 'string',
              required: 'no',
              defaultValue: `''`,
              description: '1..12'
            }, {
              name: 'position',
              type: 'string',
              required: 'no',
              defaultValue: `''`,
              description: 'top | middle | bottom'
            }
          ]
        }
      ],
    };
    this.renderTable = this.renderTable.bind(this);
    this.renderExapmle = this.renderExapmle.bind(this);
    this.renderSelect = this.renderSelect.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
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

  renderExapmle() {
    const {
      marginDesktop,
      gutterDesktop,
      marginTablet,
      gutterTablet,
      marginPhone,
      gutterPhone,
      examples
    } = this.state;

    return examples.map(({source, name, cell}, index) => (
      <Example
        key={`key-demo_example-${index}`}
        title={name}
        code={code.layoutGrid[source]}
      >
        <LayoutGrid
          style={{
            'backgroundColor': '#DDDDDD',
            'maxWidth': (index >= examples.length - 2) ? '1280px' : null,
            'marginLeft': (index === examples.length - 1) ? 0 : null,
            'marginRight': (index === examples.length - 1) ? 'auto' : null
          }}
          marginDesktop={marginDesktop}
          gutterDesktop={gutterDesktop}
          marginTablet={marginTablet}
          gutterTablet={gutterTablet}
          marginPhone={marginPhone}
          gutterPhone={gutterPhone}
        >
          <LayoutGridInner>
            {cell.map(({span, text, child, table, phone, position}, index) => (
              <LayoutGridCell
                key={`key-demo_example-cell-${index}`}
                columns={(span) ? span : null}
                tablet={(table) ? table : null}
                phone={(phone) ? phone : null}
                position={(position) ? position : null}
                style={{
                  'boxSizing': 'border-box',
                  'height': '200px',
                  'padding': '8px',
                  'color': 'white',
                  'fontSize': '1.5em',
                  'backgroundColor': '#666666'
                }}
              >
                {(child) ?
                  child.map(({cell, span, text}, index) => (
                    (cell) ? <LayoutGridInner
                      key={`key-demo_example-cell-grid-${index}`}
                    >
                      {cell.map(({text, span}, index) => (
                        <LayoutGridCell
                          key={`key-demo_example-cell-grid-cell-${index}`}
                          columns={(span) ? span : null}
                        >
                          <span>{text}</span>
                        </LayoutGridCell>
                      ))}
                    </LayoutGridInner>
                      : <span
                      key={`key-demo_example-cell-grid-${index}`}
                    >{text}</span>
                  )) : <span>{text}</span>
                }
              </LayoutGridCell>
            ))}
          </LayoutGridInner>
        </LayoutGrid>
      </Example>
    ))
  }

  handleSelect(value, name) {
    let option;
    if (name === 'Desktop Margin:') {
      option = 'marginDesktop';
    } else if (name === 'Desktop Gutter:') {
      option = 'gutterDesktop';
    } else if (name === 'Tablet Margin:') {
      option = 'marginTablet';
    } else if (name === 'Tablet Gutter:') {
      option = 'gutterTablet';
    } else if (name === 'Phone Margin:') {
      option = 'marginPhone';
    } else if (name === 'Phone Gutter:') {
      option = 'gutterPhone';
    }
    this.setState({
      [option]: value
    })
  }

  renderSelect() {
    const {
      select
    } = this.state;
    return select.map(({name, text}, index) => (
        <FormField
          key={`key-select-${index}`}
          style={{
            'margin': '.5em'
          }}
        >
          {name}
          <Select
            onSelected={({item}) => this.handleSelect(item.innerText, name)}
          >
            <SelectText>{text}</SelectText>
            <SelectMenu>
              <SelectItems>
                <SelectItem>
                  8px
                </SelectItem>
                <SelectItem>
                  16px
                </SelectItem>
                <SelectItem>
                  24px
                </SelectItem>
                <SelectItem>
                  40px
                </SelectItem>
              </SelectItems>
            </SelectMenu>
          </Select>
        </FormField>
      )
    )
  }

  render() {

    return (
      <section
        className="content"
      >
        <Demo>
          <LayoutGrid
            style={{
              'backgroundColor': '#DDDDDD',
            }}
          >
            <LayoutGridInner>
              <LayoutGridCell
                style={{
                  'boxSizing': 'border-box',
                  'height': '4em',
                  'padding': '8px',
                  'color': 'white',
                  'fontSize': '1.5em',
                  'backgroundColor': '#666666'
                }}
              />
              <LayoutGridCell
                style={{
                  'boxSizing': 'border-box',
                  'height': '4em',
                  'padding': '8px',
                  'color': 'white',
                  'fontSize': '1.5em',
                  'backgroundColor': '#666666'
                }}
              />
              <LayoutGridCell
                style={{
                  'boxSizing': 'border-box',
                  'height': '4em',
                  'padding': '8px',
                  'color': 'white',
                  'fontSize': '1.5em',
                  'backgroundColor': '#666666'
                }}
              />
            </LayoutGridInner>
          </LayoutGrid>
        </Demo>
        {this.renderTable()}
        <OriginalDoc
          name="Layout Grid"
          href="mdc-layout-grid"
        />
        <Elevation
          zSpace="2"
          className="demo-page-layout_grid"
        >
          <TypographyDisplay size="1">Layout Grid</TypographyDisplay>
          <Elevation
            style={{
              'display': 'flex',
              'flexFlow': 'column nowrap',
            }}
          >
            {this.renderSelect()}
          </Elevation>
          {this.renderExapmle()}
        </Elevation>
        <Footer/>
      </section>
    )
  }
}