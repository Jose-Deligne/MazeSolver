import React,{useState} from 'react';
import classes from './GridBox.module.css';

const GridBox = (props) => {
    const [backgroundColor, setBackgroundColor] = useState({
        background: 'white'
    });
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
        if (props.wallBlock) {
            setIsWall(true)
            setBackgroundColor({
                background: 'blue'
            })
        }
    };

    const clickedDownHandler = (event) => {
        console.log('mouse down')
        setIsWall(true)
        setBackgroundColor({
            background: 'blue'
        })
        props.bPressed(props.cord)
    };

    return(
        <div 
         className={classes.boxStyle}
         style={backgroundColor} 
         onClick={getPosition} 
         onMouseDown={clickedDownHandler}
         onMouseUp={(event) => {
             props.bReleased(event, props.cord)
         }}
         onMouseEnter={hoverOverCellHandler}
         >
            {`(${row},${column})`}
        </div>
    );
};

export default GridBox;