/**
 * Created by ruslan on 15.05.17.
 */
import React, {PureComponent} from 'react';
import {Elevation} from '../index'

export default class HintElevation extends PureComponent {

    render() {
        const ownProps = Object.assign({}, this.props);
        const {
            isOpen,
            handelItem,
            data,
            widthInput,
            activeItems,
            zSpace,
            style,
            children,
            ...otherProps
        } = ownProps;
        const zSpaceNumber = zSpace || '2';

        const childElement = child => {
            if (child.type.name === 'Items') {
                return React.cloneElement(child, {
                    handelItem: handelItem,
                    data: data,
                    activeItems: activeItems,
                })
            } else {
                return child
            }
        };

        let renderChildren = React.Children.map(children, childElement);
        return ((isOpen) ? <Elevation
                style={{
                    'width': widthInput,
                    ...style
                }}
                zSpace={zSpaceNumber}
                {...otherProps}
            >
                {renderChildren}
            </Elevation> : null
        );
    }
}