/*global Mixcloud*/
import React, { Component } from 'react';
import FeaturedMix from './FeaturedMix'
import Header from './Header'
import Home from './Home'
import Archive from './Archive'
import About from './About'
import Show from './Show'

import mixesData from '../data/mixes';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      playing: false,
      currentMix: '',
      mix: null,
      mixIds: mixesData,
      mixes: []
    }
  }
  
  fetchMixes = async () => {
    // console.log("fetch mixes");

    const {mixIds} = this.state
    // console.log(mixIds);

    mixIds.map( async id => {
      try {
        const response = await fetch(`https://api.mixcloud.com${id}`);
        const data = await response.json();
        // console.log(data);
        this.setState((prevState, props) => ({
          mixes: [...prevState.mixes, data]
        }))
        } catch(error) {
      }
      }
    )
  }

  mountAudio = async () => {
    this.widget = Mixcloud.PlayerWidget(this.player);
    await this.widget.ready;

    this.widget.events.pause.on(
      () => this.setState({
        playing: false
      })
    )
    
    this.widget.events.play.on(
      () => this.setState({
        playing: true
      })
    )
  }

  componentDidMount() {
    this.mountAudio();
    this.fetchMixes();
  } 

  actions = {
    toggePlay: () => {
      this.widget.togglePlay();
    },
    playMix: mixName => {
      
      const {currentMix} = this.state
      if (currentMix == mixName) {
        return this.widget.togglePlay();
      }

      this.setState({
        currentMix: mixName,
      })
      
      this.widget.load(mixName, true)
    }

  }

  render() {
    
    const  [firstMix = {}] = this.state.mixes

    return (
      <Router>
        <div>
          <div className="flex-l justify-end">
            {/* Featured Mix */}
            <FeaturedMix {...this.state} {...this.actions} {...firstMix} id={firstMix.key} />
            <div className="w-50-l relative z-1">
              {/* Header */}
              <Header />
              {/* <div>
                <button onClick={this.toggePlay}>
                  { this.state.playing ? 'Pause' : 'Play'} 
                </button>
              </div> */}
              
              {/* Routed Page */}
              <Route exact path="/" render={()=> <Home {...this.state} {...this.actions}/>} />
              <Route path="/archive" render={()=> <Archive {...this.state} {...this.actions}/>} />
              <Route path="/About" component={()=> <About {...this.state} {...this.actions}/>} />


              <Route path="/show/:slug" render={routeParams => <Show {...routeParams} {...this.state}/>}/>

            </div>
          </div>
          {/* Audio Player */}
          <iframe
              width="100%"
              height="60"
              src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&mini=1&feed=%2FCashmereRadio%2Fduty-free-25-w-carl-luis-03012019%2F"
              frameBorder="0"
              className="db fixed bottom-0 z-5"
              // this allows us to get the actual html element inside react
              ref={player => (this.player = player)}
            />
        </div>
      </Router>
    );
  }
}

export default App;
