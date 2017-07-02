import React, {Component} from 'react'
import {
  Elevation,
  TypographyDisplay,
} from '../../lib/index'
import {OriginalDoc, Footer, Example, Demo, Table} from '../../templates'
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
      used: {
        source1: `import React, {Component} from 'react'
import {
    DrawerTemporary,
    TemporaryContent,
    DrawerListItemDetail,
    TemporaryDrawer,
    TemporaryListItem,
    TemporaryToolbarSpacer,
    Toolbar,
    ToolbarRow,
    ToolbarSection,
    ToolbarTitle,
    ToolbarMain,
    Icon
} from '../../lib/index'


export default class TemporaryToolbarSpacerPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        };

        this.handle = this.handle.bind(this);
        this.handleOpen = this.handleOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    setOpen(open) {
        this.setState({open});
    }

    handle() {
        this.setOpen(true);
    }

    handleOpen() {
        this.setOpen(true);
    }

    handleClose() {
        this.setOpen(false);
    }

    render() {
        const {open} = this.state;
        return (
            <section>
                <Toolbar>
                    <ToolbarRow>
                        <ToolbarSection start>
                            <Icon
                                onClick={this.handle}
                            >menu</Icon>
                            <ToolbarTitle>Temporary Drawer</ToolbarTitle>
                        </ToolbarSection>
                    </ToolbarRow>
                </Toolbar>
                <DrawerTemporary
                    open={open}
                    onOpen={this.handleOpen}
                    onClose={this.handleClose}
                >
                    <TemporaryDrawer>
                        <TemporaryToolbarSpacer/>
                        <TemporaryContent>
                            <TemporaryListItem selected>
                                <DrawerListItemDetail start>
                                    inbox
                                </DrawerListItemDetail>
                                Inbox
                            </TemporaryListItem>
                            <TemporaryListItem >
                                <DrawerListItemDetail start>
                                    star
                                </DrawerListItemDetail>
                                Star
                            </TemporaryListItem>
                        </TemporaryContent>
                    </TemporaryDrawer>
                </DrawerTemporary>
                <ToolbarMain>
                    <h2>Temporary Drawer with Toolbar Spacer</h2>
                    <p>
                        Click the menu icon above to open.
                    </p>
                </ToolbarMain>
            </section>
        )
    }
}`,
        source2: `import React, {Component} from 'react'
import {
    DrawerTemporary,
    TemporaryContent,
    DrawerListItemDetail,
    TemporaryDrawer,
    TemporaryHeader,
    TemporaryHeaderContent,
    TemporaryListItem,
    Toolbar,
    ToolbarRow,
    ToolbarSection,
    ToolbarTitle,
    ToolbarMain,
    Icon,
    Theme
} from '../../lib/index'


export default class TemporaryHeaderPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
        };

        this.handle = this.handle.bind(this);
        this.handleOpen = this.handleOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    setOpen(open) {
        this.setState({open});
    }

    handle() {
        this.setOpen(true);
    }

    handleOpen() {
        this.setOpen(true);
    }

    handleClose() {
        this.setOpen(false);
    }

    render() {
        const {open} = this.state;
        return (
            <section>
                <Toolbar>
                    <ToolbarRow>
                        <ToolbarSection start>
                            <Icon
                                onClick={this.handle}
                            >menu</Icon>
                            <ToolbarTitle>Temporary Drawer</ToolbarTitle>
                        </ToolbarSection>
                    </ToolbarRow>
                </Toolbar>
                <DrawerTemporary
                    open={open}
                    onOpen={this.handleOpen}
                    onClose={this.handleClose}
                >
                    <TemporaryDrawer>
                        <Theme
                            primaryBg
                        >
                            <TemporaryHeader>
                                <TemporaryHeaderContent>
                                    Header here
                                </TemporaryHeaderContent>
                            </TemporaryHeader>
                        </Theme>
                        <TemporaryContent>
                            <TemporaryListItem selected>
                                <DrawerListItemDetail start>
                                    inbox
                                </DrawerListItemDetail>
                                Inbox
                            </TemporaryListItem>
                            <TemporaryListItem >
                                <DrawerListItemDetail start>
                                    star
                                </DrawerListItemDetail>
                                Star
                            </TemporaryListItem>
                        </TemporaryContent>
                    </TemporaryDrawer>
                </DrawerTemporary>
                <ToolbarMain>
                    <h2>Temporary Drawer with Header</h2>
                    <p>
                        Click the menu icon above to open.
                    </p>
                </ToolbarMain>
            </section>
        )
    }
}`
      }
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
    const { used } = this.state;
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
            title="Temporary with ToolbarSpacer"
            code={used.source1}
          >
            <iframe
              src="/drawer/temporary_toolbar_spacer"
              frameBorder="0"
              width='320px'
              height='420px'
            />
          </Example>
          <Example
            title="Temporary with Header"
            code={used.source2}
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