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
  Textfield,
  TextfieldInput,
  TextfieldLabel,
  Checkbox,
  CheckboxInput,
  CheckboxBG,
  CheckboxLabel
} from '../lib'
import {OriginalDoc, Footer, Example, Demo, Table} from '../templates'

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
      used: {
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
      }
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
        code={this.state.used[source]}
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
              <Textfield>
                <TextfieldInput
                  type="number"
                  value={progress}
                  step="0.01"
                  min="0" max="1"
                  onChange={({target}) => this.handleOptions('progress', target.value)}
                />
                <TextfieldLabel>Progress</TextfieldLabel>
              </Textfield>
            </FormField>
            <FormField>
              <Textfield>
                <TextfieldInput
                  type="number"
                  value={buffer}
                  step="0.01"
                  min="0" max="1"
                  onChange={({target}) => this.handleOptions('buffer', target.value)}
                />
                <TextfieldLabel>Buffer</TextfieldLabel>
              </Textfield>
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