/**
 * Created by ruslan on 08.03.17.
 */
import React from 'react';
import {Elevation} from '../../app/index'

export default class Elevations extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mouseIn: false,
        };

        this.handleMouseEnter = this.handleMouseEnter.bind(this);
        this.handleMouseOut = this.handleMouseOut.bind(this);
    }

    setMouseIn(mouseIn) {
        this.setState({mouseIn});
    }

    handleMouseEnter() {
        this.setMouseIn(true);
    }

    handleMouseOut() {
        this.setMouseIn(false);
    }


    render() {
        const {mouseIn} = this.state;
        return (
            <div className="elevation">
                {(function (blocks, i, len) {
                    while (++i <= len) {
                        blocks.push(<Elevation key={`key-${i}`} zSpace={i}>zSpace = {i}</Elevation>)
                    }
                    return blocks;
                })([], -1, 24)}
                <Elevation
                    zSpace={(mouseIn)? 8 : 2}
                    transition
                    onMouseEnter={this.handleMouseEnter}
                    onMouseOut={this.handleMouseOut}
                > Elevation with transition</Elevation>
            </div>
        );
    }
}