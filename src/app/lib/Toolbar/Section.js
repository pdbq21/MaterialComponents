/**
 * Created by ruslan on 16.03.17.
 */
import React, {PropTypes} from 'react';
import classnames from 'classnames';

const propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    start: PropTypes.bool,
    end: PropTypes.bool,
};
const Section = ({
    children,
    className,
    elementType,
    start,
    end,
    ...otherProp
}) => {
    const classes = classnames(
        'mdc-toolbar__section', {
            'mdc-toolbar__section--align-start': start,
            'mdc-toolbar__section--align-end': end
        }, className);
    const ElementType = elementType || 'section';
    return (
        <ElementType className={classes}
                     {...otherProp}
        >
            {children}
        </ElementType>);
};

Section.propTypes = propTypes;
export default Section;