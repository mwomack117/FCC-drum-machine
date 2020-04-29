import React from "react";
import DrumPad from "../components/DrumPad";

function DrumBank(props) {
  return (
    <div className="drum-bank">
      {props.currentPadBank.map((drumObj, i) => {
        return (
          <DrumPad
            keyCode={drumObj.keyCode}
            keyTrigger={drumObj.keyTrigger}
            name={drumObj.id}
            url={drumObj.url}
            key={drumObj[i]}
          />
        );
      })}
    </div>
  );
}

export default DrumBank;
