import React, { Component, useEffect, useState } from "react";
import "./PathfinderVisualizer.css";
import GraphingPaper from "./GraphPaper/GraphPaper";

export default class PathfinderVisualizer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <GraphingPaper size={35} />;
  }
}
