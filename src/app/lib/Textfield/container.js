/**
 * Created by ruslan on 22.03.17.
 */
import React, {Component} from 'react';

import { default as Textfield} from './Textfield';


export default class Container extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {

        };
        this.testFocus  = this.testFocus.bind(this)
    }

    componentDidMount() {

    }

    componentWillUnmount() {

    }
    testFocus(event){

console.log(event.currentTarget);
    }

    render() {

        return (
            <Textfield onClick={this.testFocus} {...this.props} />
        );
    }
}