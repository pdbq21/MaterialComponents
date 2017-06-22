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
  SliderTrack
} from '../lib'
import Highlight from 'react-fast-highlight';

export default class SliderPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: {
        source1: false,
        source2: false,
        source3: false,
      },
      components: [
        {
          name: 'Button',
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
              description: 'кнопка з кольором primary'
            }, {
              name: 'accent',
              type: 'bool',
              required: 'no',
              defaultValue: 'false',
              description: 'кнопка з кольором accent'
            }, {
              name: 'compact',
              type: 'bool',
              required: 'no',
              defaultValue: 'false',
              description: 'кнопка з типом compact'
            }, {
              name: 'dense',
              type: 'bool',
              required: 'no',
              defaultValue: 'false',
              description: 'кнопка з типом dense'
            }, {
              name: 'raised',
              type: 'bool',
              required: 'no',
              defaultValue: 'false',
              description: 'кнопка з типом raised'
            }, {
              name: 'ripple',
              type: 'bool',
              required: 'no',
              defaultValue: 'false',
              description: 'додає Ripple ефект'
            }, {
              name: 'disabled',
              type: 'bool',
              required: 'no',
              defaultValue: 'false',
              description: 'кнопка не активна. працює якщо тип кнопки button'
            },
          ]
        }
      ],
      used: {
        source1: ``,
        source2: ``,
        source3: ``
      }
    };
    this.renderTable = this.renderTable.bind(this);
    this.handleViewCode = this.handleViewCode.bind(this);
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

  render() {
    const {
      isActive: {
        source1, source2, source3
      }
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
            onSliderInput={(e) => console.log('input', e)}
            onSliderChange={(e) => console.log('change', e)}
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
            This component is based on the MDC Button, you can refer to its documentation <a
            href="https://github.com/material-components/material-components-web/tree/master/packages/mdc-button"
          >here</a>.
          </TypographyBody>
        </Elevation>

        <Elevation
          zSpace="2"
          className="demo-page-slider "
        >
          <TypographyDisplay size="1">Buttons</TypographyDisplay>
          <Elevation
            zSpace="2"
            className="demo-example"
          >
            <Toolbar
              className="toolbar-view_example"
            >
              <ToolbarRow>
                <ToolbarSection start>
                  <ToolbarTitle>Buttons with Ripple</ToolbarTitle>
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
              className="demo-page-button_demo-components"
            >

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