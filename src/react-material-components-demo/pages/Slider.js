/**
 * Created by ruslan on 22.06.17.
 */
import React, {Component} from 'react'
import {
  Elevation,
  TypographyDisplay,
  Slider,
  SliderContainerTrack,
  SliderContainerThumb,
  SliderFocusRing,
  SliderThumb,
  SliderTrack,
  SliderPin,
  SliderPinMarker,
  FormField,
  Checkbox,
  CheckboxInput,
  CheckboxBG,
  CheckboxLabel,
  Textfield,
  TextfieldInput,
  TextfieldLabel,
} from '../lib'
import {OriginalDoc, Footer, Example, Demo, Table, code} from '../templates'

export default class SliderPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      valueInput: 0,
      valueChange: 0,
      options: {
        bgColor: false,
        disabled: false,
        min: 0,
        max: 100,
        step: 0,
        bgColor1: false,
        disabled1: false,
        min1: 0,
        max1: 100,
        step1: 0,
        bgColor2: false,
        disabled2: false,
        min2: 0,
        max2: 100,
        step2: 0,
      },
      valueInput1: 0,
      valueChange1: 0,
      valueInput2: 0,
      valueChange2: 0,

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
            }, {
              name: 'discrete',
              type: 'bool',
              required: 'no',
              defaultValue: 'false',
              description: '-'
            }, {
              name: 'markers',
              type: 'bool',
              required: 'no',
              defaultValue: 'false',
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
            }, {
              name: 'marker',
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
    this.handleViewCode = this.handleViewCode.bind(this);
    this.handleOptions = this.handleOptions.bind(this);
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
      options: {
        bgColor,
        disabled,
        min,
        max,
        step,
        bgColor1,
        disabled1,
        min1,
        max1,
        step1,
        bgColor2,
        disabled2,
        min2,
        max2,
        step2,
      },
      valueInput1,
      valueChange1,
      valueInput2,
      valueChange2,
    } = this.state;
    return (
      <section
        className="content"
      >
        <Demo
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
        </Demo>
        {this.renderTable()}
        <OriginalDoc
          name="Slider"
          href="mdc-slider"
        />

        <Elevation
          zSpace="2"
          className="demo-page-slider "
        >
          <TypographyDisplay size="1">Slider</TypographyDisplay>
          <Example
            title="Continuous Slider"
            code={code.slider.source1}
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
          </Example>
          <Example
            title="Discrete Slider"
            code={code.slider.source2}
          >
            <Slider
              discrete
              style={{
                'backgroundColor': (bgColor1) ? '#eeefff' : '',
              }}
              disabled={disabled1}
              onSliderInput={(value) => this.setState({
                valueInput1: value
              })}
              onSliderChange={(value) => this.setState({
                valueChange1: value
              })}
              aria-valuemin={min1}
              aria-valuemax={max1}
              data-step={step1}
              aria-label="Select Value"
            >
              <SliderContainerTrack>
                <SliderTrack/>
              </SliderContainerTrack>
              <SliderContainerThumb>
                <SliderPin>
                  <SliderPinMarker/>
                </SliderPin>
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
                    value={min1}
                    onChange={({target}) => this.handleOptions('min1', target.value)}
                  />
                  <TextfieldLabel>Min</TextfieldLabel>
                </Textfield>
              </FormField>
              <FormField>
                <Textfield>
                  <TextfieldInput
                    type="number"
                    value={max1}
                    onChange={({target}) => this.handleOptions('max1', target.value)}
                  />
                  <TextfieldLabel>Max</TextfieldLabel>
                </Textfield>
              </FormField>
              <FormField>
                <Textfield>
                  <TextfieldInput
                    type="number"
                    value={step1}
                    onChange={({target}) => this.handleOptions('step1', target.value)}
                  />
                  <TextfieldLabel>Step</TextfieldLabel>
                </Textfield>
              </FormField>
              <FormField>
                <Checkbox
                  ripple
                >
                  <CheckboxInput
                    checked={disabled1}
                    onChange={() => this.handleOptions('disabled1')}
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
                    checked={bgColor1}
                    onChange={() => this.handleOptions('bgColor1')}
                  />
                  <CheckboxBG/>
                </Checkbox>
                <CheckboxLabel>
                  Use Custom BG Color
                </CheckboxLabel>
              </FormField>
              <FormField>
                onSliderInput: {valueInput1}
              </FormField>
              <FormField>
                onSliderChange: {valueChange1}
              </FormField>
            </Elevation>
          </Example>
          <Example
            title="Discrete Slider with markers"
            code={code.slider.source3}
          >
            <Slider
              discrete
              markers
              style={{
                'backgroundColor': (bgColor2) ? '#eeefff' : '',
              }}
              disabled={disabled2}
              onSliderInput={(value) => this.setState({
                valueInput2: value
              })}
              onSliderChange={(value) => this.setState({
                valueChange2: value
              })}
              aria-valuemin={min2}
              aria-valuemax={max2}
              data-step={step2}
              aria-label="Select Value"
            >
              <SliderContainerTrack>
                <SliderTrack/>
                <SliderTrack marker/>
              </SliderContainerTrack>
              <SliderContainerThumb>
                <SliderPin>
                  <SliderPinMarker/>
                </SliderPin>
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
                    value={min2}
                    onChange={({target}) => this.handleOptions('min2', target.value)}
                  />
                  <TextfieldLabel>Min</TextfieldLabel>
                </Textfield>
              </FormField>
              <FormField>
                <Textfield>
                  <TextfieldInput
                    type="number"
                    value={max2}
                    onChange={({target}) => this.handleOptions('max2', target.value)}
                  />
                  <TextfieldLabel>Max</TextfieldLabel>
                </Textfield>
              </FormField>
              <FormField>
                <Textfield>
                  <TextfieldInput
                    type="number"
                    value={step2}
                    onChange={({target}) => this.handleOptions('step2', target.value)}
                  />
                  <TextfieldLabel>Step</TextfieldLabel>
                </Textfield>
              </FormField>
              <FormField>
                <Checkbox
                  ripple
                >
                  <CheckboxInput
                    checked={disabled2}
                    onChange={() => this.handleOptions('disabled2')}
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
                    checked={bgColor2}
                    onChange={() => this.handleOptions('bgColor2')}
                  />
                  <CheckboxBG/>
                </Checkbox>
                <CheckboxLabel>
                  Use Custom BG Color
                </CheckboxLabel>
              </FormField>
              <FormField>
                onSliderInput: {valueInput2}
              </FormField>
              <FormField>
                onSliderChange: {valueChange2}
              </FormField>
            </Elevation>
          </Example>
        </Elevation>
        <Footer/>
      </section>
    )
  }
}