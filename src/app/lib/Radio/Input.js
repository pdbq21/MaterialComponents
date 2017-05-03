/**
 * Created by ruslan on 29.03.17.
 */
import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default class Input extends PureComponent {
    static propTypes = {
        className: PropTypes.string,
    };

    componentDidMount() {
        this.props.onRef(this)
    }

    componentWillUnmount() {
        this.props.onRef(null)
    }

    render() {
        const ownProps = Object.assign({}, this.props);
        delete ownProps.onRef;
        const {
            className,
            ...otherProps
        } = ownProps;
        const classes = classnames('mdc-radio__native-control', className);
        return (
            <input
                ref="rootInput"
                className={classes}
                {...otherProps}
                type="radio"
            />);
    }

}
