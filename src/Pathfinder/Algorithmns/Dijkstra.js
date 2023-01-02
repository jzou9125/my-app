function Dijkstra({ graph }) {
  console.log("inside dijkstra");
  const start = graph.props.children.filter(
    (element) => element.props.is_start
  )[0];
  const target = graph.props.children.filter(
    (element) => element.props.is_target
  )[0];
  console.log(start);
}

export default Dijkstra;
