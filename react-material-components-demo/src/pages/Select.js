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
    Elevation,
    TypographyHeadline,
    TypographyDisplay,
    TypographyBody,
} from '../lib'


export default class SelectPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            components: [
                {
                    name: 'Switch',
                    property: [
                        {
                            name: 'elementType',
                            type: 'string | React Component',
                            required: 'no',
                            defaultValue: 'div',
                            description: 'задає тег елемента'
                        },
                        {
                            name: 'disabled',
                            type: 'bool',
                            required: 'no',
                            defaultValue: 'false',
                            description: 'стає не активним'
                        },
                    ]
                },{
                    name: 'SwitchInput',
                    property: [
                        {
                            name: 'disabled',
                            type: 'bool',
                            required: 'no',
                            defaultValue: 'false',
                            description: 'стає не активним'
                        },
                    ]
                },{
                    name: 'SwitchLabel',
                    property: [
                        {
                            name: 'elementType',
                            type: 'string | React Component',
                            required: 'no',
                            defaultValue: 'label',
                            description: 'задає тег елемента'
                        },
                    ]
                },
            ],
            used: ``
        };
        this.renderTable = this.renderTable.bind(this);
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

    render() {
        return (
            <section>
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
                                <SelectItem>
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
                >
                    <TypographyDisplay size="1">Demo code</TypographyDisplay>

                </Elevation>
                <Elevation
                    zSpace="2"
                    className="demo-page-switch"
                >
                    <TypographyDisplay size="1">Select</TypographyDisplay>
                    <TypographyHeadline size="1">Fully-Featured Component</TypographyHeadline>
                    <Select
                        onSelected={(event) => console.log(event)}
                        onCancel={(event) => console.log(event)}
                        onChange={(event) => console.log(event)}
                    >
                        <SelectText>Pick a food group</SelectText>
                        <SelectMenu>
                            <SelectItems>
                                <SelectItem>
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
                    Currently selected: (none)
                    <TypographyHeadline size="1">Select Only CSS</TypographyHeadline>
                    <select className="mdc-select">
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
                    </select>
                    <TypographyHeadline size="1">Select Multiple - CSS Only</TypographyHeadline>
                    <select multiple size="6" className="mdc-multi-select mdl-list">
                        <optgroup className="mdc-list-group" label="Starches">
                            <option className="mdc-list-item">
                                Potato
                            </option>
                            <option className="mdc-list-item">
                                Cereal
                            </option>
                        </optgroup>
                        <option className="mdc-list-divider" role="presentation" disabled/>
                        <option>
                            misc...
                        </option>
                    </select>
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
