/**
 * Created by ruslan on 15.03.17.
 */
import React, {PropTypes} from 'react';
import classnames from 'classnames';

const propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    icon: PropTypes.bool,
    start: PropTypes.bool,
    end: PropTypes.bool,
};
const StartDetail = ({
    children,
    className,
    elementType,
    icon,
    start,
    end,
    ...otherProp
}) => {
    const classes = classnames({
        'material-icons': icon,
        'mdc-list-item__start-detail': start,
        'mdc-list-item__end-detail': end
    }, className);
    const ElementType = elementType || 'i';
    return (
        <ElementType className={classes}
                     {...otherProp}
        >
            {children}
        </ElementType>);
};

StartDetail.propTypes = propTypes;
export default StartDetail;