/**
 * Created by ruslan on 14.03.17.
 */
import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {radio}  from 'material-components-web/dist/material-components-web';
const {MDCRadioFoundation} = radio;

import '@material/ripple/dist/mdc.ripple.min.css';
import {ripple}  from 'material-components-web/dist/material-components-web';
const {MDCRippleFoundation} = ripple;

//Ripple
function getMatchesProperty(HTMLElementPrototype) {
    return [
        'webkitMatchesSelector', 'msMatchesSelector', 'matches',
    ].filter((p) => p in HTMLElementPrototype).pop();
}

const MATCHES = getMatchesProperty(HTMLElement.prototype);

function supportsCssVariables(windowObj) {
    const supportsFunctionPresent = windowObj.CSS && typeof windowObj.CSS.supports === "function";
    if (!supportsFunctionPresent) {
        return false;
    }

    const explicitlySupportsCssVars = windowObj.CSS.supports("--css-vars", "yes");
    // See: https://bugs.webkit.org/show_bug.cgi?id=154669
    // See: README section on Safari
    const weAreFeatureDetectingSafari10plus = (
        windowObj.CSS.supports("(--css-vars: yes)") &&
        windowObj.CSS.supports("color", "#00000000")
    );
    return explicitlySupportsCssVars || weAreFeatureDetectingSafari10plus;
}

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

        classNamesRipple: [],
        rippleCss: {},
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

    foundationRipple = new MDCRippleFoundation({
        // for Checkbox and Radio this. === true \ for other component === false
        isUnbounded: () => true,
        browserSupportsCssVars: () => {
            return supportsCssVariables(window);
        },
        isSurfaceActive: () => this.refs.root[MATCHES](':active'),
        addClass: className => {
            this.setState(({classNamesRipple}) => ({
                classNamesRipple: classNamesRipple.concat([className])
            }))
        },
        removeClass: className => {
            if (this.refs.root) {
                this.setState(({classNamesRipple}) => ({
                    classNamesRipple: classNamesRipple.filter(cn => cn !== className)
                }))
            }
        },
        registerInteractionHandler: (evtType, handler) => {
            if (this.child.refs.rootInput) {
                console.log(this.child.refs.rootInput)
                this.child.refs.rootInput.addEventListener(evtType, handler);
            }
        },
        deregisterInteractionHandler: (evtType, handler) => {
            if (this.child.refs.rootInput) {
                this.child.refs.rootInput.removeEventListener(evtType, handler);
            }
        },
        registerResizeHandler: handler => {
            window.addEventListener('resize', handler);
        },
        deregisterResizeHandler: handler => {
            window.removeEventListener('resize', handler);
        },
        updateCssVariable: (varName, value) => {
            if (this.refs.root) {
                this.setState(({rippleCss}) => ({
                    rippleCss: {
                        ...rippleCss,
                        [varName]: value
                    }
                }))
            }
        },
        computeBoundingRect: () => {
            const {left, top} = this.refs.root.getBoundingClientRect();

            const DIM = 40;
            return {
                top,
                left,
                right: left + DIM,
                bottom: top + DIM,
                width: DIM,
                height: DIM,
            };
        },
        getWindowPageOffset: () => {
            return {
                x: window.pageXOffset,
                y: window.pageYOffset
            }
        },

    });

    render() {
        const ownProps = Object.assign({}, this.props);
        delete ownProps.ripple;
        const {
            className,
            disabled,
            ...otherProp
        } = ownProps;

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
                ref="root"
                className={classnames('mdc-radio', {
                    'mdc-radio--disabled': disabled
                }, this.state.classes, this.state.classNamesRipple, className)}
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
        if (this.props.ripple) {
            this.foundationRipple.init();
        }
    }

    componentWillUnmount() {
        if (this.props.ripple) {
            this.foundationRipple.destroy();
        }
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

    componentDidUpdate() {
        if (this.props.ripple && this.refs.root) {
            for (let key in this.state.rippleCss) {
                if (this.state.rippleCss.hasOwnProperty(key)) {
                    this.refs.root.style.setProperty(key, this.state.rippleCss[key]);
                }
            }
        }
    }

}
