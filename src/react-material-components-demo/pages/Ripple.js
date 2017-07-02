/**
 * Created by ruslan on 16.06.17.
 */
import React, {Component} from 'react'
import {
  Ripple,
  Elevation,
  TypographyDisplay,
  TypographyBody,
  TypographyHeadline,
} from '../lib'
import {OriginalDoc, Footer, Example, Demo, Table} from '../templates'

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
              name: 'data-no-js',
              type: 'bool',
              required: 'no',
              defaultValue: 'false',
              description: 'only CSS'
            },
          ]
        }
      ],
      used: `
import React, {Component} from 'react'
import {
    Ripple,
    Elevation,
    TypographyDisplay,
} from '../lib'

class RippleDemo extends Component {
    render() {
        return (
            <section>
                <Elevation
                    zSpace="2"
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
          <TypographyHeadline size="1">Bounded</TypographyHeadline>
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
          <TypographyHeadline>Unbounded</TypographyHeadline>

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

          <TypographyHeadline>Theme Styles</TypographyHeadline>

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

          <TypographyDisplay size="1">Ripple only CSS</TypographyDisplay>

          <TypographyHeadline>Bounded</TypographyHeadline>
          <Ripple
            data-no-js
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

          <TypographyHeadline>Unbounded</TypographyHeadline>

          <Ripple
            data-no-js
            unbounded
          >
            <div className="material-icons demo-surface"
                 aria-label="Favorite"
                 tabIndex="0"
            >
              favorite
            </div>
          </Ripple>
          <TypographyHeadline>Theme Styles</TypographyHeadline>

          <Ripple
            data-no-js
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
            data-no-js
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

        </Elevation>
        <Footer/>
      </section>
    )
  }
}