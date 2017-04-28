/**
 * Created by ruslan on 24.04.17.
 */
import React, {Component} from 'react';
//import classnames from 'classnames';
import '@material/grid-list/dist/mdc.grid-list.min.css';
import {gridList} from 'material-components-web/dist/material-components-web';
const {MDCGridListFoundation} = gridList;

export default class GridListTest extends Component {
    foundation = new MDCGridListFoundation({
        getOffsetWidth: () => {
            if (this.refs.root) {
                return this.refs.root.offsetWidth;
            }
        },
        getNumberOfTiles: () => {
            if (this.refs.root) {
                return this.refs.root.querySelectorAll('.mdc-grid-tile').length;
            }
        },
        getOffsetWidthForTileAtIndex: index => {
            if (this.refs.root) {
                return this.refs.root.querySelectorAll('.mdc-grid-tile')[index].offsetWidth;
            }
        },
        setStyleForTilesElement: (property, value) => {
            if (this.refs.root) {
                this.refs.root.querySelector('.mdc-grid-tile').style[property] = value;
            }
        },
        registerResizeHandler: handler => {
            window.addEventListener('resize', handler);
        },
        deregisterResizeHandler: handler => {
            window.removeEventListener('resize', handler);
        }
    });

    componentDidMount() {
        this.foundation.init();
    }

    componentWillUnmount() {
        this.foundation.destroy();
    }


    render() {
        console.log(MDCGridListFoundation);
        return (
            <div
                ref="root"
                className="mdc-grid-list">
                <ul className="mdc-grid-list__tiles">
                    <li className="mdc-grid-tile">
                        <div className="mdc-grid-tile__primary">
                            <img className="mdc-grid-tile__primary-content" alt="" src="my-image.jpg"/>
                        </div>
                        <span className="mdc-grid-tile__secondary">
        <span className="mdc-grid-tile__title">Title</span>
      </span>
                    </li>
                    <li className="mdc-grid-tile">
                        <div className="mdc-grid-tile__primary">
                            <img className="mdc-grid-tile__primary-content" alt="" src="my-image.jpg"/>
                        </div>
                        <span className="mdc-grid-tile__secondary">
        <span className="mdc-grid-tile__title">Title</span>
      </span>
                    </li>
                </ul>
            </div>
        );
    }
}
