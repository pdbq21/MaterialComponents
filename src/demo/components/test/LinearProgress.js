/**
 * Created by ruslan on 05.06.17.
 */
import React, {Component} from 'react';
import classnames from 'classnames';
import '@material/linear-progress/dist/mdc.linear-progress.min.css';
import {linearProgress}  from 'material-components-web/dist/material-components-web';
const {MDCLinearProgressFoundation} = linearProgress;

const {
    strings: {
        PRIMARY_BAR_SELECTOR: PRIMARY_BAR_SELECTOR_CLASS_NAME,
        BUFFER_SELECTOR: BUFFER_SELECTOR_CLASS_NAME,
    }
} = MDCLinearProgressFoundation;

export default class LinearProgressTest extends Component {


    state = {
        classNames: [],
    };

    foundation = new MDCLinearProgressFoundation({
        addClass: className => this.setState(({classNames}) => ({
            classNames: classNames.concat([className])
        })),
        /*addClass: (className) => {
            if (this.refs.root) {
                return this.refs.root.classList.add(className)
            }
        },*/
        getPrimaryBar: () => {
            if (this.refs.root) {
                return this.refs.root.querySelector(PRIMARY_BAR_SELECTOR_CLASS_NAME)
            }
        },
        getBuffer: () => {
            if (this.refs.root) {
                return this.refs.root.querySelector(BUFFER_SELECTOR_CLASS_NAME)
            }
        },
        hasClass: (className) => {
            if (this.refs.root) {
                return this.refs.root.classList.contains(className)
            }
        },
        removeClass: (className) => {
            if (this.refs.root) {
                return this.refs.root.classList.remove(className)
            }
        },
        setStyle: (el, styleProperty, value) => {
            if (el){
                return el.style[styleProperty] = value;
            }
        }
    });

    componentDidMount() {
        this.foundation.init();
    }

    componentWillUnmount() {
        this.foundation.destroy();
    }

    componentWillReceiveProps(props) {
            if (props.open) {
                this.foundation.open();
            } else {
                this.foundation.close();
            }
            if (props.determinate) {
                this.foundation.setDeterminate(props.determinate);
            } else {
                this.foundation.setDeterminate(props.determinate);
            }
            if (props.progress) {
                this.foundation.setProgress(props.progress);
            } else {
                //this.foundation.setProgress(props.progress);
            }
            if (props.buffer) {
                this.foundation.setBuffer(props.buffer);
            } else {
                //this.foundation.setBuffer(props.buffer);
            }
            if (props.reverse) {
                this.foundation.setReverse(props.reverse);
            } else {
                this.foundation.setReverse(props.reverse);
            }
    }

    render() {
        const {accent} = this.props;
        return (//mdc-linear-progress--accent
            <div
                ref='root'
                role="progressbar"
                className={classnames('mdc-linear-progress', {
                    'mdc-linear-progress--accent': accent
                }, this.state.classNames)}
            >
                <div className="mdc-linear-progress__buffering-dots"/>
                <div className="mdc-linear-progress__buffer"/>
                <div className="mdc-linear-progress__bar mdc-linear-progress__primary-bar">
                    <span className="mdc-linear-progress__bar-inner"/>
                </div>
                <div className="mdc-linear-progress__bar mdc-linear-progress__secondary-bar">
                    <span className="mdc-linear-progress__bar-inner"/>
                </div>
            </div>

        );
    }
}
