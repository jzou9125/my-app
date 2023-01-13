import "./Node.css";
const Node = ({ row, column, isStart, isFinish, isVisited, isWall }) => {
  const extraClassName = isStart
    ? "node-start"
    : isFinish
    ? "node-finish"
    : isWall
    ? "wall"
    : isVisited
    ? "visited"
    : "";
  return <div className={`node ${extraClassName}`}> </div>;
};
export default Node;
