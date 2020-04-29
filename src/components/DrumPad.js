import React, { Component } from "react";

const inactiveStyle = {
  width: 90,
  height: 90,
  backgroundColor: "white",
  margin: 5,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

class DrumPad extends Component {
  constructor(props) {
    super(props);
    this.state = {
      padStyle: inactiveStyle,
    };
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress);
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyPress);
  }

  handleKeyPress = (e) => {
    if (e.keyCode === this.props.keyCode) {
      console.log(e.keyCode);
      this.playSound();
    }
  };

  playSound = (e) => {
    const sound = document.getElementById(this.props.keyTrigger);
    sound.currentTime = 0;
    sound.play();
  };

  render() {
    return (
      <div
        className="drum-pad"
        id={this.props.name}
        onClick={this.playSound}
        style={this.state.padStyle}
      >
        <audio src={this.props.url} id={this.props.keyTrigger}></audio>
        {this.props.keyTrigger}
      </div>
    );
  }
}

export default DrumPad;
