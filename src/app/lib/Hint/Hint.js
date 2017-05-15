/**
 * Created by ruslan on 15.05.17.
 */
import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
//import classnames from 'classnames';

export default class Hint extends PureComponent {
    static propTypes = {
        children: PropTypes.node,
    };

    constructor(props) {
        super(props);
        this.state = {
            widthInput: 0,
            data: [],
            value: '',
            isOpen: false
        };

        this.handleInput = this.handleInput.bind(this);
        this.handelItem = this.handelItem.bind(this);
        this.fetchData = this.fetchData.bind(this);
    }


    handleInput({currentTarget}) {
        const {url, list} = this.props;
        if (typeof url !== 'undefined') {
            // this.fetchData(url, currentTarget.value);
            this.fetchData(url);
        } else if (typeof list !== 'undefined') {
            this.setState({
                data: list,
                isOpen: true
            });
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
                    isOpen: true,
                });
            });
    }

    handelItem({currentTarget}) {
        this.setState({
            isOpen: false,
            value: currentTarget.textContent,
        });
    }


    render() {
        const {
            isOpen,
            data,
            value,
            widthInput
        } = this.state;
        const ownProps = Object.assign({}, this.props);
        delete ownProps.url;
        delete ownProps.list;
        const {
            elementType,
            children,
            ...otherProps
        } = ownProps;
        const ElementType = elementType || 'div';

        const childElement = child => {
            if (child.type.name === 'HintTextfield') {
                return React.cloneElement(child, {
                    valueInput: value,
                    handleInput: this.handleInput,
                })
            } else if (child.type.name === 'HintElevation') {
                return React.cloneElement(child, {
                    isOpen: isOpen,
                    handelItem: this.handelItem,
                    data: data,
                    widthInput: widthInput
                })
            } else {
                return child
            }
        };

        let renderChildren = React.Children.map(children, childElement);

        return (
            <ElementType
                {...otherProps}
            >
                {renderChildren}
            </ElementType>
        );
    }
}