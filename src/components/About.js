import React from 'react';

const Stat = ({statName, statNumber, statWord}) => (
    <div className="w-third tc pa3 ba bw2 b--light-gray" style={{marginRight: -2}}>
        <div className="f6 biryani ttu">{statName}</div>
        <div className="f5 b biryani-black ttu tracked">{statNumber} {statWord}</div>
    </div>
)


const About = ({mixes}) => (
    <div className="ph5 ph4-l">
        <div className="measure center lh-copy f4 ph3">
            <p className="mt0">Tasty Grooves Mate</p>
            <p>YYYYYYYYEEEAHHHHHH.</p>
        </div>

        <div className="flex pt3 ph3 ph4l">
            <Stat statName="Featuring" statNumber={mixes.length} statWord="mixes"/>
            <Stat statName="Played..." statNumber={mixes.reduce((accum, current) => accum + current.play_count, 0)} statWord="times"/>
            <Stat statName="With..." statNumber={mixes.reduce((accum, current) => accum + current.audio_length, 0)} statWord="seconds"/>
        </div>

    </div>
)

export default About