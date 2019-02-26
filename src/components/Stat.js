import React from 'react';
import Counter from './Counter';

const Stat = ({statName, statNumber, statWord}) => (
    <div className="mb4">
        <div className="f6 black bold">{statName}</div>
        <div className="f5 b biryani-black ttu tracked">
            <Counter end={statNumber} /> 
            <div className="f4" style={{lineHeight: 1}}>{statWord}</div>
        </div>
    </div>
)

export default Stat