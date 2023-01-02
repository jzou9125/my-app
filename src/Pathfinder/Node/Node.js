import "./Node.css";
import React, { Component } from "react";

class Node extends Component {
  render() {
    const { id, row, column, size, is_start, is_target } = this.props;
    const className = is_start ? "start" : is_target ? "target" : "";

    return (
      <div
        id={id}
        className={className}
        style={{
          width: size,
          height: size,
          border: "1px solid black",
        }}
      />
    );
  }
}

export default Node;
