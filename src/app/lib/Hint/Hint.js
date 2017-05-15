/**
 * Created by ruslan on 15.05.17.
 */
import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default class Hint extends PureComponent {
    static propTypes = {
        children: PropTypes.node,
    };

    constructor(props) {
        super(props);
        this.state = {
            widthInput: 0,
            data: [],
            classes: [],
            value: '',
            open: false
        };

        this.handleInput = this.handleInput.bind(this);
        this.handelItem = this.handelItem.bind(this);
        this.fetchData = this.fetchData.bind(this);
    }


    handleInput({currentTarget}) {
        const {url, list} = this.props;
        if (typeof url !== 'undefined'){
            // this.fetchData(url, currentTarget.value);
            this.fetchData(url);
        } else if (typeof list !== 'undefined'){
            this.setState({data: list});
        } else {
            console.error('Not data');
        }

        this.setState({
            widthInput: currentTarget.clientWidth,
            value: currentTarget.value,
        });
    }

    fetchData(url, value) {
        //fetch(url + encodeURIComponent(value))
        fetch(url)
            .then((res) => {
                return res.json();
            })
            .then((res) => {
                this.setState({
                    data: Object.keys(res),
                    open: true,
                });
            });
    }
    handelItem({currentTarget}){
        this.setState({
            open: false,
            value: currentTarget.textContent,
        });
    }


    render() {
        const ownProps = Object.assign({}, this.props);
        delete ownProps.url;
        const {
            elementType,
            className,
            children,
            ...otherProp
        } = ownProps;
        const ElementType = elementType || 'div';
        const classes = classnames(className);

        return (
            <ElementType
                className={classes}
                {...otherProp}
                //input props
                valueInput=""
                handleInput=""
                //Items props
                handelItem=""
                data=""

            >
                {children}
            </ElementType>
        );
    }
}