/**
 * Created by ruslan on 20.03.17.
 */
import React, {PropTypes, PureComponent} from 'react';
import classnames from 'classnames';
import {textfield as MDCTextfield}  from 'material-components-web/dist/material-components-web';
const {MDCTextfieldFoundation} = MDCTextfield;
/*
 const propTypes = {
 children: PropTypes.node,
 className: PropTypes.string,
 disabled: PropTypes.bool,
 upgraded: PropTypes.bool,
 multiline: PropTypes.bool,
 fullwidth: PropTypes.bool,
 };
 const Textfield = ({
 children,
 className,
 elementType,
 disabled,
 upgraded,
 multiline,
 fullwidth,
 ...otherProp
 }) => {
 const classes = classnames(
 'mdc-textfield', {
 'mdc-textfield--disabled': disabled,
 'mdc-textfield--upgraded': upgraded,
 'mdc-textfield--multiline': multiline,
 'mdc-textfield--fullwidth': fullwidth
 }, className);
 const ElementType = elementType || 'div';
 return (
 <ElementType className={classes}
 {...otherProp}
 >
 {children}
 </ElementType>);
 };

 Textfield.propTypes = propTypes;
 export default Textfield;*/

export default class Textfield extends PureComponent {
    static propTypes = {
        children: PropTypes.node,
        disabled: PropTypes.bool,
        upgraded: PropTypes.bool,
        multiline: PropTypes.bool,
        fullwidth: PropTypes.bool,
    }

    constructor(props, context) {
        super(props, context);
        this.state = {
            classNames: [],
        };
        console.log(this);
        this.foundation = new MDCTextfieldFoundation({
            /// textfield
            addClass: className => this.setState(({classNames}) => ({
                classNames: classNames.concat([className])
            })),
            removeClass: className => this.setState(({classNames}) => ({
                classNames: classNames.filter(cn => cn !== className)
            })),
        });
    }

    componentDidMount() {
        this.foundation.init();
    }

    componentWillUnmount() {
        this.foundation.destroy();
    }

    render() {
        const {disabled, upgraded, multiline, fullwidth, children, elementType, className, ...otherProp} = this.props;
        const classes = classnames(
            'mdc-textfield', {
                'mdc-textfield--disabled': disabled,
                'mdc-textfield--upgraded': upgraded,
                'mdc-textfield--multiline': multiline,
                'mdc-textfield--fullwidth': fullwidth
            }, this.state.classNames, className);
        const ElementType = elementType || 'div';
        return (
            <ElementType ref="root" className={classes}
                         {...otherProp}
            >
                {children}
            </ElementType>);
    }

}
