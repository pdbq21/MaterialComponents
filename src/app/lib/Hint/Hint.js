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
            value: '',
            isOpen: false,
            activeItems: [],
        };

        this.handleInput = this.handleInput.bind(this);
        this.handleClickInput = this.handleClickInput.bind(this);
        this.handelItem = this.handelItem.bind(this);
        this.fetchData = this.fetchData.bind(this);
        this.handleTagRemove = this.handleTagRemove.bind(this);
    }

    handleClickInput() {
        this.setState({
            isOpen: false
        });
    }

    handleInput({currentTarget}) {
        const {url, list} = this.props;
        if (typeof url !== 'undefined') {
            this.fetchData(url, currentTarget.value);
        } else if (typeof list !== 'undefined') {
            this.setState({
                data: list,
                isOpen: Boolean(list.length && currentTarget.value.length)
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
        if (value.trim().length){
            fetch(url + encodeURIComponent(value))
                .then((res) => {
                    return res.json();
                })
                .then((res) => {
                    this.setState({
                        data: res.results,
                        isOpen: Boolean(res.results.length && value.length),
                    });
                });
        } else{
            this.setState({
                data: [],
                isOpen: false
            });
        }
    }

    handelItem({currentTarget}, index) {
        if (this.props.multiselect){
            let activeItems = this.state.activeItems;
            if (currentTarget.attributes['aria-selected'].value === 'false'){
                activeItems = activeItems.concat([{
                    name: this.state.data[index],
                    index: index
                }]);

            } else if (currentTarget.attributes['aria-selected'].value === 'true') {
                activeItems = activeItems.filter(activeIndex => activeIndex.index !== index);
            }
            this.setState({
                activeItems:  activeItems,
            });
        } else {
            this.setState({
                isOpen: false,
                value: currentTarget.textContent,
            });
        }
    }

    handleTagRemove(index){
        let activeItems = this.state.activeItems.filter(activeIndex => activeIndex.index !== index);
        this.setState({
            activeItems:  activeItems,
        });
    }

    render() {
        const {
            isOpen,
            data,
            value,
            activeItems,
            widthInput,
        } = this.state;
        const ownProps = Object.assign({}, this.props);
        delete ownProps.url;
        delete ownProps.list;
        delete ownProps.multiselect;
        const {
            elementType,
            children,
            className,
            ...otherProps
        } = ownProps;
        const ElementType = elementType || 'div';

        const childElement = child => {
            if (child.type.name === 'HintTextfield') {
                return React.cloneElement(child, {
                    valueInput: value,
                    handleInput: this.handleInput,
                    handleClickInput: this.handleClickInput,
                })
            } else if (child.type.name === 'HintElevation') {
                return React.cloneElement(child, {
                    isOpen: isOpen,
                    handelItem: this.handelItem,
                    data: data,
                    widthInput: widthInput,
                    activeItems: activeItems
                })
            } else if (child.type.name === 'Tags') {
                return React.cloneElement(child, {
                    handleTagRemove: this.handleTagRemove,
                    activeItems: activeItems
                })
            } else {
                return child
            }
        };

        let renderChildren = React.Children.map(children, childElement);

        return (
            <ElementType
                className={classnames('my-mdc-hint', className)}
                {...otherProps}
            >
                {renderChildren}
            </ElementType>
        );
    }
}