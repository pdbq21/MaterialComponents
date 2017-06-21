/**
 * Created by ruslan on 15.03.17.
 */
import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default class LayoutGrid extends PureComponent {
    static propTypes = {
        children: PropTypes.node,
        className: PropTypes.string,
    };

    setPropertyLayoutGrid(margin, gutter){
        if (this.refs.root && margin){
            this.refs.root.style.setProperty('--mdc-layout-grid-margin', margin);
        }
        if (this.refs.root && gutter){
            this.refs.root.style.setProperty('--mdc-layout-grid-gutter', gutter);
        }
    }

    componentDidMount() {
        const {gutter, margin} = this.props;
        this.setPropertyLayoutGrid(margin, gutter);
    }
    componentWillReceiveProps(props) {
        const {gutter, margin} = props;
        this.setPropertyLayoutGrid(margin, gutter);
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