import React from 'react';
import Countup from 'react-countup';

const Counter = ({start = 0, end = 0}) => (
    <div className="f1 b orange mb0" style={{lineHeight: 1}}>
        <Countup start={start} end={end} useEasing={true} useGrouping={true} separator="," />
    </div>
)


export default Counter