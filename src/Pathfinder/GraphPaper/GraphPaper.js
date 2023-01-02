import React, { useEffect, useState } from "react";
import Node from "../Node/Node";

function GraphingPaper({ size }) {
  const nodes = [];
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

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

  const cols = width / (size + 2);
  const rows = height / (size + 2);
  const start = { row: Math.floor(rows / 3), column: Math.floor(cols / 3) };
  const target = {
    row: Math.floor(rows / 3),
    column: Math.floor((cols * 2) / 3),
  };
  for (let i = 1; i < rows; i++) {
    for (let j = 1; j < cols; j++) {
      nodes.push(
        <Node
          key={`${i},${j}`}
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
