/**
 * Created by ruslan on 19.06.17.
 */
import React, {Component} from 'react'
import {
  Toolbar,
  ToolbarRow,
  ToolbarSection,
  ToolbarIcon,
  ToolbarTitle,
  ToolbarMain,
  Elevation,
  TypographyDisplay,
  TypographyBody,
} from '../../lib'
import Highlight from 'react-fast-highlight';

export default class ToolbarPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: {
        source1: false,
        source2: false,
        source3: false,
        source4: false,
        source5: false,
        source6: false,
      },
      components: [
        {
          name: 'Toolbar',
          property: [
            {
              name: 'elementType',
              type: 'string | React Component',
              required: 'no',
              defaultValue: 'header',
              description: 'задає тег елемента'
            },
            {
              name: 'onChange',
              type: 'function',
              required: 'no',
              defaultValue: '-',
              description: '-'
            }, {
              name: 'fixed',
              type: 'bool',
              required: 'no',
              defaultValue: 'false',
              description: '-'
            }, {
              name: 'waterfall',
              type: 'bool',
              required: 'no',
              defaultValue: 'false',
              description: '-'
            }, {
              name: 'lastRow',
              type: 'bool',
              required: 'no',
              defaultValue: 'false',
              description: '-'
            }, {
              name: 'defaultBehavior',
              type: 'bool',
              required: 'no',
              defaultValue: 'false',
              description: '-'
            },{
              name: 'flexible',
              type: 'bool',
              required: 'no',
              defaultValue: 'false',
              description: '-'
            },
          ]
        }, {
          name: 'ToolbarRow',
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
          name: 'ToolbarSection',
          property: [
            {
              name: 'elementType',
              type: 'string | React Component',
              required: 'no',
              defaultValue: 'section',
              description: 'задає тег елемента'
            }, {
              name: 'start',
              type: 'bool',
              required: 'no',
              defaultValue: 'false',
              description: '-'
            }, {
              name: 'end',
              type: 'bool',
              required: 'no',
              defaultValue: 'false',
              description: '-'
            }, {
              name: 'shrink',
              type: 'bool',
              required: 'no',
              defaultValue: 'false',
              description: '-'
            },
          ]
        }, {
          name: 'ToolbarTitle',
          property: [
            {
              name: 'elementType',
              type: 'string | React Component',
              required: 'no',
              defaultValue: 'span',
              description: 'задає тег елемента'
            }
          ]
        }, {
          name: 'ToolbarMain',
          property: [
            {
              name: 'elementType',
              type: 'string | React Component',
              required: 'no',
              defaultValue: 'main',
              description: 'задає тег елемента'
            }, {
              name: 'fixed',
              type: 'bool',
              required: 'no',
              defaultValue: 'false',
              description: '-'
            }
          ]
        }, {
          name: 'ToolbarIcon',
          property: [
            {
              name: 'elementType',
              type: 'string | React Component',
              required: 'no',
              defaultValue: 'i',
              description: 'задає тег елемента'
            }, {
              name: 'menu',
              type: 'bool',
              required: 'no',
              defaultValue: 'false',
              description: '-'
            }
          ]
        },
      ],
      used: {
        source1: `import React, {Component} from 'react'
import {
  Toolbar,
  ToolbarRow,
  ToolbarSection,
  ToolbarTitle,
  ToolbarMain,
  ToolbarIcon
} from '../../lib'
export default class ToolbarNormalPage extends Component {

  render() {
    return (
      <section>
        <Toolbar>
          <ToolbarRow>
            <ToolbarSection start>
              <ToolbarIcon menu>menu</ToolbarIcon>
              <ToolbarTitle>Title</ToolbarTitle>
            </ToolbarSection>
            <ToolbarSection end>
              <ToolbarIcon aria-label="Download" alt="Download">file_download</ToolbarIcon>
              <ToolbarIcon aria-label="Print this page" alt="Print this page">print</ToolbarIcon>
              <ToolbarIcon aria-label="Bookmark this page"
                           alt="Bookmark this page">more_vert</ToolbarIcon>
            </ToolbarSection>
          </ToolbarRow>
        </Toolbar>
        <ToolbarMain>
          <p>
            Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis
            egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante.
            Donec
            eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Pellentesque
            habitant
            morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum
            tortor
            quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet
            quam
            egestas semper. Aenean ultricies mi vitae est.
          </p>
          <p>
            Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis
            egestas.
            Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu
            libero
            sit amet quam egestas semper. Aenean ultricies mi vitae est. Pellentesque habitant morbi
            tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor
            quam,
            feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam
            egestas
            semper. Aenean ultricies mi vitae est.
          </p>
        </ToolbarMain>
      </section>
    )
  }
}`,
        source2: `import React, {Component} from 'react'
import {
  Toolbar,
  ToolbarRow,
  ToolbarSection,
  ToolbarTitle,
  ToolbarMain,
  ToolbarIcon
} from '../../lib'


export default class ToolbarFixedPage extends Component {

  render() {
    return (
      <section>
        <Toolbar
          fixed
        >
          <ToolbarRow>
            <ToolbarSection start>
              <ToolbarIcon menu>menu</ToolbarIcon>
              <ToolbarTitle>Title</ToolbarTitle>
            </ToolbarSection>
            <ToolbarSection end>
              <ToolbarIcon aria-label="Download" alt="Download">file_download</ToolbarIcon>
              <ToolbarIcon aria-label="Print this page"
                           alt="Print this page">print</ToolbarIcon>
              <ToolbarIcon aria-label="Bookmark this page" alt="Bookmark this page">more_vert</ToolbarIcon>
            </ToolbarSection>
          </ToolbarRow>
        </Toolbar>
        <ToolbarMain fixed>
          <h3>Is Top</h3>
          <p>
            Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis
            egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante.
            Donec
            eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Pellentesque
            habitant
            morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum
            tortor
            quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet
            quam
            egestas semper. Aenean ultricies mi vitae est.
          </p>
          <p>
            Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis
            egestas.
            Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu
            libero
            sit amet quam egestas semper. Aenean ultricies mi vitae est. Pellentesque habitant morbi
            tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor
            quam,
            feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam
            egestas
            semper. Aenean ultricies mi vitae est.
          </p>
        </ToolbarMain>
      </section>
    )
  }
}`,
        source3: `import React, {Component} from 'react'
import {
  Toolbar,
  ToolbarRow,
  ToolbarSection,
  ToolbarTitle,
  ToolbarMain,
  ToolbarIcon
} from '../../lib'


export default class ToolbarWaterFallPage extends Component {

  render() {
    return (
      <section>
        <Toolbar
          fixed
          waterfall
        >
          <ToolbarRow>
            <ToolbarSection start>
              <ToolbarIcon menu>menu</ToolbarIcon>
              <ToolbarTitle>Title</ToolbarTitle>
            </ToolbarSection>
            <ToolbarSection end>
              <ToolbarIcon aria-label="Download" alt="Download">file_download</ToolbarIcon>
              <ToolbarIcon aria-label="Print this page"
                           alt="Print this page">print</ToolbarIcon>
              <ToolbarIcon aria-label="Bookmark this page" alt="Bookmark this page">more_vert</ToolbarIcon>
            </ToolbarSection>
          </ToolbarRow>
        </Toolbar>
        <ToolbarMain fixed>
          <h3>Is Top</h3>
          <p>
            Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis
            egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante.
            Donec
            eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Pellentesque
            habitant
            morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum
            tortor
            quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet
            quam
            egestas semper. Aenean ultricies mi vitae est.
          </p>
          <p>
            Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis
            egestas.
            Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu
            libero
            sit amet quam egestas semper. Aenean ultricies mi vitae est. Pellentesque habitant morbi
            tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor
            quam,
            feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam
            egestas
            semper. Aenean ultricies mi vitae est.
          </p>
        </ToolbarMain>
      </section>
    )
  }
}`,
        source4: `import React, {Component} from 'react'
import {
  Toolbar,
  ToolbarRow,
  ToolbarSection,
  ToolbarTitle,
  ToolbarMain,
  ToolbarIcon
} from '../../lib'


export default class ToolbarFlexiblePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flexibleExpansionRatio: 0
    }
  }

  render() {
    const { flexibleExpansionRatio } = this.state;
    return (
      <section>
        <Toolbar
          flexible
          defaultBehavior
          onChange={(event) => this.setState({
            flexibleExpansionRatio: event.flexibleExpansionRatio.toFixed(2)
          })}
        >
          <ToolbarRow
            className="demo-page-toolbar_flexible"
          >
            <ToolbarSection start>
              <ToolbarIcon menu>menu</ToolbarIcon>
              <ToolbarTitle>Title</ToolbarTitle>
            </ToolbarSection>
            <ToolbarSection end>
              <ToolbarIcon aria-label="Download" alt="Download">file_download</ToolbarIcon>
              <ToolbarIcon aria-label="Print this page"
                           alt="Print this page">print</ToolbarIcon>
              <ToolbarIcon aria-label="Bookmark this page" alt="Bookmark this page">more_vert</ToolbarIcon>
            </ToolbarSection>
          </ToolbarRow>
        </Toolbar>
        <ToolbarMain fixed>
          <h3>Is Top</h3>
          <p>
            Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis
            egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante.
            Donec
            eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Pellentesque
            habitant
            morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum
            tortor
            quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet
            quam
            egestas semper. Aenean ultricies mi vitae est.
          </p>
          <p>
            Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis
            egestas.
            Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu
            libero
            sit amet quam egestas semper. Aenean ultricies mi vitae est. Pellentesque habitant morbi
            tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor
            quam,
            feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam
            egestas
            semper. Aenean ultricies mi vitae est.
          </p>
        </ToolbarMain>
        <footer
        style={{
          'position': 'fixed',
          'bottom': '20px',
          'width': '100%',
          'textAlign': 'center',
          'color': 'red',
          'backgroundColor': 'rgba(0, 0, 0, 0.8)',
        }}
        >
          <span>Flexible Expansion Ratio: {flexibleExpansionRatio}</span>
        </footer>
      </section>
    )
  }
}
`,
        source5: `import React, {Component} from 'react'
import {
  Toolbar,
  ToolbarRow,
  ToolbarSection,
  ToolbarTitle,
  ToolbarMain,
  ToolbarIcon
} from '../../lib'


export default class ToolbarWaterfallFlexiblePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flexibleExpansionRatio: 0
    }
  }

  render() {
    const { flexibleExpansionRatio } = this.state;
    return (
      <section>
        <Toolbar
          fixed
          waterfall
          flexible
          defaultBehavior
          onChange={(event) => this.setState({
            flexibleExpansionRatio: event.flexibleExpansionRatio.toFixed(2)
          })}
        >
          <ToolbarRow
            className="demo-page-toolbar_flexible"
          >
            <ToolbarSection start>
              <ToolbarIcon menu>menu</ToolbarIcon>
              <ToolbarTitle>Title</ToolbarTitle>
            </ToolbarSection>
            <ToolbarSection end>
              <ToolbarIcon aria-label="Download" alt="Download">file_download</ToolbarIcon>
              <ToolbarIcon aria-label="Print this page"
                           alt="Print this page">print</ToolbarIcon>
              <ToolbarIcon aria-label="Bookmark this page" alt="Bookmark this page">more_vert</ToolbarIcon>
            </ToolbarSection>
          </ToolbarRow>
        </Toolbar>
        <ToolbarMain fixed>
          <h3>Is Top</h3>
          <p>
            Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis
            egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante.
            Donec
            eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Pellentesque
            habitant
            morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum
            tortor
            quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet
            quam
            egestas semper. Aenean ultricies mi vitae est.
          </p>
          <p>
            Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis
            egestas.
            Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu
            libero
            sit amet quam egestas semper. Aenean ultricies mi vitae est. Pellentesque habitant morbi
            tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor
            quam,
            feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam
            egestas
            semper. Aenean ultricies mi vitae est.
          </p>
        </ToolbarMain>
        <footer
          style={{
            'position': 'fixed',
            'bottom': '20px',
            'width': '100%',
            'textAlign': 'center',
            'color': 'red',
            'backgroundColor': 'rgba(0, 0, 0, 0.8)',
          }}
        >
          <span>Flexible Expansion Ratio: {flexibleExpansionRatio}</span>
        </footer>
      </section>
    )
  }
}
`,
        source6: `import React, {Component} from 'react'
import {
  Toolbar,
  ToolbarRow,
  ToolbarSection,
  ToolbarTitle,
  ToolbarMain,
  ToolbarIcon
} from '../../lib'


export default class ToolbarWaterfallFixLastRowPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flexibleExpansionRatio: 0
    }
  }

  render() {
    const { flexibleExpansionRatio } = this.state;
    return (
      <section>
        <Toolbar
          fixed
          waterfall
          flexible
          lastrowOnly
          defaultBehavior
          onChange={(event) => this.setState({
            flexibleExpansionRatio: event.flexibleExpansionRatio.toFixed(2)
          })}
        >
          <ToolbarRow
            className="demo-page-toolbar_flexible"
          >
            <ToolbarSection start>
              <ToolbarIcon menu>menu</ToolbarIcon>
              <ToolbarTitle>Title</ToolbarTitle>
            </ToolbarSection>
          </ToolbarRow>
          <ToolbarRow>
            <ToolbarSection end>
              <ToolbarIcon aria-label="Download" alt="Download">file_download</ToolbarIcon>
              <ToolbarIcon aria-label="Print this page"
                           alt="Print this page">print</ToolbarIcon>
              <ToolbarIcon aria-label="Bookmark this page" alt="Bookmark this page">more_vert</ToolbarIcon>
            </ToolbarSection>
          </ToolbarRow>
        </Toolbar>
        <ToolbarMain fixed>
          <h3>Is Top</h3>
          <p>
            Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis
            egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante.
            Donec
            eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Pellentesque
            habitant
            morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum
            tortor
            quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet
            quam
            egestas semper. Aenean ultricies mi vitae est.
          </p>
          <p>
            Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis
            egestas.
            Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu
            libero
            sit amet quam egestas semper. Aenean ultricies mi vitae est. Pellentesque habitant morbi
            tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor
            quam,
            feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam
            egestas
            semper. Aenean ultricies mi vitae est.
          </p>
        </ToolbarMain>
        <footer
          style={{
            'position': 'fixed',
            'bottom': '20px',
            'width': '100%',
            'textAlign': 'center',
            'color': 'red',
            'backgroundColor': 'rgba(0, 0, 0, 0.8)',
          }}
        >
          <span>Flexible Expansion Ratio: {flexibleExpansionRatio}</span>
        </footer>
      </section>
    )
  }
}
`,
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
        source1, source2, source3,
        source4, source5, source6,
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
          <Toolbar
          style={{
            'width': '50%'
          }}
          >
            <ToolbarRow>
              <ToolbarSection start>
                <ToolbarIcon menu>menu</ToolbarIcon>
                <ToolbarTitle>Toolbar</ToolbarTitle>
              </ToolbarSection>
              <ToolbarSection end>
                <ToolbarIcon aria-label="Download" alt="Download">file_download</ToolbarIcon>
                <ToolbarIcon aria-label="Print this page" alt="Print this page">print</ToolbarIcon>
                <ToolbarIcon aria-label="Bookmark this page"
                             alt="Bookmark this page">more_vert</ToolbarIcon>
              </ToolbarSection>
            </ToolbarRow>
          </Toolbar>
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
            This component is based on the MDC Toolbar, you can refer to its documentation <a
            href="https://github.com/material-components/material-components-web/tree/master/packages/mdc-toolbar"
          >here</a>.
          </TypographyBody>
        </Elevation>

        <Elevation
          zSpace="2"
          className="demo-page-toolbar"
        >
          <TypographyDisplay size="1">Toolbar</TypographyDisplay>
          <Elevation
            zSpace="2"
            className="demo-example"
          >
            <Toolbar
            className="toolbar-view_example"
            >
              <ToolbarRow>
                <ToolbarSection start>
                  <ToolbarTitle>Normal Toolbar</ToolbarTitle>
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
              className="demo-page-toolbar_demo-components"
            >
              <iframe
                src="/toolbar_normal"
                frameBorder="0"
                width='320px'
                height='420px'
              />
            </ToolbarMain>
          </Elevation>
          <Elevation
            zSpace="2"
            className="demo-example"
          >
            <Toolbar
              className="toolbar-view_example"
            >
              <ToolbarRow>
                <ToolbarSection start>
                  <ToolbarTitle>Fixed Toolbar</ToolbarTitle>
                </ToolbarSection>
                <ToolbarSection end>
                  <ToolbarIcon
                    onClick={() => this.handleViewCode('source2')}
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
                'maxHeight': (source2) ? '20em' : '0px',
                'transition': 'max-height 800ms ease-in-out 0ms',
              }}
            >
              <Highlight language='javascript'>
                {this.state.used.source2}
              </Highlight>
            </Elevation>
            <ToolbarMain
              className="demo-page-toolbar_demo-components"
            >
              <iframe
                src="/toolbar_fixed"
                frameBorder="0"
                width='320px'
                height='420px'
              />
            </ToolbarMain>
          </Elevation>
          <Elevation
            zSpace="2"
            className="demo-example"
          >
            <Toolbar
              className="toolbar-view_example"
            >
              <ToolbarRow>
                <ToolbarSection start>
                  <ToolbarTitle>Waterfall Toolbar</ToolbarTitle>
                </ToolbarSection>
                <ToolbarSection end>
                  <ToolbarIcon
                    onClick={() => this.handleViewCode('source3')}
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
                'maxHeight': (source3) ? '20em' : '0px',
                'transition': 'max-height 800ms ease-in-out 0ms',
              }}
            >
              <Highlight language='javascript'>
                {this.state.used.source3}
              </Highlight>
            </Elevation>
            <ToolbarMain
              className="demo-page-toolbar_demo-components"
            >
              <iframe
                src="/toolbar_waterfall"
                frameBorder="0"
                width='320px'
                height='420px'
              />
            </ToolbarMain>
          </Elevation>
          <Elevation
            zSpace="2"
            className="demo-example"
          >
            <Toolbar
              className="toolbar-view_example"
            >
              <ToolbarRow>
                <ToolbarSection start>
                  <ToolbarTitle>Default Flexible Toolbar</ToolbarTitle>
                </ToolbarSection>
                <ToolbarSection end>
                  <ToolbarIcon
                    onClick={() => this.handleViewCode('source4')}
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
                'maxHeight': (source4) ? '20em' : '0px',
                'transition': 'max-height 800ms ease-in-out 0ms',
              }}
            >
              <Highlight language='javascript'>
                {this.state.used.source4}
              </Highlight>
            </Elevation>
            <ToolbarMain
              className="demo-page-toolbar_demo-components"
            >
              <iframe
                src="/toolbar_flexible"
                frameBorder="0"
                width='320px'
                height='420px'
              />
            </ToolbarMain>
          </Elevation>
          <Elevation
            zSpace="2"
            className="demo-example"
          >
            <Toolbar
              className="toolbar-view_example"
            >
              <ToolbarRow>
                <ToolbarSection start>
                  <ToolbarTitle>Waterfall Flexible Toolbar</ToolbarTitle>
                </ToolbarSection>
                <ToolbarSection end>
                  <ToolbarIcon
                    onClick={() => this.handleViewCode('source5')}
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
                'maxHeight': (source5) ? '20em' : '0px',
                'transition': 'max-height 800ms ease-in-out 0ms',
              }}
            >
              <Highlight language='javascript'>
                {this.state.used.source5}
              </Highlight>
            </Elevation>
            <ToolbarMain
              className="demo-page-toolbar_demo-components"
            >
              <iframe
                src="/toolbar_wf"
                frameBorder="0"
                width='320px'
                height='420px'
              />
            </ToolbarMain>
          </Elevation>
          <Elevation
            zSpace="2"
            className="demo-example"
          >
            <Toolbar
              className="toolbar-view_example"
            >
              <ToolbarRow>
                <ToolbarSection start>
                  <ToolbarTitle>Waterfall Toolbar Fix Last Row</ToolbarTitle>
                </ToolbarSection>
                <ToolbarSection end>
                  <ToolbarIcon
                    onClick={() => this.handleViewCode('source6')}
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
                'maxHeight': (source6) ? '20em' : '0px',
                'transition': 'max-height 800ms ease-in-out 0ms',
              }}
            >
              <Highlight language='javascript'>
                {this.state.used.source6}
              </Highlight>
            </Elevation>
            <ToolbarMain
              className="demo-page-toolbar_demo-components"
            >
              <iframe
                src="/toolbar_wflr"
                frameBorder="0"
                width='320px'
                height='420px'
              />
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
