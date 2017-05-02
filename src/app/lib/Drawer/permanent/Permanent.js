/**
 * Created by ruslan on 20.03.17.
 */
import React, {PureComponent} from 'react';
import classnames from 'classnames';

class Permanent extends PureComponent {

    render() {
        const {elementType, children, className, ...otherProps} = this.props;
        const ElementType = elementType || 'nav';
        return (
            <ElementType
                elementType={ElementType}
                className={classnames('mdc-permanent-drawer', className)}
                {...otherProps}
            >
                {children}
            </ElementType>
        );
    }
}

export default Permanent;

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