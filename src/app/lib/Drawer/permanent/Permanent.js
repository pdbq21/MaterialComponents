/**
 * Created by ruslan on 20.03.17.
 */
import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
/*
 const propTypes = {
 children: PropTypes.node,
 className: PropTypes.string,
 };
 const Permanent = ({
 children,
 className,
 elementType,
 ...otherProp
 }) => {
 const classes = classnames(
 'mdc-permanent-drawer',  className);
 const ElementType = elementType || 'nav';
 return (
 <ElementType className={classes}
 {...otherProp}
 >
 {children}
 </ElementType>);
 };

 Permanent.propTypes = propTypes;
 export default Permanent;*/
import Drawer from '../Drawer';

class Permanent extends PureComponent {
    static propTypes = {
        children: PropTypes.node,
        className: PropTypes.string,
    };


    render() {
        const {elementType, children, className, ...otherProps} = this.props;
        const ElementType = elementType || 'nav';
        return (
            <Drawer
                permanent
                elementType={ElementType}
                className={className}
                {...otherProps}
            >
                {children}
            </Drawer>
        );
    }
}

export default Permanent;