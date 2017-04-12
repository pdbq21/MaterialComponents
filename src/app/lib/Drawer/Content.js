/**
 * Created by ruslan on 12.04.17.
 */
import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

class Content extends PureComponent {
    static propTypes = {
        id: PropTypes.string,
        children: PropTypes.node,
        className: PropTypes.string,
        temporary: PropTypes.bool,
        permanent: PropTypes.bool,
        list: PropTypes.bool,
    };

    state = {
        classes: [],
    };

    render() {
        const {elementType, children, temporary, permanent, list} = this.props;
        const ElementType =  elementType || 'div';
        return (
            <ElementType ref="root" className={
                classnames(
                    {
                        'mdc-temporary-drawer__content': temporary,
                        'mdc-permanent-drawer__content': permanent,
                        'mdc-list': list,
                    },
                    this.state.classes,
                    this.props.className
                )}>
                {children}
            </ElementType>
        );
    }
}

export default Content;