/**
 * Created by ruslan on 12.07.17.
 */
import React, {PureComponent} from 'react';
import {
  Textfield,
  TextfieldInput,
  TextfieldLabel,
} from '../index'

export default class Input extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      value: ''
    }
  }

  componentWillMount() {
    if (this.props.defaultValue) {
      this.setState({
        value: this.props.defaultValue
      })
    }
  }

  render() {
    const {
      type,
      onBlur,
      name,
    } = this.props;
    return (
      <Textfield>
        {/* type => text | number | ? may be select list */}
        <TextfieldInput
          value={this.state.value}
          onChange={({target}) => this.setState({
            value: target.value
          })}
          onBlur={() => onBlur(name, this.state.value)}
          type={type}
        />
        {/* label => name current col */}
        <TextfieldLabel>{name}</TextfieldLabel>
      </Textfield>
    );
  }
}