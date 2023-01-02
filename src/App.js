import "./App.css";
import GraphingPaper from "./Pathfinder/GraphPaper/GraphPaper";
import PathfinderVisualizer from "./Pathfinder/PathfinderVisualizer";
import Dijkstra from "./Pathfinder/Algorithmns/Dijkstra";

function App() {
  const graph = new GraphingPaper({ size: 35 });
  const pathfinder = new PathfinderVisualizer({
    graph: graph,
  });

  return (
    <div className="App">
      <button onClick={Dijkstra({ graph: graph })}>dijkstra's algorithm</button>
      {pathfinder.render()}
    </div>
  );
}

export default App;
