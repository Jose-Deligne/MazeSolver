import React from 'react';
import classes from './GridBox.module.css';

const GridBox = (props) => {
    let row = props.row;
    let column = props.col;

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
        console.log(`row: ${row}. Column ${column}`)
    }

    return(
        <div className={classes.boxStyle} onClick={getPosition}>
            {`(${row},${column})`}
        </div>
    );
};

export default GridBox;