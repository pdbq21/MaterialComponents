/**
 * Created by ruslan on 21.06.17.
 */
import React, {Component} from 'react'
import {
  Hint,
  HintElevation,
  HintTextfield,
  HintInput,
  HintLabel,
  HintList,
  HintTags,
  Elevation,
  TypographyDisplay,
} from '../lib'
import {OriginalDoc, Footer, Example, Demo, Table, code} from '../templates'

export default class HintListPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hintList: [
        'Lorem',
        'Ipsum',
        'is',
        'simply',
        'dummy',
        'text',
        'of',
        'the',
        'printing',
        'and',
        'typesetting',
        'industry'
      ],
      components: [
        {
          name: 'Hint',
          property: [
            {
              name: 'elementType',
              type: 'string | React Component',
              required: 'no',
              defaultValue: 'div',
              description: 'задає тег елемента'
            },
            {
              name: 'url',
              type: 'string',
              required: 'no',
              defaultValue: 'null',
              description: '-'
            },
            {
              name: 'list',
              type: 'array',
              required: 'no',
              defaultValue: 'null',
              description: '-'
            },
            {
              name: 'multiselect',
              type: 'bool',
              required: 'no',
              defaultValue: 'false',
              description: '-'
            },
          ]
        }, {
          name: 'HintElevation',
          property: [
            {
              name: 'zSpace',
              type: 'string | number',
              required: 'no',
              defaultValue: '2',
              description: '-'
            },
          ]
        }, {
          name: 'HintTextfield',
          property: [
            {
              name: '',
              type: '',
              required: '',
              defaultValue: '',
              description: 'props як у Textfield'
            },
          ]
        }, {
          name: 'HintInput',
          property: [
            {
              name: '',
              type: '',
              required: '',
              defaultValue: '',
              description: 'props як у TextfieldInput'
            },
          ]
        }, {
          name: 'HintLabel',
          property: [
            {
              name: '',
              type: '',
              required: '',
              defaultValue: '',
              description: 'props як у TextfieldLabel'
            },
          ]
        }, {
          name: 'HintList',
          property: [
            {
              name: '',
              type: '',
              required: '',
              defaultValue: '',
              description: 'props як у List'
            },
          ]
        }, {
          name: 'HintTags',
          property: [
            {
              name: '',
              type: '',
              required: '',
              defaultValue: '',
              description: 'props як у List | no specific props'
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
    const {hintList} = this.state;
    return (
      <section
        className="content"
      >
        <Demo>
          <Hint
            //url=""
            list={hintList}
          >
            <HintTextfield
              style={{
                'marginTop': 0
              }}
            >
              <HintInput />
              <HintLabel>Hint Label</HintLabel>
            </HintTextfield>
            <HintElevation
              style={{
                'position': 'absolute',
                'backgroundColor': 'white',
                'zIndex': 1
              }}
            >
              <HintList/>
            </HintElevation>
          </Hint>
        </Demo>
        {this.renderTable()}
        <OriginalDoc/>
        <Elevation
          zSpace="2"
          className="demo-page-hint"
        >
          <TypographyDisplay size="1">Hint List</TypographyDisplay>
          <Example
            title="Hint List"
            code={code.hintList.source1}
          >
            <Hint
              //url=""
              list={hintList}
            >
              <HintTextfield
                style={{
                  'width': '80%',
                  'marginTop': 0
                }}
              >
                <HintInput
                  style={{
                    'width': '100%'
                  }}
                />
                <HintLabel>Hint Label</HintLabel>
              </HintTextfield>
              <HintElevation
                style={{
                  'position': 'absolute',
                  'backgroundColor': 'white',
                  'zIndex': 1
                }}
              >
                <HintList/>
              </HintElevation>
            </Hint>
          </Example>
          <Example
            title="Hint List with Multiselect"
            code={code.hintList.source2}
          >
            <Hint
              list={hintList}
              multiselect
            >
              <HintTags
                dense
                style={{
                  'display': 'flex',
                  'flexDirection': 'row',
                  'padding': 0,
                  'color': 'white',
                  'flexWrap': 'wrap'
                }}
              />
              <HintTextfield
                style={{
                  'width': '80%',
                  'marginTop': 0
                }}
              >
                <HintInput
                  style={{
                    'width': '100%'
                  }}
                />
                <HintLabel>Hint Label</HintLabel>
              </HintTextfield>
              <HintElevation
                style={{
                  'position': 'absolute',
                  'backgroundColor': 'white',
                  'zIndex': 1
                }}
              >
                <HintList/>
              </HintElevation>
            </Hint>
          </Example>
        </Elevation>
        <Footer/>
      </section>
    )
  }
}