/**
 * Created by ruslan on 05.06.17.
 */
import React, {Component} from 'react'
import Form from "react-jsonschema-form";

export default class FormJsonComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {

            },
        };

        this.fetchData = this.fetchData.bind(this);
    }

    fetchData() {
        fetch("http://localhost:4021/api/schema")
            .then((res) => {
                return res.json();
            })
            .then((res) => {
                this.setState({
                    data: res,
                });
            });
        //console.log(this.state.data);
    }

    componentDidMount() {
    this.fetchData();
    }

    componentDidUpdate() {
//
    }
    render() {
        if (!this.state.data.result) {
            return <div>Loading</div>;
        }
        return (
            <div>

                <fieldset>
                    <legend>Form Json</legend>
                    <Form
                        schema={this.state.data.result["json-schema"]}
                        uiSchema={this.state.data.result["ui-schema"]}
                        formData={this.state.data.result["form-data"]}
                    />

                </fieldset>
            </div>
        );
    }
}