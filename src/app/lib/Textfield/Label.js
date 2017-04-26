/**
 * Created by ruslan on 20.03.17.
 */
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    floatAbove: PropTypes.bool,
};
const Label = ({
    children,
    className,
    classNamesLabel,
    elementType,
    floatAbove,
    ...otherProp
}) => {
    const classes = classnames(
        'mdc-textfield__label', {
            'mdc-textfield__label--float-above': floatAbove
        }, classNamesLabel, className);
    const ElementType = elementType || 'label';
    return (
        <ElementType className={classes}
                     {...otherProp}
        >
            {children}
        </ElementType>);
};

Label.propTypes = propTypes;
export default Label;
/*
export default class Label extends PureComponent {
    static propTypes = {
        children: PropTypes.node,
    }

    constructor(props, context) {
        super(props, context);
        this.state = {
            classNamesLabel: [],
        };
        this.foundation = new MDCTextfieldFoundation({
            // label
            addClassToLabel: className => this.setState(({classNamesLabel}) => ({
                classNamesLabel: classNamesLabel.concat([className])
            })),
            removeClassFromLabel: className => this.setState(({classNamesLabel}) => ({
                classNamesLabel: classNamesLabel.filter(cn => cn !== className)
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
        const {children, elementType, className, ...otherProp} = this.props;
        const classes = classnames(
            'mdc-textfield__label', this.state.classNamesLabel, className);
        const ElementType = elementType || 'label';
        return (
            <ElementType className={classes}
                         {...otherProp}
            >
                {children}
            </ElementType>);
    }

}
*/