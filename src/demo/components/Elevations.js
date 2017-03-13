/**
 * Created by ruslan on 08.03.17.
 */
import React from 'react';
import {Elevation} from '../../app/lib'

export default function Elevations() {

    return (
        <div className="elevation">
            {(function (blocks, i, len) {
                while (++i <= len) {
                    blocks.push(<Elevation key={`key-${i}`} zSpace={i}>zSpace = {i}</Elevation>)
                }
                return blocks;
            })([], -1, 24)}
        </div>
    );
}
