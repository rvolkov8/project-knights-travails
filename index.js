function knightMoves(start, end) {
  const directions = [
    [-2, -1],
    [-1, -2],
    [1, -2],
    [2, -1],
    [2, 1],
    [1, 2],
    [-1, 2],
    [-2, 1],
  ];
  const visited = new Set();
  const queue = [[start]];

  while (queue.length > 0) {
    const path = queue.shift();
    const current = path[path.length - 1];

    if (current[0] === end[0] && current[1] === end[1]) {
      return path;
    }

    if (visited.has(current.toString())) {
      continue;
    }

    visited.add(current.toString());

    for (let i = 0; i < directions.length; i++) {
      const [dx, dy] = directions[i];
      const next = [current[0] + dx, current[1] + dy];

      if (next[0] >= 0 && next[0] < 8 && next[1] >= 0 && next[1] < 8) {
        const newPath = path.slice();
        newPath.push(next);
        queue.push(newPath);
      }
    }
  }

  return null; // No path found
}

const start = [3, 4];
const end = [4, 3];
const path = knightMoves(start, end);

if (path) {
  console.log(`You made it in ${path.length - 1} moves! Here's your path:`);
  path.forEach((square) => console.log(square));
} else {
  console.log(`No path found from ${start} to ${end}`);
}
