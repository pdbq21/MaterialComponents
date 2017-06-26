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
  TypographyBody,
  FormField,
  Select,
  SelectMenu,
  SelectText,
  SelectItems,
  SelectItem,
} from '../lib'

import Example from '../templates/Example'

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
          name: 'Button',
          property: [
            {
              name: 'elementType',
              type: 'string | React Component',
              required: 'no',
              defaultValue: 'div',
              description: 'задає тег елемента'
            },
            {
              name: 'primary',
              type: 'bool',
              required: 'no',
              defaultValue: 'false',
              description: 'кнопка з кольором primary'
            }, {
              name: 'accent',
              type: 'bool',
              required: 'no',
              defaultValue: 'false',
              description: 'кнопка з кольором accent'
            }, {
              name: 'compact',
              type: 'bool',
              required: 'no',
              defaultValue: 'false',
              description: 'кнопка з типом compact'
            }, {
              name: 'dense',
              type: 'bool',
              required: 'no',
              defaultValue: 'false',
              description: 'кнопка з типом dense'
            }, {
              name: 'raised',
              type: 'bool',
              required: 'no',
              defaultValue: 'false',
              description: 'кнопка з типом raised'
            }, {
              name: 'ripple',
              type: 'bool',
              required: 'no',
              defaultValue: 'false',
              description: 'додає Ripple ефект'
            }, {
              name: 'disabled',
              type: 'bool',
              required: 'no',
              defaultValue: 'false',
              description: 'кнопка не активна. працює якщо тип кнопки button'
            },
          ]
        }
      ],
      used: {
        source1: ``,
        source2: ``,
        source3: ``,
        source4: ``,
        source5: ``,
        source6: ``,
        source7: ``,
      }
    };
    this.renderTable = this.renderTable.bind(this);
    this.renderExapmle = this.renderExapmle.bind(this);
    this.renderSelect = this.renderSelect.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
  }

  renderTable() {
    const {components} = this.state;
    return components.map((item, index) => (<Elevation
          zSpace="2"
          key={`key-table-${index}`}
        >
          <TypographyDisplay size="1">{item.name}</TypographyDisplay>
          <table className="table-props">
            <thead>
            <tr>
              <th>Property</th>
              <th>Type</th>
              <th>Default</th>
              <th>Required</th>
              <th>Description</th>
            </tr>
            </thead>
            <tbody>
            {item.property.map((prop, index) => (
              <tr key={`key-table-tr-${index}`}>
                <td><code>{prop.name}</code></td>
                <td><code>{prop.type}</code></td>
                <td>{prop.defaultValue}</td>
                <td>{prop.required}</td>
                <td>{prop.description}</td>
              </tr>
            ))}
            </tbody>
          </table>
        </Elevation>
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
        code={this.state.used[source]}
      >
        <LayoutGrid
          style={{
            'backgroundColor': '#DDDDDD'
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
                  'backgroundColor': '#666666',
                  'height': '200px',
                  'padding': '8px',
                  'color': 'white',
                  'fontSize': '1.5em',
                }}
              >
                {(child) ?
                  child.map(({cell, span, text}, index) => (
                    <LayoutGrid
                      key={`key-demo_example-cell-grid-${index}`}
                    >
                      <LayoutGridInner>
                        {(cell) ?
                          cell.map(({text, span}, index) => (
                            <LayoutGridCell
                              key={`key-demo_example-cell-grid-cell-${index}`}
                              columns={(span) ? span : null}
                            >
                              <span>{text}</span>
                            </LayoutGridCell>
                          )) : <span>{text}</span>}
                      </LayoutGridInner>
                    </LayoutGrid>
                  )) : text
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
        <Elevation
          zSpace="2"
          style={{
            'backgroundColor': 'rgba(0, 0, 0, 0.05)',
            'minHeight': '360px',
            'display': 'flex',
            'alignItems': 'center',
            'justifyContent': 'center',
            'flexFlow': 'row nowrap',
            'height': '360px',
          }}
        >
        </Elevation>
        {this.renderTable()}
        <Elevation
          zSpace="2"
          style={{
            'minHeight': '10em',
            'display': 'flex',
            'alignItems': 'center',
            'flexDirection': 'column'
          }}
        >
          <TypographyDisplay size="1">Original documentation</TypographyDisplay>
          <TypographyBody>
            This component is based on the MDC Button, you can refer to its documentation <a
            href="https://github.com/material-components/material-components-web/tree/master/packages/mdc-button"
          >here</a>.
          </TypographyBody>
        </Elevation>
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
        <Elevation
          zSpace="2"
          style={{
            'backgroundColor': 'rgba(0, 0, 0, 0.05)',
            'minHeight': '50px',
            'display': 'flex',
            'alignItems': 'center',
            'justifyContent': 'center',
            'marginTop': '1em'
          }}
        >
          github
        </Elevation>
      </section>
    )
  }
}