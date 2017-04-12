/**
 * Created by ruslan on 12.04.17.
 */
import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

class ToolbarSpacer extends PureComponent {
    static propTypes = {
        id: PropTypes.string,
        children: PropTypes.node,
        className: PropTypes.string,
        temporary: PropTypes.bool,
        permanent: PropTypes.bool,
    };

    state = {
        classes: [],
    };

    render() {
        const {elementType, children, temporary, permanent} = this.props;
        const ElementType =  elementType || 'div';
        return (
            <ElementType ref="root" className={
                classnames(
                    {
                        'mdc-temporary-drawer__toolbar-spacer': temporary,
                        'mdc-permanent-drawer__toolbar-spacer': permanent
                    },
                    this.state.classes,
                    this.props.className
                )}>
                {children}
            </ElementType>
        );
    }
}

export default ToolbarSpacer;