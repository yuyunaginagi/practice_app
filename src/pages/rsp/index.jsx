import React from "react";
import { Link } from "react-router-dom";

export default class Index extends React.Component {
  constructor() {
    super();
    this.state = {
      selectHand: 0,
    };
  }
  render() {
    const imgSize = 100;
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <h1>じゃんけんページ</h1>
        <div style={{ display: "flex" }}>
          <button
            onClick={() => {
              this.setState({selectHand: 0});
            }}
          >
            <img
              src={`images/rock.jpeg`}
              alt="rock"
              style={{
                height: imgSize,
                width: imgSize,
                opacity: this.state.selectHand == 0 ? 1.0 : 0.3,
              }}
            />
          </button>
          <button
            onClick={() => {
              this.setState({selectHand: 1});
            }}
          >
            <img
              src={`images/paper.jpeg`}
              alt="paper"
              style={{
                height: imgSize,
                width: imgSize,
                opacity: this.state.selectHand == 1 ? 1.0 : 0.3,
              }}
            />
          </button>
          <button
            onClick={() => {
              this.setState({selectHand: 2});
            }}
          >
            <img
              src={`images/scissors.jpeg`}
              alt="scissors"
              style={{
                height: imgSize,
                width: imgSize,
                opacity: this.state.selectHand == 2 ? 1.0 : 0.3,
              }}
            />
          </button>
        </div>
        <Link to="/">
          <h1>じゃんけんを終了する</h1>
          <h4>※戦績が発表されます。</h4>
        </Link>
      </div>
    );
  }
}