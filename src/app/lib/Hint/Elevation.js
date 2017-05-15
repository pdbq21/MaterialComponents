/**
 * Created by ruslan on 15.05.17.
 */
import React, {PureComponent} from 'react';
import {Elevation} from '../index'

export default class HintElevation extends PureComponent {

    render() {
        const {children, zSpace, ...otherProps} = this.props;
        const zSpaceNumber = zSpace || '2';
        return (
            <Elevation
                zSpace={zSpaceNumber}
                {...otherProps}
            >
                {children}
            </Elevation>
        );
    }
}