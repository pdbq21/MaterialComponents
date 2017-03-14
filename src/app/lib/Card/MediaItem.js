/**
 * Created by ruslan on 14.03.17.
 */
import React, {PropTypes} from 'react';
import classnames from 'classnames';

const propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
};
const MediaItem = ({
    children,
    className,
    elementType,
    size,
    ...otherProp
}) => {
    const ElementType =  elementType || 'img';
    const classes = classnames(
        'mdc-card__media-item', {
            'mdc-card__media-item--1dot5x': size === '1.5',
            'mdc-card__media-item--2x': size === '2',
            'mdc-card__media-item--3x': size === '3',

        },className);
    return (
        <ElementType
            className={classes}
            {...otherProp}
        >
            {children}
        </ElementType>);
};

MediaItem.propTypes = propTypes;
export default MediaItem;