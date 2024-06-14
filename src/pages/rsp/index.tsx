import React from "react";
import { Link } from "react-router-dom";
import Hand from "../../components/hand";
import { HandType } from "../../interfaces/handType";

interface Props {}

interface State {
  selectHand: HandType;
  enemyHand: HandType;
  resultString: string;
  winCount: number;
}

export default class Index extends React.Component<Props, State> {
  handTypes: HandType[] = [HandType.Rock, HandType.Scissors, HandType.Paper]
  constructor(props: Props) {
    super(props);
    this.state = {
      selectHand: HandType.Rock,
      enemyHand:HandType.Rock,
      resultString: "最初はグーじゃんけん",
      winCount: 0,
    };
  }

  componentDidMount() {
    alert("手を選ぶと、勝敗が決まるよ！\n手を選んでね！");
  }

  componentDidUpdate(prevProps: Props, prevState: State) {
    if (prevState.selectHand !== this.state.selectHand) {
      const enemyHand: HandType = Math.floor(Math.random() * 3);
      this.setState({ enemyHand: enemyHand });
      this.confirmResult(this.state.selectHand, enemyHand);
    }
   }

  handleOnClick = (val: HandType): void => {
    this.setState({ selectHand: val });
  };

  confirmResult(selectHand: HandType, enemyHand: HandType): void {
    const result: number = (selectHand - enemyHand + 3) % 3;
    if (result === 0) {
      return this.setState({
        resultString: "あいこで",
      });
    } else if (result === 2) {
      return this.setState({
        resultString: "勝ち",
        winCount: this.state.winCount + 1,
      });
    } else {
      return this.setState({
        resultString: "負け",
      });
    }
  }

  render() {
    const handTypes: HandType[] = [HandType.Rock, HandType.Scissors, HandType.Paper];
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <h1>じゃんけんページ</h1>
        <h2>自分の手</h2>
        <h1 style={{ color: "red" }}>{this.state.resultString}</h1>
        <h2 style={{ marginTop: 10 }}>相手の手</h2>
        <div style={{ display: "flex" }}>
          {this.handTypes.map((handType: HandType) => (
            <Hand selectHand={handType} selectedHand={this.state.enemyHand} clickHand={this.handleOnClick} />
          ))}
        </div>
        <Link to="/">
          <h1>じゃんけんを終了する</h1>
          <h4>※戦績が発表されます。</h4>
        </Link>
      </div>
    );
  }
}