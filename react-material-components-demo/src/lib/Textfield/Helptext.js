/**
 * Created by ruslan on 20.03.17.
 */
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    persistent: PropTypes.bool,
    validation: PropTypes.bool,
};
const Helptext = ({
    children,
    className,
    elementType,
    persistent,
    validation,
    ...otherProp
}) => {
    const classes = classnames(
        'mdc-textfield-helptext', {
            'mdc-textfield-helptext--persistent': persistent,
            'mdc-textfield-helptext--validation-msg': validation
        }, className);
    const ElementType = elementType || 'p';
    return (
        <ElementType className={classes}
                     {...otherProp}
        >
            {children}
        </ElementType>);
};

Helptext.propTypes = propTypes;
export default Helptext;