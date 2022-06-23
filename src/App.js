import { useState } from 'react';
import './App.css';
import { Cell } from './components/cell/Cell';
import { GridRow } from './components/gridRow/GridRow';
import { getEmptyGrid } from './utils/getEmptyGrid';
import { calculateNewGrid } from './utils/calculateNewGrid';
import Iconify from '@iconify/iconify';

const WIDTH = 40;
const HEIGHT = 50;

export function App() {
  const [grid, setGrid] = useState(getEmptyGrid(WIDTH, HEIGHT));
  const [count, setCount] = useState(0);
  const [runLoop, setRunLoop] = useState(null);

  function startRunLoop() {
    setCount((c) => c + 1)
    setGrid(prevGrid => calculateNewGrid(WIDTH, HEIGHT, prevGrid));
  }

  function handleStartClick() {
    if (!runLoop) {
      setRunLoop(setInterval(startRunLoop, 100));
    }
  }

  const handleResetClick = () => {
    setGrid(getEmptyGrid(WIDTH, HEIGHT));
    handleStopClick();
    setCount(0);
  }

  const handleStopClick = () => {
    clearInterval(runLoop);
    setRunLoop(null);
  }

  return <div style={{ display: 'flex', height: '100vh', alignItems: 'center', justifyContent: 'center', flexFlow: 'column' }}>
    <h1>Welcome to Game of Life</h1>
    <div style={{ display: 'flex', padding: '10px', gap: '20px', alignItems: 'center'}}> 
      <button style={{ background: 'transparent', border: 0, cursor: 'pointer'}}
        onClick={handleStartClick}
      >
        <span class="iconify" data-icon="pixelarticons:play" data-width="36"></span>
      </button>
      <button style={{ background: 'transparent', border: 0, cursor: 'pointer'}}
        onClick={handleStopClick}
      >
        <span class="iconify" data-icon="pixelarticons:pause" data-width="36"></span>
      </button>
      <button style={{ background: 'transparent', border: 0, cursor: 'pointer'}}
        onClick={handleResetClick}
      >
        <span class="iconify" data-icon="pixelarticons:undo" data-width="36"></span>
      </button>
      Gen {count}
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

