import React from 'react'
import PlayButtom from './PlayButton';
import Playmix from './Playmix';
import {Link} from 'react-router-dom';
// import { url } from 'inspector';

const Mix = ({name, pictures, slug, ...props}) => (
    <div className="aspect-ratio aspect-ratio--3x4 pointer bg-black cover bg-center"
        style={{backgroundImage: `url(${pictures.extra_large})`}}>
        <Link to={`/show/${slug}`}>
            <Playmix {...props}>
                <div className="ph3 pv4 aspect-ratio--object mix-overlay">
                    <div className="flex items-center relative z-2">
                        <h1 className="f4 f3-l mv0 white ttu biryani pr2 lh-title">{name}</h1>
                        <PlayButtom />
                    </div>
                </div>
            </Playmix>
        </Link>
    </div>
)

export default Mix