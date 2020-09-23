import React, { Component } from "react";
import { InputNumber, Button } from "antd";
import { TWITTER_BASE_URL, BEARER_TOKEN } from "../constants";
class GamePanel extends Component {
  constructor() {
    super();
    this.state = {
      error: null,
      correct: false,
      answer: "",
      NumQ: 10,
      tweet: "",
      text1: [],
      text2: [],
      click1: false,
      click2: false,
    };
  }

  onChangeNumQ = (value) => {
    console.log("value ", value);
    this.setState({
      NumQ: value,
    });
  };

  startGame = () => {
    this.props.zeroNum();
    let btn1 = document.getElementById("btn1");
    let btn2 = document.getElementById("btn2");
    let correctAnswer = this.state.answer;
    for (let i = 0; i < this.state.NumQ; ++i) {
      this.renderTweet();
      while (btn1.clicked === false && btn2.clicked === false) {
        if (btn1.clicked && correctAnswer === "kanyewest") {
          this.setState({
            correct: true,
          });
        } else if(btn2.clicked && correctAnswer === "elonmusk"){
          this.setState({
            correct: true,
          });
        }
      }
    }
  };

  renderTweet = () => {
    let choice = Math.random();
    if (choice < 0.5) {
      this.setState({
        tweet: this.state.text1[
          Math.floor(Math.random() * this.state.text1.length)
        ],
        answer: "kanyewest",
      });
    } else {
      this.setState({
        tweet: this.state.text2[
          Math.floor(Math.random() * this.state.text2.length)
        ],
        answer: "elonmusk",
      });
    }
  };

  componentDidMount() {
    fetch(TWITTER_BASE_URL + "&screen_name=kanyewest", {
      method: 'GET', 
      // mode: 'no-cors',
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Authorization': 'Bearer ' + BEARER_TOKEN,
      },
    })
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            text1: result.text,
          });
        },
        (error) => {
          this.setState({
            error,
          });
        }
      );

    fetch(TWITTER_BASE_URL + "&screen_name=elonmusk", {
      method: 'GET', 
      // mode: 'no-cors',
      headers: {
        // 'Authorization': `Bearer ${BEARER_TOKEN}`,
        'Access-Control-Allow-Origin': '*',
        'Authorization': 'Bearer ' + BEARER_TOKEN,
      },
    })
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            text1: result.text,
          });
        },
        (error) => {
          this.setState({
            error,
          });
        }
      );
  }

  render() {
    return (
      <div className="game-panel">
        <div className="game-input">
          <label>Number of Questions: </label>
          <InputNumber
            min={1}
            max={100}
            defaultValue={10}
            style={{ margin: "0 2px" }}
            onChange={this.onChangeNumQ}
          />
          <Button className="game-btn" size="large" onClick={this.startGame}>
            Start Game
          </Button>
        </div>
        <div className="tweet-show">
          <p className="one-tweet">{this.state.tweet}</p>
        </div>
        <div>
          <Button
            className="guess-btn"
            id="btn1"
            size="large"
            onClick={() => this.checkCelebrity1}
          >
            Kanye West
          </Button>
          <Button
            className="guess-btn"
            id="btn2"
            size="large"
            onClick={() => this.checkCelebrity1}
          >
            Elon Musk
          </Button>
        </div>
      </div>
    );
  }
}

export default GamePanel;
