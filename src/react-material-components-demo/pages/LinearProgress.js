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
  TypographyBody,
  Toolbar,
  ToolbarRow,
  ToolbarSection,
  ToolbarTitle,
  ToolbarMain,
  ToolbarIcon,
  FormField,
  Textfield,
  TextfieldInput,
  TextfieldLabel,
  Checkbox,
  CheckboxInput,
  CheckboxBG,
  CheckboxLabel
} from '../lib'
import Highlight from 'react-fast-highlight';

export default class LinearProgressPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: true,
      accent: false,
      progress: 0.5, // 0...1
      buffer: 0.75, // 0...1
      isActive: {
        source1: false,
        source2: false,
        source3: false,
        source4: false,
        source5: false,
        source6: false,
        source7: false,
      },
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
            },{
              name: 'buffer',
              type: 'number',
              required: 'no',
              defaultValue: '0',
              description: '0..1'
            },{
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
    this.renderExapmle = this.renderExapmle.bind(this);
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

  renderExapmle() {
    const {open, progress, buffer, accent, examples, isActive} = this.state;

    return examples.map(({name, source, determinate, isAccent, isBuffer, reverse}, index) => (
      <Elevation
        zSpace="2"
        className="demo-example"
        key={`key-demo_example-${index}`}
      >
        <Toolbar
          className="toolbar-view_example"
        >
          <ToolbarRow>
            <ToolbarSection start>
              <ToolbarTitle>{name}</ToolbarTitle>
            </ToolbarSection>
            <ToolbarSection end>
              <ToolbarIcon
                onClick={() => this.handleViewCode(source)}
                aria-label="Code" alt="Code"
                className="demo-icon_toggle"
              >code</ToolbarIcon>
            </ToolbarSection>
          </ToolbarRow>
        </Toolbar>
        <Elevation
          className="demo-code"
          style={{
            'overflow': 'auto',
            'maxHeight': (isActive[source]) ? '20em' : '0px',
            'transition': 'max-height 800ms ease-in-out 0ms',
          }}
        >
          <Highlight language='javascript'>
            {this.state.used[source]}
          </Highlight>
        </Elevation>
        <ToolbarMain
          className="demo-page_demo-components"
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
        </ToolbarMain>
      </Elevation>
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
        </Elevation>
        {this.renderTable()}

        <Elevation
          zSpace="2"
          style={{
            'minHeight': '10em',
            'display': 'flex',
            'alignItems': 'center',
            'flexDirection': 'column'
          }}
        >
          <TypographyDisplay size="1">Original documentation</TypographyDisplay>
          <TypographyBody>
            This component is based on the MDC Linear Progress, you can refer to its documentation <a
            href="https://github.com/material-components/material-components-web/tree/master/packages/mdc-linear-progress"
          >here</a>.
          </TypographyBody>
        </Elevation>

        <Elevation
          zSpace="2"
          className="demo-page-linear_progress "
        >
          <TypographyDisplay size="1">Linear Progress</TypographyDisplay>
          {this.renderExapmle()}
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
        <Elevation
          zSpace="2"
          style={{
            'backgroundColor': 'rgba(0, 0, 0, 0.05)',
            'minHeight': '50px',
            'display': 'flex',
            'alignItems': 'center',
            'justifyContent': 'center',
            'marginTop': '1em'
          }}
        >
          github
        </Elevation>
      </section>
    )
  }
}