/**
 * Created by ruslan on 29.03.17.
 */
import React, {PropTypes, PureComponent} from 'react';
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

        const {className, ...otherProp} = this.props;
        delete otherProp.onRef;
        const classes = classnames(
            'mdc-radio__native-control', className);
        return (
            <input
                ref="rootInput"
                className={classes}
                {...otherProp}
                type="radio"
            />);
    }

}
