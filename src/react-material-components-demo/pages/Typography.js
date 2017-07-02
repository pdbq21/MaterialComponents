/**
 * Created by ruslan on 15.06.17.
 */
import React, {Component} from 'react'
import {
  Elevation,
  Typography,
  TypographyDisplay,
  TypographyHeadline,
  TypographyTitle,
  TypographySubheading,
  TypographyBody,
  TypographyCaption
} from '../lib'
import {OriginalDoc, Footer, Example, Demo, Table, code} from '../templates'

export default class TypographyPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      components: [
        {
          name: 'Typography',
          property: [
            {
              name: 'elementType',
              type: 'string | React Component',
              required: 'no',
              defaultValue: 'section',
              description: 'задає тег елемента'
            },
            {
              name: 'adjustMargin',
              type: 'bool',
              required: 'no',
              defaultValue: 'false',
              description: '-'
            },
          ]
        }, {
          name: 'TypographyDisplay',
          property: [
            {
              name: 'elementType',
              type: 'string | React Component',
              required: 'no',
              defaultValue: 'h1',
              description: 'задає тег елемента'
            },
            {
              name: 'size',
              type: 'string | number',
              required: 'no',
              defaultValue: '1 | 2 | 3 | 4',
              description: '-'
            }, {
              name: 'adjustMargin',
              type: 'bool',
              required: 'no',
              defaultValue: 'false',
              description: '-'
            },
          ]
        }, {
          name: 'TypographyHeadline',
          property: [
            {
              name: 'elementType',
              type: 'string | React Component',
              required: 'no',
              defaultValue: 'h1',
              description: 'задає тег елемента'
            }, {
              name: 'adjustMargin',
              type: 'bool',
              required: 'no',
              defaultValue: 'false',
              description: '-'
            },
          ]
        }, {
          name: 'TypographyTitle',
          property: [
            {
              name: 'elementType',
              type: 'string | React Component',
              required: 'no',
              defaultValue: 'h2',
              description: 'задає тег елемента'
            }, {
              name: 'adjustMargin',
              type: 'bool',
              required: 'no',
              defaultValue: 'false',
              description: '-'
            },
          ]
        }, {
          name: 'TypographySubheading',
          property: [
            {
              name: 'elementType',
              type: 'string | React Component',
              required: 'no',
              defaultValue: 'h4 | h3',
              description: 'задає тег елемента'
            }, {
              name: 'size',
              type: 'string | number',
              required: 'no',
              defaultValue: '1 | 2',
              description: '-'
            }, {
              name: 'adjustMargin',
              type: 'bool',
              required: 'no',
              defaultValue: 'false',
              description: '-'
            },
          ]
        }, {
          name: 'TypographyBody',
          property: [
            {
              name: 'elementType',
              type: 'string | React Component',
              required: 'no',
              defaultValue: 'p | span',
              description: 'задає тег елемента'
            }, {
              name: 'size',
              type: 'string | number',
              required: 'no',
              defaultValue: '1 | 2',
              description: '-'
            }, {
              name: 'adjustMargin',
              type: 'bool',
              required: 'no',
              defaultValue: 'false',
              description: '-'
            },
          ]
        }, {
          name: 'TypographyCaption',
          property: [
            {
              name: 'elementType',
              type: 'string | React Component',
              required: 'no',
              defaultValue: 'span',
              description: 'задає тег елемента'
            }, {
              name: 'adjustMargin',
              type: 'bool',
              required: 'no',
              defaultValue: 'false',
              description: '-'
            },
          ]
        },
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
          <TypographyDisplay size="1">Typography</TypographyDisplay>
        </Demo>
        {this.renderTable()}
        <OriginalDoc
          name="Typography"
          href="mdc-typography"
        />
        <Elevation
          zSpace="2"
        >
          <TypographyDisplay size="1">Typography</TypographyDisplay>
          <Example
            title="Typography"
            code={code.typography.source1}
          >
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
          </Example>
          <Example
            title="Typography with margin adjustments"
            code={code.typography.source2}
          >
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
          </Example>
        </Elevation>
        <Footer/>
      </section>
    )
  }
}