import React,{useState} from 'react';
import classes from './EditMenu.module.css';
import {GetWallCreationStatus, SetWallCreationStatus, GetDeleteWallsStatus, SetDeleteWallStatus, SetFillWallStatus} from '../../Context/MenuSelectionContext';
const EditMenu = (props) => {
    const wallCreationStatus = GetWallCreationStatus();
    const toggleWallCreation = SetWallCreationStatus();
    const wallDeletionStatus = GetDeleteWallsStatus();
    const toggleWallDeletion = SetDeleteWallStatus();
    const toggleFillWall = SetFillWallStatus();

    const buttonOnStyle = {
        background: 'darkgray'
    };

    const buttonOffStyle = {
        background: 'lightblue'
    };

    const wallButtonPressedHandler = () => {
        if (wallDeletionStatus){
            toggleWallDeletion();
        }
        toggleWallCreation();
    };

    const deleteWallButtonPressedHandler = () => {
        if (wallCreationStatus){
            toggleWallCreation();
        }
        toggleWallDeletion();
    };



    return(
        <div className={`${props.className} ${classes.['menu-layout']}`}>
            <button 
             className={classes.['menu-btn']}
             style={wallCreationStatus ? buttonOnStyle : buttonOffStyle}
             onClick={wallButtonPressedHandler}
             >
                 Create Walls
            </button>
            <button 
             className={classes.['menu-btn']}
             style={wallDeletionStatus ? buttonOnStyle : buttonOffStyle}
             onClick={deleteWallButtonPressedHandler}
             >
                 Delete Walls
            </button>

        </div>
    );
};

export default EditMenu;