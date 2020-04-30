import React, { Component } from "react";

const inactiveStyle = {
  width: 90,
  height: 90,
  backgroundColor: "white",
  margin: 5,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  transition: "all .15s",
};

const activeStyle = {
  width: 90,
  height: 90,
  fontSize: 20,
  backgroundColor: "orange",
  margin: 5,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  transform: "scale(1.1)",
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

  handleStyleChange = () => {
    this.state.padStyle.backgroundColor === "white"
      ? this.setState({ padStyle: activeStyle })
      : this.setState({ padStyle: inactiveStyle });
  };

  playSound = (e) => {
    const sound = document.getElementById(this.props.keyTrigger);
    sound.currentTime = 0;
    sound.play();

    this.handleStyleChange();
    setTimeout(() => this.handleStyleChange(), 150);

    this.props.updateDisplay(this.props.name);
  };

  render() {
    return (
      <div
        className="drum-pad"
        id={this.props.name}
        onClick={this.playSound}
        style={this.state.padStyle}
      >
        <audio
          src={this.props.url}
          id={this.props.keyTrigger}
          className="clip"
          type="audio/wav"
        ></audio>
        {this.props.keyTrigger}
      </div>
    );
  }
}

export default DrumPad;
