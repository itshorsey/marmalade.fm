/* global Mixcloud */
import React, { Component } from 'react';
import FeaturedMix from './FeaturedMix'
import Header from './Header'

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Home = () => <h1>Home</h1>;
const Archive = () => <h1>Archive</h1>;
const About = () => <h1>About</h1>;

class App extends Component {
  
  mountAudio = async () => {
    const widget = Mixcloud.PlayerWidget(this.player);
    await widget.ready;
    await widget.play();
  }

  componentDidMount() {
    this.mountAudio()
  } 

  render() {
    return (
      <Router>
        <div>
          <div className="flex-l justify-end">
            {/* Featured Mix */}
            <FeaturedMix />
            <div className="w-50-l relative z-1">
              {/* Header */}
              <Header />
              {/* Routed Page */}
              <Route exact path="/" component={Home} />
              <Route path="/archive" component={Archive} />
              <Route path="/About" component={About} />
            </div>
          </div>
          {/* Audio Player */}
          <iframe
              width="100%"
              height="60"
              src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&mini=1&feed=%2FNTSRadio%2Ffloating-points-jamie-xx-18th-august-2016%2F"
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
