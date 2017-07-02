/**
 * Created by ruslan on 19.06.17.
 */
import React, {Component} from 'react'
import {
  Theme,
  Elevation,
  TypographyDisplay,
} from '../lib'
import {OriginalDoc, Footer, Example, Demo, Table, code} from '../templates'

export default class ThemePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      components: [
        {
          name: 'Theme',
          property: [
            {
              name: 'elementType',
              type: 'string | React Component',
              required: 'no',
              defaultValue: 'div',
              description: 'задає тег елемента'
            },
            {
              name: 'dark',
              type: 'bool',
              required: 'no',
              defaultValue: 'false',
              description: '-'
            },
            {
              name: 'primary',
              type: 'bool',
              required: 'no',
              defaultValue: 'false',
              description: '-'
            },
            {
              name: 'accent',
              type: 'bool',
              required: 'no',
              defaultValue: 'false',
              description: '-'
            },
            {
              name: 'background',
              type: 'bool',
              required: 'no',
              defaultValue: 'false',
              description: '-'
            },
            {
              name: 'primaryBg',
              type: 'bool',
              required: 'no',
              defaultValue: 'false',
              description: '-'
            },
            {
              name: 'accentBg',
              type: 'bool',
              required: 'no',
              defaultValue: 'false',
              description: '-'
            },
            {
              name: 'primaryPrimary',
              type: 'bool',
              required: 'no',
              defaultValue: 'false',
              description: '-'
            },
            {
              name: 'secondaryPrimary',
              type: 'bool',
              required: 'no',
              defaultValue: 'false',
              description: '-'
            },
            {
              name: 'hintPrimary',
              type: 'bool',
              required: 'no',
              defaultValue: 'false',
              description: '-'
            },
            {
              name: 'disabledPrimary',
              type: 'bool',
              required: 'no',
              defaultValue: 'false',
              description: '-'
            },
            {
              name: 'iconPrimary',
              type: 'bool',
              required: 'no',
              defaultValue: 'false',
              description: '-'
            },
            {
              name: 'primaryAccent',
              type: 'bool',
              required: 'no',
              defaultValue: 'false',
              description: '-'
            },
            {
              name: 'secondaryAccent',
              type: 'bool',
              required: 'no',
              defaultValue: 'false',
              description: '-'
            },
            {
              name: 'hintAccent',
              type: 'bool',
              required: 'no',
              defaultValue: 'false',
              description: '-'
            },
            {
              name: 'disabledAccent',
              type: 'bool',
              required: 'no',
              defaultValue: 'false',
              description: '-'
            },
            {
              name: 'iconAccent',
              type: 'bool',
              required: 'no',
              defaultValue: 'false',
              description: '-'
            },
            {
              name: 'primaryBackground',
              type: 'bool',
              required: 'no',
              defaultValue: 'false',
              description: '-'
            },
            {
              name: 'secondaryBackground',
              type: 'bool',
              required: 'no',
              defaultValue: 'false',
              description: '-'
            },
            {
              name: 'hintBackground',
              type: 'bool',
              required: 'no',
              defaultValue: 'false',
              description: '-'
            },
            {
              name: 'disabledBackground',
              type: 'bool',
              required: 'no',
              defaultValue: 'false',
              description: '-'
            },
            {
              name: 'iconBackground',
              type: 'bool',
              required: 'no',
              defaultValue: 'false',
              description: '-'
            },
            {
              name: 'primaryLight',
              type: 'bool',
              required: 'no',
              defaultValue: 'false',
              description: '-'
            },
            {
              name: 'secondaryLight',
              type: 'bool',
              required: 'no',
              defaultValue: 'false',
              description: '-'
            },
            {
              name: 'hintLight',
              type: 'bool',
              required: 'no',
              defaultValue: 'false',
              description: '-'
            },
            {
              name: 'disabledLight',
              type: 'bool',
              required: 'no',
              defaultValue: 'false',
              description: '-'
            },
            {
              name: 'iconLight',
              type: 'bool',
              required: 'no',
              defaultValue: 'false',
              description: '-'
            },
            {
              name: 'primaryDark',
              type: 'bool',
              required: 'no',
              defaultValue: 'false',
              description: '-'
            },
            {
              name: 'secondaryDark',
              type: 'bool',
              required: 'no',
              defaultValue: 'false',
              description: '-'
            },
            {
              name: 'hintDark',
              type: 'bool',
              required: 'no',
              defaultValue: 'false',
              description: '-'
            },
            {
              name: 'disabledDark',
              type: 'bool',
              required: 'no',
              defaultValue: 'false',
              description: '-'
            },
            {
              name: 'iconDark',
              type: 'bool',
              required: 'no',
              defaultValue: 'false',
              description: '-'
            }
          ]
        }
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
        <Demo>
          <Theme
            primaryBg
          >
            <div
              style={{
                'width': '130px',
                'height': '50px',
                'marginRight': '0.5em'
              }}
            />
          </Theme>
          <Theme
            accentBg
          >
            <div
              style={{
                'width': '130px',
                'height': '50px',
                'marginLeft': '0.5em'
              }}
            />
          </Theme>
        </Demo>
        {this.renderTable()}
        <OriginalDoc
          name="Theme"
          href="mdc-theme"
        />

        <Elevation
          zSpace="2"
          className="demo-page-theme"
        >
          <TypographyDisplay size="1">Theme colors</TypographyDisplay>
          <Example
            title="Theme colors as text"
            code={code.theme.source1}
          >
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
          </Example>
          <Example
            title="Theme colors as background"
            code={code.theme.source2}
          >
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
              >Accent
              </div>
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
              >Background
              </div>
            </Theme>
          </Example>

          <TypographyDisplay size="1">Text colors for contrast</TypographyDisplay>
          <Example
            title="Text on background"
            code={code.theme.source4}
          >
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
          </Example>
          <Example
            title="Text on user-defined light background"
            code={code.theme.source5}
          >
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
          </Example>
          <Example
            title="Text on accent"
            code={code.theme.source6}
          >
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
          </Example>
          <Example
            title="Text on user-defined dark background"
            code={code.theme.source7}
          >
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
          </Example>
        </Elevation>
        <Footer/>
      </section>
    )
  }
}
