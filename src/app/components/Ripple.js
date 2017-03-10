// src: https://github.com/rwu823/react-ripples/blob/master/src/index.js
import React, { PropTypes } from 'react'

const rippleStyle = {
    position: 'absolute',
    borderRadius: '50%',
    opacity: 0,
    width: 35,
    height: 35,
    transform: 'translate(-50%, -50%)',
    pointerEvents: 'none',
}

const wrapStyle = {
    position: 'relative',
    display: 'inline-block',
    overflow: 'hidden',
}

class Ripples extends React.Component {
    static propTypes = {
        during: PropTypes.number,
        color: PropTypes.string,
    }

    static defaultProps = {
        during: 600,
        color: 'rgba(0, 0, 0, .3)',
    }

    state = {
        rippleStyle: {},
    }

    handleClick = (ev) => {
        ev.stopPropagation()

        const { onClick, color, during } = this.props
        const {
            pageX, pageY, currentTarget: {
            offsetLeft, offsetTop,
            offsetWidth, offsetHeight
        }
        } = ev

        const left = pageX - offsetLeft
        const top = pageY - offsetTop

        this.setState({
            rippleStyle: {
                top, left,
                opacity: 1,
                backgroundColor: color,
            }
        })

        setTimeout(() => {
            const size = Math.max(offsetWidth, offsetHeight)

            this.setState({
                rippleStyle: {
                    top, left,
                    backgroundColor: color,
                    transition: `all ${during}ms`,
                    transform: `${rippleStyle.transform} scale(${size / 9})`,
                    opacity: 0,
                }
            })
        }, 50)

        if (typeof onClick === 'function') {
            onClick(ev)
        }
    }

    render() {
        const { children, style, during, ...props } = this.props
        const { state, handleClick } = this

        const s = {
            ...style,
            ...wrapStyle,
        }

        return (
            <div {...props} style={s} onClick={handleClick}>
                { children }
                <s style={{
                    ...rippleStyle,
                    ...state.rippleStyle,
                }} />
            </div>
        )
    }
}

export default Ripples