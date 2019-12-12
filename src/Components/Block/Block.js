import React, { Component } from 'react';
import './Block.scss';


const Block = ({ blockData }) => (
    <div className="block">

        <h1>{blockData.name}</h1>
        <div>
            <div className="block-img">
                <img src={blockData.url} alt="" />
            </div>
            <div className="block-holds">
                <h1>THIS GOES ABOVE THE ROCO IMG</h1>
            </div>
        </div>
    </div>
);

export default Block;