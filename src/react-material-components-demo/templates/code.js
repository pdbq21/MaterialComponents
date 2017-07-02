/**
 * Created by ruslan on 02.07.17.
 */

export const code = {
  typography: {
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
theme: {
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
textfield: {
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
      </div>
    );
  }
}`;*/
