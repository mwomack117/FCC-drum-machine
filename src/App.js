import React, { Component } from "react";
import "./App.css";
import { bankOne } from "./assets/sounds";

import DrumBank from "./components/DrumBank";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      power: true,
      display: String.fromCharCode(160),
      currentPadBank: bankOne,
    };
  }

  render() {
    return (
      <div id="drum-machine" className="inner-container">
        <div>
          <audio src={this.state.currentPadBank[0].url} id="Q"></audio>
        </div>
        <DrumBank currentPadBank={this.state.currentPadBank} />
      </div>
    );
  }
}

export default App;
