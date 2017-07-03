/**
 * Created by ruslan on 16.06.17.
 */
import React, {Component} from 'react'
import {
  Ripple,
  Elevation,
  TypographyDisplay,
} from '../lib'
import {OriginalDoc, Footer, Example, Demo, Table, code} from '../templates'

export default class RipplePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      components: [
        {
          name: 'Ripple',
          property: [
            {
              name: 'primary',
              type: 'bool',
              required: 'no',
              defaultValue: 'false',
              description: 'з кольором primary'
            }, {
              name: 'accent',
              type: 'bool',
              required: 'no',
              defaultValue: 'false',
              description: 'з кольором accent'
            }, {
              name: 'unbounded',
              type: 'bool',
              required: 'no',
              defaultValue: 'false',
              description: '-'
            }, {
              name: 'onlyCSS',
              type: 'bool',
              required: 'no',
              defaultValue: 'false',
              description: 'only CSS'
            },
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
        <Demo
        >
          <Ripple>
            <div
              className="mdc-elevation--z2"
              tabIndex="0"
              style={{
                'backgroundColor': 'white',
                'height': '10em',
                'width': '10em'
              }}
            />
          </Ripple>
        </Demo>
        {this.renderTable()}
        <OriginalDoc
          name="Ripple"
          href="mdc-ripple"
        />

        <Elevation
          zSpace="2"
          className="demo-page-ripple"

        >
          <TypographyDisplay size="1">Ripple</TypographyDisplay>
          <Example
            title="Ripple - Bounded"
            code={code.ripple.source1}
          >
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
          </Example>
          <Example
            title="Ripple - Unbounded"
            code={code.ripple.source2}
          >
            <Ripple
              unbounded
            >
              <div
                className="material-icons demo-surface"
                aria-label="Favorite"
                tabIndex="0"
                style={{
                  'display': 'flex',
                  'alignItems': 'center',
                  'justifyContent': 'center',
                  'cursor': 'pointer',
                  'userSelect': 'none',
                  'WebkitUserSelect': 'none',
                  'width': '40px',
                  'height': '40px',
                }}
              >
                favorite
              </div>
            </Ripple>
          </Example>
          <Example
            title="Ripple - Theme Styles"
            code={code.ripple.source3}
          >
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
          </Example>

          <TypographyDisplay size="1">Ripple only CSS</TypographyDisplay>
          <Example
            title="Ripple only CSS - Bounded"
            code={code.ripple.source4}
          >
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
          </Example>
          <Example
            title="Ripple only CSS - Unbounded"
            code={code.ripple.source5}
          >
            <Ripple
              onlyCSS
              unbounded
            >
              <div
                className="material-icons demo-surface"
                aria-label="Favorite"
                tabIndex="0"
                style={{
                  'display': 'flex',
                  'alignItems': 'center',
                  'justifyContent': 'center',
                  'cursor': 'pointer',
                  'userSelect': 'none',
                  'WebkitUserSelect': 'none',
                  'width': '40px',
                  'height': '40px',
                }}
              >
                favorite
              </div>
            </Ripple>
          </Example>
          <Example
            title="Ripple only CSS - Theme Styles"
            code={code.ripple.source6}
          >
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
          </Example>
        </Elevation>
        <Footer/>
      </section>
    )
  }
}