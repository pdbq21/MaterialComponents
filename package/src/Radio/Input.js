/**
 * Created by ruslan on 29.03.17.
 */
import React, {PureComponent} from 'react';
import classnames from 'classnames';

export default class Input extends PureComponent {

    render() {
        const ownProps = Object.assign({}, this.props);
        const {
            className,
            ...otherProps
        } = ownProps;
        const classes = classnames('mdc-radio__native-control', className);
        return (
            <input
                className={classes}
                {...otherProps}
                type="radio"
            />);
    }

}
