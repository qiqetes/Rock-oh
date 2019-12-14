import React, { Component } from 'react';
import Hold from './Hold/Hold'
import './Block.scss';


const Block = ({ blockData }) => {
    const difficultyColor = () => {
        let color;

        // TODO: add a better color gradding function
        switch (blockData.grade) {
            case '5a':
                color = '#c9f257'; break;
            case '6b':
                color = '#f00c3a'; break;
        }
        console.log(color);
        return color;
    }

    return (
        <div className="block">

            <h1>{blockData.name}</h1>
            <div>
                <div className="block-img">
                    {/* <img src={blockData.url} alt="" /> */}
                </div>
                <div className="block-holds">
                    {blockData.holds.map((hold, i) => {
                        return <Hold key={i} type={hold.type} x={hold.x} y={hold.y} size={hold.size} color={difficultyColor()}></Hold>
                    })}
                </div>
            </div>
        </div>
    )
};

export default Block;