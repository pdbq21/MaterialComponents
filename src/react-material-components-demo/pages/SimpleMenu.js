/**
 * Created by ruslan on 16.06.17.
 */
import React, {Component} from 'react'
import {
  SimpleMenu,
  SimpleMenuItems,
  SimpleMenuListItem,
  SimpleMenuAnchor,
  Button,
  Radio,
  RadioInput,
  FormField,
  Elevation,
  TypographyDisplay,
  TypographyBody,
} from '../lib'
import {OriginalDoc, Footer, Example, Demo, Table} from '../templates'

export default class MenuPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      openAnchor: false,
      select: {},
      styles: {},
      components: [
        {
          name: 'SimpleMenu',
          property: [
            {
              name: 'elementType',
              type: 'string | React Component',
              required: 'no',
              defaultValue: 'div',
              description: 'задає тег елемента'
            },
            {
              name: 'open',
              type: 'bool',
              required: 'no',
              defaultValue: 'false',
              description: '-'
            }, {
              name: 'onSelected',
              type: 'function',
              required: 'no',
              defaultValue: '-',
              description: '-'
            }, {
              name: 'onCancel',
              type: 'function',
              required: 'no',
              defaultValue: '-',
              description: '-'
            }, {
              name: 'tabIndex',
              type: 'string | number',
              required: 'no',
              defaultValue: '-1',
              description: '-'
            },
          ]
        }, {
          name: 'SimpleMenuItems',
          property: [
            {
              name: 'elementType',
              type: 'string | React Component',
              required: 'no',
              defaultValue: 'ul',
              description: 'задає тег елемента'
            },
            {
              name: 'role',
              type: 'string',
              required: 'no',
              defaultValue: `'menu'`,
              description: '-'
            },
          ]
        }, {
          name: 'SimpleMenuListItem',
          property: [
            {
              name: 'elementType',
              type: 'string | React Component',
              required: 'no',
              defaultValue: 'li',
              description: 'задає тег елемента'
            },
            {
              name: 'role',
              type: 'string',
              required: 'no',
              defaultValue: `'menuitem'`,
              description: '-'
            }, {
              name: 'tabIndex',
              type: 'string | number',
              required: 'no',
              defaultValue: `0`,
              description: '-'
            },
          ]
        }, {
          name: 'SimpleMenuAnchor',
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
      used: `
import React, {Component} from 'react'
import {
    SimpleMenu,
    SimpleMenuItems,
    SimpleMenuListItem,
    SimpleMenuAnchor,
    Elevation,
    TypographyDisplay,
} from '../lib'

class SimpleMenuDemo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            openAnchor: false,
            select: {},
        }
        this.handleSelected = this.handleSelected.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
    }
    
    handleSelected(data) {
        console.log(data);
        this.setState({
            select: data,
            open: false
        })
    }

    handleCancel() {
        this.setState({
            open: false
        })
    }
    render() {
        return (
            <section>
                <Elevation
                    zSpace="2"
                >
                    <TypographyDisplay size="1">Sample Menu</TypographyDisplay>
                    <Button
                        primary raised
                        onClick={() => this.setState({
                            open: !open,
                        })}
                    >Open Menu
                    </Button>
                    <SimpleMenu
                        open={open}
                        onSelected={this.handleSelected}
                        onCancel={this.handleCancel}
                    >
                        <SimpleMenuItems>
                            <SimpleMenuListItem>
                                Item Menu 1
                            </SimpleMenuListItem>
                            <SimpleMenuListItem>
                                Item Menu 2
                            </SimpleMenuListItem>
                            <SimpleMenuListItem>
                                Item Menu 3
                            </SimpleMenuListItem>
                            <SimpleMenuListItem>
                                Item Menu 4
                            </SimpleMenuListItem>
                        </SimpleMenuItems>
                    </SimpleMenu>
                </Elevation>
            </section>
        )
    }
}`
    };
    this.renderTable = this.renderTable.bind(this);
    this.handleSelected = this.handleSelected.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handlePosition = this.handlePosition.bind(this);
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

  handleSelected(data) {
    console.log(data);
    this.setState({
      select: data,
      open: false
    })
  }

  handleCancel() {
    this.setState({
      open: false
    })
  }

  handlePosition({target}) {
    const position = target.attributes['data-position'].value;
    const styles = (position === 'top left') ? {'top': 0, 'left': 0} :
      (position === 'top right') ? {'top': 0, 'right': 0} :
        (position === 'bottom left') ? {'bottom': 0, 'left': 0} :
          (position === 'bottom right') ? {'bottom': 0, 'right': 0} : null;
    this.setState({styles: styles});
  }

  render() {
    const {open, select, openAnchor, styles} = this.state;
    return (
      <section className="content">
        <Demo
        >
          <SimpleMenu
            className="demo-page-simple_menu_view"
          >
            <SimpleMenuItems>
              <SimpleMenuListItem>
                Item Menu 1
              </SimpleMenuListItem>
              <SimpleMenuListItem>
                Item Menu 2
              </SimpleMenuListItem>
              <SimpleMenuListItem>
                Item Menu 3
              </SimpleMenuListItem>
              <SimpleMenuListItem>
                Item Menu 4
              </SimpleMenuListItem>
            </SimpleMenuItems>
          </SimpleMenu>
        </Demo>
        {this.renderTable()}
        <OriginalDoc
          name="Menu"
          href="mdc-menu"
        />
        <Elevation
          zSpace="2"
          className="demo-page-simple_menu"
        >
          <TypographyDisplay size="1">Sample Menu</TypographyDisplay>
          <TypographyBody>
            {`Selected item: ${(select.index || select.index === 0) ?
              select.index : 'none'} - ${(select.item) ? select.item.innerText : 'selected'}`}
          </TypographyBody>
          <Button
            primary raised
            onClick={() => this.setState({
              open: !open,
            })}
          >Open Menu
          </Button>
          <SimpleMenu
            open={open}
            onSelected={this.handleSelected}
            onCancel={this.handleCancel}
          >
            <SimpleMenuItems>
              <SimpleMenuListItem>
                Item Menu 1
              </SimpleMenuListItem>
              <SimpleMenuListItem>
                Item Menu 2
              </SimpleMenuListItem>
              <SimpleMenuListItem>
                Item Menu 3
              </SimpleMenuListItem>
              <SimpleMenuListItem>
                Item Menu 4
              </SimpleMenuListItem>
            </SimpleMenuItems>
          </SimpleMenu>
          <TypographyDisplay size="1">Sample Menu with Anchor</TypographyDisplay>
          <div>
            <FormField
              onClick={this.handlePosition}
            >
              Position: Top left
              <Radio
                ripple
              >
                <RadioInput
                  name="radios"
                  data-position="top left"
                />
              </Radio>
              Top right
              <Radio
                ripple
              >
                <RadioInput
                  name="radios"
                  data-position="top right"
                />
              </Radio>
              Bottom left
              <Radio
                ripple
              >
                <RadioInput
                  name="radios"
                  data-position="bottom left"
                />
              </Radio>
              Bottom right
              <Radio
                ripple
              >
                <RadioInput
                  name="radios"
                  data-position="bottom right"
                />
              </Radio>
            </FormField>
          </div>
          <div
            style={{
              'position': 'relative',
              'height': '30em'
            }}
          >
            <SimpleMenuAnchor
              style={styles}
            >
              <Button
                primary raised onClick={() => this.setState({
                openAnchor: !openAnchor,
              })}>Open Menu</Button>
              <SimpleMenu
                open={openAnchor}
                onCancel={() => this.setState({
                  openAnchor: false
                })}
                onSelected={(data) => this.setState({
                  select: data,
                  openAnchor: false
                })}
              >
                <SimpleMenuItems>
                  <SimpleMenuListItem>
                    Item Menu Anchor 1
                  </SimpleMenuListItem>
                  <SimpleMenuListItem>
                    Item Menu Anchor 2
                  </SimpleMenuListItem>
                  <SimpleMenuListItem>
                    Item Menu Anchor 3
                  </SimpleMenuListItem>
                  <SimpleMenuListItem>
                    Item Menu Anchor 4
                  </SimpleMenuListItem>
                </SimpleMenuItems>
              </SimpleMenu>
            </SimpleMenuAnchor>
          </div>

        </Elevation>
        <Footer/>
      </section>
    )
  }
}
