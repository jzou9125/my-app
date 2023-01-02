import React, { useEffect, useState, useRef } from "react";
import Node from "../Node/Node";

function GraphingPaper({ size }) {
  const nodes = [];
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);
  const start = { row: 10, column: 10 };
  const target = { row: 10, column: 30 };
  const graph = useRef([]);
  graph.current = [];

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const addToGraph = (element) => {
    if (element && !graph.current.includes(element)) {
      graph.current.push(element);
    }
  };

  const cols = width / (size + 2);
  const rows = height / (size + 2);
  for (let i = 1; i < rows; i++) {
    for (let j = 1; j < cols; j++) {
      nodes.push(
        <Node
          ref={addToGraph}
          id={`${i},${j}`}
          row={i}
          column={j}
          size={size}
          is_start={i === start.row && j === start.column}
          is_target={i === target.row && j === target.column}
        />
      );
    }
  }

  return <div style={{ display: "flex", flexWrap: "wrap" }}>{nodes}</div>;
}

export default GraphingPaper;
