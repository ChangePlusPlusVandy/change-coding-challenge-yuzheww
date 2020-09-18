import React, { Component } from "react";
import { feature } from "topojson-client";
import { Spin } from "antd";
import { InputNumber, Button } from "antd";

class WorldMap extends Component {
  constructor() {
    super();
    this.state = {
      correct: false,
      NumQ: 10,
    };
  }

  onChangeNumQ = (value) => {
    console.log("value ", value);
    this.setState({
      NumQ: value,
    });
  };

  componentDidMount() {
    axios
      .get(WORLD_MAP_URL)
      .then((res) => {
        const { data } = res;
        const land = feature(data, data.objects.countries).features;
        this.generateMap(land);
      })
      .catch((e) => console.log("err in fecth world map data ", e));
  }

  render() {
    return (
      <div className="map-box">
        <div>
          <InputNumber
            min={0}
            max={100}
            defaultValue={10}
            style={{ margin: "0 2px" }}
            onChange={this.onChangeNumQ}
          />
          <Button
            className="sat-list-btn"
            size="large"
            onClick={() => this.props.trackOnclick(this.state.duration)}
          >
            Start Game
          </Button>
        </div>
      </div>
    );
  }
}

export default WorldMap;
