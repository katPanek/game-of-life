export function getEmptyGrid(width, height) {
    const grid = [];
  
    for (let i = 0; i < width; i++) {
      grid[i] = [];
      for (let j = 0; j < height; j++) {
        grid[i][j] = 0;
      }
    }
    
    return grid;
  }