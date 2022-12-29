import { useState, useEffect } from "react";
import "./GraphPaper.css";

function GraphPaper() {
  // Create a 2D array to represent the graph paper
  const [grid, setGrid] = useState([]);
  const [startNode, setStartNode] = useState(null);
  const [targetNode, setTargetNode] = useState(null);

  useEffect(() => {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    const squareSize = 22;

    const rows = Math.ceil(screenHeight / squareSize);
    const columns = Math.ceil(screenWidth / squareSize);

    const newGrid = Array.from({ length: rows }, () => []);
    setGrid(newGrid.map((row) => Array.from({ length: columns }, () => null)));
  }, []);

  const handleClick = (rowIndex, colIndex) => {
    console.log(rowIndex, colIndex);
    // Check if the start node has already been set
    if (startNode) {
      // If the start node has been set, set the target node
      setTargetNode({ row: rowIndex, col: colIndex });
    } else {
      // If the start node has not been set, set the start node
      setStartNode({ row: rowIndex, col: colIndex });
    }
  };

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, 22px)",
        gridTemplateRows: "repeat(auto-fit, 22px)",
        gridGap: "0",
        overflow: "hidden",
        overflowY: "hidden",
      }}
    >
      {grid.map((rows, rowIndex) =>
        rows.map((item, colIndex) => {
          // Determine the class to apply to the cell based on its state
          let className = "";
          if (
            startNode &&
            startNode.row === rowIndex &&
            startNode.col === colIndex
          ) {
            className = "start-node";
          } else if (
            targetNode &&
            targetNode.row === rowIndex &&
            targetNode.col === colIndex
          ) {
            className = "target-node";
          }

          return (
            <div
              key={`${rowIndex}-${colIndex}`}
              style={{
                gridColumn: `${colIndex + 1} / ${colIndex + 2}`,
                gridRow: `${rowIndex + 1} / ${rowIndex + 2}`,
                width: "20px",
                height: "20px",
                border: "1px solid black",
              }}
              className={className}
              onClick={() => handleClick(rowIndex, colIndex)}
            >
              {item || ""}
            </div>
          );
        })
      )}
    </div>
  );
}

export default GraphPaper;
