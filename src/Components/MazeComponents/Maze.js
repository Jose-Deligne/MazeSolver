import React,{useState, useEffect} from 'react';
import {GetWallCreationStatus, GetDeleteWallsStatus, GetStartingPointActiveStatus} from '../../Context/MenuSelectionContext';
import GridBox from './GridBox';
import classes from './Maze.module.css';

const Maze = (props) => {
    let rows = props.dim[0];
    let columns = props.dim[1];
    let heightPerBox = 100/rows;
    let widthPerBox = 100/columns;

    const [createWallPressed, setCreateWallPressed] = useState(false);
    const [startingPoint, setStartingPoint] = useState();
    const wallCreationStatus = GetWallCreationStatus();
    const wallDeletionStatus = GetDeleteWallsStatus();
    const startingButtonStatus = GetStartingPointActiveStatus(null);

    let squareStyle = {
        display: 'grid',
        height: '100%',
        gridTemplateColumns: `repeat(${columns},${widthPerBox}%)`,
        gridTemplateRows: `repeat(${rows},${heightPerBox}%)`,
        background: 'grey'
    };


    const handleMouseDown = (value) => {
        if (wallCreationStatus || wallDeletionStatus){
            setCreateWallPressed(true)
        }
    };

    const handleMouseUp = (event, value) => {
        if (wallCreationStatus || wallDeletionStatus){
            setCreateWallPressed(false);
        }
    };

    const changeStartingPoint = (position) => {
        setStartingPoint(position);
    };


    const createBoxGrid = () => {
        // Create 2d array for each box
        const mazeMap = [];
        for (let i = rows-1; i >= 0; i--){
            for (let j = 0; j < columns; j++) {
                mazeMap.push([i,j]);
            }
        }
        //creates jsx to display boxes
        /*
        let displayGrid = mazeMap.map((position) => {
            return(
                <GridBox 
                 cord={position}
                 bPressed={handleMouseDown} 
                 bReleased={handleMouseUp}
                 wallBlock={createWallPressed}
                />
            );
        });
        */
       let displayGrid = mazeMap.map((position) => {
            return(
                [
                    position,
                    <GridBox 
                    cord={position}
                    bPressed={handleMouseDown} 
                    bReleased={handleMouseUp}
                    wallBlock={createWallPressed}
                    checkStarting={startingPoint}
                    setStarting={changeStartingPoint}
                    />
                ]
            );
        });

        return displayGrid;
    }


    let mazeMap = createBoxGrid();

    let displayGrid = mazeMap.map((position) => {
        return(position[1]);
    });


    return(
        <div className={props.className}>
            <div style={squareStyle}>
                {displayGrid}
            </div>
        </div>
    );
};

export default Maze;