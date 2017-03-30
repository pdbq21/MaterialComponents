/**
 * Created by ruslan on 08.03.17.
 */
import React from 'react'
import {Ripple} from '../../app/lib'
import {
    CheckboxLabel,
    Checkbox
} from '../../app/lib'
export default class Checkboxes extends React.Component{

    state = {
        checked: false,
        disabled: false,
        indeterminate: false
    }

    handelClick(){
        console.log('test click')
    }
    handelKeyDown(){
        console.log('test key down')
    }
    render(){
        const {disabled, indeterminate} = this.state;

        return (
            <div>
                <fieldset>
                    <legend>Checkbox</legend>
                    <div>
                        <Checkbox id="my-checkbox"
                                  labelId="my-checkbox-label"
                                  disabled={disabled}
                                  indeterminate={indeterminate}
                                  onChange={({target}) => this.setState({
                                      checked: target.checked,
                                      indeterminate: false
                                  })}
                                  parentProps={{
                                      onClick: this.handelClick,
                                      id: 'testId',
                                      className: 'testClassName',
                                      onKeyDown: this.handelKeyDown
                                  }}
                                  childrenProps={{
                                      onClick: this.handelClick,
                                      id: 'testIdChild',
                                      className: 'testClassNameChild',
                                      onKeyDown: this.handelKeyDown
                                  }}
                        />
                        <CheckboxLabel id="my-checkbox-label" for="my-checkbox">
                            The checkbox is currently
                        </CheckboxLabel>
                    </div>
                </fieldset>
                <fieldset>
                    <legend>Only CSS Checkbox</legend>
                    <Checkbox />
                </fieldset>
                <fieldset>
                    <legend>Disabled Checkbox</legend>
                    <Checkbox disabled/>
                </fieldset>
            </div>
        );
    }

}

/*import React, {PureComponent} from 'react';


export default class Checkbox extends PureComponent {


    render() {
        return (
            <div className={`mdc-checkbox`}>
                <input
                    type="checkbox"
                    className="mdc-checkbox__native-control"

                />
                <div className="mdc-checkbox__background">
                    <svg version="1.1"
                         className="mdc-checkbox__checkmark"
                         xmlns="http://www.w3.org/2000/svg"
                         viewBox="0 0 24 24">
                        <path className="mdc-checkbox__checkmark__path"
                              fill="none"
                              stroke="white"
                              d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
                    </svg>
                    <div className="mdc-checkbox__mixedmark"></div>
                </div>
            </div>
        );
    }
}*/
