import React,{useState} from 'react';
import {GetWallCreationStatus, GetDeleteWallsStatus} from '../../Context/MenuSelectionContext';
import classes from './GridBox.module.css';

const GridBox = (props) => {
    const [backgroundColor, setBackgroundColor] = useState({
        background: 'white'
    });

    const wallCreationStatus = GetWallCreationStatus();
    const wallDeletionStatus = GetDeleteWallsStatus();


    const [isWall, setIsWall] = useState(false);



    let row = props.cord[0];
    let column = props.cord[1];
    /*
    let boxStyle = {
        color: 'black',
        background: 'white',
        border: '1px solid black',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
        
    }
    */

    const getPosition = () => {
        console.log(`row: ${row}. Column ${column}. Wall: ${isWall}`)
    }

    const hoverOverCellHandler = (event) => {
        console.log(props.wallBlock)
        if (props.wallBlock) {

            if (wallCreationStatus) {
                setIsWall(true)
                setBackgroundColor({
                    background: 'blue'
                });
            }

            if (wallDeletionStatus) {
                setIsWall(false)
                setBackgroundColor({
                    background: 'white'
                })
            }

        }
    };

    const clickedDownHandler = (event) => {
        if (wallCreationStatus){
            setIsWall(true)
            setBackgroundColor({
                background: 'blue'
            })
            props.bPressed(props.cord)
        }

        if (wallDeletionStatus){
            setIsWall(false)
            setBackgroundColor({
                background: 'white'
            })
            props.bPressed(props.cord)
        }
    };

    const clickedUpHandler = (event) => {
        if (wallCreationStatus || wallDeletionStatus){
            props.bReleased(event, props.cord)
        }
    }

    return(
        <div 
         className={classes.boxStyle}
         style={backgroundColor} 
         onClick={getPosition} 
         onMouseDown={clickedDownHandler}
         onMouseUp={clickedUpHandler}
         onMouseEnter={hoverOverCellHandler}
         >
            {`(${row},${column})`}
        </div>
    );
};

export default GridBox;