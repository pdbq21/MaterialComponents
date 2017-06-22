/**
 * Created by ruslan on 16.06.17.
 */
import React, {Component} from 'react'
import {
    Textfield,
    TextfieldInput,
    TextfieldLabel,
    TextfieldHelptext,
    Elevation,
    FormField,
    Checkbox,
    CheckboxInput,
    CheckboxBackground,
    CheckboxCheckmark,
    CheckboxPath,
    CheckboxMixedmark,
    CheckboxLabel,
    TypographyHeadline,
    TypographyDisplay,
    TypographyBody,
} from '../lib'


export default class TextfieldPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isDisabled: false,
            isDense: false,
            isRequired: false,
            isHelper: false,
            isHelperPersistent: false,
            isHelperValidation: false,
            components: [
                {
                    name: 'Textfield',
                    property: [
                        {
                            name: 'elementType',
                            type: 'string | React Component',
                            required: 'no',
                            defaultValue: 'div',
                            description: 'задає тег елемента'
                        },{
                            name: 'data-only-css',
                            type: 'string',
                            required: 'no',
                            defaultValue: 'null',
                            description: 'виключає js функціонал'
                        },{
                            name: 'disabled',
                            type: 'bool',
                            required: 'no',
                            defaultValue: 'false',
                            description: '-'
                        },{
                            name: 'upgraded',
                            type: 'bool',
                            required: 'no',
                            defaultValue: 'false',
                            description: '-'
                        },{
                            name: 'multiline',
                            type: 'bool',
                            required: 'no',
                            defaultValue: 'false',
                            description: '-'
                        },{
                            name: 'fullwidth',
                            type: 'bool',
                            required: 'no',
                            defaultValue: 'false',
                            description: '-'
                        },{
                            name: 'dense',
                            type: 'bool',
                            required: 'no',
                            defaultValue: 'false',
                            description: '-'
                        },
                    ]
                },
                {
                    name: 'TextfieldInput',
                    property: [
                        {
                            name: 'elementType',
                            type: 'string | React Component',
                            required: 'no',
                            defaultValue: 'input | textarea',
                            description: 'задає тег елемента'
                        },
                    ]
                },
                {
                    name: 'TextfieldLabel',
                    property: [
                        {
                            name: 'elementType',
                            type: 'string | React Component',
                            required: 'no',
                            defaultValue: 'label',
                            description: 'задає тег елемента'
                        },{
                            name: 'floatAbove',
                            type: 'bool',
                            required: 'no',
                            defaultValue: 'false',
                            description: '-'
                        },
                    ]
                },
                {
                    name: 'TextfieldHelptext',
                    property: [
                        {
                            name: 'elementType',
                            type: 'string | React Component',
                            required: 'no',
                            defaultValue: 'p',
                            description: 'задає тег елемента'
                        },{
                            name: 'persistent',
                            type: 'bool',
                            required: 'no',
                            defaultValue: 'false',
                            description: '-'
                        },{
                            name: 'validation',
                            type: 'bool',
                            required: 'no',
                            defaultValue: 'false',
                            description: '-'
                        },
                    ]
                },
            ],
            used: `
import React, {Component} from 'react'
import {
    Textfield,
    TextfieldInput,
    TextfieldLabel,
    TextfieldHelptext,
    Elevation,
    FormField,
    Checkbox,
    CheckboxInput,
    CheckboxBackground,
    CheckboxCheckmark,
    CheckboxPath,
    CheckboxMixedmark,
    CheckboxLabel,
    TypographyHeadline,
    TypographyDisplay,
} from '../lib'

class TextfieldDemo extends Component {
    render() {
        return (
            <section>
                <Elevation
                    zSpace="2"
                >
                    <TypographyDisplay
                        size="1"
                    >Textfield with JS</TypographyDisplay>
                    <TypographyHeadline
                        size="1"
                    >Full Functionality JS Component</TypographyHeadline>
                    <Textfield upgraded>
                        <TextfieldInput
                            id="demo-full-textfield"
                            name="email"
                            aria-controls="my-textfield-helptext"
                            required
                        />
                        <TextfieldLabel
                            htmlFor="demo-full-textfield"
                        >
                            Email Address
                        </TextfieldLabel>
                    </Textfield>
                    <TextfieldHelptext
                        aria-hidden="true"
                        persistent
                        validation
                    >
                        Help Text (possibly validation message)
                    </TextfieldHelptext>
                    <Elevation
                        style={{
                            'display': 'flex',
                            'flexFlow': 'column nowrap',
                        }}
                    >
                        <FormField>
                            <Checkbox
                                ripple
                            >
                                <CheckboxInput
                                    checked={isDisabled}
                                    onChange={this.handleChangeDisabled}
                                />
                                <CheckboxBackground>
                                    <CheckboxCheckmark>
                                        <CheckboxPath/>
                                    </CheckboxCheckmark>
                                    <CheckboxMixedmark/>
                                </CheckboxBackground>
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
                                    checked={isDense}
                                    onChange={this.handleChangeDense}
                                />
                                <CheckboxBackground>
                                    <CheckboxCheckmark>
                                        <CheckboxPath/>
                                    </CheckboxCheckmark>
                                    <CheckboxMixedmark/>
                                </CheckboxBackground>
                            </Checkbox>
                            <CheckboxLabel>
                                Dense
                            </CheckboxLabel>
                        </FormField>
                        <FormField>
                            <Checkbox
                                ripple
                            >
                                <CheckboxInput
                                    checked={isRequired}
                                    onChange={this.handleChangeRequired}
                                />
                                <CheckboxBackground>
                                    <CheckboxCheckmark>
                                        <CheckboxPath/>
                                    </CheckboxCheckmark>
                                    <CheckboxMixedmark/>
                                </CheckboxBackground>
                            </Checkbox>
                            <CheckboxLabel>
                                Required
                            </CheckboxLabel>
                        </FormField>
                        <FormField>
                            <Checkbox
                                ripple
                            >
                                <CheckboxInput
                                    checked={isHelper}
                                    onChange={this.handleChangeHelper}
                                />
                                <CheckboxBackground>
                                    <CheckboxCheckmark>
                                        <CheckboxPath/>
                                    </CheckboxCheckmark>
                                    <CheckboxMixedmark/>
                                </CheckboxBackground>
                            </Checkbox>
                            <CheckboxLabel>
                                Use Helper Text
                            </CheckboxLabel>
                        </FormField>
                        <FormField>
                            <Checkbox
                                ripple
                            >
                                <CheckboxInput
                                    checked={isHelperPersistent}
                                    onChange={this.handleChangeHelperPersistent}
                                />
                                <CheckboxBackground>
                                    <CheckboxCheckmark>
                                        <CheckboxPath/>
                                    </CheckboxCheckmark>
                                    <CheckboxMixedmark/>
                                </CheckboxBackground>
                            </Checkbox>
                            <CheckboxLabel>
                                Make helper text persistent
                            </CheckboxLabel>
                        </FormField>
                        <FormField>
                            <Checkbox
                                ripple
                            >
                                <CheckboxInput
                                    checked={isHelperValidation}
                                    onChange={this.handleChangeHelperValidation}
                                />
                                <CheckboxBackground>
                                    <CheckboxCheckmark>
                                        <CheckboxPath/>
                                    </CheckboxCheckmark>
                                    <CheckboxMixedmark/>
                                </CheckboxBackground>
                            </Checkbox>
                            <CheckboxLabel>
                                Use helper text as validation message
                            </CheckboxLabel>
                        </FormField>
                    </Elevation>

                    <TypographyHeadline size="1">Label float above</TypographyHeadline>
                    <Textfield>
                        <TextfieldInput id="demo-label-above" type="text"/>
                        <TextfieldLabel htmlFor="demo-label-above">Label float above</TextfieldLabel>
                    </Textfield>
                    <TypographyHeadline size="1">Multi-line Textfields</TypographyHeadline>
                    <Textfield
                        multiline
                        upgraded
                    >
                        <TextfieldInput
                            elementType="textarea"
                            rows="8"
                            cols="40"
                            id="multi-line-demo"
                        />
                        <TextfieldLabel htmlFor="multi-line-demo">Multi-line Label</TextfieldLabel>
                    </Textfield>
                    <TypographyHeadline size="1">Password field with validation</TypographyHeadline>
                    <Textfield
                        upgraded
                    >
                        <TextfieldInput
                            type="password"
                            id="password-validation-demo"
                            aria-controls="pw-validation-msg"
                            required
                            pattern=".{8,}"
                        />
                        <TextfieldLabel htmlFor="password-validation-demo">Choose password</TextfieldLabel>
                    </Textfield>
                    <TextfieldHelptext
                        persistent
                        validation
                        id="pw-validation-msg"
                    >
                        Must be at least 8 characters long
                    </TextfieldHelptext>
                    <TypographyDisplay
                        size="1"
                    >Textfield Only CSS</TypographyDisplay>

                    <TypographyHeadline size="1">Textfields - CSS Only</TypographyHeadline>
                    <FormField alignEnd>
                        <Textfield data-only-css>
                            <TextfieldInput id="textfield-only-css" placeholder="Hint text"/>
                        </Textfield>
                        <label
                            style={{'alignSelf': 'flex-start'}}
                            htmlFor="textfield-only-css"
                        >Hint text: </label>
                    </FormField>
                    <TypographyHeadline size="1">Multi-line Textfields - CSS Only</TypographyHeadline>
                    <label htmlFor="css-only-multiline">About you:</label>
                    <Textfield
                        multiline
                        data-only-css
                    >
                        <TextfieldInput
                            elementType="textarea"
                            id="css-only-multiline"
                            rows="8"
                            cols="40"
                            placeholder="Tell the world something about yourself!"
                        />
                    </Textfield>
                    <TypographyHeadline size="1">Full-Width Textfields</TypographyHeadline>
                    <Textfield upgraded fullwidth data-only-css>
                        <TextfieldInput
                            type="text"
                            placeholder="Subject"
                            aria-label="Subject"
                        />
                    </Textfield>
                    <Textfield multiline upgraded fullwidth data-only-css>
                        <TextfieldInput
                            elementType="textarea"
                            rows="8"
                            cols="40"
                            placeholder="Message"
                            aria-label="Message"
                        />
                    </Textfield>
                </Elevation>
            </section>
        )
    }
}`
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
        const {
            isDisabled,
            isDense,
            isRequired,
            isHelper,
            isHelperPersistent,
            isHelperValidation,
        } = this.state;
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
                    <Textfield>
                        <TextfieldInput type="text"/>
                        <TextfieldLabel >Text Field</TextfieldLabel>
                    </Textfield>
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
                        This component is based on the MDC Textfield, you can refer to its documentation <a
                        href="https://github.com/material-components/material-components-web/tree/master/packages/mdc-textfield"
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
                    className="demo-page-textfield"
                >
                    <TypographyDisplay
                        size="1"
                    >Textfield with JS</TypographyDisplay>
                    <TypographyHeadline
                        size="1"
                    >Full Functionality JS Component</TypographyHeadline>
                    <Textfield upgraded>
                        <TextfieldInput
                            id="demo-full-textfield"
                            name="email"
                            aria-controls="my-textfield-helptext"
                            required
                        />
                        <TextfieldLabel
                            htmlFor="demo-full-textfield"
                        >
                            Email Address
                        </TextfieldLabel>
                    </Textfield>
                    <TextfieldHelptext
                        aria-hidden="true"
                        persistent
                        validation
                    >
                        Help Text (possibly validation message)
                    </TextfieldHelptext>
                    <Elevation
                        style={{
                            'display': 'flex',
                            'flexFlow': 'column nowrap',
                        }}
                    >
                        <FormField>
                            <Checkbox
                                ripple
                            >
                                <CheckboxInput
                                    checked={isDisabled}
                                    onChange={this.handleChangeDisabled}
                                />
                                <CheckboxBackground>
                                    <CheckboxCheckmark>
                                        <CheckboxPath/>
                                    </CheckboxCheckmark>
                                    <CheckboxMixedmark/>
                                </CheckboxBackground>
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
                                    checked={isDense}
                                    onChange={this.handleChangeDense}
                                />
                                <CheckboxBackground>
                                    <CheckboxCheckmark>
                                        <CheckboxPath/>
                                    </CheckboxCheckmark>
                                    <CheckboxMixedmark/>
                                </CheckboxBackground>
                            </Checkbox>
                            <CheckboxLabel>
                                Dense
                            </CheckboxLabel>
                        </FormField>
                        <FormField>
                            <Checkbox
                                ripple
                            >
                                <CheckboxInput
                                    checked={isRequired}
                                    onChange={this.handleChangeRequired}
                                />
                                <CheckboxBackground>
                                    <CheckboxCheckmark>
                                        <CheckboxPath/>
                                    </CheckboxCheckmark>
                                    <CheckboxMixedmark/>
                                </CheckboxBackground>
                            </Checkbox>
                            <CheckboxLabel>
                                Required
                            </CheckboxLabel>
                        </FormField>
                        <FormField>
                            <Checkbox
                                ripple
                            >
                                <CheckboxInput
                                    checked={isHelper}
                                    onChange={this.handleChangeHelper}
                                />
                                <CheckboxBackground>
                                    <CheckboxCheckmark>
                                        <CheckboxPath/>
                                    </CheckboxCheckmark>
                                    <CheckboxMixedmark/>
                                </CheckboxBackground>
                            </Checkbox>
                            <CheckboxLabel>
                                Use Helper Text
                            </CheckboxLabel>
                        </FormField>
                        <FormField>
                            <Checkbox
                                ripple
                            >
                                <CheckboxInput
                                    checked={isHelperPersistent}
                                    onChange={this.handleChangeHelperPersistent}
                                />
                                <CheckboxBackground>
                                    <CheckboxCheckmark>
                                        <CheckboxPath/>
                                    </CheckboxCheckmark>
                                    <CheckboxMixedmark/>
                                </CheckboxBackground>
                            </Checkbox>
                            <CheckboxLabel>
                                Make helper text persistent
                            </CheckboxLabel>
                        </FormField>
                        <FormField>
                            <Checkbox
                                ripple
                            >
                                <CheckboxInput
                                    checked={isHelperValidation}
                                    onChange={this.handleChangeHelperValidation}
                                />
                                <CheckboxBackground>
                                    <CheckboxCheckmark>
                                        <CheckboxPath/>
                                    </CheckboxCheckmark>
                                    <CheckboxMixedmark/>
                                </CheckboxBackground>
                            </Checkbox>
                            <CheckboxLabel>
                                Use helper text as validation message
                            </CheckboxLabel>
                        </FormField>
                    </Elevation>

                    <TypographyHeadline size="1">Label float above</TypographyHeadline>
                    <Textfield>
                        <TextfieldInput id="demo-label-above" type="text"/>
                        <TextfieldLabel htmlFor="demo-label-above">Label float above</TextfieldLabel>
                    </Textfield>
                    <TypographyHeadline size="1">Multi-line Textfields</TypographyHeadline>
                    <Textfield
                        multiline
                        upgraded
                    >
                        <TextfieldInput
                            elementType="textarea"
                            rows="8"
                            cols="40"
                            id="multi-line-demo"
                        />
                        <TextfieldLabel htmlFor="multi-line-demo">Multi-line Label</TextfieldLabel>
                    </Textfield>
                    <TypographyHeadline size="1">Password field with validation</TypographyHeadline>
                    <Textfield
                        upgraded
                    >
                        <TextfieldInput
                            type="password"
                            id="password-validation-demo"
                            aria-controls="pw-validation-msg"
                            required
                            pattern=".{8,}"
                        />
                        <TextfieldLabel htmlFor="password-validation-demo">Choose password</TextfieldLabel>
                    </Textfield>
                    <TextfieldHelptext
                        persistent
                        validation
                        id="pw-validation-msg"
                    >
                        Must be at least 8 characters long
                    </TextfieldHelptext>
                    <TypographyDisplay
                        size="1"
                    >Textfield Only CSS</TypographyDisplay>

                    <TypographyHeadline size="1">Textfields - CSS Only</TypographyHeadline>
                    <FormField alignEnd>
                        <Textfield data-only-css>
                            <TextfieldInput id="textfield-only-css" placeholder="Hint text"/>
                        </Textfield>
                        <label
                            style={{'alignSelf': 'flex-start'}}
                            htmlFor="textfield-only-css"
                        >Hint text: </label>
                    </FormField>
                    <TypographyHeadline size="1">Multi-line Textfields - CSS Only</TypographyHeadline>
                    <label htmlFor="css-only-multiline">About you:</label>
                    <Textfield
                        multiline
                        data-only-css
                    >
                        <TextfieldInput
                            elementType="textarea"
                            id="css-only-multiline"
                            rows="8"
                            cols="40"
                            placeholder="Tell the world something about yourself!"
                        />
                    </Textfield>
                    <TypographyHeadline size="1">Full-Width Textfields</TypographyHeadline>
                    <Textfield upgraded fullwidth data-only-css>
                        <TextfieldInput
                            type="text"
                            placeholder="Subject"
                            aria-label="Subject"
                        />
                    </Textfield>
                    <Textfield multiline upgraded fullwidth data-only-css>
                        <TextfieldInput
                            elementType="textarea"
                            rows="8"
                            cols="40"
                            placeholder="Message"
                            aria-label="Message"
                        />
                    </Textfield>
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
                    Todo:
                    - function demo
                    - props description
                </Elevation>
            </section>
        )
    }
}