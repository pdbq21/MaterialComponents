/**
 * Created by ruslan on 16.03.17.
 */
/*
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
};
const  = ({
    children,
    className,
    elementType,
    ...otherProp
}) => {

    return (
        <ElementType className={classes}
                     {...otherProp}
        >
            {children}
        </ElementType>);
};

Select.propTypes = propTypes;
export default Select;*/

import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {toolbar}  from 'material-components-web/dist/material-components-web';

export default class Select extends PureComponent {
    static propTypes = {
        children: PropTypes.node,
    };

    constructor(props, context) {
        super(props, context);
        this.state = {
            classNames: [],
        };
    }

    componentDidMount() {
        //this.foundation.init();
    }

    componentWillUnmount() {
        //this.foundation.destroy();
    }

    componentWillReceiveProps(props) {

    }

    render() {
        const ownProps = Object.assign({}, this.props);

        const {
            elementType,
            className,
            children,
            ...otherProp
        } = ownProps;

        const ElementType =  elementType || 'select';
        const classes = classnames('mdc-select', this.state.classNames, className);

        return (
            <ElementType
                ref='root'
                className={classes}
                {...otherProp}
            >
                {children}
            </ElementType>
        );
    }
}