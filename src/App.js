import React from 'react';
import classes from './App.module.css';
import Maze from './Components/MazeComponents/Maze';

function App() {
  let dim = [25,25];

  return (
    <>
      <div className={classes.heading}>
        Maze Solver
      </div>
      <Maze className={classes.body} dim={dim}/>
    </>
  );
}

export default App;
