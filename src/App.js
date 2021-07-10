import React,{useState} from 'react';
import classes from './App.module.css';
import Maze from './Components/MazeComponents/Maze';
import EditMenu from './Components/MazeComponents/EditMenu';

function App() {
  let dim = [25,25];
  
  return (
    <>
      <div className={classes.heading}>
        Maze Solver
      </div>
      <EditMenu className={classes.['menu']}/>
      <Maze className={classes.body} dim={dim}/>
    </>
  );
}

export default App;
