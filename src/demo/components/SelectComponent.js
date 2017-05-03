/**
 * Created by ruslan on 30.03.17.
 */
import React from 'react';

import TestSelect from './test/Select'

export default class SelectComponent extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
        };

        this.handleSelected = this.handleSelected.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleSelected(...e) {
        console.log(e);
    }

    handleCancel() {
    }
    handleChange() {
    }

    render() {
        return (
            <div >
                <fieldset>
                    <legend>Fully-Featured Component</legend>
                    <div>
                        <TestSelect
                            onSelected={this.handleSelected}
                            onCancel={this.handleCancel}
                            onChange={this.handleChange}
                        />
                    </div>
                </fieldset>
                <fieldset>
                    <legend>Only CSS</legend>
                    <div>
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
                    </div>
                </fieldset>
                <fieldset>
                    <legend>Select Multiple - CSS Only</legend>
                    <div>
                        <select multiple size="6" className="mdc-multi-select mdl-list" >
                            <optgroup className="mdc-list-group" label="Starches">
                                <option className="mdc-list-item">
                                    Potato
                                </option>
                                <option className="mdc-list-item">
                                    Cereal
                                </option>
                            </optgroup>
                            <option className="mdc-list-divider" role="presentation" disabled />
                            <option>
                                misc...
                            </option>
                        </select>
                    </div>
                </fieldset>
            </div>
        );
    }

}