import { useEffect, useState } from "react";

export const PathfinderVisualizer = (props) => {
  const [grid, setGrid] = useState([]);
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);
  const square_size = 35;

  useEffect(() => {
    let newGrid = [];
    const rows = height / square_size;
    const columns = width / square_size;
    for (let row = 0; row < rows; row++) {
      let currentRow = [];
      for (let column = 0; column < columns; column++) {
        currentRow.push(0);
      }
      newGrid.push(currentRow);
    }
    setGrid(newGrid);
  }, []);

  console.log(grid);
  return <div>welp</div>;
};
