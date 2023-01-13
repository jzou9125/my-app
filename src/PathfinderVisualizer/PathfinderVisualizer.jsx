import { useEffect, useState } from "react";
import Node from "./Node/Node";
import "./PathfinderVisualizer.css";

export const PathfinderVisualizer = (props) => {
  const [grid, setGrid] = useState([]);
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight - 40); //75 needs to be replaced with the size of other components
  const [rows, setRows] = useState(0);
  const [columns, setColumns] = useState(0);
  const [start, setStart] = useState([0, 0]);
  const [end, setEnd] = useState([0, 0]);
  const square_size = 32;

  useEffect(() => {
    setStart([Math.floor(rows / 3), Math.floor(columns / 3)]);
    setEnd([Math.floor(rows / 3), Math.floor((columns / 3) * 2)]);
    setGrid(initGrid(rows, columns));
  }, [rows, columns]);

  useEffect(() => {
    setRows(Math.floor(height / square_size));
    setColumns(Math.floor(width / square_size));
  }, [height, width]);

  useEffect(() => {
    const resizeListener = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight - 40);
    };
    window.addEventListener("resize", resizeListener);
    return () => {
      window.removeEventListener("resize", resizeListener);
    };
  }, []);

  const initGrid = (rows, columns) => {
    let newGrid = Array.from({ length: rows }, () => Array(columns).fill(null));
    for (let row = 0; row < rows; row++) {
      for (let column = 0; column < columns; column++) {
        newGrid[row][column] = nodeProps(row, column);
      }
    }
    return newGrid;
  };

  const nodeProps = (row, column) => {
    return {
      row,
      column,
      distance: Infinity,
      isVisited: false,
      isWall: false,
      previousNode: null,
    };
  };

  return (
    <div className="grid-container">
      <div className="menu"> Header menu</div>
      <div className="board">
        {grid.map((row, x) =>
          row.map((node, y) => (
            <Node
              key={`${x}-${y}`}
              isStart={node.row === start[0] && node.column === start[1]}
              isFinish={node.row === end[0] && node.column === end[1]}
              isVisited={node.isVisited}
              isWall={node.isWall}
            />
          ))
        )}
      </div>
    </div>
  );
};
