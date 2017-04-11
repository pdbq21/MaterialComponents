/**
 * Created by ruslan on 15.03.17.
 */
import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import classnames from 'classnames';
/*
 const propTypes = {
 children: PropTypes.node,
 className: PropTypes.string,
 };
 const LayoutGrid = ({
 children,
 className,
 elementType,
 margin,
 gutter,
 style,
 ...otherProp
 }) => {
 const classes = classnames(
 'mdc-layout-grid', className);
 const ElementType =  elementType || 'div';

 document.documentElement.style.setProperty('--mdc-layout-grid-margin', margin);
 //this.refs.root.style.setProperty('--mdc-layout-grid-gutter', gutter);
 console.log(this);
 return (
 <ElementType className={classes}
 {...otherProp}
 ref="root"
 >
 {children}
 </ElementType>);
 };

 LayoutGrid.propTypes = propTypes;
 export default LayoutGrid;*/


class LayoutGrid extends PureComponent {
    static propTypes = {
        children: PropTypes.node,
        className: PropTypes.string,
    };

    componentDidMount() {
        const {gutter, margin} = this.props;
        ReactDOM.findDOMNode(this.refs.root).style.setProperty('--mdc-layout-grid-gutter', gutter || '16px');
        ReactDOM.findDOMNode(this.refs.root).style.setProperty('--mdc-layout-grid-margin', margin || '16px');
    }

    render() {
        const ownProps = Object.assign({}, this.props);
        delete ownProps.gutter;
        delete ownProps.margin;
        const {
            children,
            className,
            elementType,
            ...otherProp
        } = ownProps;
        const ElementType = elementType || 'div';
        return (
            <ElementType
                ref="root"
                className={
                    classnames(
                        'mdc-layout-grid',
                        className
                    )}
                {...otherProp}
            >
                {children}
            </ElementType>
        );
    }
}

export default LayoutGrid;