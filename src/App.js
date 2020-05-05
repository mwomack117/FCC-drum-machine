import React, { Component } from "react";
import "./App.css";
import { bankOne } from "./assets/sounds";

import DrumBank from "./components/DrumBank";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: String.fromCharCode(160),
      currentPadBank: bankOne,
    };
  }

  displayName = (name) => {
    this.setState({
      display: name,
    });

    setTimeout(() => this.clearDisplay(), 200);
  };

  clearDisplay = () => {
    this.setState({
      display: String.fromCharCode(160),
    });
  };

  render() {
    return (
      <div id="drum-machine">
        <h1 id="title">Drum Machine</h1>
        <DrumBank
          currentPadBank={this.state.currentPadBank}
          updateDisplay={this.displayName}
        />
        <h2 id="display">{this.state.display}</h2>
      </div>
    );
  }
}

export default App;
