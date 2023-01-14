function DFS({ grid, setGrid, start, target }) {
  console.log(start);
  const startRow = start[0];
  const startColumn = start[1];
  const targetRow = target[0];
  const targetColumn = target[1];
  if (startRow === targetRow && startColumn === targetColumn) {
    return true;
  }
  let newGrid = [...grid];
  newGrid[startRow][startColumn].isVisited = true;
  setGrid(newGrid);
  const neighbors = getNeighbors(newGrid, startRow, startColumn);
  for (let neighbor of neighbors) {
    if (DFS({ grid: newGrid, setGrid, start: neighbor, target })) {
      return true;
    }
  }
}

function getNeighbors(grid, row, column) {
  const directions = [0, 1, 0, -1, 0];
  var neighbors = [];
  for (var i = 0; i < directions.length; i++) {
    var newRow = row + directions[i];
    var newColumn = column + directions[i + 1];
    if (
      insideGrid(grid, newRow, newColumn) &&
      !grid[newRow][newColumn].isVisited
    ) {
      neighbors.push([newRow, newColumn]);
    }
  }
  return neighbors;
}

function insideGrid(grid, row, column) {
  return (
    row >= 0 && row < grid.length && column >= 0 && column < grid[0].length
  );
}
export default DFS;
