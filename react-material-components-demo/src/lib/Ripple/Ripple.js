/**
 * Created by ruslan on 30.03.17.
 */
import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {ripple}  from 'material-components-web/dist/material-components-web';
const {MDCRippleFoundation} = ripple;

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

export default class Ripple extends PureComponent {
    static propTypes = {
        id: PropTypes.string,
    };

    constructor(props) {
        super(props);
        this.foundation = null;
    }

    foundation_ = () => new MDCRippleFoundation({
        isUnbounded: () => (this.props.unbounded),
        browserSupportsCssVars: () => {
            return supportsCssVariables(window);
        },
        isSurfaceActive: () => this.refs.root[MATCHES](':active'),
        addClass: (className) => {
            if (this.refs.root) {
                return this.refs.root.classList.add(className);
            }
        },
        removeClass: (className) => {
            if (this.refs.root) {
                return this.refs.root.classList.remove(className);
            }
        },
        registerInteractionHandler: (evtType, handler) => {
            if (this.refs.root) {
                return this.refs.root.addEventListener(evtType, handler);
            }
        },
        deregisterInteractionHandler: (evtType, handler) => {
            if (this.refs.root) {
                return this.refs.root.removeEventListener(evtType, handler);
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
                return this.refs.root.style.setProperty(varName, value);
            }
        },
        computeBoundingRect: () => {
            if (this.refs.root) {
                if (this.props.unbounded) {
                    const {left, top} = this.refs.root.getBoundingClientRect();
                    const DIM = this.props.diameter || 40;
                    return {
                        top,
                        left,
                        right: left + DIM,
                        bottom: top + DIM,
                        width: DIM,
                        height: DIM,
                    };
                } else {
                    return this.refs.root.getBoundingClientRect();
                }
            }
        },
        getWindowPageOffset: () => ({
            x: window.pageXOffset,
            y: window.pageYOffset
        }),
    });

    render() {
        const {children, unbounded, primary, accent} = this.props;
        const isUnbounded = (unbounded)? true : null;
        const classes = classnames('mdc-ripple-surface', {
            'mdc-ripple-surface--primary': primary,
            'mdc-ripple-surface--accent': accent
        }, children.props.className);
        return (
            React.cloneElement(children, {
                ref: 'root',
                className: classes,
                'data-mdc-ripple-is-unbounded': isUnbounded
            })
        );
    }

    componentDidMount() {
        this.foundation = this.foundation_();
        if (!this.props['data-no-js']){
            this.foundation.init();
        }
    }

    componentWillUnmount() {
        if (!this.props['data-no-js']){
            this.foundation.destroy();
        }
    }
}
/*
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

 export default class extends Component {
 static propTypes = {
 id: PropTypes.string,
 }


 state = {
 classNames: [],
 rippleCss: {},
 }


 foundation = new MDCRippleFoundation(Object.assign(MDCRipple.createAdapter(this), {
 // for FAB this. === true \ for other component === false
 isUnbounded: () => false,
 browserSupportsCssVars: () => {
 return supportsCssVariables(window);
 },
 isSurfaceActive: () => this.refs.root[MATCHES](':active'),
 addClass: className => this.setState(({classNames}) => ({
 classNames: classNames.concat([className])
 })),
 removeClass: className => this.setState(({classNames}) => ({
 classNames: classNames.filter(cn => cn !== className)
 })),
 registerInteractionHandler: (evtType, handler) => {
 this.refs.root.addEventListener(evtType, handler);
 },
 deregisterInteractionHandler: (evtType, handler) => {
 this.refs.root.removeEventListener(evtType, handler);
 },
 registerResizeHandler: handler => {
 window.addEventListener('resize', handler);
 },
 deregisterResizeHandler: handler => {
 window.removeEventListener('resize', handler);
 },


 updateCssVariable: (varName, value) => this.setState(({rippleCss}) => ({
 rippleCss: {
 ...rippleCss,
 [varName]: value
 }
 })),
 computeBoundingRect: () => {
 //console.log(this.refs.root.getBoundingClientRect());

 /!*const {left, top} = this.refs.root.getBoundingClientRect();
 console.log(left, top);
 const DIM = 40;*!/
 return this.refs.root.getBoundingClientRect();
 /!*return {
 top,
 left,
 right: left + DIM,
 bottom: top + DIM,
 width: DIM,
 height: DIM,
 };*!/
 },
 getWindowPageOffset: () => {
 return {
 x: window.pageXOffset,
 y: window.pageYOffset
 }
 },

 }));


 render() {
 return (
 <div
 ref="root"
 className={
 classnames('material-icons','mdc-ripple-surface', this.state.classNames)
 }
 aria-label="Favorite"
 data-mdc-ripple-is-unbounded
 tabIndex="0"
 >

 </div>
 );
 }

 componentDidMount() {
 this.foundation.init();
 }

 componentWillUnmount() {
 this.foundation.destroy();
 }

 componentDidUpdate() {
 if (this.refs.root) {
 for (let key in this.state.rippleCss) {
 if (this.state.rippleCss.hasOwnProperty(key)) {
 this.refs.root.style.setProperty(key, this.state.rippleCss[key]);
 }
 }
 }
 }
 }
 */
