/**
 * Created by ruslan on 16.03.17.
 */

import React, {PureComponent} from 'react';
import classnames from 'classnames';

export default class Section extends PureComponent {
    render() {
        const ownProps = Object.assign({}, this.props);
        const {
            elementType,
            className,
            children,
            start,
            end,
            shrink,
            ...otherProps
        } = ownProps;

        const classes = classnames(
            'mdc-toolbar__section', {
                'mdc-toolbar__section--align-start': start,
                'mdc-toolbar__section--align-end': end,
                'mdc-toolbar__section--shrink-to-fit': shrink,
            }, className);
        const ElementType = elementType || 'section';

        return (
            <ElementType
                className={classes}
                {...otherProps}
            >
                {children}
            </ElementType>
        );
    }
}