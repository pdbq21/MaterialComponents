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
  TypographyDisplay,
} from '../lib'
import {OriginalDoc, Footer, Example} from '../templates'

export default class DialogPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      openScroll: false,
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
      used: {
        source1: `import React, {Component} from 'react'
import {
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  DialogFooterButton,
  DialogSurface,
  DialogTitle,
} from '../lib'

export default class DialogExample extends Component {
constructor(props) {
    super(props);
    this.state = {
      open: false,
    }
    this.handle = this.handle.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleAccept = this.handleAccept.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
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

  handleAccept() {
    console.log("Accept");
  }

  handleCancel() {
    console.log("Decline");
  }
  
  render() {
  const {open} = this.state;
    return (
      <div>
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
      </div>
    );
  }
}`,
        source2: `import React, {Component} from 'react'
import {
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  DialogFooterButton,
  DialogSurface,
  DialogTitle,
} from '../lib'

export default class DialogWithScrollExample extends Component {
constructor(props) {
    super(props);
    this.state = {
      openScroll: false,
    }
    this.handleAccept = this.handleAccept.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
    this.handleOpenScroll = this.handleOpenScroll.bind(this);
    this.handleCloseScroll = this.handleCloseScroll.bind(this);
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

  handleAccept() {
    console.log("Accept");
  }

  handleCancel() {
    console.log("Decline");
  }
  
  render() {
  const {openScroll} = this.state;
    return (
      <div>
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
                  <DialogFooterButton cancel >Decline</DialogFooterButton>
                  <DialogFooterButton accept >Accept</DialogFooterButton>
                </DialogFooter>
              </DialogSurface>
            </Dialog>
      </div>
    );
  }
}`
      }
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

  handleAccept() {
    console.log("Accept");
  }

  handleCancel() {
    console.log("Decline");
  }

  render() {
    const {open, openScroll, used} = this.state;
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
          <aside className="mdc-dialog mdc-dialog--open"
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
                  >Cancel</button>
                <button
                  type="button"
                  className="mdc-button mdc-dialog__footer__button mdc-dialog__footer__button--accept mdc-ripple-upgraded"
                  >Continue</button>
              </footer>
            </div>
          </aside>
        </Elevation>
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
            code={used.source1}
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
            code={used.source2}
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
                  <DialogFooterButton cancel >Decline</DialogFooterButton>
                  <DialogFooterButton accept >Accept</DialogFooterButton>
                </DialogFooter>
              </DialogSurface>
            </Dialog>
          </Example>
        </Elevation>
        <Footer/>
      </section>
    )
  }
}
