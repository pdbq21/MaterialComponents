/**
 * Created by ruslan on 14.03.17.
 */
/*
 import React from 'react';

 const propTypes = {};

 const Radio = ({
 ...otherProp
 }) => {

 return (
 <div
 {...otherProp}
 >

 </div>);
 };

 Radio.propTypes = propTypes;
 export default Radio;*/


import React, {PureComponent, PropTypes} from 'react';
import classnames from 'classnames';
import {radio as test}  from 'material-components-web/dist/material-components-web';
const {MDCRadioFoundation} = test;

export default class Radio extends PureComponent {
    static propTypes = {
        id: PropTypes.string,
        labelId: PropTypes.string,
        checked: PropTypes.bool,
        disabled: PropTypes.bool,
        onChange: PropTypes.func
    }

    state = {
        classes: [],
    }

    foundation = new MDCRadioFoundation({
        addClass: className => this.setState(({classNames}) => ({
            classNames: classNames.concat([className])
        })),
        removeClass: className => this.setState(({classNames}) => ({
            classNames: classNames.filter(cn => cn !== className)
        })),
        getNativeControl: () => {
            if (!this.child.refs.rootInput) {
                throw new Error('Invalid state for operation');
            }
            return this.child.refs.rootInput;
        }
    });

    render() {
        const {className, disabled, ...otherProp} = this.props;
        const childElement = child => {
            if (child.type.name === 'Input') {
                return React.cloneElement(child, {
                    onRef: (ref) => (this.child = ref)
                })
            } else {
                return child
            }
        };

        let renderChildren = React.Children.map(this.props.children, childElement);
        return (
            <div
                className={classnames('mdc-radio', {
                    'mdc-radio--disabled': disabled
                }, this.state.classes, className)}
                {...otherProp}
            >
                {renderChildren}
                <div className="mdc-radio__background">
                    <div className="mdc-radio__outer-circle"/>
                    <div className="mdc-radio__inner-circle"/>
                </div>
            </div>
        );
    }

    // Within the two component lifecycle methods below, we invoke the foundation's lifecycle hooks
    // so that proper work can be performed.
    componentDidMount() {
        this.foundation.init();
    }

    componentWillUnmount() {
        this.foundation.destroy();
    }

    // Here we synchronize the internal state of the UI component based on what the user has specified.
    componentWillReceiveProps(props) {
        if (props.checked !== this.props.checked) {
            this.setState({checkedInternal: props.checked});
        }

        if (props.disabled !== this.props.disabled) {
            this.setState({disabledInternal: props.disabled});
        }
    }

}
