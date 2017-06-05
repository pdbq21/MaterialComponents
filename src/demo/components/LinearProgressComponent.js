/**
 * Created by ruslan on 05.06.17.
 */
import React, {Component} from 'react';

//import '@material/radio/dist/mdc.radio.css';
//import {default as TestRadio} from './test/Radio'
import {FormField} from '../../app/index'
import {
    Textfield,
    TextfieldInput,
} from '../../app/index'
import LinearProgressTest from './test/LinearProgress'
export default class LinearProgressComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            accent: false,
            progress: 0.5, // 0...1
            buffer: 0.75 // 0...1
        };

        this.handleShow = this.handleShow.bind(this);
        this.handleProgress = this.handleProgress.bind(this);
        this.handleBuffer = this.handleBuffer.bind(this);
        this.handleAccent = this.handleAccent.bind(this);
    }

    handleShow(){
        this.setState({
            open: !this.state.open
        })
    }

    handleAccent(){
        this.setState({
            accent: !this.state.accent
        })
    }

    handleProgress({target}){
        //console.dir(target.value)
        if (target.value >= 0 || target.value <= 100){
            const progressValue = target.value / 100;
            this.setState({
                progress: progressValue
            })
        }
    }
    handleBuffer({target}){
        //console.dir(target.value)
        if (target.value >= 0 || target.value <= 100){
            const bufferValue = target.value / 100;
            this.setState({
                buffer: bufferValue
            })
        }
    }

    render() {
        const {open, accent, progress, buffer} = this.state;
        return (
            <div >

                <fieldset>
                    <legend>Linear Progress Indicators</legend>
                    <div>
                        <button
                            onClick={this.handleShow}
                            type="button"
                        >
                            Open/Close
                        </button>

                        <FormField alignEnd>
                            <label style={{'alignSelf': 'flex-start'}} htmlFor="textfield-only-css">Progress: </label>
                            <Textfield data-only-css>
                                <TextfieldInput
                                    id="textfield-only-css"
                                    placeholder="Progress"
                                    type="number"
                                    min="0" max="100"
                                    onChange={this.handleProgress}
                                />
                            </Textfield>
                        </FormField>
                        <FormField alignEnd>
                            <label style={{'alignSelf': 'flex-start'}} htmlFor="textfield-only-css1">Buffer: </label>
                            <Textfield data-only-css>
                                <TextfieldInput
                                    id="textfield-only-css1"
                                    placeholder="Buffer"
                                    type="number"
                                    min="0" max="100"
                                    onChange={this.handleBuffer}
                                />
                            </Textfield>
                        </FormField>

                        <button
                            onClick={this.handleAccent}
                            type="button"
                        >
                            {`Accent is ${accent}`}
                        </button>
                    </div>

                    <div>
                        <h3>Determinate</h3>
                        <LinearProgressTest
                        open={open}
                        determinate={true}
                        progress={progress}
                        //buffer={buffer}
                        reverse={false}
                        accent={accent}
                        />
                    </div>
                    <div>
                        <h3>Indeterminate</h3>
                        <LinearProgressTest
                            open={open}
                            determinate={false}
                            progress={progress}
                            accent={accent}
                        />
                    </div>
                    <div>
                        <h3>Buffer</h3>
                        <LinearProgressTest
                            open={open}
                            determinate={true}
                            progress={progress}
                            buffer={buffer}
                            accent={accent}
                        />
                    </div>
                    <div>
                        <h3>Reversed</h3>
                        <LinearProgressTest
                            open={open}
                            determinate={true}
                            progress={progress}
                            reverse={true}
                            accent={accent}
                        />
                    </div>
                    <div>
                        <h3>Indeterminate Reversed</h3>
                        <LinearProgressTest
                            open={open}
                            determinate={false}
                            progress={progress}
                            reverse={true}
                            accent={accent}
                        />
                    </div>
                    <div>
                        <h3>Buffer Reversed</h3>
                        <LinearProgressTest
                            open={open}
                            determinate={true}
                            progress={progress}
                            buffer={buffer}
                            reverse={true}
                            accent={accent}
                        />
                    </div>
                    <div>
                        <h3>Accent</h3>
                        <LinearProgressTest
                            open={open}
                            determinate={true}
                            progress={progress}
                            accent={true}
                        />
                    </div>
                </fieldset>

            </div>
        );
    }
}