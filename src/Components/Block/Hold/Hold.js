import React, { Component } from 'react';
import './Hold.scss'

const Hold = ({ type, x, y, size, color }) => {
    const circleStyle = {
        width: `${size}px`,
        height: `${size}px`,
        bottom: `calc(${y}% - ${size / 2}px`,
        left: `calc(${x}% - ${size / 2}px`,
        borderColor: color,
    }

    return (
        <div>
            <div className="circle" style={circleStyle}>

            </div>
        </div>
    )
};

export default Hold;