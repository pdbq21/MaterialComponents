/**
 * Created by ruslan on 22.06.17.
 */

import React, {Component} from 'react'
import {
  LinearProgress,
  LinearProgressBar,
  LinearProgressBuffering,
  LinearProgressBuffer,
  LinearProgressInner,
  Elevation,
  TypographyDisplay,
  FormField,
  TextField,
  TextFieldLine,
  TextFieldInput,
  TextFieldLabel,
  Checkbox,
  CheckboxInput,
  CheckboxBG,
  CheckboxLabel
} from '../lib'
import {OriginalDoc, Footer, Example, Demo, Table, code} from '../templates'

export default class LinearProgressPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: true,
      accent: false,
      progress: 0.5, // 0...1
      buffer: 0.75, // 0...1
      examples: [
        {
          name: 'Determinate',
          source: 'source1',
          determinate: true,
          isAccent: false,
          isBuffer: false,
          reverse: false
        }, {
          name: 'Indeterminate',
          source: 'source2',
          determinate: false,
          isAccent: false,
          isBuffer: false,
          reverse: false
        }, {
          name: 'Buffer',
          source: 'source3',
          determinate: true,
          isAccent: false,
          isBuffer: true,
          reverse: false
        }, {
          name: 'Reversed',
          source: 'source4',
          determinate: true,
          isAccent: false,
          isBuffer: false,
          reverse: true
        }, {
          name: 'Indeterminate Reversed',
          source: 'source5',
          determinate: false,
          isAccent: false,
          isBuffer: false,
          reverse: true
        }, {
          name: 'Buffer Reversed',
          source: 'source6',
          determinate: true,
          isAccent: false,
          isBuffer: true,
          reverse: true
        }, {
          name: 'Accent',
          source: 'source7',
          determinate: true,
          isAccent: true,
          isBuffer: false,
          reverse: false
        },
      ],
      components: [
        {
          name: 'LinearProgress',
          property: [
            {
              name: 'elementType',
              type: 'string | React Component',
              required: 'no',
              defaultValue: 'div',
              description: 'задає тег елемента'
            },
            {
              name: 'accent',
              type: 'bool',
              required: 'no',
              defaultValue: 'false',
              description: '-'
            }, {
              name: 'reversed',
              type: 'bool',
              required: 'no',
              defaultValue: 'false',
              description: '-'
            }, {
              name: 'indeterminate',
              type: 'bool',
              required: 'no',
              defaultValue: 'false',
              description: '-'
            }, {
              name: 'role',
              type: 'string',
              required: 'no',
              defaultValue: `'progressbar'`,
              description: '-'
            }, {
              name: 'open',
              type: 'bool',
              required: 'no',
              defaultValue: 'false',
              description: '-'
            }, {
              name: 'determinate',
              type: 'bool',
              required: 'no',
              defaultValue: 'false',
              description: '-'
            }, {
              name: 'reverse',
              type: 'bool',
              required: 'no',
              defaultValue: 'false',
              description: '-'
            }, {
              name: 'buffer',
              type: 'number',
              required: 'no',
              defaultValue: '0',
              description: '0..1'
            }, {
              name: 'progress',
              type: 'number',
              required: 'no',
              defaultValue: '0',
              description: '0..1'
            },
          ]
        },
        {
          name: 'LinearProgressBar',
          property: [
            {
              name: 'elementType',
              type: 'string | React Component',
              required: 'no',
              defaultValue: 'div',
              description: 'задає тег елемента'
            },
            {
              name: 'primary',
              type: 'bool',
              required: 'no',
              defaultValue: 'false',
              description: '-'
            }, {
              name: 'secondary',
              type: 'bool',
              required: 'no',
              defaultValue: 'false',
              description: '-'
            },
          ]
        },
        {
          name: 'LinearProgressBuffering',
          property: [
            {
              name: 'elementType',
              type: 'string | React Component',
              required: 'no',
              defaultValue: 'div',
              description: 'задає тег елемента'
            },
          ]
        },
        {
          name: 'LinearProgressBuffer',
          property: [
            {
              name: 'elementType',
              type: 'string | React Component',
              required: 'no',
              defaultValue: 'div',
              description: 'задає тег елемента'
            },
          ]
        },
        {
          name: 'LinearProgressInner',
          property: [
            {
              name: 'elementType',
              type: 'string | React Component',
              required: 'no',
              defaultValue: 'span',
              description: 'задає тег елемента'
            },
          ]
        },
      ],
    };
    this.renderTable = this.renderTable.bind(this);
    this.handleViewCode = this.handleViewCode.bind(this);
    this.handleOptions = this.handleOptions.bind(this);
    this.renderExample = this.renderExample.bind(this);
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

  handleViewCode(source) {
    this.setState({
      isActive: {
        ...this.state.isActive,
        [source]: !this.state.isActive[source]
      }
    })
  }

  handleOptions(option, value) {
    const newValue = (value) ? value : !this.state[option];
    this.setState({
      [option]: newValue
    })
  }

  renderExample() {
    const {open, progress, buffer, accent, examples} = this.state;

    return examples.map(({name, source, determinate, isAccent, isBuffer, reverse}, index) => (
      <Example
        key={`key-demo_example-${index}`}
        title={name}
        code={code.linearProgress[source]}
      >
        <LinearProgress
          open={open}
          determinate={determinate}
          progress={progress}
          accent={accent || isAccent}
          buffer={(isBuffer) ? buffer : null}
          reverse={reverse}
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
      </Example>
    ))
  }

  render() {
    const {
      open, accent, progress, buffer,
    } = this.state;
    return (
      <section
        className="content"
      >
        <Demo
        >

          <LinearProgress
            open={true}
            progress={0.5}
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
        </Demo>
        {this.renderTable()}
        <OriginalDoc
        name="Linear Progress"
        href="mdc-linear-progress"
        />

        <Elevation
          zSpace="2"
          className="demo-page-linear_progress "
        >
          <TypographyDisplay size="1">Linear Progress</TypographyDisplay>
          {this.renderExample()}
          <Elevation
            style={{
              'display': 'flex',
              'flexFlow': 'column nowrap',
            }}
          >
            <FormField>
              <TextField>
                <TextFieldInput
                  type="number"
                  value={progress}
                  step="0.01"
                  min="0" max="1"
                  onChange={({target}) => this.handleOptions('progress', target.value)}
                />
                <TextFieldLabel>Progress</TextFieldLabel>
                <TextFieldLine/>
              </TextField>
            </FormField>
            <FormField>
              <TextField>
                <TextFieldInput
                  type="number"
                  value={buffer}
                  step="0.01"
                  min="0" max="1"
                  onChange={({target}) => this.handleOptions('buffer', target.value)}
                />
                <TextFieldLabel>Buffer</TextFieldLabel>
                <TextFieldLine/>
              </TextField>
            </FormField>
            <FormField>
              <Checkbox
                ripple
              >
                <CheckboxInput
                  checked={accent}
                  onChange={() => this.handleOptions('accent')}
                />
                <CheckboxBG/>
              </Checkbox>
              <CheckboxLabel>
                Accent
              </CheckboxLabel>
            </FormField>
            <FormField>
              <Checkbox
                ripple
              >
                <CheckboxInput
                  checked={open}
                  onChange={() => this.handleOptions('open')}
                />
                <CheckboxBG/>
              </Checkbox>
              <CheckboxLabel>
                {(open) ? 'Open' : 'Close'}
              </CheckboxLabel>
            </FormField>
          </Elevation>
        </Elevation>
        <Footer/>
      </section>
    )
  }
}