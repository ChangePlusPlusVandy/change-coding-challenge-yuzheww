import React, { Component } from "react";

class GameStats extends Component {

  render() {
    return (
      <div className="game-stats">
        <p className="stats-title">Game Statistics</p>
        <div className="stats-list">
          <div className="stat-category">
            <label>TOTAL: </label>
          </div>
          <div className="stat-number">
            <label> {this.props.total} </label>
          </div>
        </div>
        <div className="stats-list">
          <div className="stat-category">
            <label>CORRECT: </label>
          </div>
          <div className="stat-number">
            <label> {this.props.correct} </label>
          </div>
        </div>
        <div className="stats-list">
          <div className="stat-category">
            <label>ACCURACY: </label>
          </div>
          <div className="stat-number">
            <label> {this.props.accuracy} %</label>
          </div>
        </div>
      </div>
    );
  }
}

export default GameStats;
