import React from "react";

export default class Hand extends React.Component {
  render() {
    const imgSize = 100;
    const handTypes = ["rock", "scissors", "paper"]
    return (
      <div>
        <button onClick={() => {}}>
          <img
            src={`images/${handTypes[this.props.selectHand]}.jpeg`}
            alt="rock"
            style={{
              height: imgSize,
              width: imgSize,
              opacity: this.props.selectHand === 0 ? "0.3" : "1.0",
            }}
          />
        </button>
      </div>
    );
  }
}