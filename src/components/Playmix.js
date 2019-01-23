import React from 'react'

const Playmix = ({playMix, id, currentMix, playing, children}) => (
    <div className={`pointer ${id === currentMix && playing &&  'playing'}`} onClick={() => playMix(id)}>
        {children}
    </div>
)

export default Playmix;