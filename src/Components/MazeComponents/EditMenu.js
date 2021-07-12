import React,{useState} from 'react';
import classes from './EditMenu.module.css';
import {GetWallCreationStatus, SetWallCreationStatus, GetDeleteWallsStatus, SetDeleteWallStatus, GetStartingPointActiveStatus, SetStartingPointActiveStatus,GetGoalPointActiveStatus,SetGoalPointActiveStatus} from '../../Context/MenuSelectionContext';
const EditMenu = (props) => {
    const wallCreationStatus = GetWallCreationStatus();
    const toggleWallCreation = SetWallCreationStatus();
    const wallDeletionStatus = GetDeleteWallsStatus();
    const toggleWallDeletion = SetDeleteWallStatus();
    const startingStatus = GetStartingPointActiveStatus();
    const toggleStarting = SetStartingPointActiveStatus();
    const goalStatus = GetGoalPointActiveStatus();
    const toggleGoal = SetGoalPointActiveStatus();
     
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
        if (startingStatus) {
            toggleStarting();
        }
        if (goalStatus){
            toggleGoal();
        }
        toggleWallCreation();
    };

    const deleteWallButtonPressedHandler = () => {
        if (wallCreationStatus){
            toggleWallCreation();
        }
        if (startingStatus) {
            toggleStarting();
        }
        if (goalStatus){
            toggleGoal();
        }
        toggleWallDeletion();
    };

    const startingPOSButtonPressedHandler = () => {
        if (wallCreationStatus){
            toggleWallCreation();
        }
        if (wallDeletionStatus){
            toggleWallDeletion();
        }
        if (goalStatus){
            toggleGoal();
        }
        toggleStarting();
    }

    const goalPOSButtonPressedHandler = () => {
        if (wallCreationStatus){
            toggleWallCreation();
        }
        if (wallDeletionStatus){
            toggleWallDeletion();
        }
        if (startingStatus){
            toggleStarting();
        }
        toggleGoal();
    };

    return(
        <div className={`${props.className} ${classes.['menu-layout']}`}>
            <button 
             className={classes.['menu-btn']}
             style={startingStatus ? buttonOnStyle : buttonOffStyle}
             onClick={startingPOSButtonPressedHandler}
             >
                 Set Starting Position
            </button>
            <button 
             className={classes.['menu-btn']}
             style={goalStatus ? buttonOnStyle : buttonOffStyle}
             onClick={goalPOSButtonPressedHandler}
             >
                 Set Goal Position
            </button>
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