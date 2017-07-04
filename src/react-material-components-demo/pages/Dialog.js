/**
 * Created by ruslan on 15.06.17.
 */
import React, {Component} from 'react'
import {
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  DialogFooterButton,
  DialogSurface,
  DialogTitle,
  Elevation,
  Button,
  List,
  ListItem,
  Toolbar,
  ToolbarRow,
  ToolbarSection,
  ToolbarTitle,
  ToolbarMain,
  ToolbarIcon,
  TypographyDisplay,
} from '../lib'
import {OriginalDoc, Footer, Example, Demo, Table, code} from '../templates'

export default class DialogPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      openScroll: false,
      openFullPage: false,
      components: [
        {
          name: 'Dialog',
          property: [
            {
              name: 'elementType',
              type: 'string | React Component',
              required: 'no',
              defaultValue: 'aside',
              description: 'задає тег елемента'
            },
            {
              name: 'open',
              type: 'bool',
              required: 'no',
              defaultValue: 'false',
              description: '-'
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
            }, {
              name: 'onAccept',
              type: 'function',
              required: 'no',
              defaultValue: '-',
              description: '-'
            }, {
              name: 'onOpen',
              type: 'function',
              required: 'no',
              defaultValue: '-',
              description: '-'
            },
          ]
        },
        {
          name: 'DialogHeader',
          property: [
            {
              name: 'elementType',
              type: 'string | React Component',
              required: 'no',
              defaultValue: 'header',
              description: 'задає тег елемента'
            }
          ]
        },
        {
          name: 'DialogBody',
          property: [
            {
              name: 'elementType',
              type: 'string | React Component',
              required: 'no',
              defaultValue: 'section',
              description: 'задає тег елемента'
            },
            {
              name: 'scrollable',
              type: 'bool',
              required: 'no',
              defaultValue: 'false',
              description: '-'
            }
          ]
        },
        {
          name: 'DialogFooter',
          property: [
            {
              name: 'elementType',
              type: 'string | React Component',
              required: 'no',
              defaultValue: 'footer',
              description: 'задає тег елемента'
            }
          ]
        },
        {
          name: 'DialogFooterButton',
          property: [
            {
              name: 'elementType',
              type: 'string | React Component',
              required: 'no',
              defaultValue: 'Button',
              description: 'задає тег елемента'
            },
            {
              name: 'accept',
              type: 'bool',
              required: 'no',
              defaultValue: 'false',
              description: ''
            },
            {
              name: 'cancel',
              type: 'bool',
              required: 'no',
              defaultValue: 'false',
              description: ''
            }
          ]
        },
        {
          name: 'DialogSurface',
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
          name: 'DialogTitle',
          property: [
            {
              name: 'elementType',
              type: 'string | React Component',
              required: 'no',
              defaultValue: 'h2',
              description: 'задає тег елемента'
            }
          ]
        },
      ],
    };
    this.renderTable = this.renderTable.bind(this);
    this.handle = this.handle.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
    this.handleOpenScroll = this.handleOpenScroll.bind(this);
    this.handleCloseScroll = this.handleCloseScroll.bind(this);
    this.handleAccept = this.handleAccept.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleFullPage = this.handleFullPage.bind(this);
    this.handleOpenFullPage = this.handleOpenFullPage.bind(this);
    this.handleCloseFullPage = this.handleCloseFullPage.bind(this);
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


  setOpen(open) {
    this.setState({open});
  }

  handle() {
    this.setOpen(true);
  }
  handleFullPage() {
    this.setState({openFullPage: true});
  }

  handleOpen() {
    this.setOpen(true);
  }

  handleClose() {
    this.setOpen(false);
  }

  setOpenScroll(openScroll) {
    this.setState({openScroll});
  }

  handleScroll() {
    this.setOpenScroll(true);
  }

  handleOpenScroll() {
    this.setOpenScroll(true);
  }

  handleCloseScroll() {
    this.setOpenScroll(false);
  }
  handleOpenFullPage() {
    this.setState({openFullPage: true});
  }

  handleCloseFullPage() {
    this.setState({openFullPage: false});
  }

  handleAccept() {
    console.log("Accept");
  }

  handleCancel() {
    console.log("Decline");
  }


  render() {
    const {open, openScroll, openFullPage} = this.state;
    return (
      <section
        className="content"
      >
        <Demo>
          <aside
            className="mdc-dialog mdc-dialog--open"
            style={{
              'position': 'relative',
              'zIndex': 0,
              'width': '80%'
            }}
          >
            <div className="mdc-dialog__surface">
              <header className="mdc-dialog__header">
                <h2 id="mdc-dialog-default-label" className="mdc-dialog__header__title">
                  Are you happy?
                </h2>
              </header>
              <section id="mdc-dialog-default-description" className="mdc-dialog__body">
                Please check the left and right side of this element for fun.
              </section>
              <footer className="mdc-dialog__footer">
                <button
                  type="button"
                  className="mdc-button mdc-dialog__footer__button mdc-dialog__footer__button--cancel mdc-ripple-upgraded"
                >Cancel
                </button>
                <button
                  type="button"
                  className="mdc-button mdc-dialog__footer__button mdc-dialog__footer__button--accept mdc-ripple-upgraded"
                >Continue
                </button>
              </footer>
            </div>
          </aside>
        </Demo>
        {this.renderTable()}
        <OriginalDoc
          name="Dialog"
          href="mdc-dialog"
        />
        <Elevation
          zSpace="2"
        >
          <TypographyDisplay size="1">Dialog</TypographyDisplay>
          <Example
            title={'Dialog'}
            code={code.dialog.source1}
          >
            <Button primary raised ripple onClick={this.handle}>Show Dialog</Button>
            <Dialog
              open={open}
              onAccept={this.handleAccept}
              onCancel={this.handleCancel}
              onOpen={this.handleOpen}
              onClose={this.handleClose}
            >
              <DialogSurface>
                <DialogHeader>
                  <DialogTitle>
                    Use Google's location service?
                  </DialogTitle>
                </DialogHeader>
                <DialogBody>
                  Let Google help apps determine location. This means sending anonymous location data
                  to Google, even when no apps are running.
                </DialogBody>
                <DialogFooter>
                  <DialogFooterButton cancel>Decline</DialogFooterButton>
                  <DialogFooterButton accept>Accept</DialogFooterButton>
                </DialogFooter>
              </DialogSurface>
            </Dialog>
          </Example>
          <Example
            title={'Dialog with List'}
            code={code.dialog.source2}
          >
            <Button primary raised ripple onClick={this.handleScroll}>Show Scrolling Dialog</Button>
            <Dialog
              open={openScroll}
              onAccept={this.handleAccept}
              onCancel={this.handleCancel}
              onOpen={this.handleOpenScroll}
              onClose={this.handleCloseScroll}
            >
              <DialogSurface>
                <DialogHeader>
                  <DialogTitle>
                    Choose?
                  </DialogTitle>
                </DialogHeader>
                <DialogBody scrollable>
                  <List>
                    <ListItem>Item 1</ListItem>
                    <ListItem>Item 2</ListItem>
                    <ListItem>Item 3</ListItem>
                    <ListItem>Item 4</ListItem>
                    <ListItem>Item 5</ListItem>
                  </List>
                </DialogBody>
                <DialogFooter>
                  <DialogFooterButton cancel>Decline</DialogFooterButton>
                  <DialogFooterButton accept>Accept</DialogFooterButton>
                </DialogFooter>
              </DialogSurface>
            </Dialog>
          </Example>
          <Example
            title={'Full Page Dialog'}
            code={code.dialog.source1}
          >
            <Button primary raised ripple onClick={this.handleFullPage}>Show Dialog</Button>
            <Dialog
              open={openFullPage}
              onAccept={this.handleAccept}
              onCancel={this.handleCancel}
              onOpen={this.handleOpenFullPage}
              onClose={this.handleCloseFullPage}
              fullPage
            >
              <DialogSurface>
                <Toolbar
                  fixed
                >
                  <ToolbarRow>
                    <ToolbarSection start>
                      {/*Todo: need this ToolbarIcon +  DialogFooterButton => DialogHeaderButton*/}
                      <ToolbarIcon
                        menu
                        className='mdc-dialog__footer__button mdc-dialog__footer__button--cancel'
                        style={{
                          'cursor': 'pointer'
                        }}
                      >clear</ToolbarIcon>
                      <ToolbarTitle>Title</ToolbarTitle>
                    </ToolbarSection>
                    <ToolbarSection end>
                      <DialogFooterButton accept>
                        Accept
                      </DialogFooterButton>
                    </ToolbarSection>
                  </ToolbarRow>
                </Toolbar>
                <ToolbarMain fixed>
                  <h3>Is Top</h3>
                  <p>
                    Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis
                    egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante.
                    Donec
                    eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Pellentesque
                    habitant
                    morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum
                    tortor
                    quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet
                    quam
                    egestas semper. Aenean ultricies mi vitae est.
                  </p>
                  <p>
                    Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis
                    egestas.
                    Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu
                    libero
                    sit amet quam egestas semper. Aenean ultricies mi vitae est. Pellentesque habitant morbi
                    tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor
                    quam,
                    feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam
                    egestas
                    semper. Aenean ultricies mi vitae est.
                  </p>
                </ToolbarMain>
              </DialogSurface>
            </Dialog>
          </Example>
        </Elevation>
        <Footer/>
      </section>
    )
  }
}
