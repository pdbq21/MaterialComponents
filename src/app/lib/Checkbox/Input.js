/**
 * Created by ruslan on 04.05.17.
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
    componentWillReceiveProps(props) {
        if (props.indeterminate !== this.props.indeterminate) {
            this.refs.nativeCb.indeterminate = props.indeterminate;
        }
    }
    render() {
        const ownProps = Object.assign({}, this.props);
        delete ownProps.onRef;
        delete ownProps.indeterminate;
        const {
            className,
            disabled,
            checked,
            ...otherProps
        } = ownProps;
        const classes = classnames('mdc-checkbox__native-control', className);
        return (
            <input
                ref="nativeCb"
                type="checkbox"
                className={classes}
                checked={checked}
                disabled={disabled}
                {...otherProps}
            />);
    }
}