import React, { Component } from "react";
// import GamePanel from "./GamePanel";
import GameStats from "./GameStats";
import { Layout } from "antd";

const { Sider, Content } = Layout;

// const width = 960;
// const height = 600;

class Main extends Component {
  constructor() {
    super();
    this.state = {
      total: 0,
      correct: 0,
      accuracy: 0,
    };
  }

  fetchSatellite = (setting) => {
    const url = 1;
  };

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
        <Layout>
          <Sider className="left-side">
            <GameStats
              total={this.state.total}
              correct={this.state.correct}
              accuracy={this.state.accuracy}
            />
          </Sider>
          <Content className="right-side">
            {/* <GamePanel addNum={this.updateStats} zeroNum={this.resetStats} /> */}
          </Content>
        </Layout>
      </div>
    );
  }
}
export default Main;
