/**
 * Created by ruslan on 02.05.17.
 */
import React, {Component} from 'react';
import classnames from 'classnames';

import {gridList} from 'material-components-web/dist/material-components-web';
const {MDCGridListFoundation} = gridList;

export default class Radio extends Component {

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
                this.refs.root.querySelector('.mdc-grid-list__tiles').style[property] = value;
            }
        },
        registerResizeHandler: handler => {
            window.addEventListener('resize', handler, {passive: true});
        },
        deregisterResizeHandler: handler => {
            window.removeEventListener('resize', handler);
        }
    });

    render() {
        const {
            children,
            className,
            gutter,
            elementType,
            header,
            twoline,
            alignStart,
            alignEnd,
            aspect,//1x1 / 16x9 / 2x3 / 3x2 / 4x3 / 3x4
            ...otherProp
        } = this.props;

        const classes = classnames('mdc-grid-list', {
            'mdc-grid-list--tile-gutter-1': gutter,
            'mdc-grid-list--header-caption': header,
            'mdc-grid-list--twoline-caption': twoline,
            'mdc-grid-list--with-icon-align-start': alignStart,
            'mdc-grid-list--with-icon-align-end': alignEnd,
        [`mdc-grid-list--tile-aspect-${aspect}`]: aspect
        }, className);
        const ElementType =  elementType || 'div';
        return (
            <ElementType
                ref="root"
                className={classes}
                {...otherProp}
            >
                {children}
            </ElementType>
        );
    }

    // Within the two component lifecycle methods below, we invoke the foundation's lifecycle hooks
    // so that proper work can be performed.
    componentDidMount() {
        this.foundation.init();
    }

    componentWillUnmount() {
        this.foundation.destroy();
    }
}
