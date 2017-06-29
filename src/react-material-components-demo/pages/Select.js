/**
 * Created by ruslan on 20.06.17.
 */
import React, {Component} from 'react'
import {
  Select,
  SelectMenu,
  SelectText,
  SelectItems,
  SelectItem,
  ListGroup,
  ListItem,
  FormField,
  Checkbox,
  CheckboxInput,
  CheckboxBG,
  CheckboxLabel,
  ListDivider,
  Elevation,
  TypographyDisplay,
} from '../lib'

import {OriginalDoc, Footer, Example} from '../templates'

export default class SelectPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      disabled: false,
      components: [
        {
          name: 'Select',
          property: [
            {
              name: 'elementType',
              type: 'string | React Component',
              required: 'no',
              defaultValue: 'div',
              description: 'задає тег елемента'
            },
            {
              name: 'onSelected',
              type: 'function',
              required: 'no',
              defaultValue: '-',
              description: '-'
            },
            {
              name: 'onCancel',
              type: 'function',
              required: 'no',
              defaultValue: '-',
              description: '-'
            },
            {
              name: 'onChange',
              type: 'function',
              required: 'no',
              defaultValue: '-',
              description: '-'
            },
            {
              name: 'cssOnly',
              type: 'bool',
              required: 'no',
              defaultValue: 'false',
              description: '-'
            },
            {
              name: 'multiple',
              type: 'bool',
              required: 'no',
              defaultValue: 'false',
              description: '-'
            },
          ]
        }, {
          name: 'SelectMenu',
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
          name: 'SelectText',
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
        {
          name: 'SelectItems',
          property: [
            {
              name: 'elementType',
              type: 'string | React Component',
              required: 'no',
              defaultValue: 'ul',
              description: 'задає тег елемента'
            },
          ]
        },
        {
          name: 'SelectItem',
          property: [
            {
              name: 'elementType',
              type: 'string | React Component',
              required: 'no',
              defaultValue: 'li',
              description: 'задає тег елемента'
            },
            {
              name: 'tabIndex',
              type: 'number | string',
              required: 'no',
              defaultValue: '0',
              description: '-'
            },
            {
              name: 'role',
              type: 'string',
              required: 'no',
              defaultValue: `'option'`,
              description: '-'
            },
            {
              name: 'disabled',
              type: 'bool',
              required: 'no',
              defaultValue: 'false',
              description: '-'
            },
          ]
        },
      ],
      used: ``
    };
    this.renderTable = this.renderTable.bind(this);
    this.handleDisabled = this.handleDisabled.bind(this);
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
  handleDisabled(){
    this.setState({
      disabled: !this.state.disabled
    })
  }
  render() {
    const { disabled } = this.state;
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
          <Select
            onSelected={(event) => console.log(event)}
            onCancel={(event) => console.log(event)}
            onChange={(event) => console.log(event)}
          >
            <SelectText>Pick a food group</SelectText>
            <SelectMenu>
              <SelectItems>
                <SelectItem
                  aria-disabled="true"
                >
                  Pick a food group
                </SelectItem><SelectItem>
                Bread, Cereal, Rice, and Pasta
              </SelectItem>
                <SelectItem>
                  Vegetables
                </SelectItem>
                <SelectItem>
                  Fruit
                </SelectItem>
                <SelectItem>
                  Milk, Yogurt, and Cheese
                </SelectItem>
                <SelectItem>
                  Meat, Poultry, Fish, Dry Beans, Eggs, and Nuts
                </SelectItem>
                <SelectItem>
                  Fats, Oils, and Sweets
                </SelectItem>
              </SelectItems>
            </SelectMenu>
          </Select>
        </Elevation>
        {this.renderTable()}

        <OriginalDoc
          name="Select"
          href="mdc-select"
        />

        <Elevation
          zSpace="2"
          className="demo-page-select"
        >
          <TypographyDisplay size="1">Select</TypographyDisplay>

          <Example
            title="Fully-Featured Component"
            code=""
          >
            <Select
              disabled={disabled}
              onSelected={(event) => console.log(event)}
              onCancel={(event) => console.log(event)}
              onChange={(event) => console.log(event)}
            >
              <SelectText>Milk, Yogurt, and Cheese</SelectText>
              <SelectMenu>
                <SelectItems>
                  <SelectItem>
                    Pick a food group
                  </SelectItem>
                  <SelectItem>
                  Bread, Cereal, Rice, and Pasta
                </SelectItem>
                  <SelectItem>
                    Vegetables
                  </SelectItem>
                  <SelectItem
                    disabled
                  >
                    Fruit (Disabled)
                  </SelectItem>
                  <SelectItem>
                    Milk, Yogurt, and Cheese
                  </SelectItem>
                  <SelectItem>
                    Meat, Poultry, Fish, Dry Beans, Eggs, and Nuts
                  </SelectItem>
                  <SelectItem>
                    Fats, Oils, and Sweets
                  </SelectItem>
                </SelectItems>
              </SelectMenu>
            </Select>
            Currently selected: (none)
            <FormField>
              <Checkbox
                ripple
              >
                <CheckboxInput
                  checked={disabled}
                  onChange={this.handleDisabled}
                />
                <CheckboxBG/>
              </Checkbox>
              <CheckboxLabel>
                Disabled
              </CheckboxLabel>
            </FormField>
          </Example>
          <Example
          title="Select Multiple - CSS Only"
          code=""
          >
            <Select
              cssOnly
            >
              <option value="" default selected>Pick a food</option>
              <option value="grains">Bread, Cereal, Rice, and Pasta</option>
              <option value="vegetables">Vegetables</option>
              <optgroup label="Fruits">
                <option value="apple">Apple</option>
                <option value="oranges">Orange</option>
                <option value="banana">Banana</option>
              </optgroup>
              <option value="dairy">Milk, Yogurt, and Cheese</option>
              <option value="meat">Meat, Poultry, Fish, Dry Beans, Eggs, and Nuts</option>
              <option value="fats">Fats, Oils, and Sweets</option>
            </Select>
          </Example>
          <Example
          title="Select Only CSS"
          code=""
          >
            <Select cssOnly multiple size="8">
              <ListGroup elementType="optgroup" label="Fats, Oils, &amp; Sweets">
                <ListItem elementType='option' className="mdc-list-item">Olive Oil</ListItem>
                <ListItem elementType='option'>Brown Sugar</ListItem>
                <ListItem elementType='option'>Ice Cream</ListItem>
              </ListGroup>
              <ListDivider elementType='option' role="presentation" disabled=""/>
              <ListGroup elementType="optgroup" label="Dairy">
                <ListItem elementType='option'>Milk</ListItem>
                <ListItem elementType='option'>Cheese</ListItem>
                <ListItem elementType='option'>More Cheese</ListItem>
              </ListGroup>

            </Select>
          </Example>

        </Elevation>

        <Footer/>
      </section>
    )
  }
}
