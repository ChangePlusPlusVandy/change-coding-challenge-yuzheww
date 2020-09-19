import React, { Component } from "react";
import GamePanel from "./GamePanel";
import GameStats from "./GameStats";

class Main extends Component {
  constructor() {
    super();
    this.state = {
      total: 0,
      correct: 0,
      accuracy: 0,
    };
  }

  updateStats = (setting) => {
    if (setting.success) {
      this.setState({
        correct: this.state.correct + 1,
      });
    }
    this.setState({
      total: this.state.total + 1,
      accuracy: Math.round(this.state.correct / this.state.total, 2),
    });
  };

  resetStats = () => {
    this.setState({
      total: 0,
      correct: 0,
      accuracy: 0,
    });
  };

  render() {
    return (
      <div className="main">
        <div className="left-side">
          <GameStats
            total={this.state.total}
            correct={this.state.correct}
            accuracy={this.state.accuracy}
          />
        </div>
        <div className="right-side">
          <GamePanel addNum={this.updateStats} zeroNum={this.resetStats} />
        </div>
      </div>
    );
  }
}
export default Main;
