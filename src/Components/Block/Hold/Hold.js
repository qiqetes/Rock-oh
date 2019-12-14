import React, { Component } from 'react';
import './Hold.scss'

const Hold = ({ type, x, y, size, color }) => {
    const borderRadius = type == 'top' ? 12 : 6;
    const circleStyle = {
        width: `${size}px`,
        height: `${size}px`,
        bottom: `calc(${y}% - ${size / 2}px - ${borderRadius}px)`,
        left: `calc(${x}% - ${size / 2}px - ${borderRadius}px)`,
        border: `${borderRadius}px solid ${color}`
    }

    return (
        // Types to handle: hand, hands, foot, foots, optional, top
        <div className="circle" style={circleStyle}>
            {
                type == "hand" ? <HoldIcon parentSize={size / 2} color={color}></HoldIcon> : null
            }
        </div>
    )
};

const HoldIcon = ({ type, color, parentSize }) => {

    const iconRadius = 24; // TODO: better in percentage
    const holdIconStyle = {
        // R - 2r - cos(45) * R + r - r * cos(45)
        top: `calc(${parentSize}px - 2 * ${iconRadius}px - 0.7071 * ${parentSize}px + ${iconRadius}px - ${iconRadius}px * 0.7071 )`,
        left: `calc(${parentSize}px - 2 * ${iconRadius}px - 0.7071 * ${parentSize}px + ${iconRadius}px - ${iconRadius}px * 0.7071 )`,
        backgroundColor: `${color}`,
        width: `${iconRadius * 2}px`,
        height: `${iconRadius * 2}px`
    }


    return (
        <div className="holdIcon" style={holdIconStyle}>

        </div>
    );
}

export default Hold;