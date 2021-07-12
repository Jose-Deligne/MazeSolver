import React,{useState, useEffect} from 'react';
import {GetWallCreationStatus, GetDeleteWallsStatus, GetStartingPointActiveStatus,GetGoalPointActiveStatus} from '../../Context/MenuSelectionContext';
import {GetStartingCell, SetStartingCell, GetGoalCell, SetGoalCell} from '../../Context/CellInfoContext';
import classes from './GridBox.module.css';

const GridBox = (props) => {
    const [backgroundColor, setBackgroundColor] = useState({
        background: 'white'
    });

    const wallCreationStatus = GetWallCreationStatus();
    const wallDeletionStatus = GetDeleteWallsStatus();
    const startingButtonStatus = GetStartingPointActiveStatus();
    const goalButtonStatus = GetGoalPointActiveStatus();

    const startingCellLocation = GetStartingCell();
    const setStartingLocation = SetStartingCell();
    const goalCellLocation = GetGoalCell();
    const setGoalLocation = SetGoalCell();

    const [isWall, setIsWall] = useState(false);
    const [isStarting, setIsStarting] = useState(false);
    const [isGoal, setIsGoal] = useState(false);

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
        if (props.wallBlock && !isStarting && !isGoal) {

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
        if (!isStarting  && !isGoal){
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
        }
    };

    const clickedUpHandler = (event) => {
        if (wallCreationStatus || wallDeletionStatus){
            props.bReleased(event, props.cord)
        }
    }

    const setPositionPoint = (event) => {
        if (startingButtonStatus){
            setStartingLocation(props.cord)
        }
        if (goalButtonStatus){
            setGoalLocation(props.cord)
        }
    }



    useEffect(() => {
        if (startingCellLocation === props.cord){
            setIsStarting(true);
            setBackgroundColor({
                background: 'orange'
            })
        }
        else if (isStarting) {
            setIsStarting(false);
            setBackgroundColor({
                background: 'white'
            })
        }
    }, [startingCellLocation])

    useEffect(() => {
        if (goalCellLocation === props.cord){
            setIsGoal(true);
            setBackgroundColor({
                background: 'green'
            })
        }
        else if (isGoal){
            setIsGoal(false);
            setBackgroundColor({
                background: 'white'
            })
        }
    },[goalCellLocation])

    return(
        <div 
         className={classes.boxStyle}
         style={backgroundColor} 
         onClick={setPositionPoint} 
         onMouseDown={clickedDownHandler}
         onMouseUp={clickedUpHandler}
         onMouseEnter={hoverOverCellHandler}
         >
            {`(${row},${column})`}
        </div>
    );
};

export default GridBox;