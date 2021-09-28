import { useState } from 'react';
import './App.css';
import { Cell } from './components/cell/Cell';
import { GridRow } from './components/gridRow/GridRow';

const WIDTH = 40;
const HEIGHT = 50;

export function App() {
  const [grid, setGrid] = useState(getEmptyGrid());
  const [count, setCount] = useState(0);
  const [runLoop, setRunLoop] = useState(null);

  function startRunLoop() {
    setCount((c) => c + 1)
    setGrid(grid => {
      const newGrid = deepCopy(grid);
      for (let i = 0; i < WIDTH; i++) {
        for (let j = 0; j < HEIGHT; j++) {
          const isAlive = grid[i][j] === 1;
          let neighboursAlive = 0;
          if (i - 1 > 0 && j - 1 > 0 && grid[i - 1][j - 1] === 1) neighboursAlive++;
          if (i - 1 > 0 && grid[i - 1][j] === 1) neighboursAlive++;
          if (i - 1 > 0 && j + 1 < HEIGHT && grid[i - 1][j + 1] === 1) neighboursAlive++;
          if (j - 1 > 0 && grid[i][j - 1] === 1) neighboursAlive++;
          if (j + 1 < HEIGHT && grid[i][j + 1] === 1) neighboursAlive++;
          if (i + 1 < WIDTH && j - 1 > 0 && grid[i + 1][j - 1] === 1) neighboursAlive++;
          if (i + 1 < WIDTH && grid[i + 1][j] === 1) neighboursAlive++;
          if (i + 1 < WIDTH && j + 1 < HEIGHT && grid[i + 1][j + 1] === 1) neighboursAlive++;
          
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
  });
  }

  function handleStartClick() {
    if (!runLoop) {
      setRunLoop(setInterval(startRunLoop, 100));
    }
  }

  const handleResetClick = () => {
    setGrid(getEmptyGrid());
    handleStopClick();
    setCount(0);
  }

  const handleStopClick = () => {
    clearInterval(runLoop);
    setRunLoop(null);
  }

  return <div style={{ display: 'flex', height: '100vh', alignItems: 'center', justifyContent: 'center', flexFlow: 'column' }}>
    <div style={{ display: 'flex', padding: '10px', gap: '20px' }}> 
      <button 
        onClick={handleStartClick}
      >
        Start
      </button>
      <button 
        onClick={handleStopClick}>
        Stop
      </button>
      <button
        onClick={handleResetClick}
      >
        Reset
      </button>
      {count}
    </div>
    <div>
      {grid.map((gridRow, indexRow) => {
        return <GridRow key={indexRow}>
          {gridRow.map((cell, indexCell) => {
            return <Cell
              key={indexRow + indexCell}
              isAlive={cell}
              cellClicked={() => {
                const newGrid = [...grid];
                newGrid[indexRow][indexCell] = cell ? 0 : 1;
                setGrid(newGrid);
              }} />
          })}
        </GridRow>
      })}
    </div>
  </div>;

}

function getEmptyGrid() {
  const grid = [];

  for (let i = 0; i < WIDTH; i++) {
    grid[i] = [];
    for (let j = 0; j < HEIGHT; j++) {
      grid[i][j] = 0;
    }
  }
  
  return grid;
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