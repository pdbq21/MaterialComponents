/**
 * Created by ruslan on 02.07.17.
 */

export const code = {
  'typography': {
    source1: `import React, {Component} from 'react'
import {
  Typography,
  TypographyDisplay,
  TypographyHeadline,
  TypographyTitle,
  TypographySubheading,
  TypographyBody,
  TypographyCaption
} from '../lib'

export default class TypographyExample extends Component {

  render() {
    return (
      <div>
      <Typography >
              <TypographyDisplay size="4">Display 4</TypographyDisplay>
              <TypographyDisplay size="3">Display 3</TypographyDisplay>
              <TypographyDisplay size="2">Display 2</TypographyDisplay>
              <TypographyDisplay size="1">Display 1</TypographyDisplay>
              <TypographyHeadline>Headline</TypographyHeadline>
              <TypographyTitle>
                Title
                <TypographyCaption> Caption</TypographyCaption>
              </TypographyTitle>
              <TypographySubheading size="2">Subheading 2</TypographySubheading>
              <TypographySubheading size="1">Subheading 1</TypographySubheading>
              <TypographyBody size='1'>
                Body 1 paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur.
              </TypographyBody>
              <TypographyBody size='2'>Body 2 text, calling something out.</TypographyBody>
            </Typography>
      </div>
    );
  }
}`,
    source2: `import React, {Component} from 'react'
import {
  Typography,
  TypographyDisplay,
  TypographyHeadline,
  TypographyTitle,
  TypographySubheading,
  TypographyBody,
  TypographyCaption
} from '../lib'

export default class TypographyExample extends Component {

  render() {
    return (
      <div>
      <Typography>
            <TypographyDisplay size="4" adjustMargin>Display 4</TypographyDisplay>
            <TypographyDisplay size="3" adjustMargin>Display 3</TypographyDisplay>
            <TypographyDisplay size="2" adjustMargin>Display 2</TypographyDisplay>
            <TypographyDisplay size="1" adjustMargin>Display 1</TypographyDisplay>
            <TypographyHeadline adjustMargin>Headline</TypographyHeadline>
            <TypographyTitle adjustMargin>
              Title
              <TypographyCaption adjustMargin> Caption</TypographyCaption>
            </TypographyTitle>
            <TypographySubheading size="2" adjustMargin>Subheading 2</TypographySubheading>
            <TypographySubheading size="1" adjustMargin>Subheading 1</TypographySubheading>
            <TypographyBody size='1' adjustMargin>
              Body 1 paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur.
            </TypographyBody>
            <TypographyBody size='2' adjustMargin>Body 2 text, calling something out.</TypographyBody>
          </Typography>
      </div>
    );
  }
}`
  },
  'theme': {
    source1: `import React, {Component} from 'react'
import {
  Theme
} from '../lib'

export default class ThemeExample extends Component {


  render() {
    return (
      <div>
      <Theme
              primary
            >
              <div
                style={{
                  'display': 'inline-block',
                  'boxSizing': 'border-box',
                  'width': '130px',
                  'marginBottom': '1em',
                  'height': '50px',
                  'lineHeight': '50px',
                  'textAlign': 'center',
                  'border': '1px solid #f0f0f0'
                }}
              >
                Primary
              </div>
            </Theme>
            <Theme
              accent
            >
              <div
                style={{
                  'display': 'inline-block',
                  'boxSizing': 'border-box',
                  'width': '130px',
                  'marginBottom': '1em',
                  'height': '50px',
                  'lineHeight': '50px',
                  'textAlign': 'center',
                  'border': '1px solid #f0f0f0'
                }}
              >
                Accent
              </div>
            </Theme>
      </div>
    );
  }
}`,
    source2: `import React, {Component} from 'react'
import {
  Theme
} from '../lib'

export default class ThemeExample extends Component {


  render() {
    return (
      <div>
      <Theme
              primaryBg
            >
              <div
                style={{
                  'width': '130px',
                  'height': '50px',
                  'border': '1px solid #f0f0f0'
                }}
              >Primary
              </div>
            </Theme>
            <Theme
              accentBg
            >
              <div
                style={{
                  'width': '130px',
                  'height': '50px',
                  'border': '1px solid #f0f0f0'
                }}
              >Accent</div>
            </Theme>
            <Theme
              background
            >
              <div
                style={{
                  'width': '130px',
                  'height': '50px',
                  'border': '1px solid #f0f0f0'
                }}
              >Background</div>
            </Theme>
      </div>
    );
  }
}`,
    source4: `import React, {Component} from 'react'
import {
  Theme
} from '../lib'

export default class ThemeExample extends Component {


  render() {
    return (
      <div>
      <Theme
              style={{
                'padding': '16px',
                'border': '1px solid #f0f0f0'
              }}
              elementType="div"
              background
            >
              <Theme
                primaryBackground
              >
                            <span
                              style={{
                                'padding': '5px'
                              }}
                            >primaryBackground</span>
              </Theme>
              <Theme
                secondaryBackground
              >
                            <span
                              style={{
                                'padding': '5px'
                              }}
                            >secondaryBackground</span>
              </Theme>
              <Theme
                hintBackground
              >
                        <span
                          style={{
                            'padding': '5px'
                          }}
                        >hintBackground</span>
              </Theme>
              <Theme
                disabledBackground
              >
                        <span
                          style={{
                            'padding': '5px'
                          }}
                        >disabledBackground</span>
              </Theme>
              <Theme
                iconBackground
              >
                        <span
                          style={{
                            'padding': '5px'
                          }}

                          className="material-icons"
                        >favorite</span>
              </Theme>
            </Theme>
      </div>
    );
  }
}`,
    source5: `import React, {Component} from 'react'
import {
  Theme
} from '../lib'

export default class ThemeExample extends Component {


  render() {
    return (
      <div>
      <Theme
              style={{
                'padding': '16px',
                'border': '1px solid #f0f0f0'
              }}
              elementType="div"
            >
              <Theme
                primaryLight
              >
                            <span
                              style={{
                                'padding': '5px'
                              }}
                            >primaryLight</span>
              </Theme>
              <Theme
                secondaryLight
              >
                            <span
                              style={{
                                'padding': '5px'
                              }}
                            >secondaryLight</span>
              </Theme>
              <Theme
                hintLight
              >
                        <span
                          style={{
                            'padding': '5px'
                          }}
                        >hintLight</span>
              </Theme>
              <Theme
                disabledLight
              >
                        <span
                          style={{
                            'padding': '5px'
                          }}
                        >disabledLight</span>
              </Theme>
              <Theme
                iconLight
              >
                        <span
                          style={{
                            'padding': '5px'
                          }}

                          className="material-icons"
                        >favorite</span>
              </Theme>
            </Theme>
      </div>
    );
  }
}`,
    source6: `import React, {Component} from 'react'
import {
  Theme
} from '../lib'

export default class ThemeExample extends Component {


  render() {
    return (
      <div>
      <Theme
              style={{
                'padding': '16px'
              }}
              elementType="div"
              accentBg
            >
              <Theme
                primaryAccent
              >
                            <span
                              style={{
                                'padding': '5px'
                              }}
                            >primaryAccent</span>
              </Theme>
              <Theme
                secondaryAccent
              >
                            <span
                              style={{
                                'padding': '5px'
                              }}
                            >secondaryBackground</span>
              </Theme>
              <Theme
                hintAccent
              >
                        <span
                          style={{
                            'padding': '5px'
                          }}
                        >hintAccent</span>
              </Theme>
              <Theme
                disabledAccent
              >
                        <span
                          style={{
                            'padding': '5px'
                          }}
                        >disabledAccent</span>
              </Theme>
              <Theme
                iconAccent
              >
                        <span
                          style={{
                            'padding': '5px'
                          }}

                          className="material-icons"
                        >favorite</span>
              </Theme>
            </Theme>
      </div>
    );
  }
}`,
    source7: `import React, {Component} from 'react'
import {
  Theme
} from '../lib'

export default class ThemeExample extends Component {


  render() {
    return (
      <div>
      <Theme
              style={{
                'padding': '16px',
                'background': 'black'
              }}
              elementType="div"
              dark
            >
              <Theme
                primaryDark
              >
                            <span
                              style={{
                                'padding': '5px'
                              }}
                            >primaryDark</span>
              </Theme>
              <Theme
                secondaryDark
              >
                            <span
                              style={{
                                'padding': '5px'
                              }}
                            >secondaryDark</span>
              </Theme>
              <Theme
                hintDark
              >
                        <span
                          style={{
                            'padding': '5px'
                          }}
                        >hintDark</span>
              </Theme>
              <Theme
                disabledDark
              >
                        <span
                          style={{
                            'padding': '5px'
                          }}
                        >disabledDark</span>
              </Theme>
              <Theme
                iconDark
              >
                        <span
                          style={{
                            'padding': '5px'
                          }}

                          className="material-icons"
                        >favorite</span>
              </Theme>
            </Theme>
      </div>
    );
  }
}`,
  },
  'textfield': {
    source1: `import React, {Component} from 'react'
import {
  Typography,
  TypographyDisplay,
  TypographyHeadline,
  TypographyTitle,
  TypographySubheading,
  TypographyBody,
  TypographyCaption
} from '../lib'

export default class TypographyExample extends Component {
constructor(props) {
    super(props);
    this.state = {
      valueInput: 0,
    }
    this.handleOptions = this.handleOptions.bind(this);
  }
    handleOptions(option, value) {
    const newValue = (value) ? value : !this.state.options[option];
    this.setState({
      options: {
        ...this.state.options,
        [option]: newValue
      }
    })
  }

  render() {
    const {
      valueInput,
    } = this.state;
    return (
      <div>
      <Textfield upgraded>
              <TextfieldInput
                id="demo-full-textfield"
                name="email"
                aria-controls="my-textfield-helptext"
                required
              />
              <TextfieldLabel
                htmlFor="demo-full-textfield"
              >
                Email Address
              </TextfieldLabel>
            </Textfield>
            <TextfieldHelptext
              aria-hidden="true"
              persistent
              validation
            >
              Help Text (possibly validation message)
            </TextfieldHelptext>
            <Elevation
              style={{
                'display': 'flex',
                'flexFlow': 'column nowrap',
              }}
            >
              <FormField>
                <Checkbox
                  ripple
                >
                  <CheckboxInput
                    checked={isDisabled}
                    onChange={this.handleChangeDisabled}
                  />
                  <CheckboxBG/>
                </Checkbox>
                <CheckboxLabel>
                  Disabled
                </CheckboxLabel>
              </FormField>
              <FormField>
                <Checkbox
                  ripple
                >
                  <CheckboxInput
                    checked={isDense}
                    onChange={this.handleChangeDense}
                  />
                  <CheckboxBG/>
                </Checkbox>
                <CheckboxLabel>
                  Dense
                </CheckboxLabel>
              </FormField>
              <FormField>
                <Checkbox
                  ripple
                >
                  <CheckboxInput
                    checked={isRequired}
                    onChange={this.handleChangeRequired}
                  />
                  <CheckboxBG/>
                </Checkbox>
                <CheckboxLabel>
                  Required
                </CheckboxLabel>
              </FormField>
              <FormField>
                <Checkbox
                  ripple
                >
                  <CheckboxInput
                    checked={isHelper}
                    onChange={this.handleChangeHelper}
                  />
                  <CheckboxBG/>
                </Checkbox>
                <CheckboxLabel>
                  Use Helper Text
                </CheckboxLabel>
              </FormField>
              <FormField>
                <Checkbox
                  ripple
                >
                  <CheckboxInput
                    checked={isHelperPersistent}
                    onChange={this.handleChangeHelperPersistent}
                  />
                  <CheckboxBG/>
                </Checkbox>
                <CheckboxLabel>
                  Make helper text persistent
                </CheckboxLabel>
              </FormField>
              <FormField>
                <Checkbox
                  ripple
                >
                  <CheckboxInput
                    checked={isHelperValidation}
                    onChange={this.handleChangeHelperValidation}
                  />
                  <CheckboxBG/>
                </Checkbox>
                <CheckboxLabel>
                  Use helper text as validation message
                </CheckboxLabel>
              </FormField>
            </Elevation>
      </div>
    );
  }
}`,
    source2: ``,
    source3: ``,
    source4: ``,
    source5: ``,
    source6: ``,
    source7: ``,

  },
  'tabs': {
    source1: `import React, {Component} from 'react'
import {
  TabBar,
  Tab,
  TabIndicator,
} from '../lib'

export default class TabsExample extends Component {  
  render() {
    return (
      <div>
          <TabBar>
              <Tab ripple active>Home</Tab>
              <Tab ripple>Merchandise</Tab>
              <Tab ripple>About Us</Tab>
              <TabIndicator/>
            </TabBar>
      </div>
    );
  }
}`,
    source2: `import React, {Component} from 'react'
import {
  TabBar,
  Tab,
  TabIndicator,
} from '../lib'

export default class TabsExample extends Component {  
  render() {
    return (
      <div>
          <TabBar cssOnly>
              <Tab cssOnly active>Home</Tab>
              <Tab cssOnly>Merchandise</Tab>
              <Tab cssOnly>About Us</Tab>
              <TabIndicator/>
            </TabBar>
      </div>
    );
  }
}`,
    source3: `import React, {Component} from 'react'
import {
  TabBar,
  Tab,
  TabIndicator,
  TabBarScroll,
  TabBarScrollIndicator,
  TabBarScrollInner,
  TabBarScrollFrame
} from '../lib'

export default class TabsExample extends Component {  
  render() {
    return (
      <div>
          <TabBarScroll>
              <TabBarScrollIndicator back>
                <TabBarScrollInner>
                  navigate_before
                </TabBarScrollInner>
              </TabBarScrollIndicator>
              <TabBarScrollFrame>
                <TabBar scroll>
                  <Tab ripple active>Item One</Tab>
                  <Tab ripple>Item Two</Tab>
                  <Tab ripple>Item Three</Tab>
                  <Tab ripple>Item Four</Tab>
                  <Tab ripple>Item Five</Tab>
                  <Tab ripple>Item Six</Tab>
                  <Tab ripple>Item Seven</Tab>
                  <Tab ripple>Item Eight</Tab>
                  <Tab ripple>Item Nine</Tab>
                  <TabIndicator/>
                </TabBar>
              </TabBarScrollFrame>
              <TabBarScrollIndicator forward>
                <TabBarScrollInner>
                  navigate_next
                </TabBarScrollInner>
              </TabBarScrollIndicator>
            </TabBarScroll>
      </div>
    );
  }
}`,
    source4: `import React, {Component} from 'react'
import {
  TabBar,
  Tab,
  TabIndicator,
  TabIcon
} from '../lib'

export default class TabsExample extends Component {  
  render() {
    return (
      <div>
          <TabBar iconTab>
              <Tab ripple active>
                <TabIcon>phone</TabIcon>
              </Tab>
              <Tab ripple>
                <TabIcon  >favorite</TabIcon>
              </Tab>
              <Tab ripple>
                <TabIcon >person_pin</TabIcon>
              </Tab>
              <TabIndicator/>
          </TabBar>
      </div>
    );
  }
}`,
    source5: `import React, {Component} from 'react'
import {
  TabBar,
  Tab,
  TabIndicator,
  TabIcon
} from '../lib'

export default class TabsExample extends Component {  
  render() {
    return (
      <div>
          <TabBar cssOnly iconTab>
              <Tab cssOnly active>
                <TabIcon>phone</TabIcon>
              </Tab>
              <Tab cssOnly>
                <TabIcon  >favorite</TabIcon>
              </Tab>
              <Tab cssOnly>
                <TabIcon >person_pin</TabIcon>
              </Tab>
              <TabIndicator/>
            </TabBar>
      </div>
    );
  }
}`,
    source6: `import React, {Component} from 'react'
import {
  TabBar,
  Tab,
  TabIndicator,
  TabIcon,
  TabText
} from '../lib'

export default class TabsExample extends Component {  
  render() {
    return (
      <div>
          <TabBar iconText>
              <Tab ripple iconText active>
                <TabIcon>phone</TabIcon>
                <TabText>Recents</TabText>
              </Tab>
              <Tab ripple iconText>
                <TabIcon>favorite</TabIcon>
                <TabText>Favorites</TabText>
              </Tab>
              <Tab ripple iconText>
                <TabIcon>person_pin</TabIcon>
                <TabText>Nearby</TabText>
              </Tab>
              <TabIndicator/>
            </TabBar>
      </div>
    );
  }
}`,
    source7: `import React, {Component} from 'react'
import {
  TabBar,
  Tab,
  TabIndicator,
} from '../lib'

export default class TabsExample extends Component {  
  render() {
    return (
      <div>
          <TabBar primary>
              <Tab ripple active>Home</Tab>
              <Tab ripple>Merchandise</Tab>
              <Tab ripple>About Us</Tab>
              <TabIndicator/>
            </TabBar>
      </div>
    );
  }
}`,
    source8: `import React, {Component} from 'react'
import {
  TabBar,
  Tab,
  TabIndicator,
} from '../lib'

export default class TabsExample extends Component {  
  render() {
    return (
      <div>
          <TabBar accent>
              <Tab ripple active>Home</Tab>
              <Tab ripple>Merchandise</Tab>
              <Tab ripple>About Us</Tab>
              <TabIndicator/>
            </TabBar>
      </div>
    );
  }
}`,
    source9: `import React, {Component} from 'react'
import {
  TabBar,
  Tab,
  TabIndicator,
  Toolbar,
  ToolbarRow,
  ToolbarSection,
  ToolbarTitle,
} from '../lib'

export default class TabsExample extends Component {  
  render() {
    return (
      <div>
          <Toolbar>
              <ToolbarRow>
                <ToolbarSection shrink start>
                  <ToolbarTitle>Title</ToolbarTitle>
                </ToolbarSection>
                <ToolbarSection end>
                  <div>
                    <TabBar>
                      <Tab ripple active>Home</Tab>
                      <Tab ripple>Merchandise</Tab>
                      <Tab ripple>About Us</Tab>
                      <TabIndicator/>
                    </TabBar>
                  </div>
                </ToolbarSection>
              </ToolbarRow>
            </Toolbar>
      </div>
    );
  }
}`,
    source10: `import React, {Component} from 'react'
import {
  TabBar,
  Tab,
  TabIndicator,
  Toolbar,
  ToolbarRow,
  ToolbarSection,
  ToolbarTitle,
} from '../lib'

export default class TabsExample extends Component {  
  render() {
    return (
      <div>
          <Toolbar>
              <ToolbarRow>
                <ToolbarSection shrink start>
                  <ToolbarTitle>Title</ToolbarTitle>
                </ToolbarSection>
                <ToolbarSection
                  style={{
                    'position': 'absolute',
                    'right': 0,
                    'bottom': '-16px'
                  }}
                >
                  <TabBar>
                    <Tab ripple active>Home</Tab>
                    <Tab ripple>Merchandise</Tab>
                    <Tab ripple>About Us</Tab>
                    <TabIndicator/>
                  </TabBar>
                </ToolbarSection>
              </ToolbarRow>
            </Toolbar>
      </div>
    );
  }
}`,
    source11: `import React, {Component} from 'react'
import {
  TabBar,
  Tab,
  TabIndicator,
  Toolbar,
  ToolbarRow,
  ToolbarSection,
  ToolbarTitle,
} from '../lib'

export default class TabsExample extends Component {  
  render() {
    return (
      <div>
          <Toolbar>
              <ToolbarRow>
                <ToolbarSection shrink start>
                  <ToolbarTitle>Title</ToolbarTitle>
                </ToolbarSection>
                <ToolbarSection end>
                  <div>
                    <TabBar accent>
                      <Tab ripple active>Home</Tab>
                      <Tab ripple>Merchandise</Tab>
                      <Tab ripple>About Us</Tab>
                      <TabIndicator/>
                    </TabBar>
                  </div>
                </ToolbarSection>
              </ToolbarRow>
            </Toolbar>
      </div>
    );
  }
}`,
  },
  'switch': {
    source1: `import React, {Component} from 'react'
import {
  Switch,
  SwitchInput,
  SwitchLabel,
} from '../lib'

export default class SwitchExample extends Component {
constructor(props) {
    super(props);
    this.state = {
      isSwitch: false,
    }
  }

  render() {
    const {
      isSwitch,
    } = this.state;
    return (
      <div>
        <Switch>
              <SwitchInput
                onChange={() => this.setState({
                  isSwitch: !isSwitch,
                })}
              />
            </Switch>
        <SwitchLabel>{(isSwitch) ? 'On' : 'Off'}</SwitchLabel>
      </div>
    );
  }
}`,
    source2: `import React, {Component} from 'react'
import {
  Switch,
  SwitchInput,
  SwitchLabel,
} from '../lib'

export default class SwitchExample extends Component {

  render() {
    return (
      <div>
        <Switch disabled>
            <SwitchInput disabled/>
        </Switch>
        <SwitchLabel>disabled</SwitchLabel>
      </div>
    );
  }
}`,
  },
  'snackbar': {
    source1: `import React, {Component} from 'react'
import {
  Snackbar,
  SnackbarText,
  SnackbarActionWrapper,
  SnackbarActionButton,
  Elevation,
  Button,
  Checkbox,
  CheckboxInput,
  CheckboxBG,
  CheckboxLabel,
  FormField,
  Textfield,
  TextfieldInput,
  TextfieldLabel,
} from '../lib'

export default class SnackbarExample extends Component {
constructor(props) {
        super(props);
        this.state = {
            open: false,
            checkedMultiline: false,
            checkedAction: false,
            valueMessage: 'default message',
            valueAction: 'action',
            valueTimeout: '2750',//default
        }
        this.handel = this.handel.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handelAction = this.handelAction.bind(this);
        this.handleChangeMessage = this.handleChangeMessage.bind(this);
        this.handleChangeAction = this.handleChangeAction.bind(this);
        this.handleChangeTimeout = this.handleChangeTimeout.bind(this);
        this.handleChangeCheckedMultiline = this.handleChangeCheckedMultiline.bind(this);
        this.handleChangeCheckedAction = this.handleChangeCheckedAction.bind(this);
    }
    
    handel() {
        this.setState({
            open: !this.state.open
        })
    }

    handleChangeMessage({target}) {
        this.setState({
            valueMessage: target.value
        })
    }

    handleChangeAction({target}) {
        this.setState({
            valueAction: target.value
        })
    }

    handleChangeTimeout({target}) {
        this.setState({
            valueTimeout: target.value
        })
    }

    handleChangeCheckedMultiline() {
        this.setState({
            checkedMultiline: !this.state.checkedMultiline
        })
    }

    handleChangeCheckedAction() {
        this.setState({
            checkedAction: !this.state.checkedAction
        })
    }

    handelAction() {
        console.log('action')
    }

    handleClose() {
        this.setState({
            open: false
        })
    }
    render() {
            const {
            open,
            checkedMultiline,
            checkedAction,
            valueMessage,
            valueAction,
            valueTimeout,
        } = this.state;
    return (
      <div>
      <Button primary raised onClick={this.handel}>Show Snackbar</Button>

            <Snackbar
              open={open}
              message={valueMessage}
              timeout={valueTimeout}
              actionHandler={this.handelAction}
              actionText={valueAction}
              multiline={checkedMultiline}
              actionOnBottom={checkedAction}
              onClose={this.handleClose}
              aria-live="assertive"
              aria-atomic="true"
            >
              <SnackbarText/>
              <SnackbarActionWrapper>
                <SnackbarActionButton/>
              </SnackbarActionWrapper>
            </Snackbar>
            <Elevation
              style={{
                'display': 'flex',
                'flexFlow': 'column nowrap',
              }}
            >
              <FormField>
                <Checkbox
                  ripple
                >
                  <CheckboxInput
                    checked={checkedMultiline}
                    onChange={this.handleChangeCheckedMultiline}

                  />
                  <CheckboxBG/>
                </Checkbox>
                <CheckboxLabel>
                  Multiline
                </CheckboxLabel>
              </FormField>
              <FormField>
                <Checkbox
                  ripple
                >
                  <CheckboxInput
                    checked={checkedAction}
                    onChange={this.handleChangeCheckedAction}
                  />
                  <CheckboxBG/>
                </Checkbox>
                <CheckboxLabel>
                  Action On Bottom
                </CheckboxLabel>
              </FormField>
              <FormField>
                <Textfield>
                  <TextfieldInput
                    type="text"
                    value={valueMessage || ''}
                    onChange={this.handleChangeMessage}
                  />
                  <TextfieldLabel>Message Text</TextfieldLabel>
                </Textfield>
              </FormField>
              <FormField>
                <Textfield>
                  <TextfieldInput
                    type="text"
                    value={valueAction || ''}
                    onChange={this.handleChangeAction}
                  />
                  <TextfieldLabel>Action Text</TextfieldLabel>
                </Textfield>
              </FormField>
              <FormField>
                <Textfield>
                  <TextfieldInput
                    type="text"
                    value={valueTimeout || ''}
                    onChange={this.handleChangeTimeout}
                  />
                  <TextfieldLabel>Timeout</TextfieldLabel>
                </Textfield>
              </FormField>
            </Elevation>
      </div>
    );
  }
}`
  },
  'slider': {
    source1: `import React, {Component} from 'react'
import {
  Elevation,
  Slider,
  SliderContainerTrack,
  SliderContainerThumb,
  SliderFocusRing,
  SliderThumb,
  SliderTrack,
  FormField,
  Checkbox,
  CheckboxInput,
  CheckboxBG,
  CheckboxLabel,
  Textfield,
  TextfieldInput,
  TextfieldLabel,
} from '../lib'

export default class ContinuousSlider extends Component {
constructor(props) {
    super(props);
    this.state = {
      valueInput: 0,
      valueChange: 0,
      isActive: {
        source1: false,
      },
      options: {
        bgColor: false,
        disabled: false,
        min: 0,
        max: 100,
        step: 0,
      },
    }
    this.handleOptions = this.handleOptions.bind(this);
  }
    handleOptions(option, value) {
    const newValue = (value) ? value : !this.state.options[option];
    this.setState({
      options: {
        ...this.state.options,
        [option]: newValue
      }
    })
  }

  render() {
    const {
      valueInput,
      valueChange,
      isActive: {
        source1
      },
      options: {
        bgColor,
        disabled,
        min,
        max,
        step,
      },
    } = this.state;
    return (
      <div>
              <Slider
                style={{
                  'backgroundColor': (bgColor) ? '#eeefff' : '',
                }}
                disabled={disabled}
                onSliderInput={(value) => this.setState({
                  valueInput: value
                })}
                onSliderChange={(value) => this.setState({
                  valueChange: value
                })}
                aria-valuemin={min}
                aria-valuemax={max}
                data-step={step}
                aria-label="Select Value"
              >
                <SliderContainerTrack>
                  <SliderTrack/>
                </SliderContainerTrack>
                <SliderContainerThumb>
                  <SliderThumb circle/>
                  <SliderFocusRing/>
                </SliderContainerThumb>
              </Slider>
              <Elevation
                style={{
                  'display': 'flex',
                  'flexFlow': 'column nowrap',
                }}
              >
                <FormField>
                  <Textfield>
                    <TextfieldInput
                      type="number"
                      value={min}
                      onChange={({target}) => this.handleOptions('min', target.value)}
                    />
                    <TextfieldLabel>Min</TextfieldLabel>
                  </Textfield>
                </FormField>
                <FormField>
                  <Textfield>
                    <TextfieldInput
                      type="number"
                      value={max}
                      onChange={({target}) => this.handleOptions('max', target.value)}
                    />
                    <TextfieldLabel>Max</TextfieldLabel>
                  </Textfield>
                </FormField>
                <FormField>
                  <Textfield>
                    <TextfieldInput
                      type="number"
                      value={step}
                      onChange={({target}) => this.handleOptions('step', target.value)}
                    />
                    <TextfieldLabel>Step</TextfieldLabel>
                  </Textfield>
                </FormField>
                <FormField>
                  <Checkbox
                    ripple
                  >
                    <CheckboxInput
                      checked={disabled}
                      onChange={() => this.handleOptions('disabled')}
                    />
                    <CheckboxBG/>
                  </Checkbox>
                  <CheckboxLabel>
                    Disabled
                  </CheckboxLabel>
                </FormField>
                <FormField>
                  <Checkbox
                    ripple
                  >
                    <CheckboxInput
                      checked={bgColor}
                      onChange={() => this.handleOptions('bgColor')}
                    />
                    <CheckboxBG/>
                  </Checkbox>
                  <CheckboxLabel>
                    Use Custom BG Color
                  </CheckboxLabel>
                </FormField>
                <FormField>
                  onSliderInput: {valueInput}
                </FormField>
                <FormField>
                  onSliderChange: {valueChange}
                </FormField>
              </Elevation>
      </div>
    );
  }
}`,
  },
  'menu': {
    source1: `import React, {Component} from 'react'
import {
  SimpleMenu,
  SimpleMenuItems,
  SimpleMenuListItem,
  SimpleMenuAnchor,
  Button,
  TypographyBody,
} from '../lib'

export default class MenuExample extends Component {
constructor(props) {
    super(props);
    this.state = {
      open: false,
      select: {},
    }
    this.handleSelected = this.handleSelected.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }
  
  handleSelected(data) {
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
    const {
      open, select
    } = this.state;
    return (
      <div>
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
            <TypographyBody>
              {\`Selected item: \${(select.index || select.index === 0) ?
                \`index \${select.index}\` : 'none'} - \${(select.item) ? select.item.innerText : 'selected'}\`}
</TypographyBody>
      </div>
    );
  }
}`,
    source2: `import React, {Component} from 'react'
import {
  SimpleMenu,
  SimpleMenuItems,
  SimpleMenuListItem,
  SimpleMenuAnchor,
  Button,
  Radio,
  RadioInput,
  FormField,
  TypographyBody
} from '../lib'

export default class MenuExample extends Component {
constructor(props) {
    super(props);
    this.state = {
      openAnchor: false,
      styles: {},
      selectAnchor: {}
    }
    this.handlePosition = this.handlePosition.bind(this);
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
    const {
      openAnchor, styles, selectAnchor
    } = this.state;
    return (
      <div>
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
                    selectAnchor: data,
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
            <TypographyBody>
              {\`Selected item: \${(selectAnchor.index || selectAnchor.index === 0) ?
                \`index \${selectAnchor.index}\` : 'none'} - \${(selectAnchor.item) ? selectAnchor.item.innerText : 'selected'}\`}
</TypographyBody>
      </div>
    );
  }
}`,
  },
  'select': {
    source1: `import React, {Component} from 'react'
import {
  Select,
  SelectMenu,
  SelectText,
  SelectItems,
  SelectItem,
  ListGroup,
  ListItem,
  Elevation,
  TypographyBody,
  FormField,
  Checkbox,
  CheckboxInput,
  CheckboxBG,
  CheckboxLabel,
} from '../lib'

export default class FullyFeaturedSelect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      disabled: false,
      selected: '',
    }
    this.handleDisabled = this.handleDisabled.bind(this);
    this.handleSelected = this.handleSelected.bind(this);
  }
  handleDisabled(){
    this.setState({
      disabled: !this.state.disabled
    })
  }
  handleSelected({index, item}){
    this.setState({
      selected: \`'\${item.innerText}' at index \${index}\`
    })
  }
  render() {
    return (
      <div>
          <Select
              disabled={disabled}
              onSelected={this.handleSelected}
              onCancel={(event) => console.log(event)}
              onChange={(event) => console.log(event)}
            >
              <SelectText>Pick a food group</SelectText>
              <SelectMenu>
                <SelectItems>
                  <SelectItem disabled>
                    Pick a food group
                  </SelectItem>
                  <SelectItem>
                  Bread, Cereal, Rice, and Pasta
                </SelectItem>
                  <SelectItem>
                    Vegetables
                  </SelectItem>
                  <SelectItem
                    disabled
                  >
                    Fruit (Disabled)
                  </SelectItem>
                  <SelectItem>
                    Milk, Yogurt, and Cheese
                  </SelectItem>
                  <SelectItem>
                    Meat, Poultry, Fish, Dry Beans, Eggs, and Nuts
                  </SelectItem>
                  <SelectItem>
                    Fats, Oils, and Sweets
                  </SelectItem>
                </SelectItems>
              </SelectMenu>
            </Select>
            <Elevation
              style={{
                'display': 'flex',
                'flexFlow': 'column nowrap',
              }}
            >
              <TypographyBody>
                Currently selected: {(selected)? selected : '(none)'}
              </TypographyBody>
              <FormField>
                <Checkbox
                  ripple
                >
                  <CheckboxInput
                    checked={disabled}
                    onChange={this.handleDisabled}
                  />
                  <CheckboxBG/>
                </Checkbox>
                <CheckboxLabel>
                  Disabled
                </CheckboxLabel>
              </FormField>
            </Elevation>
      </div>
    );
  }
}`,
    source2: `import React, {Component} from 'react'
import {
  Select
} from '../lib'

export default class OnlyCSSSelect extends Component {

  render() {
    return (
      <div>
          <Select
              cssOnly
            >
              <option value="" default selected>Pick a food</option>
              <option value="grains">Bread, Cereal, Rice, and Pasta</option>
              <option value="vegetables">Vegetables</option>
              <optgroup label="Fruits">
                <option value="apple">Apple</option>
                <option value="oranges">Orange</option>
                <option value="banana">Banana</option>
              </optgroup>
              <option value="dairy">Milk, Yogurt, and Cheese</option>
              <option value="meat">Meat, Poultry, Fish, Dry Beans, Eggs, and Nuts</option>
              <option value="fats">Fats, Oils, and Sweets</option>
            </Select>
      </div>
    );
  }
}`,
    source3: `import React, {Component} from 'react'
import {
  Select,
  ListGroup,
  ListItem
} from '../lib'

export default class OnlyCSSMultipleSelect extends Component {

  render() {
    return (
      <div>
          <Select cssOnly multiple size="8">
              <ListGroup elementType="optgroup" label="Fats, Oils, &amp; Sweets">
                <ListItem elementType='option' className="mdc-list-item">Olive Oil</ListItem>
                <ListItem elementType='option'>Brown Sugar</ListItem>
                <ListItem elementType='option'>Ice Cream</ListItem>
              </ListGroup>
              <ListDivider elementType='option' role="presentation" disabled=""/>
              <ListGroup elementType="optgroup" label="Dairy">
                <ListItem elementType='option'>Milk</ListItem>
                <ListItem elementType='option'>Cheese</ListItem>
                <ListItem elementType='option'>More Cheese</ListItem>
              </ListGroup>
            </Select>
      </div>
    );
  }
}`,
  },
  'ripple': {
    source1: `import React, {Component} from 'react'
 import {
  Ripple
 } from '../lib'

 export default class RippleExample extends Component {

 render() {
 return (
 <div>
    <Ripple>
              <div className="mdc-elevation--z2"
                   tabIndex="0"
                   style={{
                     'height': '10em',
                     'width': '10em',
                     'display': 'flex',
                     'alignItems': 'center',
                     'justifyContent': 'center',
                   }}
              >
                Interact with me!
              </div>
            </Ripple>
 </div>
 );
 }
 }`,
    source2: `import React, {Component} from 'react'
 import {
  Ripple
 } from '../lib'

 export default class RippleExample extends Component {

 render() {
 return (
 <div>
<Ripple
              unbounded
            >
              <div className="material-icons demo-surface"
                   aria-label="Favorite"
                   tabIndex="0"
              >
                favorite
              </div>
            </Ripple>
 </div>
 );
 }
 }`,
    source3: `import React, {Component} from 'react'
 import {
  Ripple
 } from '../lib'

 export default class RippleExample extends Component {

 render() {
 return (
 <div>
            <Ripple
              primary
            >
              <div className="mdc-elevation--z2"
                   tabIndex="0"
                   style={{
                     'height': '10em',
                     'width': '10em',
                     'display': 'flex',
                     'alignItems': 'center',
                     'justifyContent': 'center',
                   }}
              >
                Primary
              </div>
            </Ripple>
            <Ripple
              accent
            >
              <div className="mdc-elevation--z2"
                   tabIndex="0"
                   style={{
                     'height': '10em',
                     'width': '10em',
                     'display': 'flex',
                     'alignItems': 'center',
                     'justifyContent': 'center',
                   }}
              >
                Accent
              </div>
            </Ripple>
 </div>
 );
 }
 }`,
    source4: `import React, {Component} from 'react'
 import {
  Ripple
 } from '../lib'

 export default class RippleExample extends Component {

 render() {
 return (
 <div>
<Ripple
              onlyCSS
            >
              <div className="mdc-elevation--z2"
                   tabIndex="0"
                   style={{
                     'height': '10em',
                     'width': '10em',
                     'display': 'flex',
                     'alignItems': 'center',
                     'justifyContent': 'center',
                   }}
              >
                Interact with me!
              </div>
            </Ripple>
 </div>
 );
 }
 }`,
    source5: `import React, {Component} from 'react'
 import {
  Ripple
 } from '../lib'

 export default class RippleExample extends Component {

 render() {
 return (
 <div>
<Ripple
              onlyCSS
              unbounded
            >
              <div className="material-icons demo-surface"
                   aria-label="Favorite"
                   tabIndex="0"
              >
                favorite
              </div>
            </Ripple>
 </div>
 );
 }
 }`,
    source6: `import React, {Component} from 'react'
 import {
  Ripple
 } from '../lib'

 export default class RippleExample extends Component {

 render() {
 return (
 <div>
            <Ripple
              onlyCSS
              primary
            >
              <div className="mdc-elevation--z2"
                   tabIndex="0"
                   style={{
                     'height': '10em',
                     'width': '10em',
                     'display': 'flex',
                     'alignItems': 'center',
                     'justifyContent': 'center',
                   }}
              >
                Primary
              </div>
            </Ripple>
            <Ripple
              onlyCSS
              accent
            >
              <div className="mdc-elevation--z2"
                   tabIndex="0"
                   style={{
                     'height': '10em',
                     'width': '10em',
                     'display': 'flex',
                     'alignItems': 'center',
                     'justifyContent': 'center',
                   }}
              >
                Accent
              </div>
            </Ripple>
 </div>
 );
 }
 }`,
  },
  'radio': {
    source1: `import React, {Component} from 'react'
import {
    Radio,
    RadioInput,
    FormField
} from '../lib'

class RadioDemo extends Component {

    render() {
        return (
            <section>
            <FormField>
              <Radio
                ripple
              >
                <RadioInput
                  id="my-radio-demo1"
                  name="radios1"
                />
              </Radio>
              <label id="my-radio-label1" htmlFor="my-radio-demo1">Radio 1</label>
            </FormField>
            <FormField>
              <Radio
                ripple
              >
                <RadioInput
                  id="my-radio-demo2"
                  name="radios1"
                />
              </Radio>
              <label id="my-radio-label2" htmlFor="my-radio-demo2">Radio 2</label>
            </FormField>
            </section>
        )
    }
}`,
    source2: `import React, {Component} from 'react'
import {
    Radio,
    RadioInput,
    FormField
} from '../lib'

class RadioDemo extends Component {

    render() {
        return (
            <section>
<FormField>
              <Radio disabled>
                <RadioInput
                  id="my-radio-demo5"
                  name="radios3"
                  disabled
                  checked
                />
              </Radio>
              <label id="my-radio-label5" htmlFor="my-radio-demo5">Radio 1</label>
              <Radio disabled>
                <RadioInput
                  id="my-radio-demo6"
                  name="radios3"
                  disabled
                />
              </Radio>
              <label id="my-radio-label6" htmlFor="my-radio-demo6">Radio 2</label>
            </FormField>
            </section>
        )
    }
}`,
    source3: `import React, {Component} from 'react'
import {
    Radio,
    RadioInput,
    FormField
} from '../lib'

class RadioDemo extends Component {

    render() {
        return (
            <section>
<FormField>
              <Radio>
                <RadioInput
                  id="my-radio-demo3"
                  name="radios2"

                />
              </Radio>
              <label id="my-radio-label3" htmlFor="my-radio-demo3">Radio 1</label>
              <Radio>
                <RadioInput
                  id="my-radio-demo4"
                  name="radios2"
                />
              </Radio>
              <label id="my-radio-label4" htmlFor="my-radio-demo4">Radio 2</label>
            </FormField>
            </section>
        )
    }
}`,
  },
  'list': {
    source1: `import React, {Component} from 'react'
 import {
  List,
  ListItem,
 } from '../lib'

 export default class ListExample extends Component {
 render() {
 return (
 <div>
 <List>
              <ListItem>Single-line item</ListItem>
              <ListItem>Single-line item</ListItem>
              <ListItem>Single-line item</ListItem>
            </List>
 </div>
 );
 }
 }`,
    source2: `import React, {Component} from 'react'
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
 } from '../lib'

 export default class ListExample extends Component {
 render() {
 return (
 <div>
 <List dense>
              <ListItem>Single-line item</ListItem>
              <ListItem>Single-line item</ListItem>
              <ListItem>Single-line item</ListItem>
            </List>
 </div>
 );
 }
 }`,
    source3: `import React, {Component} from 'react'
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
 } from '../lib'

 export default class ListExample extends Component {
 render() {
 return (
 <div>
 <List>
              <ListItem><ListItemDetail start style={{'backgroundColor': 'grey'}}/>Single-line item</ListItem>
              <ListItem><ListItemDetail start style={{'backgroundColor': 'grey'}}/>Single-line item</ListItem>
              <ListItem><ListItemDetail start style={{'backgroundColor': 'grey'}}/>Single-line item</ListItem>
            </List>
 </div>
 );
 }
 }`,
    source4: `import React, {Component} from 'react'
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
 } from '../lib'

 export default class ListExample extends Component {
 render() {
 return (
 <div>
 <List dense>
              <ListItem><ListItemDetail start style={{'backgroundColor': 'grey'}}/>Single-line item</ListItem>
              <ListItem><ListItemDetail start style={{'backgroundColor': 'grey'}}/>Single-line item</ListItem>
              <ListItem><ListItemDetail start style={{'backgroundColor': 'grey'}}/>Single-line item</ListItem>
            </List>
 </div>
 );
 }
 }`,
    source5: `import React, {Component} from 'react'
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
 } from '../lib'

 export default class ListExample extends Component {
 render() {
 return (
 <div>
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
 </div>
 );
 }
 }`,
    source6: `import React, {Component} from 'react'
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
 } from '../lib'

 export default class ListExample extends Component {
 render() {
 return (
 <div>
 <List avatar>
              <ListItem><ListItemDetail start style={{'backgroundColor': 'grey'}}/>Single-line item</ListItem>
              <ListItem><ListItemDetail start style={{'backgroundColor': 'grey'}}/>Single-line item</ListItem>
              <ListItem><ListItemDetail start style={{'backgroundColor': 'grey'}}/>Single-line item</ListItem>
            </List>
 </div>
 );
 }
 }`,
    source7: `import React, {Component} from 'react'
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
 } from '../lib'

 export default class ListExample extends Component {
 render() {
 return (
 <div>
 <List avatar dense>
              <ListItem><ListItemDetail start style={{'backgroundColor': 'grey'}}/>Single-line item</ListItem>
              <ListItem><ListItemDetail start style={{'backgroundColor': 'grey'}}/>Single-line item</ListItem>
              <ListItem><ListItemDetail start style={{'backgroundColor': 'grey'}}/>Single-line item</ListItem>
            </List>
 </div>
 );
 }
 }`,
    source8: `import React, {Component} from 'react'
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
 } from '../lib'

 export default class ListExample extends Component {
 render() {
 return (
 <div>
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
 </div>
 );
 }
 }`,
    source9: `import React, {Component} from 'react'
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
 } from '../lib'

 export default class ListExample extends Component {
 render() {
 return (
 <div>
 <List>
              <ListItem>Single-line ite<ListItemDetail end style={{'backgroundColor': 'grey'}}/></ListItem>
              <ListItem>Single-line ite<ListItemDetail end style={{'backgroundColor': 'grey'}}/></ListItem>
              <ListItem>Single-line item<ListItemDetail end style={{'backgroundColor': 'grey'}}/></ListItem>
            </List>
 </div>
 );
 }
 }`,
    source10: `import React, {Component} from 'react'
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
 } from '../lib'

 export default class ListExample extends Component {
 render() {
 return (
 <div>
 <List dense>
              <ListItem>Single-line item<ListItemDetail end style={{'backgroundColor': 'grey'}}/></ListItem>
              <ListItem>Single-line item<ListItemDetail end style={{'backgroundColor': 'grey'}}/></ListItem>
              <ListItem>Single-line item<ListItemDetail end style={{'backgroundColor': 'grey'}}/></ListItem>
            </List>
 </div>
 );
 }
 }`,
    source11: `import React, {Component} from 'react'
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
 } from '../lib'

 export default class ListExample extends Component {
 render() {
 return (
 <div>
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
 </div>
 );
 }
 }`,
    source12: `import React, {Component} from 'react'
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
 } from '../lib'

 export default class ListExample extends Component {
 render() {
 return (
 <div>
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
 </div>
 );
 }
 }`,
    source13: `import React, {Component} from 'react'
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
 } from '../lib'

 export default class ListExample extends Component {
 render() {
 return (
 <div>
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

 </div>
 );
 }
 }`,
    source14: `import React, {Component} from 'react'
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
 } from '../lib'

 export default class ListExample extends Component {
 render() {
 return (
 <div>
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
 </div>
 );
 }
 }`,
    source15: `import React, {Component} from 'react'
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
 } from '../lib'

 export default class ListExample extends Component {
 render() {
 return (
 <div>
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
 </div>
 );
 }
 }`,
    source16: `import React, {Component} from 'react'
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
 } from '../lib'

 export default class ListExample extends Component {
 render() {
 return (
 <div>
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
 </div>
 );
 }
 }`,
    source17: `import React, {Component} from 'react'
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
 } from '../lib'

 export default class ListExample extends Component {
 render() {
 return (
 <div>
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
 </div>
 );
 }
 }`,
    source18: `import React, {Component} from 'react'
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
 } from '../lib'

 export default class ListExample extends Component {
 render() {
 return (
 <div>
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
 </div>
 );
 }
 }`,
    source19: `import React, {Component} from 'react'
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
 } from '../lib'

 export default class ListExample extends Component {
 render() {
 return (
 <div>
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
 </div>
 );
 }
 }`,
    source20: `import React, {Component} from 'react'
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
 } from '../lib'

 export default class ListExample extends Component {
 render() {
 return (
 <div>
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
 </div>
 );
 }
 }`,
    source21: `import React, {Component} from 'react'
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
 } from '../lib'

 export default class ListExample extends Component {
 render() {
 return (
 <div>
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
 </div>
 );
 }
 }`,
    source22: `import React, {Component} from 'react'
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
 } from '../lib'

 export default class ListExample extends Component {
 render() {
 return (
 <div>
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
 </div>
 );
 }
 }`,
    source23: `import React, {Component} from 'react'
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
 } from '../lib'

 export default class ListExample extends Component {
 render() {
 return (
 <div>
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
 </div>
 );
 }
 }`,
    source24: `import React, {Component} from 'react'
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
 } from '../lib'

 export default class ListExample extends Component {
 render() {
 return (
 <div>
 <List>
            <ListItem>Single-line item - section 1</ListItem>
            <ListItem>Single-line item - section 1</ListItem>
            <ListItem>Single-line item - section 1</ListItem>
            <ListDivider />
            <ListItem>Single-line item - section 2</ListItem>
            <ListItem>Single-line item - section 2</ListItem>
          </List>
 </div>
 );
 }
 }`,
    source25: `import React, {Component} from 'react'
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
 } from '../lib'

 export default class ListExample extends Component {
 render() {
 return (
 <div>
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
 </div>
 );
 }
 }`,
    source26: `import React, {Component} from 'react'
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
 } from '../lib'

 export default class ListExample extends Component {
 render() {
 return (
 <div>
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
 </div>
 );
 }
 }`,
    source27: `import React, {Component} from 'react'
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
 } from '../lib'

 export default class ListExample extends Component {
 render() {
 return (
 <div>
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
 </div>
 );
 }
 }`,
    source28: `import React, {Component} from 'react'
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
 } from '../lib'

 export default class ListExample extends Component {
 render() {
 return (
 <div>
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
 </div>
 );
 }
 }`,
  },
  'linearProgress': {
    source1: `import React, {Component} from 'react'
import {
  LinearProgress,
  LinearProgressBar,
  LinearProgressBuffering,
  LinearProgressBuffer,
  LinearProgressInner,
} from '../lib'

export default class LinearProgressDeterminate extends Component {

  render() {
    return (
      <div>
          <LinearProgress
            open={true}
            determinate={true}
            progress={0.5}
            accent={false}
            buffer={false}
            reverse={false}
          >
            <LinearProgressBuffering/>
            <LinearProgressBuffer/>
            <LinearProgressBar primary>
              <LinearProgressInner/>
            </LinearProgressBar>
            <LinearProgressBar secondary>
              <LinearProgressInner/>
            </LinearProgressBar>
          </LinearProgress>
      </div>
    );
  }
}`,
    source2: `import React, {Component} from 'react'
import {
  LinearProgress,
  LinearProgressBar,
  LinearProgressBuffering,
  LinearProgressBuffer,
  LinearProgressInner,
} from '../lib'

export default class LinearProgressIndeterminate extends Component {

  render() {
    return (
      <div>
          <LinearProgress
            open={true}
            determinate={false}
            progress={0.5}
            accent={false}
            buffer={false}
            reverse={false}
          >
            <LinearProgressBuffering/>
            <LinearProgressBuffer/>
            <LinearProgressBar primary>
              <LinearProgressInner/>
            </LinearProgressBar>
            <LinearProgressBar secondary>
              <LinearProgressInner/>
            </LinearProgressBar>
          </LinearProgress>
      </div>
    );
  }
}`,
    source3: `import React, {Component} from 'react'
import {
  LinearProgress,
  LinearProgressBar,
  LinearProgressBuffering,
  LinearProgressBuffer,
  LinearProgressInner,
} from '../lib'

export default class LinearProgressBuffer extends Component {

  render() {
    return (
      <div>
          <LinearProgress
            open={true}
            determinate={true}
            progress={0.5}
            accent={false}
            buffer={0.75}
            reverse={false}
          >
            <LinearProgressBuffering/>
            <LinearProgressBuffer/>
            <LinearProgressBar primary>
              <LinearProgressInner/>
            </LinearProgressBar>
            <LinearProgressBar secondary>
              <LinearProgressInner/>
            </LinearProgressBar>
          </LinearProgress>
      </div>
    );
  }
}`,
    source4: `import React, {Component} from 'react'
import {
  LinearProgress,
  LinearProgressBar,
  LinearProgressBuffering,
  LinearProgressBuffer,
  LinearProgressInner,
} from '../lib'

export default class LinearProgressReversed extends Component {

  render() {
    return (
      <div>
          <LinearProgress
            open={true}
            determinate={true}
            progress={0.5}
            accent={false}
            buffer={false}
            reverse={true}
          >
            <LinearProgressBuffering/>
            <LinearProgressBuffer/>
            <LinearProgressBar primary>
              <LinearProgressInner/>
            </LinearProgressBar>
            <LinearProgressBar secondary>
              <LinearProgressInner/>
            </LinearProgressBar>
          </LinearProgress>
      </div>
    );
  }
}`,
    source5: `import React, {Component} from 'react'
import {
  LinearProgress,
  LinearProgressBar,
  LinearProgressBuffering,
  LinearProgressBuffer,
  LinearProgressInner,
} from '../lib'

export default class LinearProgressIndeterminateReversed extends Component {

  render() {
    return (
      <div>
          <LinearProgress
            open={true}
            determinate={false}
            progress={0.5}
            accent={false}
            buffer={false}
            reverse={true}
          >
            <LinearProgressBuffering/>
            <LinearProgressBuffer/>
            <LinearProgressBar primary>
              <LinearProgressInner/>
            </LinearProgressBar>
            <LinearProgressBar secondary>
              <LinearProgressInner/>
            </LinearProgressBar>
          </LinearProgress>
      </div>
    );
  }
}`,
    source6: `import React, {Component} from 'react'
import {
  LinearProgress,
  LinearProgressBar,
  LinearProgressBuffering,
  LinearProgressBuffer,
  LinearProgressInner,
} from '../lib'

export default class LinearProgressBufferReversed extends Component {

  render() {
    return (
      <div>
          <LinearProgress
            open={true}
            determinate={true}
            progress={0.5}
            accent={false}
            buffer={0.75}
            reverse={true}
          >
            <LinearProgressBuffering/>
            <LinearProgressBuffer/>
            <LinearProgressBar primary>
              <LinearProgressInner/>
            </LinearProgressBar>
            <LinearProgressBar secondary>
              <LinearProgressInner/>
            </LinearProgressBar>
          </LinearProgress>
      </div>
    );
  }
}`,
    source7: `import React, {Component} from 'react'
import {
  LinearProgress,
  LinearProgressBar,
  LinearProgressBuffering,
  LinearProgressBuffer,
  LinearProgressInner,
} from '../lib'

export default class LinearProgressAccent extends Component {

  render() {
    return (
      <div>
          <LinearProgress
            open={true}
            determinate={true}
            progress={0.5}
            accent={true}
            buffer={false}
            reverse={false}
          >
            <LinearProgressBuffering/>
            <LinearProgressBuffer/>
            <LinearProgressBar primary>
              <LinearProgressInner/>
            </LinearProgressBar>
            <LinearProgressBar secondary>
              <LinearProgressInner/>
            </LinearProgressBar>
          </LinearProgress>
      </div>
    );
  }
}`,
  },
  'layoutGrid': {
    source1: ``,
  },
  'iconToggle': {
    source1: `import React, {Component} from 'react'
import {
    IconToggle,
} from '../lib'

class IconToggleDemo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toggle: false,
        }
    }    
    render() {
    const { toggle } = this.state;
        return (
            <section>
                <Elevation
                    zSpace="2"
                >
            <IconToggle
              icon
              toggle={toggle}
              ripple
              onChange={({isOn}) => this.setState({
                toggle: isOn,
              })}
              aria-pressed="false"
              aria-label="Add to favorites"
              tabIndex="0"
              data-toggle-on='{"label": "Remove from favorites", "content": "favorite"}'
              data-toggle-off='{"label": "Add to favorites", "content": "favorite_border"}'
            >
              favorite_border
            </IconToggle>
            <p>Favorited? {(toggle) ? 'yes' : 'no'}</p>
                </Elevation>
            </section>
        )
    }
}`,
    source2: `import React, {Component} from 'react'
import {
    IconToggle,
} from '../lib'

class IconToggleDemo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toggle: false,
        }
    }    
    render() {
    const { toggle } = this.state;
        return (
            <section>
<IconToggle
              elementType="span"
              toggle={toggle}
              ripple
              onChange={({isOn}) => this.setState({
                toggle: isOn,
              })}
              aria-pressed="false"
              aria-label="Star this item"
              tabIndex="0"
              data-icon-inner-selector=".fa"
              data-toggle-on='{"cssClass": "fa-star", "label": "Unstar this item"}'
              data-toggle-off='{"cssClass": "fa-star-o", "label": "Star this item"}'
            >
              <i className="fa fa-star-o" aria-hidden="true"/>
            </IconToggle>
            </section>
        )
    }
}`,
    source3: `import React, {Component} from 'react'
import {
    IconToggle,
} from '../lib'

class IconToggleDemo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toggle: false,
        }
    }    
    render() {
    const { toggle } = this.state;
        return (
            <section>
            <IconToggle
              icon
              primary
              toggle={toggle}
              ripple
              onChange={({isOn}) => this.setState({
                toggle: isOn,
              })}
              aria-pressed="false"
              aria-label="Add to favorites"
              tabIndex="0"
              data-toggle-on='{"label": "Remove from favorites", "content": "favorite"}'
              data-toggle-off='{"label": "Add to favorites", "content": "favorite_border"}'
            >
              favorite_border
            </IconToggle>
            </section>
        )
    }
}`,
    source4: `import React, {Component} from 'react'
import {
    IconToggle,
} from '../lib'

class IconToggleDemo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toggle: false,
        }
    }    
    render() {
    const { toggle } = this.state;
        return (
            <section>
<IconToggle
              icon
              accent
              toggle={toggle}
              ripple
              onChange={({isOn}) => this.setState({
                toggle: isOn,
              })}
              aria-pressed="false"
              aria-label="Add to favorites"
              tabIndex="0"
              data-toggle-on='{"label": "Remove from favorites", "content": "favorite"}'
              data-toggle-off='{"label": "Add to favorites", "content": "favorite_border"}'
            >
              favorite_border
            </IconToggle>
            </section>
        )
    }
}`,
    source5: `import React, {Component} from 'react'
import {
    IconToggle,
} from '../lib'

class IconToggleDemo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toggle: false,
        }
    }    
    render() {
    const { toggle } = this.state;
        return (
            <section>
<IconToggle
              icon
              toggle={toggle}
              onChange={({isOn}) => this.setState({
                toggle: isOn,
              })}
              aria-pressed="false"
              aria-label="Add to favorites"
              tabIndex="0"
              data-toggle-on='{"label": "Remove from favorites", "content": "favorite"}'
              data-toggle-off='{"label": "Add to favorites", "content": "favorite_border"}'
            >
              favorite_border
            </IconToggle>
            </section>
        )
    }
}`,
    source6: `import React, {Component} from 'react'
import {
    IconToggle,
} from '../lib'

class IconToggleDemo extends Component {
    render() {
        return (
            <section>
            <IconToggle
              icon
              disabled
              toggle={false}
              ripple
              aria-pressed="false"
              aria-label="Add to favorites"
              tabIndex="0"
              data-toggle-on='{"label": "Remove from favorites", "content": "favorite"}'
              data-toggle-off='{"label": "Add to favorites", "content": "favorite_border"}'
            >
              favorite_border
            </IconToggle>
            </section>
        )
    }
}`,
  },
  'icon': {
    source1: `import React, {Component} from 'react'
import {
    Icon,
    Elevation,
    TypographyDisplay,
} from '../lib'

class IconDemo extends Component {
    render() {
        return (
            <section>
            <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>
                <Elevation
                    zSpace="2"
                >
                    <Icon>favorite</Icon>
                    <Icon>favorite_border</Icon>
                    <Icon>menu</Icon>
                    <Icon>star_border</Icon>
                    <Icon>star</Icon>
                </Elevation>
            </section>
        )
    }
}`,
  },
  'hintList': {
    source1: ``,
  },
  'gridList': {
    source1: ``,
  },
  'formField': {
    source1: `
import React, {Component} from 'react'
import {
    FormField,
} from '../lib'

export default class FormFieldDemo extends Component {
    render() {
        return (
            <div>
              <FormField>
                <input type="checkbox"/>
                <label>Input Label</label>
              </FormField>
            </div>
        )
    }
}`,
    source2: `import React, {Component} from 'react'
import {
    FormField,
} from '../lib'

export default class FormFieldDemo extends Component {
    render() {
        return (
            <div>
              <FormField alignEnd>
                <input type="checkbox"/>
                <label>Input Label</label>
              </FormField>
            </div>
        )
    }
}`
  },
  'fab': {
    source1: `import React, {Component} from 'react'
import {
    FAB,
    FABIcon,
    TypographyHeadline
} from '../lib'

export default class FABDemo extends Component {

    render() {
        return (
            <section>
            <TypographyHeadline size="1">FAB Default</TypographyHeadline>
            <FAB ripple icon><FABIcon>favorite</FABIcon></FAB>
            <TypographyHeadline>FAB mini</TypographyHeadline>
            <FAB ripple icon mini><FABIcon>favorite</FABIcon></FAB>
            <TypographyHeadline>FAB plain</TypographyHeadline>
            <FAB ripple icon plain><FABIcon>favorite</FABIcon></FAB>
            <TypographyHeadline>FAB plain + mini</TypographyHeadline>
            <FAB ripple icon plain mini><FABIcon>favorite</FABIcon></FAB>
            </section>
        )
    }
}`,
    source2: `import React, {Component} from 'react'
import {
    FAB,
    FABIcon,
    TypographyHeadline
} from '../lib'

export default class FABDemo extends Component {

    render() {
        return (
            <section>
            <TypographyHeadline>FAB Default</TypographyHeadline>
            <FAB icon><FABIcon>favorite</FABIcon></FAB>
            <TypographyHeadline>FAB mini</TypographyHeadline>
            <FAB icon mini><FABIcon>favorite</FABIcon></FAB>
            <TypographyHeadline>FAB plain</TypographyHeadline>
            <FAB icon plain><FABIcon>favorite</FABIcon></FAB>
            <TypographyHeadline>FAB plain + mini</TypographyHeadline>
            <FAB icon plain mini><FABIcon>favorite</FABIcon></FAB>
            </section>
        )
    }
}`,
    source3: `import React, {Component} from 'react'
import {
    FAB,
    FABIcon,
    TypographyHeadline
} from '../lib'

export default class FABDemo extends Component {

    render() {
        return (
            <section>
            <TypographyHeadline>FAB Default</TypographyHeadline>
            <FAB icon disabled><FABIcon>favorite</FABIcon></FAB>
            <TypographyHeadline>FAB mini</TypographyHeadline>
            <FAB icon mini disabled><FABIcon>favorite</FABIcon></FAB>
            <TypographyHeadline>FAB plain</TypographyHeadline>
            <FAB icon plain disabled><FABIcon>favorite</FABIcon></FAB>
            <TypographyHeadline>FAB plain + mini</TypographyHeadline>
            <FAB icon plain mini disabled><FABIcon>favorite</FABIcon></FAB>
            </section>
        )
    }
}`,
  },
  'elevation': {
    source1: `import React, {Component} from 'react'
import {
Elevation
} from '../lib'

export default class ElevationExample extends Component {
  
  render() {
    return (
      <div>
          {(function (blocks, i, len) {
              while (++i <= len) {
                blocks.push(<Elevation
                  key={\`key-\${i}\`}
                  zSpace={i}
                  style={{
                    'height': '10em',
                    'width': '12em',
                    'display': 'flex',
                    'alignItems': 'center',
                    'justifyContent': 'center',
                    'margin': '2em',
                  }}
                >{\`\${i}dp (mdc-elevation--z\${i})\`}</Elevation>)
              }
              return blocks;
            })([], -1, 24)}
      </div>
    );
  }
}`,
    source2: `import React, {Component} from 'react'
import {
Elevation
} from '../lib'

export default class ElevationExample extends Component {
    constructor(props) {
    super(props);
    this.state = {
      mouseIn: false,
    }
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseOut = this.handleMouseOut.bind(this);
  }
  setMouseIn(mouseIn) {
    this.setState({mouseIn});
  }

  handleMouseEnter() {
    this.setMouseIn(true);
  }

  handleMouseOut() {
    this.setMouseIn(false);
  }
  render() {
  const {mouseIn} = this.state;
    return (
      <div>
          <Elevation
              zSpace={(mouseIn) ? 8 : 2}
              transition
              onMouseEnter={this.handleMouseEnter}
              onMouseOut={this.handleMouseOut}
              style={{
                'height': '10em',
                'width': '12em',
                'display': 'flex',
                'alignItems': 'center',
                'justifyContent': 'center',
                'margin': '2em',
              }}
            > 2dp (mdc-elevation--z2) | 8dp (mdc-elevation--z8) </Elevation>
      </div>
    );
  }
}`
  },
  'dialog': {
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
  },
  'checkbox': {
    source1: `import React, {Component} from 'react'
import {
  Checkbox,
  CheckboxLabel,
  CheckboxInput,
  CheckboxBG,
  Button,
  FormField,
  Elevation
} from '../lib'

export default class CheckboxWithJS extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
      disabled: false,
      indeterminate: false,
    }
    this.handelIndeterminate = this.handelIndeterminate.bind(this);
    this.handelDisabled = this.handelDisabled.bind(this);
  }
  handelIndeterminate() {
    this.setState({
      indeterminate: true
    })
  }

  handelDisabled() {
    this.setState({
      disabled: !this.state.disabled
    })
  }
  render() {
  const {disabled, indeterminate} = this.state;
    return (
      <div>
         <FormField>
              <Checkbox
                ripple
                disabled={disabled}
              >
                <CheckboxInput
                  id="checkbox1"
                  onChange={({target}) => this.setState({
                    checked: target.checked,
                    indeterminate: false
                  })}
                  aria-labelledby="checkbox_label1"
                  disabled={disabled}
                  indeterminate={indeterminate}
                />
                <CheckboxBG/>
              </Checkbox>
              <CheckboxLabel id="checkbox_label1" htmlFor="checkbox1">
                The checkbox is currently
              </CheckboxLabel>
            </FormField>
            <Elevation
              style={{
                'display': 'flex',
                'flexFlow': 'row nowrap',
              }}
            >
              <Button
                primary
                raised
                ripple
                onClick={this.handelIndeterminate}
                style={{'marginRight': '0.5em'}}
              >Make indeterminate</Button>
              <Button primary raised ripple onClick={this.handelDisabled}>Toggle Disabled</Button>
            </Elevation>
      </div>
    );
  }
}`,
    source2: `import React, {Component} from 'react'
import {
  Checkbox,
  CheckboxLabel,
  CheckboxInput,
  CheckboxBG,
  FormField,
  Elevation
} from '../lib'

export default class CheckboxCSSOnly extends Component {

  render() {
    return (
      <div>
          <FormField>
              <Checkbox
              >
                <CheckboxInput
                />
                <CheckboxBG/>
              </Checkbox>
              <CheckboxLabel>
                The checkbox is currently
              </CheckboxLabel>
            </FormField>
      </div>
    );
  }
}`,
    source3: `import React, {Component} from 'react'
import {
  Checkbox,
  CheckboxLabel,
  CheckboxInput,
  CheckboxBG,
  FormField,
  Elevation
} from '../lib'

export default class CheckboxCSSOnlyDisabled extends Component {

  render() {
    return (
      <div>
          <FormField>
              <Checkbox
              disabled
              >
                <CheckboxInput
                disabled
                />
                <CheckboxBG/>
              </Checkbox>
              <CheckboxLabel>
                The checkbox is currently
              </CheckboxLabel>
            </FormField>
      </div>
    );
  }
}`
  },
  'card': {
    source1: `import React, {Component} from 'react'
import {
    Card,
    CardHorizontalBlock,
    CardMedia,
    CardMediaItem,
    CardSupportingText,
    CardPrimary,
    CardPrimaryTitle,
    CardPrimarySubtitle,
    CardActions,
    CardActionItem,
    Elevation,
    TypographyDisplay,
} from '../lib'

class CardDemo extends Component {
    render() {
        return (
            <section>
                <Elevation
                    zSpace="2"
                >
                    <Card
              style={{
                'width': '20em'
              }}
            >
              <CardMedia
                style={{
                  'backgroundImage': 'url(http://material-components-web.appspot.com/images/16-9.jpg)',
                  'height': '10em'
                }}/>
              <CardSupportingText>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.
              </CardSupportingText>
            </Card>
            <Card
              style={{
                'width': '20em'
              }}
            >
              <CardPrimary>
                <CardPrimaryTitle>Title</CardPrimaryTitle>
                <CardPrimarySubtitle>Subtitle</CardPrimarySubtitle>
              </CardPrimary>
              <CardMedia
                style={{
                  'backgroundImage': 'url(http://material-components-web.appspot.com/images/16-9.jpg)',
                  'height': '10em'
                }}/>
              <CardSupportingText>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.
              </CardSupportingText>
              <CardActions>
                <CardActionItem compact>Action 1</CardActionItem>
                <CardActionItem compact>Action 2</CardActionItem>
              </CardActions>
            </Card>

            <Card
              style={{
                'width': '20em'
              }}
            >
              <CardPrimary>
                <CardPrimaryTitle>Title</CardPrimaryTitle>
                <CardPrimarySubtitle>Subtitle</CardPrimarySubtitle>
              </CardPrimary>
              <CardMedia
                style={{
                  'backgroundImage': 'url(http://material-components-web.appspot.com/images/16-9.jpg)',
                  'height': '10em'
                }}/>
              <CardActions vertical>
                <CardActionItem compact>Action 1</CardActionItem>
                <CardActionItem compact>Action 2</CardActionItem>
              </CardActions>
            </Card>

            <Card
              style={{
                'width': '20em'
              }}
            >
              <CardMedia
                style={{
                  'backgroundImage': 'url(http://material-components-web.appspot.com/images/16-9.jpg)',
                  'height': '10em'
                }}/>
              <CardPrimary>
                <CardPrimaryTitle large>Title goes here</CardPrimaryTitle>
                <CardPrimarySubtitle>Subtitle</CardPrimarySubtitle>
              </CardPrimary>
              <CardActions>
                <CardActionItem compact>Action 1</CardActionItem>
                <CardActionItem compact>Action 2</CardActionItem>
              </CardActions>
            </Card>

            <Card
              style={{
                'width': '20em'
              }}
            >
              <CardPrimary>
                <CardPrimaryTitle large>Title goes here</CardPrimaryTitle>
                <CardPrimarySubtitle>Subtitle</CardPrimarySubtitle>
              </CardPrimary>
              <CardSupportingText>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
                ut
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris
                nisi ut aliquip ex ea commodo consequat.
              </CardSupportingText>
              <CardActions>
                <CardActionItem compact>Action 1</CardActionItem>
                <CardActionItem compact>Action 2</CardActionItem>
              </CardActions>
            </Card>

            <Card
              style={{
                'width': '20em'
              }}
            >
              <CardMedia
                style={{
                  'backgroundImage': 'url(http://material-components-web.appspot.com/images/1-1.jpg)',
                  'height': '10em'
                }}>
                <CardPrimaryTitle large>Title goes here</CardPrimaryTitle>
              </CardMedia>
              <CardActions>
                <CardActionItem compact>Action 1</CardActionItem>
              </CardActions>
            </Card>
            <Card
              style={{
                'backgroundImage': 'url(http://material-components-web.appspot.com/images/1-1.jpg)',
                'width': '20em',
                'height': '21.875rem',
                'backgroundSize': 'cover'
              }}
            >
              <CardPrimary
                style={{
                  'background': 'rgba(0, 0, 0, .4)',
                }}
              >
                <CardPrimaryTitle style={{'color': 'white'}} large>Title goes here</CardPrimaryTitle>
                <CardPrimarySubtitle style={{'color': 'white'}}>Subtitle</CardPrimarySubtitle>
              </CardPrimary>
              <CardActions
                style={{
                  'background': 'rgba(0, 0, 0, .4)',
                }}
              >
                <CardActionItem style={{'color': 'white'}} compact>Action 1</CardActionItem>
                <CardActionItem style={{'color': 'white'}} compact>Action 2</CardActionItem>
              </CardActions>
            </Card>

            <Card
              style={{
                'width': '20em'
              }}
            >
              <CardHorizontalBlock>
                <CardPrimary>
                  <CardPrimaryTitle large>Title</CardPrimaryTitle>
                  <CardPrimarySubtitle>Subtitle</CardPrimarySubtitle>
                </CardPrimary>
                <CardMediaItem src="http://material-components-web.appspot.com/images/1-1.jpg"/>
              </CardHorizontalBlock>
              <CardActions>
                <CardActionItem compact>Action 1</CardActionItem>
                <CardActionItem compact>Action 2</CardActionItem>
              </CardActions>
            </Card>

            <Card
              style={{
                'width': '20em'
              }}
            >
              <CardHorizontalBlock>
                <CardPrimary>
                  <CardPrimaryTitle large>Title</CardPrimaryTitle>
                  <CardPrimarySubtitle>Subtitle</CardPrimarySubtitle>
                </CardPrimary>
                <CardMediaItem size='1.5' src="http://material-components-web.appspot.com/images/1-1.jpg"/>
              </CardHorizontalBlock>
              <CardActions>
                <CardActionItem compact>Action 1</CardActionItem>
                <CardActionItem compact>Action 2</CardActionItem>
              </CardActions>
            </Card>
            <Card
              style={{
                'width': '25em'
              }}
            >
              <CardHorizontalBlock>
                <CardPrimary>
                  <CardPrimaryTitle large>Title</CardPrimaryTitle>
                  <CardPrimarySubtitle>Subtitle</CardPrimarySubtitle>
                </CardPrimary>
                <CardMediaItem size='2' src="http://material-components-web.appspot.com/images/1-1.jpg"/>
              </CardHorizontalBlock>
              <CardActions>
                <CardActionItem compact>Action 1</CardActionItem>
                <CardActionItem compact>Action 2</CardActionItem>
              </CardActions>
            </Card>
            <Card
              style={{
                'width': '25em'
              }}
            >
              <CardHorizontalBlock>
                <CardMediaItem size='3' src="http://material-components-web.appspot.com/images/1-1.jpg"/>
                <CardActions vertical>
                  <CardActionItem compact>A 1</CardActionItem>
                  <CardActionItem compact>A 2</CardActionItem>
                </CardActions>
              </CardHorizontalBlock>
            </Card>
                </Elevation>
            </section>
        )
    }
}`,
  },
  'button': {
    source1: `import React, {Component} from 'react'
import {
  Button
} from '../lib'

export default class ButtonWithRipple extends Component {

  render() {
    return (
      <div>
         <Button ripple>Default</Button>
         <Button raised ripple>Raised</Button>
         <Button dense ripple>Dense</Button>
         <Button dense raised ripple>Dense Raised</Button>
         <Button compact ripple>Compact</Button>
         <Button compact raised ripple>Compact Raised</Button>
         <Button primary ripple>Primary</Button>
         <Button primary raised ripple>primary raised</Button>
         <Button accent ripple>accent</Button>
         <Button accent raised ripple>accent raised</Button>
         <Button elementType="div" raised ripple>div raised</Button>
      </div>
    );
  }
}
`,
    source2: `import React, {Component} from 'react'
import {
  Button
} from '../lib'

export default class ButtonOnlyCSS extends Component {

  render() {
    return (
      <div>
              <Button>Default</Button>
              <Button raised>Raised</Button>
              <Button dense>Dense</Button>
              <Button dense raised>Dense Raised</Button>
              <Button compact>Compact</Button>
              <Button compact raised>Compact Raised</Button>
              <Button primary>Primary</Button>
              <Button primary>primary raised</Button>
              <Button accent>accent</Button>
              <Button accent raised>accent raised</Button>
              <Button elementType="div" raised>div raised</Button>
      </div>
    );
  }
}`,
    source3: `import React, {Component} from 'react'
import {
  Button
} from '../lib'

export default class ButtonDisabled extends Component {

  render() {
    return (
      <div>
              <Button disabled>Default</Button>
              <Button raised disabled>Raised</Button>
              <Button dense disabled>Dense</Button>
              <Button dense raised disabled>Dense Raised</Button>
              <Button compact disabled>Compact</Button>
              <Button compact raised disabled>Compact Raised</Button>
              <Button primary disabled>Primary</Button>
              <Button primary raised disabled>primary raised</Button>
              <Button accent disabled>accent</Button>
              <Button accent raised disabled>accent raised</Button>
      </div>
    );
  }
}`
  }

};
/*
 `import React, {Component} from 'react'
 import {
 Typography,
 TypographyDisplay,
 TypographyHeadline,
 TypographyTitle,
 TypographySubheading,
 TypographyBody,
 TypographyCaption
 } from '../lib'

 export default class Example extends Component {
 constructor(props) {
 super(props);
 this.state = {
 valueInput: 0,
 }
 this.handleOptions = this.handleOptions.bind(this);
 }
 handleOptions(option, value) {
 const newValue = (value) ? value : !this.state.options[option];
 this.setState({
 options: {
 ...this.state.options,
 [option]: newValue
 }
 })
 }

 render() {
 const {
 valueInput,
 } = this.state;
 return (
 <div>
 </div>
 );
 }
 }`;*/
