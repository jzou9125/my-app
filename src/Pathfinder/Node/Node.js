import "./Node.css";
import React, { Component } from "react";

class Node extends Component {
  constructor(props) {
    super(props);
    this.state = {
      is_start: props.is_start,
      is_target: props.is_target,
      is_wall: false,
    };
    this.row = props.row;
    this.column = props.column;
    this.size = props.size;
  }

  handleClick = () => {
    this.setState((state) => ({
      is_wall: !state.is_wall,
    }));
  };

  render() {
    const className = this.state.is_start
      ? "start"
      : this.state.is_target
      ? "target"
      : this.state.is_wall
      ? "wall"
      : "";

    return (
      <div
        onClick={this.handleClick}
        key={this.key}
        id={this.key}
        className={className}
        style={{
          width: this.size,
          height: this.size,
          border: "1px solid black",
        }}
      />
    );
  }
}

export default Node;
