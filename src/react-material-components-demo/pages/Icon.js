/**
 * Created by ruslan on 16.06.17.
 */
import React, {Component} from 'react'
import {
  Icon,
  Elevation,
  TypographyDisplay,
} from '../lib'
import {OriginalDoc, Footer, Example, Demo, Table, code} from '../templates'

export default class IconPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      components: [
        {
          name: 'Icon',
          property: [
            {
              name: 'elementType',
              type: 'string | React Component',
              required: 'no',
              defaultValue: 'i',
              description: 'задає тег елемента'
            }
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
    return (
      <section
        className="content"
      >
        <Demo>
          <Icon>favorite</Icon>
          <Icon>menu</Icon>
          <Icon>star_border</Icon>
        </Demo>
        {this.renderTable()}
        <OriginalDoc
          text="This component is based on the Material-Icons, you can refer to its documentation"
          url="https://google.github.io/material-design-icons/"
        />

        <Elevation
          zSpace="2"
          className="demo-page-icon"
        >
          <TypographyDisplay size="1">Icon</TypographyDisplay>
          <Example
            title="Icons"
            code={code.icon.source1}
          >
            <Icon>favorite</Icon>
            <Icon>favorite</Icon>
            <Icon>favorite_border</Icon>
            <Icon>menu</Icon>
            <Icon>star_border</Icon>
            <Icon>star</Icon>
          </Example>

        </Elevation>
        <Footer/>
      </section>
    )
  }
}