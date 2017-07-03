/**
 * Created by ruslan on 16.06.17.
 */
import React, {Component} from 'react'
import {
  IconToggle,
  Elevation,
  TypographyDisplay,
} from '../lib'
import {OriginalDoc, Footer, Example, Demo, Table, code} from '../templates'

export default class IconTogglePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: false,
      toggle_1: false,
      toggle_2: false,
      toggle_3: false,
      toggle_4: false,
      toggle_5: false,
      components: [
        {
          name: 'IconToggle',
          property: [
            {
              name: 'elementType',
              type: 'string | React Component',
              required: 'no',
              defaultValue: 'i',
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
              description: 'кнопка не активна'
            }, {
              name: 'icon',
              type: 'bool',
              required: 'no',
              defaultValue: 'false',
              description: '-'
            }, {
              name: 'role',
              type: 'string',
              required: 'no',
              defaultValue: `'button'`,
              description: '-'
            }, {
              name: 'tabIndex',
              type: 'string | number',
              required: 'no',
              defaultValue: `0`,
              description: '-'
            },
          ]
        }
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
    const {toggle, toggle_1, toggle_2, toggle_3, toggle_4, toggle_5} = this.state;
    return (
      <section
      className="content"
      >
        <Demo>
          <IconToggle
            icon
            toggle={toggle}
            ripple
            onChange={({isOn}) => this.setState({
              toggle: isOn,
            })}
            aria-pressed="false"
            aria-label="Add to favorites"
            tabIndex="0"
            data-toggle-on='{"label": "Remove from favorites", "content": "favorite"}'
            data-toggle-off='{"label": "Add to favorites", "content": "favorite_border"}'
          >
            favorite_border
          </IconToggle>
        </Demo>
        {this.renderTable()}
        <OriginalDoc
        name="IconToggle"
        href="mdc-icon-toggle"
        />
        <Elevation
          zSpace="2"
          className="demo-page-icon_toggle"
        >
          <TypographyDisplay size="1">Icon Toggle</TypographyDisplay>
          <Example
          title="Using material-icons"
          code={code.iconToggle.source1}
          >
            <IconToggle
              icon
              toggle={toggle_1}
              ripple
              onChange={({isOn}) => this.setState({
                toggle_1: isOn,
              })}
              aria-pressed="false"
              aria-label="Add to favorites"
              tabIndex="0"
              data-toggle-on='{"label": "Remove from favorites", "content": "favorite"}'
              data-toggle-off='{"label": "Add to favorites", "content": "favorite_border"}'
            >
              favorite_border
            </IconToggle>
            <p>Favorited? {(toggle_1) ? 'yes' : 'no'}</p>
          </Example>

          <Example
            title="Using Font Awesome"
            code={code.iconToggle.source2}
          >
            <IconToggle
              elementType="span"
              toggle={toggle_2}
              ripple
              onChange={({isOn}) => this.setState({
                toggle_2: isOn,
              })}
              aria-pressed="false"
              aria-label="Star this item"
              tabIndex="0"
              data-icon-inner-selector=".fa"
              data-toggle-on='{"cssClass": "fa-star", "label": "Unstar this item"}'
              data-toggle-off='{"cssClass": "fa-star-o", "label": "Star this item"}'
            >
              <i className="fa fa-star-o" aria-hidden="true"/>
            </IconToggle>
          </Example>
          <Example
            title="Primary Colored Icons"
            code={code.iconToggle.source3}
          >
            <IconToggle
              icon
              primary
              toggle={toggle_3}
              ripple
              onChange={({isOn}) => this.setState({
                toggle_3: isOn,
              })}
              aria-pressed="false"
              aria-label="Add to favorites"
              tabIndex="0"
              data-toggle-on='{"label": "Remove from favorites", "content": "favorite"}'
              data-toggle-off='{"label": "Add to favorites", "content": "favorite_border"}'
            >
              favorite_border
            </IconToggle>
          </Example>
          <Example
            title="Accent Colored Icons"
            code={code.iconToggle.source4}
          >
            <IconToggle
              icon
              accent
              toggle={toggle_4}
              ripple
              onChange={({isOn}) => this.setState({
                toggle_4: isOn,
              })}
              aria-pressed="false"
              aria-label="Add to favorites"
              tabIndex="0"
              data-toggle-on='{"label": "Remove from favorites", "content": "favorite"}'
              data-toggle-off='{"label": "Add to favorites", "content": "favorite_border"}'
            >
              favorite_border
            </IconToggle>
          </Example>
          <Example
            title="Without Ripple"
            code={code.iconToggle.source5}
          >
            <IconToggle
              icon
              toggle={toggle_5}
              onChange={({isOn}) => this.setState({
                toggle_5: isOn,
              })}
              aria-pressed="false"
              aria-label="Add to favorites"
              tabIndex="0"
              data-toggle-on='{"label": "Remove from favorites", "content": "favorite"}'
              data-toggle-off='{"label": "Add to favorites", "content": "favorite_border"}'
            >
              favorite_border
            </IconToggle>
          </Example>
          <Example
            title="Disabled Icons"
            code={code.iconToggle.source6}
          >
            <IconToggle
              icon
              disabled
              toggle={false}
              ripple
              aria-pressed="false"
              aria-label="Add to favorites"
              tabIndex="0"
              data-toggle-on='{"label": "Remove from favorites", "content": "favorite"}'
              data-toggle-off='{"label": "Add to favorites", "content": "favorite_border"}'
            >
              favorite_border
            </IconToggle>
          </Example>
        </Elevation>
        <Footer/>
      </section>
    )
  }
}
