import React, { Component } from "react";
import { InputNumber, Button } from "antd";
import { TWITTER_BASE_URL, BEARER_TOKEN } from "../constants";
class GamePanel extends Component {
  constructor() {
    super();
    this.state = {
      error: null,
      correct: false,
      answer: '',
      NumQ: 10,
      tweet: "",
      text1: [],
      text2: [],
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
    let btn1 = document.getElementById('btn1');
    let btn2 = document.getElementById('btn2');
    for (let i = 0; i < this.state.NumQ; ++i) {
      let choice = Math.random();
      if (choice < 0.5) {
        this.setState({
          tweet: this.state.text1[
            Math.floor(Math.random() * this.state.text1.length)
          ],
          answer: "kanyewest",
        });
        while(btn1.clicked === false && btn2.clicked === false){
            if(btn2.clicked){
                this.setState({
                    answer: true,
                });
            }else{
                this.setState({
                    answer: false,
                });
            }
        }
      } else {
        this.setState({
          tweet: this.state.text2[
            Math.floor(Math.random() * this.state.text2.length)
          ],
          answer: "elonmusk",
        });
        while(btn1.clicked === false && btn2.clicked === false){
            if(btn2.clicked){
                this.setState({
                    answer: true,
                });
            }else{
                this.setState({
                    answer: true
                });
            }
        }
      }

    }
  };


  componentDidMount() {
    fetch(TWITTER_BASE_URL + "&screen_name=kanyewest", {
      headers: {
        Authorization: `Bearer ${BEARER_TOKEN}`,
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
      headers: {
        Authorization: `Bearer ${BEARER_TOKEN}`,
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
            id = "btn1"
            size= "large"
            onClick={() => this.checkCelebrity1}
          >
            Kanye West
          </Button>
          <Button
            className="guess-btn"
            id = "btn2"
            size = "large"
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
