/**
 * Created by ruslan on 22.06.17.
 */
import React, {Component} from 'react'
import {
  Elevation,
  TypographyDisplay,
  TypographyBody,
  Toolbar,
  ToolbarRow,
  ToolbarSection,
  ToolbarTitle,
  ToolbarMain,
  ToolbarIcon,
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
import Highlight from 'react-fast-highlight';

export default class SliderPage extends Component {
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
      components: [
        {
          name: 'Slider',
          property: [
            {
              name: 'elementType',
              type: 'string | React Component',
              required: 'no',
              defaultValue: 'div',
              description: 'задає тег елемента'
            },
            {
              name: 'tabIndex',
              type: 'number | string',
              required: 'no',
              defaultValue: `'0'`,
              description: '-'
            }, {
              name: 'role',
              type: 'string',
              required: 'no',
              defaultValue: 'slider',
              description: '-'
            }, {
              name: 'onSliderInput',
              type: 'function',
              required: 'no',
              defaultValue: '-',
              description: '-'
            }, {
              name: 'onSliderChange',
              type: 'function',
              required: 'no',
              defaultValue: '-',
              description: '-'
            }, {
              name: 'disabled',
              type: 'bool',
              required: 'no',
              defaultValue: 'false',
              description: '-'
            }, {
              name: 'aria-valuenow',
              type: 'number',
              required: 'no',
              defaultValue: '0',
              description: '-'
            }, {
              name: 'aria-valuemin',
              type: 'number',
              required: 'no',
              defaultValue: '0',
              description: '-'
            }, {
              name: 'aria-valuemax',
              type: 'number',
              required: 'no',
              defaultValue: '100',
              description: '-'
            }, {
              name: 'data-step',
              type: 'number',
              required: 'no',
              defaultValue: '0',
              description: '-'
            },
          ]
        }, {
          name: 'SliderContainerTrack',
          property: [
            {
              name: 'elementType',
              type: 'string | React Component',
              required: 'no',
              defaultValue: 'div',
              description: 'задає тег елемента'
            },
          ]
        }, {
          name: 'SliderContainerThumb',
          property: [
            {
              name: 'elementType',
              type: 'string | React Component',
              required: 'no',
              defaultValue: 'div',
              description: 'задає тег елемента'
            },
          ]
        }, {
          name: 'SliderFocusRing',
          property: [
            {
              name: 'elementType',
              type: 'string | React Component',
              required: 'no',
              defaultValue: 'div',
              description: 'задає тег елемента'
            },
          ]
        }, {
          name: 'SliderThumb',
          property: [
            {
              name: 'elementType',
              type: 'string | React Component',
              required: 'no',
              defaultValue: 'svg',
              description: 'задає тег елемента'
            }, {
              name: 'circle',
              type: 'bool',
              required: 'no',
              defaultValue: 'false',
              description: '-'
            }, {
              name: 'cx',
              type: 'number',
              required: 'no',
              defaultValue: '10.5',
              description: '* if is circle'
            }, {
              name: 'cy',
              type: 'number',
              required: 'no',
              defaultValue: '10.5',
              description: '* if is circle'
            }, {
              name: 'r',
              type: 'number',
              required: 'no',
              defaultValue: '7.875',
              description: '* if is circle'
            }, {
              name: 'width',
              type: 'number',
              required: 'no',
              defaultValue: '21',
              description: '-'
            }, {
              name: 'height',
              type: 'number',
              required: 'no',
              defaultValue: '21',
              description: '-'
            },
          ]
        }, {
          name: 'SliderTrack',
          property: [
            {
              name: 'elementType',
              type: 'string | React Component',
              required: 'no',
              defaultValue: 'svg',
              description: 'задає тег елемента'
            }
          ]
        },
      ],
      used: {
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
      }
    };
    this.renderTable = this.renderTable.bind(this);
    this.handleViewCode = this.handleViewCode.bind(this);
    this.handleOptions = this.handleOptions.bind(this);
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
          <Slider
            aria-valuemin="0"
            aria-valuemax="100"
            aria-valuenow="50"
            aria-label="Select Value"
            data-step='0'
            style={{
              'width': '80%'
            }}
          >
            <SliderContainerTrack>
              <SliderTrack/>
            </SliderContainerTrack>
            <SliderContainerThumb>
              <SliderThumb circle/>
              <SliderFocusRing/>
            </SliderContainerThumb>
          </Slider>
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
            This component is based on the MDC Slider, you can refer to its documentation <a
            href="https://github.com/material-components/material-components-web/tree/master/packages/mdc-slider"
          >here</a>.
          </TypographyBody>
        </Elevation>

        <Elevation
          zSpace="2"
          className="demo-page-slider "
        >
          <TypographyDisplay size="1">Slider</TypographyDisplay>
          <Elevation
            zSpace="2"
            className="demo-example"
          >
            <Toolbar
              className="toolbar-view_example"
            >
              <ToolbarRow>
                <ToolbarSection start>
                  <ToolbarTitle>Continuous Slider</ToolbarTitle>
                </ToolbarSection>
                <ToolbarSection end>
                  <ToolbarIcon
                    onClick={() => this.handleViewCode('source1')}
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
                'maxHeight': (source1) ? '20em' : '0px',
                'transition': 'max-height 800ms ease-in-out 0ms',
              }}
            >
              <Highlight language='javascript'>
                {this.state.used.source1}
              </Highlight>
            </Elevation>
            <ToolbarMain
              className="demo-page-slider_demo-components"
              style={{
                'padding': '1em',
              }}
            >

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
            </ToolbarMain>
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