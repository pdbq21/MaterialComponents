/**
 * Created by ruslan on 02.05.17.
 */
import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default class Text extends PureComponent {
    static propTypes = {
        className: PropTypes.string,
    };

    render() {
        const {children, className, elementType, ...otherProp} = this.props;
        const classes = classnames('mdc-snackbar__text', className);
        const ElementType = elementType || 'div';
        return (
            <ElementType
                className={classes}
                {...otherProp}
            >
                {children}
            </ElementType>
        );
    }

}