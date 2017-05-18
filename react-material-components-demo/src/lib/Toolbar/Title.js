/**
 * Created by ruslan on 16.03.17.
 */

import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default class Title extends PureComponent {
    static propTypes = {
        className: PropTypes.string,
    };

    render() {
        const ownProps = Object.assign({}, this.props);
        const {
            children,
            elementType,
            className,
            ...otherProp
        } = ownProps;
        const classes = classnames('mdc-toolbar__title', className);
        const ElementType = elementType || 'span';
        return (
            <ElementType
                ref='titleElement'
                className={classes}
                {...otherProp}
            >
                {children}
            </ElementType>);
    }
}