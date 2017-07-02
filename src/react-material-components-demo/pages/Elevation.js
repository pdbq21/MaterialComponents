/**
 * Created by ruslan on 15.06.17.
 */
import React, {Component} from 'react'
import {
  Elevation,
  TypographyDisplay,
} from '../lib'
import {OriginalDoc, Footer, Example, Demo, Table} from '../templates'

export default class ElevationPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mouseIn: false,
      components: [
        {
          name: 'Elevation',
          property: [
            {
              name: 'elementType',
              type: 'string | React Component',
              required: 'no',
              defaultValue: 'div',
              description: 'задає тег елемента'
            },
            {
              name: 'zSpace',
              type: 'string | number',
              required: 'no',
              defaultValue: '0 | 0 - 24',
              description: 'задає розбір підйому'
            }, {
              name: 'transition',
              type: 'bool',
              required: 'no',
              defaultValue: 'false',
              description: 'при наведені піднімається'
            },
          ]
        }
      ],
      used: {
        source1: `import React, {Component} from 'react'
import {
Elevation
} from '../lib'

export default class ElevationExample extends Component {
  
  render() {
    return (
      <div>
          {(function (blocks, i, len) {
              while (++i <= len) {
                blocks.push(<Elevation
                  key={\`key-\${i}\`}
                  zSpace={i}
                  style={{
                    'height': '10em',
                    'width': '12em',
                    'display': 'flex',
                    'alignItems': 'center',
                    'justifyContent': 'center',
                    'margin': '2em',
                  }}
                >{\`\${i}dp (mdc-elevation--z\${i})\`}</Elevation>)
              }
              return blocks;
            })([], -1, 24)}
      </div>
    );
  }
}`,
        source2: `import React, {Component} from 'react'
import {
Elevation
} from '../lib'

export default class ElevationExample extends Component {
    constructor(props) {
    super(props);
    this.state = {
      mouseIn: false,
    }
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseOut = this.handleMouseOut.bind(this);
  }
  setMouseIn(mouseIn) {
    this.setState({mouseIn});
  }

  handleMouseEnter() {
    this.setMouseIn(true);
  }

  handleMouseOut() {
    this.setMouseIn(false);
  }
  render() {
  const {mouseIn} = this.state;
    return (
      <div>
          <Elevation
              zSpace={(mouseIn) ? 8 : 2}
              transition
              onMouseEnter={this.handleMouseEnter}
              onMouseOut={this.handleMouseOut}
              style={{
                'height': '10em',
                'width': '12em',
                'display': 'flex',
                'alignItems': 'center',
                'justifyContent': 'center',
                'margin': '2em',
              }}
            > 2dp (mdc-elevation--z2) | 8dp (mdc-elevation--z8) </Elevation>
      </div>
    );
  }
}`
      }
    };
    this.renderTable = this.renderTable.bind(this);
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseOut = this.handleMouseOut.bind(this);
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


  setMouseIn(mouseIn) {
    this.setState({mouseIn});
  }

  handleMouseEnter() {
    this.setMouseIn(true);
  }

  handleMouseOut() {
    this.setMouseIn(false);
  }

  render() {
    const {mouseIn, used} = this.state;
    return (
      <section
        className="content"
      >
        <Demo>
          <Elevation zSpace={2}
                     style={{
                       'backgroundColor': 'white',
                       'height': '10em',
                       'width': '10em',
                       'display': 'flex',
                       'alignItems': 'center',
                       'justifyContent': 'center',
                     }}
          >Elevation 2dp</Elevation>
        </Demo>
        {this.renderTable()}
        <OriginalDoc
          name="Elevation"
          href="mdc-elevation"
        />

        <Elevation
          zSpace="2"
        >
          <TypographyDisplay size="1">Elevation</TypographyDisplay>
          <Example
            title="Elevation"
            code={used.source1}
          >
            {(function (blocks, i, len) {
              while (++i <= len) {
                blocks.push(<Elevation
                  key={`key-${i}`}
                  zSpace={i}
                  style={{
                    'height': '10em',
                    'width': '12em',
                    'display': 'flex',
                    'alignItems': 'center',
                    'justifyContent': 'center',
                    'margin': '2em',
                  }}
                >{`${i}dp (mdc-elevation--z${i})`}</Elevation>)
              }
              return blocks;
            })([], -1, 24)}
          </Example>
          <Example
            title="Elevation with transition"
            code={used.source2}
          >
            <Elevation
              zSpace={(mouseIn) ? 8 : 2}
              transition
              onMouseEnter={this.handleMouseEnter}
              onMouseOut={this.handleMouseOut}
              style={{
                'height': '10em',
                'width': '12em',
                'display': 'flex',
                'alignItems': 'center',
                'justifyContent': 'center',
                'margin': '2em',
              }}
            > 2dp (mdc-elevation--z2) | 8dp (mdc-elevation--z8) </Elevation>
          </Example>
        </Elevation>
        <Footer/>
      </section>
    )
  }
}
