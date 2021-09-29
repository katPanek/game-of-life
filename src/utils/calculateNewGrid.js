export function calculateNewGrid(width, height, grid) {
    const newGrid = deepCopy(grid);
      for (let i = 0; i < width; i++) {
        for (let j = 0; j < height; j++) {
          const isAlive = grid[i][j] === 1;
          let neighboursAlive = 0;
          if (i - 1 > 0 && j - 1 > 0 && grid[i - 1][j - 1] === 1) neighboursAlive++;
          if (i - 1 > 0 && grid[i - 1][j] === 1) neighboursAlive++;
          if (i - 1 > 0 && j + 1 < height && grid[i - 1][j + 1] === 1) neighboursAlive++;
          if (j - 1 > 0 && grid[i][j - 1] === 1) neighboursAlive++;
          if (j + 1 < height && grid[i][j + 1] === 1) neighboursAlive++;
          if (i + 1 < width && j - 1 > 0 && grid[i + 1][j - 1] === 1) neighboursAlive++;
          if (i + 1 < width && grid[i + 1][j] === 1) neighboursAlive++;
          if (i + 1 < width && j + 1 < height && grid[i + 1][j + 1] === 1) neighboursAlive++;
          
          // 1. Any live cell with fewer than two live neighbours dies, as if by underpopulation.
          // 3. Any live cell with more than three live neighbours dies, as if by overpopulation.
          if (isAlive && (neighboursAlive < 2 || neighboursAlive > 3)) newGrid[i][j] = 0;

          // 2. Any live cell with two or three live neighbours lives on to the next generation.
          // if (isAlive && (neighboursAlive === 2 || neighboursAlive === 3))

          // 4. Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.
          if (!isAlive && neighboursAlive === 3) newGrid[i][j] = 1;
        }
      }
      return newGrid;
}

const deepCopy = (arr) => {
    let copy = [];
    arr.forEach(elem => {
        if (Array.isArray(elem)) {
            copy.push(deepCopy(elem))
        } else {
            copy.push(elem)
        }
    })
    return copy;
}