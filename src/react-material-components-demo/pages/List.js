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
  TypographyHeadline,
  TypographyDisplay,
  TypographyBody,
} from '../lib'
import {OriginalDoc, Footer, Example, Demo, Table} from '../templates'

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
            },
          ]
        },
      ],
      used: `
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

class ListDemo extends Component {
    render() {
        return (
            <section>
                <Elevation
                    zSpace="2"
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
            </section>
        )
    }
}`
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
          <TypographyDisplay size="1">Single-Line List</TypographyDisplay>

          <TypographyHeadline>Text only</TypographyHeadline>
          <List>
            <ListItem>Single-line item</ListItem>
            <ListItem>Single-line item</ListItem>
            <ListItem>Single-line item</ListItem>
          </List>
          <TypographyHeadline>Text (dense)</TypographyHeadline>
          <List dense>
            <ListItem>Single-line item</ListItem>
            <ListItem>Single-line item</ListItem>
            <ListItem>Single-line item</ListItem>
          </List>
          <TypographyHeadline>Start Detail</TypographyHeadline>
          <List>
            <ListItem><ListItemDetail start style={{'backgroundColor': 'grey'}}/>Single-line item</ListItem>
            <ListItem><ListItemDetail start style={{'backgroundColor': 'grey'}}/>Single-line item</ListItem>
            <ListItem><ListItemDetail start style={{'backgroundColor': 'grey'}}/>Single-line item</ListItem>
          </List>
          <TypographyHeadline>Start Detail (dense)</TypographyHeadline>
          <List dense>
            <ListItem><ListItemDetail start style={{'backgroundColor': 'grey'}}/>Single-line item</ListItem>
            <ListItem><ListItemDetail start style={{'backgroundColor': 'grey'}}/>Single-line item</ListItem>
            <ListItem><ListItemDetail start style={{'backgroundColor': 'grey'}}/>Single-line item</ListItem>
          </List>
          <TypographyHeadline>Start Detail Example - Icon with Text</TypographyHeadline>
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
          <TypographyHeadline>Avatar List</TypographyHeadline>
          <List avatar>
            <ListItem><ListItemDetail start style={{'backgroundColor': 'grey'}}/>Single-line item</ListItem>
            <ListItem><ListItemDetail start style={{'backgroundColor': 'grey'}}/>Single-line item</ListItem>
            <ListItem><ListItemDetail start style={{'backgroundColor': 'grey'}}/>Single-line item</ListItem>
          </List>
          <TypographyHeadline>Avatar List (dense)</TypographyHeadline>
          <List avatar dense>
            <ListItem><ListItemDetail start style={{'backgroundColor': 'grey'}}/>Single-line item</ListItem>
            <ListItem><ListItemDetail start style={{'backgroundColor': 'grey'}}/>Single-line item</ListItem>
            <ListItem><ListItemDetail start style={{'backgroundColor': 'grey'}}/>Single-line item</ListItem>
          </List>
          <TypographyHeadline>Example - Avatar with Text</TypographyHeadline>
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

          <TypographyHeadline>End Detail</TypographyHeadline>
          <List>
            <ListItem>Single-line ite<ListItemDetail end style={{'backgroundColor': 'grey'}}/></ListItem>
            <ListItem>Single-line ite<ListItemDetail end style={{'backgroundColor': 'grey'}}/></ListItem>
            <ListItem>Single-line item<ListItemDetail end style={{'backgroundColor': 'grey'}}/></ListItem>
          </List>

          <TypographyHeadline>End Detail (dense)</TypographyHeadline>
          <List dense>
            <ListItem>Single-line item<ListItemDetail end style={{'backgroundColor': 'grey'}}/></ListItem>
            <ListItem>Single-line item<ListItemDetail end style={{'backgroundColor': 'grey'}}/></ListItem>
            <ListItem>Single-line item<ListItemDetail end style={{'backgroundColor': 'grey'}}/></ListItem>
          </List>
          <TypographyHeadline>Avatar List + End</TypographyHeadline>
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
          <TypographyHeadline>Avatar List + End (dense)</TypographyHeadline>
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
          <TypographyHeadline>Example - Avatar with Text and icon</TypographyHeadline>
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
          <TypographyDisplay size="1">Two-line List</TypographyDisplay>
          <TypographyHeadline>Text only</TypographyHeadline>
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
          <TypographyHeadline>Text (dense)</TypographyHeadline>
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
          <TypographyHeadline>Start Detail</TypographyHeadline>
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
          <TypographyHeadline>Start Detail (dense)</TypographyHeadline>
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
          <TypographyHeadline>Start Detail Example - Icon with Text</TypographyHeadline>
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
          <TypographyHeadline>Avatar List</TypographyHeadline>
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
          <TypographyHeadline>Avatar List (dense)</TypographyHeadline>
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
          <TypographyHeadline>End Detail</TypographyHeadline>
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
          <TypographyHeadline>End Detail (dense)</TypographyHeadline>
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
          <TypographyHeadline>Example - Two-line avatar + text + icon</TypographyHeadline>
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

          <TypographyDisplay size="1">List Dividers</TypographyDisplay>
          <TypographyHeadline>Full-Width Dividers</TypographyHeadline>
          <List>
            <ListItem>Single-line item - section 1</ListItem>
            <ListItem>Single-line item - section 1</ListItem>
            <ListItem>Single-line item - section 1</ListItem>
            <ListDivider />
            <ListItem>Single-line item - section 2</ListItem>
            <ListItem>Single-line item - section 2</ListItem>
          </List>
          <TypographyHeadline>Inset Dividers</TypographyHeadline>
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
          <TypographyDisplay size="1">List Groups</TypographyDisplay>
          <TypographyHeadline>Basic Usage</TypographyHeadline>
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
          <TypographyHeadline>Example - Two-line Lists, Avatars, end detail, inset dividers</TypographyHeadline>
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
          <TypographyDisplay size="1">Interactive Lists (with ink ripple)</TypographyDisplay>
          <TypographyHeadline>Example - Interactive List</TypographyHeadline>
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
        </Elevation>
        <Footer/>
      </section>
    )
  }
}
