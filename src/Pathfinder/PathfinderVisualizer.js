import React, { Component} from "react";
import "./PathfinderVisualizer.css";

export default class PathfinderVisualizer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.graph = this.props.graph;
  }

  render() {
    return <div>{this.graph}</div>;
  }
}
