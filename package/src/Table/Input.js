/**
 * Created by ruslan on 12.07.17.
 */
import React, {PureComponent} from 'react';
import {
  TextField,
  TextFieldInput,
  TextFieldLabel,
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
      <TextField>
        {/* type => text | number */}
        <TextFieldInput
          value={this.state.value}
          onChange={({target}) => this.setState({
            value: target.value
          })}
          onBlur={() => onBlur(name, this.state.value)}
          type={type}
        />
        {/* label => name current col */}
        <TextFieldLabel>{name}</TextFieldLabel>
      </TextField>
    );
  }
}