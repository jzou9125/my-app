import React, { Component, useEffect, useState } from "react";
import Node from "./Node/Node";
import "./PathfinderVisualizer.css";
import GraphPaper from "./GraphPaper/GraphPaper";

export default class PathfinderVisualizer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <div>
          <GraphPaper> </GraphPaper>
        </div>
        <div> yes</div>
      </>
    );
  }
}
