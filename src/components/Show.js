import React, {Component} from 'react';
import Stat from './Stat';


class Show extends Component {
    constructor(props) {
        super(props)
        this.state = {
            mix: {},

        }
    }

    componentWillReceiveProps(nextProps) {
        const {match} = this.props
        const {mixes} = nextProps

        const [firstMix = {}] = mixes.filter(mix => mix.slug == match.params.slug )
        this.setState({
            mix: firstMix
        });    
    }

    render() {
        const {match} = this.props;
        const {mix = {}} = this.state;
        return (
            <div className="ph3 ph4-l pad-bottom">
                <div className="measure center lh-copy">
                    <p>{mix.description}</p>
                    {/* <p>{mix.play_count}</p>
                    <p>{mix.created_time}</p>
                    <p>{mix.audio_length}</p> */}
                    <Stat statName="Plays" statNumber={mix.play_count} statWord="times"/>
                    <Stat statName="Uploaded" statNumber={mix.created_time} statWord="days Ago"/>
                    <Stat statName="Lasting for" statNumber={mix.audio_length / 60} statWord="minutes"/>
                </div>
            </div>
        )
    }
}

export default Show;