/**
 * Created by ruslan on 12.05.17.
 */
import React, {Component} from 'react';
import classnames from 'classnames';

export default class HintComponentTest extends Component {

    state = {
        classes: [],
    };

    componentDidMount() {

    }

    componentWillReceiveProps(props) {

    }

    componentDidUpdate() {

    }

    render() {
        const ownProps = Object.assign({}, this.props);
        const {
            className,
            ...otherProp
        } = ownProps;
        return (
            <span
                className={
                    classnames(
                        this.state.classes,
                        className
                    )}
                {...otherProp}
            >

</span>
        );
    }
}