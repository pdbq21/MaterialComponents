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

    componentDidMount() {
        this.props.onRef(this)
    }

    componentWillUnmount() {
        this.props.onRef(null)
    }

    render() {
        const {children, className, ...otherProp} = this.props;
        delete otherProp.onRef;
        const classes = classnames('mdc-snackbar__text', className);
        return (
            <div
                ref='text'
                className={classes}
            >
                {children}
            </div>
        );
    }

}