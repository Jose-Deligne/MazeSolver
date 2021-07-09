import React,{useState} from 'react';
import classes from './Maze.module.css';
import GridBox from './GridBox';

const Maze = (props) => {
    let rows = props.dim[0];
    let columns = props.dim[1];
    let heightPerBox = 100/rows;
    let widthPerBox = 100/columns;

    const [buttonPressed, setButtonPressed] = useState(false);
    
    let squareStyle = {
        display: 'grid',
        height: '100%',
        gridTemplateColumns: `repeat(${columns},${widthPerBox}%)`,
        gridTemplateRows: `repeat(${rows},${heightPerBox}%)`,
        background: 'grey'
    };



    const handleMouseDown = (value) => {
        setButtonPressed(true)
    };

    const handleMouseUp = (event, value) => {
        setButtonPressed(false);
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
        let displayGrid = mazeMap.map((position) => {
            return(
                <GridBox 
                 cord={position}
                 bPressed={handleMouseDown} 
                 bReleased={handleMouseUp}
                 wallBlock={buttonPressed} 
                />
            );
        });
        console.log('Complete')
        return displayGrid;
    }



    let mazeMap = createBoxGrid();

    return(
        <div className={props.className}>
            <div style={squareStyle}>
                {mazeMap}
            </div>
        </div>
    );
};

export default Maze;