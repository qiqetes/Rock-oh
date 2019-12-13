import React, { Component } from 'react';
import Hold from './Hold/Hold'
import './Block.scss';


const Block = ({ blockData }) => (
    <div className="block">

        <h1>{blockData.name}</h1>
        <div>
            <div className="block-img">
                <img src={blockData.url} alt="" />
            </div>
            <div className="block-holds">
                {blockData.holds.map((hold, i) => {
                    return <Hold key={i} type={hold.type} x={hold.x} y={hold.y} size={hold.size}></Hold>
                })}
            </div>
        </div>
    </div>
);

export default Block;