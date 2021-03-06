const dfs = (grid, startNode, finishNode) => {
  const visitedNodesInOrder = [];
  const unvisitedNodes = [];
  unvisitedNodes.unshift(startNode);
  while (unvisitedNodes.length > 0) {
    let currentNode = unvisitedNodes.shift();
    // If we encounter a wall, we skip it.
    if (currentNode.isWall) continue;
    currentNode.isVisited = true;
    currentNode.onShortestPath = true;
    visitedNodesInOrder.push(currentNode);
    // If we have reached the destination, stop searching.
    if (currentNode === finishNode) return visitedNodesInOrder;

    const unvisitedNeighbors = getUnvisitedNeighbors(currentNode, grid);
    for (let i = unvisitedNeighbors.length - 1; i >= 0; i--) {
      unvisitedNodes.unshift(unvisitedNeighbors[i]);
    }
  }
  return visitedNodesInOrder;
};

// Get all unvisited neighbors of the current node.
const getUnvisitedNeighbors = (node, grid) => {
  const neighbors = [];
  const row = node.row;
  const col = node.col;
  if (col < grid[0].length - 1) neighbors.push(grid[row][col + 1]);
  if (row < grid.length - 1) neighbors.push(grid[row + 1][col]);
  if (col > 0) neighbors.push(grid[row][col - 1]);
  if (row > 0) neighbors.push(grid[row - 1][col]);

  // filter out nodes that have already been visited.
  return neighbors.filter(neighbor => !neighbor.isVisited);
};

export default dfs;
