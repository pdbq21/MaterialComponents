/**
 * Created by ruslan on 16.06.17.
 */
import React, {Component} from 'react'
import {
  List,
  ListGroup,
  ListItem,
  ListGroupSubheader,
  ListDivider,
  ListItemText,
  ListItemTextPrimary,
  ListItemTextSecondary,
  ListItemDetail,
  Elevation,
  TypographyDisplay,
} from '../lib'
import {OriginalDoc, Footer, Example, Demo, Table, code} from '../templates'

export default class ListPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      components: [
        {
          name: 'List',
          property: [
            {
              name: 'elementType',
              type: 'string | React Component',
              required: 'no',
              defaultValue: 'ul',
              description: 'задає тег елемента'
            }, {
              name: 'dense',
              type: 'bool',
              required: 'no',
              defaultValue: 'false',
              description: '-'
            }, {
              name: 'twoLine',
              type: 'bool',
              required: 'no',
              defaultValue: 'false',
              description: '-'
            }, {
              name: 'avatar',
              type: 'bool',
              required: 'no',
              defaultValue: 'false',
              description: '-'
            }
          ]
        }, {
          name: 'ListGroup',
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
          name: 'ListItem',
          property: [
            {
              name: 'elementType',
              type: 'string | React Component',
              required: 'no',
              defaultValue: 'li',
              description: 'задає тег елемента'
            }, {
              name: 'ripple',
              type: 'bool',
              required: 'no',
              defaultValue: 'false',
              description: 'надає Ripple ефект'
            },
          ]
        }, {
          name: 'ListGroupSubheader',
          property: [
            {
              name: 'elementType',
              type: 'string | React Component',
              required: 'no',
              defaultValue: 'h3',
              description: 'задає тег елемента'
            }
          ]
        }, {
          name: 'ListDivider',
          property: [
            {
              name: 'elementType',
              type: 'string | React Component',
              required: 'no',
              defaultValue: 'li',
              description: 'задає тег елемента'
            }, {
              name: 'inset',
              type: 'bool',
              required: 'no',
              defaultValue: 'false',
              description: '-'
            }, {
              name: 'role',
              type: 'string',
              required: 'no',
              defaultValue: `'separator'`,
              description: '-'
            },
          ]
        }, {
          name: 'ListItemText',
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
          name: 'ListItemTextPrimary',
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
          name: 'ListItemTextSecondary',
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
          name: 'ListItemDetail',
          property: [
            {
              name: 'elementType',
              type: 'string | React Component',
              required: 'no',
              defaultValue: 'span',
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
              name: 'icon',
              type: 'bool',
              required: 'no',
              defaultValue: 'false',
              description: '-'
            },{
              name: 'graphic',
              type: 'bool',
              required: 'no',
              defaultValue: 'false',
              description: '-'
            },{
              name: 'meta',
              type: 'bool',
              required: 'no',
              defaultValue: 'false',
              description: '-'
            },
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
      <section className="content">
        <Demo
        >
          <Elevation
            zSpace="2"
            style={{
              'width': '20em',
              'backgroundColor': 'white',
            }}
          >
            <List avatar twoLine>
              <ListItem>
                <ListItemDetail
                  start
                  role="presentation"
                  style={{
                    'backgroundColor': 'grey',
                    'display': 'inline-flex',
                    'alignItems': 'center',
                    'justifyContent': 'center',
                    'color': 'white'
                  }}>
                  <i className="material-icons" aria-hidden="true">folder</i>
                </ListItemDetail>
                <ListItemText>
                  <ListItemTextPrimary>
                    Photos
                  </ListItemTextPrimary>
                  <ListItemTextSecondary>
                    Jan 13, 2017
                  </ListItemTextSecondary>
                </ListItemText>
                <ListItemDetail
                  end
                  icon
                  elementType='a'
                  href='#'
                  style={{'textDecoration': 'none', 'color': 'rgba(0, 0, 0, .26)'}}
                >
                  info
                </ListItemDetail>
              </ListItem>
              <ListItem>
                <ListItemDetail
                  start
                  role="presentation"
                  style={{
                    'backgroundColor': 'grey',
                    'display': 'inline-flex',
                    'alignItems': 'center',
                    'justifyContent': 'center',
                    'color': 'white'
                  }}>
                  <i className="material-icons" aria-hidden="true">folder</i>
                </ListItemDetail>
                <ListItemText>
                  <ListItemTextPrimary>
                    Photos
                  </ListItemTextPrimary>
                  <ListItemTextSecondary>
                    Jan 13, 2017
                  </ListItemTextSecondary>
                </ListItemText>
                <ListItemDetail
                  end
                  icon
                  elementType='a'
                  href='#'
                  style={{'textDecoration': 'none', 'color': 'rgba(0, 0, 0, .26)'}}
                >
                  info
                </ListItemDetail>
              </ListItem><ListItem>
              <ListItemDetail
                start
                role="presentation"
                style={{
                  'backgroundColor': 'grey',
                  'display': 'inline-flex',
                  'alignItems': 'center',
                  'justifyContent': 'center',
                  'color': 'white'
                }}>
                <i className="material-icons" aria-hidden="true">folder</i>
              </ListItemDetail>
              <ListItemText>
                <ListItemTextPrimary>
                  Photos
                </ListItemTextPrimary>
                <ListItemTextSecondary>
                  Jan 13, 2017
                </ListItemTextSecondary>
              </ListItemText>
              <ListItemDetail
                end
                icon
                elementType='a'
                href='#'
                style={{'textDecoration': 'none', 'color': 'rgba(0, 0, 0, .26)'}}
              >
                info
              </ListItemDetail>
            </ListItem>
            </List>
          </Elevation>
        </Demo>
        {this.renderTable()}
        <OriginalDoc
          name="List"
          href="mdc-list"
        />

        <Elevation
          zSpace="2"
          className="demo-page-list"
        >
          <TypographyDisplay size="1">List</TypographyDisplay>
          <Example
            title="Single-Line List - Text only"
            code={code.list.source1}
          >
            <List>
              <ListItem>Single-line item</ListItem>
              <ListItem>Single-line item</ListItem>
              <ListItem>Single-line item</ListItem>
            </List>
          </Example>
          <Example
            title="Single-Line List - Text (dense)"
            code={code.list.source2}
          >
            <List dense>
              <ListItem>Single-line item</ListItem>
              <ListItem>Single-line item</ListItem>
              <ListItem>Single-line item</ListItem>
            </List>
          </Example>

          <Example
            title="Single-Line List - Start Detail"
            code={code.list.source3}
          >
            <List>
              <ListItem><ListItemDetail start style={{'backgroundColor': 'grey'}}/>Single-line item</ListItem>
              <ListItem><ListItemDetail start style={{'backgroundColor': 'grey'}}/>Single-line item</ListItem>
              <ListItem><ListItemDetail start style={{'backgroundColor': 'grey'}}/>Single-line item</ListItem>
            </List>
          </Example>
          <Example
            title="Single-Line List - Start Detail (dense)"
            code={code.list.source4}
          >
            <List dense>
              <ListItem><ListItemDetail start style={{'backgroundColor': 'grey'}}/>Single-line item</ListItem>
              <ListItem><ListItemDetail start style={{'backgroundColor': 'grey'}}/>Single-line item</ListItem>
              <ListItem><ListItemDetail start style={{'backgroundColor': 'grey'}}/>Single-line item</ListItem>
            </List>
          </Example>
          <Example
            title="Single-Line List - Start Detail - Icon with Text"
            code={code.list.source5}
          >
            <List>
              <ListItem>
                <ListItemDetail start icon aria-hidden='true'>
                  network_wifi
                </ListItemDetail>Single-line item</ListItem>
              <ListItem>
                <ListItemDetail start icon aria-hidden='true'>
                  bluetooth
                </ListItemDetail>Single-line item</ListItem>
              <ListItem>
                <ListItemDetail start icon aria-hidden='true'>
                  data_usage
                </ListItemDetail>Single-line item</ListItem>
            </List>
          </Example>
          <Example
            title="Single-Line List - Avatar List"
            code={code.list.source6}
          >
            <List avatar>
              <ListItem><ListItemDetail start style={{'backgroundColor': 'grey'}}/>Single-line item</ListItem>
              <ListItem><ListItemDetail start style={{'backgroundColor': 'grey'}}/>Single-line item</ListItem>
              <ListItem><ListItemDetail start style={{'backgroundColor': 'grey'}}/>Single-line item</ListItem>
            </List>
          </Example>
          <Example
            title="Single-Line List - Avatar List (dense)"
            code={code.list.source7}
          >
            <List avatar dense>
              <ListItem><ListItemDetail start style={{'backgroundColor': 'grey'}}/>Single-line item</ListItem>
              <ListItem><ListItemDetail start style={{'backgroundColor': 'grey'}}/>Single-line item</ListItem>
              <ListItem><ListItemDetail start style={{'backgroundColor': 'grey'}}/>Single-line item</ListItem>
            </List>
          </Example>
          <Example
            title="Single-Line List - Avatar with Text"
            code={code.list.source8}
          >
            <List avatar>
              <ListItem>
                <ListItemDetail
                  start
                  elementType="img"
                  src="http://material-components-web.appspot.com/images/animal2.svg"
                />Single-line item</ListItem>
              <ListItem>
                <ListItemDetail
                  start
                  elementType="img"
                  src="http://material-components-web.appspot.com/images/animal3.svg"
                />Single-line item</ListItem>
              <ListItem>
                <ListItemDetail
                  start
                  elementType="img"
                  src="http://material-components-web.appspot.com/images/animal1.svg"
                />
                Single-line item
              </ListItem>
            </List>
          </Example>
          <Example
            title="Single-Line List - End Detail"
            code={code.list.source9}
          >
            <List>
              <ListItem>Single-line ite<ListItemDetail end style={{'backgroundColor': 'grey'}}/></ListItem>
              <ListItem>Single-line ite<ListItemDetail end style={{'backgroundColor': 'grey'}}/></ListItem>
              <ListItem>Single-line item<ListItemDetail end style={{'backgroundColor': 'grey'}}/></ListItem>
            </List>
          </Example>
          <Example
            title="Single-Line List - End Detail (dense)"
            code={code.list.source10}
          >
            <List dense>
              <ListItem>Single-line item<ListItemDetail end style={{'backgroundColor': 'grey'}}/></ListItem>
              <ListItem>Single-line item<ListItemDetail end style={{'backgroundColor': 'grey'}}/></ListItem>
              <ListItem>Single-line item<ListItemDetail end style={{'backgroundColor': 'grey'}}/></ListItem>
            </List>
          </Example>
          <Example
            title="Single-Line List - Avatar List + End"
            code={code.list.source11}
          >
            <List avatar>
              <ListItem>
                <ListItemDetail start style={{'backgroundColor': 'grey'}}/>
                Single-line item
                <ListItemDetail end style={{'backgroundColor': 'grey'}}/>
              </ListItem>
              <ListItem>
                <ListItemDetail start style={{'backgroundColor': 'grey'}}/>
                Single-line item
                <ListItemDetail end style={{'backgroundColor': 'grey'}}/>
              </ListItem>
              <ListItem>
                <ListItemDetail start style={{'backgroundColor': 'grey'}}/>
                Single-line item
                <ListItemDetail end style={{'backgroundColor': 'grey'}}/>
              </ListItem>
            </List>
          </Example>

          <Example
            title="Single-Line List - Avatar List + End (dense)"
            code={code.list.source12}
          >
            <List avatar dense>
              <ListItem>
                <ListItemDetail start style={{'backgroundColor': 'grey'}}/>
                Single-line item
                <ListItemDetail end style={{'backgroundColor': 'grey'}}/>
              </ListItem>
              <ListItem>
                <ListItemDetail start style={{'backgroundColor': 'grey'}}/>
                Single-line item
                <ListItemDetail end style={{'backgroundColor': 'grey'}}/>
              </ListItem>
              <ListItem>
                <ListItemDetail start style={{'backgroundColor': 'grey'}}/>
                Single-line item
                <ListItemDetail end style={{'backgroundColor': 'grey'}}/>
              </ListItem>
            </List>
          </Example>
          <Example
            title="Single-Line List - Avatar with Text and icon"
            code={code.list.source13}
          >
            <List avatar dense>
              <ListItem>
                <ListItemDetail start style={{'backgroundColor': 'grey'}}/>
                Single-line item
                <ListItemDetail
                  end
                  icon
                  elementType='a'
                  href='#'
                  style={{'textDecoration': 'none', 'color': '#ff4081'}}
                >
                  favorite_border
                </ListItemDetail>
              </ListItem>
              <ListItem>
                <ListItemDetail start style={{'backgroundColor': 'grey'}}/>
                Single-line item
                <ListItemDetail
                  end
                  icon
                  elementType='a'
                  href='#'
                  style={{'textDecoration': 'none', 'color': '#ff4081'}}
                >
                  favorite_border
                </ListItemDetail>
              </ListItem>
              <ListItem>
                <ListItemDetail start style={{'backgroundColor': 'grey'}}/>
                Single-line item
                <ListItemDetail
                  end
                  icon
                  elementType='a'
                  href='#'
                  style={{'textDecoration': 'none', 'color': '#ff4081'}}
                >
                  favorite
                </ListItemDetail>
              </ListItem>
            </List>
          </Example>
          <Example
            title="Two-line List - Text only"
            code={code.list.source14}
          >
            <List twoLine>
              <ListItem>
                <ListItemText>
                  <ListItemTextPrimary>
                    Two-line item
                  </ListItemTextPrimary>
                  <ListItemTextSecondary>
                    Secondary text
                  </ListItemTextSecondary>
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>
                  <ListItemTextPrimary>
                    Two-line item
                  </ListItemTextPrimary>
                  <ListItemTextSecondary>
                    Secondary text
                  </ListItemTextSecondary>
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>
                  <ListItemTextPrimary>
                    Two-line item
                  </ListItemTextPrimary>
                  <ListItemTextSecondary>
                    Secondary text
                  </ListItemTextSecondary>
                </ListItemText>
              </ListItem>
            </List>
          </Example>
          <Example
            title="Two-line List - Text (dense)"
            code={code.list.source15}
          >
            <List twoLine dense>
              <ListItem>
                <ListItemText>
                  <ListItemTextPrimary>
                    Two-line item
                  </ListItemTextPrimary>
                  <ListItemTextSecondary>
                    Secondary text
                  </ListItemTextSecondary>
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>
                  <ListItemTextPrimary>
                    Two-line item
                  </ListItemTextPrimary>
                  <ListItemTextSecondary>
                    Secondary text
                  </ListItemTextSecondary>
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>
                  <ListItemTextPrimary>
                    Two-line item
                  </ListItemTextPrimary>
                  <ListItemTextSecondary>
                    Secondary text
                  </ListItemTextSecondary>
                </ListItemText>
              </ListItem>
            </List>
          </Example>
          <Example
            title="Two-line List - Start Detail"
            code={code.list.source16}
          >
            <List twoLine>
              <ListItem><ListItemDetail start style={{'backgroundColor': 'grey'}}/><ListItemText>
                <ListItemTextPrimary>
                  Two-line item
                </ListItemTextPrimary>
                <ListItemTextSecondary>
                  Secondary text
                </ListItemTextSecondary>
              </ListItemText>
              </ListItem>
              <ListItem><ListItemDetail start style={{'backgroundColor': 'grey'}}/><ListItemText>
                <ListItemTextPrimary>
                  Two-line item
                </ListItemTextPrimary>
                <ListItemTextSecondary>
                  Secondary text
                </ListItemTextSecondary>
              </ListItemText>
              </ListItem>
              <ListItem><ListItemDetail start style={{'backgroundColor': 'grey'}}/><ListItemText>
                <ListItemTextPrimary>
                  Two-line item
                </ListItemTextPrimary>
                <ListItemTextSecondary>
                  Secondary text
                </ListItemTextSecondary>
              </ListItemText>
              </ListItem>
            </List>
          </Example>
          <Example
            title="Two-line List - Start Detail (dense)"
            code={code.list.source17}
          >
            <List dense twoLine>
              <ListItem><ListItemDetail start style={{'backgroundColor': 'grey'}}/><ListItemText>
                <ListItemTextPrimary>
                  Two-line item
                </ListItemTextPrimary>
                <ListItemTextSecondary>
                  Secondary text
                </ListItemTextSecondary>
              </ListItemText>
              </ListItem>
              <ListItem><ListItemDetail start style={{'backgroundColor': 'grey'}}/><ListItemText>
                <ListItemTextPrimary>
                  Two-line item
                </ListItemTextPrimary>
                <ListItemTextSecondary>
                  Secondary text
                </ListItemTextSecondary>
              </ListItemText>
              </ListItem>
              <ListItem><ListItemDetail start style={{'backgroundColor': 'grey'}}/><ListItemText>
                <ListItemTextPrimary>
                  Two-line item
                </ListItemTextPrimary>
                <ListItemTextSecondary>
                  Secondary text
                </ListItemTextSecondary>
              </ListItemText>
              </ListItem>
            </List>
          </Example>
          <Example
            title="Two-line List - Start Detail - Icon with Text"
            code={code.list.source18}
          >
            <List>
              <ListItem>
                <ListItemDetail start icon aria-hidden='true'>
                  network_wifi
                </ListItemDetail>Single-line item</ListItem>
              <ListItem>
                <ListItemDetail start icon aria-hidden='true'>
                  bluetooth
                </ListItemDetail>Single-line item</ListItem>
              <ListItem>
                <ListItemDetail start icon aria-hidden='true'>
                  data_usage
                </ListItemDetail>Single-line item</ListItem>
            </List>
          </Example>
          <Example
            title="Two-line List - Avatar List"
            code={code.list.source19}
          >
            <List avatar>
              <ListItem><ListItemDetail start style={{'backgroundColor': 'grey'}}/><ListItemText>
                <ListItemTextPrimary>
                  Two-line item
                </ListItemTextPrimary>
                <ListItemTextSecondary>
                  Secondary text
                </ListItemTextSecondary>
              </ListItemText>
              </ListItem>
              <ListItem><ListItemDetail start style={{'backgroundColor': 'grey'}}/><ListItemText>
                <ListItemTextPrimary>
                  Two-line item
                </ListItemTextPrimary>
                <ListItemTextSecondary>
                  Secondary text
                </ListItemTextSecondary>
              </ListItemText>
              </ListItem>
              <ListItem><ListItemDetail start style={{'backgroundColor': 'grey'}}/><ListItemText>
                <ListItemTextPrimary>
                  Two-line item
                </ListItemTextPrimary>
                <ListItemTextSecondary>
                  Secondary text
                </ListItemTextSecondary>
              </ListItemText>
              </ListItem>
            </List>
          </Example>
          <Example
            title="Two-line List - Avatar List (dense)"
            code={code.list.source20}
          >
            <List avatar dense>
              <ListItem>
                <ListItemDetail start style={{'backgroundColor': 'grey'}}/>
                <ListItemText>
                  <ListItemTextPrimary>
                    Two-line item
                  </ListItemTextPrimary>
                  <ListItemTextSecondary>
                    Secondary text
                  </ListItemTextSecondary>
                </ListItemText>
              </ListItem>
              <ListItem><ListItemDetail start style={{'backgroundColor': 'grey'}}/><ListItemText>
                <ListItemTextPrimary>
                  Two-line item
                </ListItemTextPrimary>
                <ListItemTextSecondary>
                  Secondary text
                </ListItemTextSecondary>
              </ListItemText>
              </ListItem>
              <ListItem><ListItemDetail start style={{'backgroundColor': 'grey'}}/><ListItemText>
                <ListItemTextPrimary>
                  Two-line item
                </ListItemTextPrimary>
                <ListItemTextSecondary>
                  Secondary text
                </ListItemTextSecondary>
              </ListItemText>
              </ListItem>
            </List>
          </Example>
          <Example
            title="Two-line List - End Detail"
            code={code.list.source21}
          >
            <List>
              <ListItem> <ListItemText>
                <ListItemTextPrimary>
                  Two-line item
                </ListItemTextPrimary>
                <ListItemTextSecondary>
                  Secondary text
                </ListItemTextSecondary>
              </ListItemText>
                <ListItemDetail end style={{'backgroundColor': 'grey'}}/></ListItem>
              <ListItem> <ListItemText>
                <ListItemTextPrimary>
                  Two-line item
                </ListItemTextPrimary>
                <ListItemTextSecondary>
                  Secondary text
                </ListItemTextSecondary>
              </ListItemText>
                <ListItemDetail end style={{'backgroundColor': 'grey'}}/></ListItem>
              <ListItem> <ListItemText>
                <ListItemTextPrimary>
                  Two-line item
                </ListItemTextPrimary>
                <ListItemTextSecondary>
                  Secondary text
                </ListItemTextSecondary>
              </ListItemText>
                <ListItemDetail end style={{'backgroundColor': 'grey'}}/></ListItem>
            </List>
          </Example>
          <Example
            title="Two-line List - End Detail (dense)"
            code={code.list.source22}
          >
            <List dense>
              <ListItem> <ListItemText>
                <ListItemTextPrimary>
                  Two-line item
                </ListItemTextPrimary>
                <ListItemTextSecondary>
                  Secondary text
                </ListItemTextSecondary>
              </ListItemText>
                <ListItemDetail end style={{'backgroundColor': 'grey'}}/></ListItem>
              <ListItem> <ListItemText>
                <ListItemTextPrimary>
                  Two-line item
                </ListItemTextPrimary>
                <ListItemTextSecondary>
                  Secondary text
                </ListItemTextSecondary>
              </ListItemText>
                <ListItemDetail end style={{'backgroundColor': 'grey'}}/></ListItem>
              <ListItem> <ListItemText>
                <ListItemTextPrimary>
                  Two-line item
                </ListItemTextPrimary>
                <ListItemTextSecondary>
                  Secondary text
                </ListItemTextSecondary>
              </ListItemText>
                <ListItemDetail end style={{'backgroundColor': 'grey'}}/></ListItem>
            </List>
          </Example>
          <Example
            title="Two-line List - avatar + text + icon"
            code={code.list.source23}
          >
            <List avatar twoLine>
              <ListItem>
                <ListItemDetail
                  start
                  role="presentation"
                  style={{
                    'backgroundColor': 'grey',
                    'display': 'inline-flex',
                    'alignItems': 'center',
                    'justifyContent': 'center',
                    'color': 'white'
                  }}>
                  <i className="material-icons" aria-hidden="true">folder</i>
                </ListItemDetail>
                <ListItemText>
                  <ListItemTextPrimary>
                    Photos
                  </ListItemTextPrimary>
                  <ListItemTextSecondary>
                    Jan 13, 2017
                  </ListItemTextSecondary>
                </ListItemText>
                <ListItemDetail
                  end
                  icon
                  elementType='a'
                  href='#'
                  style={{'textDecoration': 'none', 'color': 'rgba(0, 0, 0, .26)'}}
                >
                  info
                </ListItemDetail>
              </ListItem>
              <ListItem>
                <ListItemDetail
                  start
                  role="presentation"
                  style={{
                    'backgroundColor': 'grey',
                    'display': 'inline-flex',
                    'alignItems': 'center',
                    'justifyContent': 'center',
                    'color': 'white'
                  }}>
                  <i className="material-icons" aria-hidden="true">folder</i>
                </ListItemDetail>
                <ListItemText>
                  <ListItemTextPrimary>
                    Photos
                  </ListItemTextPrimary>
                  <ListItemTextSecondary>
                    Jan 13, 2017
                  </ListItemTextSecondary>
                </ListItemText>
                <ListItemDetail
                  end
                  icon
                  elementType='a'
                  href='#'
                  style={{'textDecoration': 'none', 'color': 'rgba(0, 0, 0, .26)'}}
                >
                  info
                </ListItemDetail>
              </ListItem><ListItem>
              <ListItemDetail
                start
                role="presentation"
                style={{
                  'backgroundColor': 'grey',
                  'display': 'inline-flex',
                  'alignItems': 'center',
                  'justifyContent': 'center',
                  'color': 'white'
                }}>
                <i className="material-icons" aria-hidden="true">folder</i>
              </ListItemDetail>
              <ListItemText>
                <ListItemTextPrimary>
                  Photos
                </ListItemTextPrimary>
                <ListItemTextSecondary>
                  Jan 13, 2017
                </ListItemTextSecondary>
              </ListItemText>
              <ListItemDetail
                end
                icon
                elementType='a'
                href='#'
                style={{'textDecoration': 'none', 'color': 'rgba(0, 0, 0, .26)'}}
              >
                info
              </ListItemDetail>
            </ListItem>
            </List>
          </Example>
          <Example
            title="List Dividers - Full-Width Dividers"
            code={code.list.source24}
          >
            <List>
              <ListItem>Single-line item - section 1</ListItem>
              <ListItem>Single-line item - section 1</ListItem>
              <ListItem>Single-line item - section 1</ListItem>
              <ListDivider />
              <ListItem>Single-line item - section 2</ListItem>
              <ListItem>Single-line item - section 2</ListItem>
            </List>
          </Example>
          <Example
            title="List Dividers - Inset Dividers"
            code={code.list.source25}
          >
            <List avatar>
              <ListItem>
                <ListItemDetail start style={{'backgroundColor': 'grey'}}/>
                Single-line item - section 1
              </ListItem>
              <ListItem>
                <ListItemDetail start style={{'backgroundColor': 'grey'}}/>
                Single-line item - section 1
              </ListItem>
              <ListItem>
                <ListItemDetail start style={{'backgroundColor': 'grey'}}/>
                Single-line item - section 1
              </ListItem>
              <ListDivider inset/>
              <ListItem>
                <ListItemDetail start style={{'backgroundColor': 'grey'}}/>
                Single-line item - section 2
              </ListItem>
              <ListItem>
                <ListItemDetail start style={{'backgroundColor': 'grey'}}/>
                Single-line item - section 2
              </ListItem>
            </List>
          </Example>
          <Example
            title="List Groups - Basic Usage"
            code={code.list.source26}
          >
            <ListGroup>
              <ListGroupSubheader>List 1</ListGroupSubheader>
              <List>
                <ListItem>Single-line item</ListItem>
                <ListItem>Single-line item</ListItem>
                <ListItem>Single-line item</ListItem>
              </List>
              <ListDivider elementType="hr"/>
              <ListGroupSubheader>List 2</ListGroupSubheader>
              <List>
                <ListItem>Single-line item</ListItem>
                <ListItem>Single-line item</ListItem>
                <ListItem>Single-line item</ListItem>
              </List>
            </ListGroup>
          </Example>
          <Example
            title="List Groups - Two-line Lists, Avatars, end detail, inset dividers"
            code={code.list.source27}
          >
            <ListGroup>
              <ListGroupSubheader>Folders</ListGroupSubheader>
              <List avatar twoLine>
                <ListItem>
                  <ListItemDetail
                    start
                    role="presentation"
                    style={{
                      'backgroundColor': 'grey',
                      'display': 'inline-flex',
                      'alignItems': 'center',
                      'justifyContent': 'center',
                      'color': 'white'
                    }}>
                    <i className="material-icons" aria-hidden="true">folder</i>
                  </ListItemDetail>
                  <ListItemText>
                    <ListItemTextPrimary>
                      Photos
                    </ListItemTextPrimary>
                    <ListItemTextSecondary>
                      Jan 13, 2017
                    </ListItemTextSecondary>
                  </ListItemText>
                  <ListItemDetail
                    end
                    icon
                    elementType='a'
                    href='#'
                    style={{'textDecoration': 'none', 'color': 'rgba(0, 0, 0, .26)'}}
                  >
                    info
                  </ListItemDetail>
                </ListItem>
                <ListItem>
                  <ListItemDetail
                    start
                    role="presentation"
                    style={{
                      'backgroundColor': 'grey',
                      'display': 'inline-flex',
                      'alignItems': 'center',
                      'justifyContent': 'center',
                      'color': 'white'
                    }}>
                    <i className="material-icons" aria-hidden="true">folder</i>
                  </ListItemDetail>
                  <ListItemText>
                    <ListItemTextPrimary>
                      Photos
                    </ListItemTextPrimary>
                    <ListItemTextSecondary>
                      Jan 13, 2017
                    </ListItemTextSecondary>
                  </ListItemText>
                  <ListItemDetail
                    end
                    icon
                    elementType='a'
                    href='#'
                    style={{'textDecoration': 'none', 'color': 'rgba(0, 0, 0, .26)'}}
                  >
                    info
                  </ListItemDetail>
                </ListItem>
                <ListItem>
                  <ListItemDetail
                    start
                    role="presentation"
                    style={{
                      'backgroundColor': 'grey',
                      'display': 'inline-flex',
                      'alignItems': 'center',
                      'justifyContent': 'center',
                      'color': 'white'
                    }}>
                    <i className="material-icons" aria-hidden="true">folder</i>
                  </ListItemDetail>
                  <ListItemText>
                    <ListItemTextPrimary>
                      Photos
                    </ListItemTextPrimary>
                    <ListItemTextSecondary>
                      Jan 13, 2017
                    </ListItemTextSecondary>
                  </ListItemText>
                  <ListItemDetail
                    end
                    icon
                    elementType='a'
                    href='#'
                    style={{'textDecoration': 'none', 'color': 'rgba(0, 0, 0, .26)'}}
                  >
                    info
                  </ListItemDetail>
                </ListItem>
              </List>
              <ListDivider elementType="hr"/>
              <ListGroupSubheader>Files</ListGroupSubheader>
              <List avatar twoLine>
                <ListItem>
                  <ListItemDetail
                    start
                    role="presentation"
                    style={{
                      'backgroundColor': 'grey',
                      'display': 'inline-flex',
                      'alignItems': 'center',
                      'justifyContent': 'center',
                      'color': 'white'
                    }}>
                    <i className="material-icons" aria-hidden="true">insert_drive_file</i>
                  </ListItemDetail>
                  <ListItemText>
                    <ListItemTextPrimary>
                      Photos
                    </ListItemTextPrimary>
                    <ListItemTextSecondary>
                      Jan 13, 2017
                    </ListItemTextSecondary>
                  </ListItemText>
                  <ListItemDetail
                    end
                    icon
                    elementType='a'
                    href='#'
                    style={{'textDecoration': 'none', 'color': 'rgba(0, 0, 0, .26)'}}
                  >
                    info
                  </ListItemDetail>
                </ListItem>
                <ListItem>
                  <ListItemDetail
                    start
                    role="presentation"
                    style={{
                      'backgroundColor': 'grey',
                      'display': 'inline-flex',
                      'alignItems': 'center',
                      'justifyContent': 'center',
                      'color': 'white'
                    }}>
                    <i className="material-icons" aria-hidden="true">insert_drive_file</i>
                  </ListItemDetail>
                  <ListItemText>
                    <ListItemTextPrimary>
                      Photos
                    </ListItemTextPrimary>
                    <ListItemTextSecondary>
                      Jan 13, 2017
                    </ListItemTextSecondary>
                  </ListItemText>
                  <ListItemDetail
                    end
                    icon
                    elementType='a'
                    href='#'
                    style={{'textDecoration': 'none', 'color': 'rgba(0, 0, 0, .26)'}}
                  >
                    info
                  </ListItemDetail>
                </ListItem><ListItem>
                <ListItemDetail
                  start
                  role="presentation"
                  style={{
                    'backgroundColor': 'grey',
                    'display': 'inline-flex',
                    'alignItems': 'center',
                    'justifyContent': 'center',
                    'color': 'white'
                  }}>
                  <i className="material-icons" aria-hidden="true">insert_drive_file</i>
                </ListItemDetail>
                <ListItemText>
                  <ListItemTextPrimary>
                    Photos
                  </ListItemTextPrimary>
                  <ListItemTextSecondary>
                    Jan 13, 2017
                  </ListItemTextSecondary>
                </ListItemText>
                <ListItemDetail
                  end
                  icon
                  elementType='a'
                  href='#'
                  style={{'textDecoration': 'none', 'color': 'rgba(0, 0, 0, .26)'}}
                >
                  info
                </ListItemDetail>
              </ListItem>
              </List>
            </ListGroup>
          </Example>
          <Example
            title="Interactive Lists with ripple"
            code={code.list.source28}
          >
            <List>
              <ListItem ripple>
                <ListItemDetail start icon aria-hidden='true'>
                  network_wifi
                </ListItemDetail>Single-line item</ListItem>
              <ListItem ripple>
                <ListItemDetail start icon aria-hidden='true'>
                  bluetooth
                </ListItemDetail>Single-line item</ListItem>
              <ListItem ripple>
                <ListItemDetail start icon aria-hidden='true'>
                  data_usage
                </ListItemDetail>Single-line item</ListItem>
            </List>
          </Example>

        </Elevation>
        <Footer/>
      </section>
    )
  }
}
