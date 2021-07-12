import React,{useState, useContext} from 'react';

const CreateWallsActiveContext = React.createContext();
const DeleteWallsActiveContext = React.createContext();
const StartingPointActiveContext = React.createContext();
const GoalPointActiveContext = React.createContext();

const SetWallsCreationContext = React.createContext();
const SetDeleteWallsContext = React.createContext();
const SetStartingPointContext = React.createContext();
const SetGoalPointContext = React.createContext();

export const GetWallCreationStatus = () => {
    return useContext(CreateWallsActiveContext);
};

export const GetDeleteWallsStatus = () => {
    return useContext(DeleteWallsActiveContext);
};

export const SetWallCreationStatus = () => {
    return useContext(SetWallsCreationContext);
};

export const SetDeleteWallStatus = () => {
    return useContext(SetDeleteWallsContext);
};

export const GetStartingPointActiveStatus = () => {
    return useContext(StartingPointActiveContext);
};

export const SetStartingPointActiveStatus = () => {
    return useContext(SetStartingPointContext);
};

export const GetGoalPointActiveStatus = () => {
    return useContext(GoalPointActiveContext);
}

export const SetGoalPointActiveStatus = () => {
    return useContext(SetGoalPointContext);
}

const MenuSelectionProvider = ({children}) => {
    const [wallCreationActive, setWallCreationActive] = useState(false);
    const [deleteWallCreationActive, setDeleteWallCreationActive] = useState(false);
    const [startingButtonActive, setStartingButtonActive] = useState(false);
    const [goalButtonActive, setGoalButtonActive] = useState(false);

    const toggleCreateWallStatus = () => {
        setWallCreationActive(!wallCreationActive);
    };

    const toggleDeleteWallStatus = () => {
        setDeleteWallCreationActive(!deleteWallCreationActive);
    }

    const toggleStartingButtonStatus = () => {
        setStartingButtonActive(!startingButtonActive);
    }

    const toggleGoalButtonStatus = () => {
        setGoalButtonActive(!goalButtonActive);
    }

    return(
        <CreateWallsActiveContext.Provider value={wallCreationActive}>
            <DeleteWallsActiveContext.Provider value={deleteWallCreationActive}>
                <SetWallsCreationContext.Provider value={toggleCreateWallStatus}>
                    <SetDeleteWallsContext.Provider value={toggleDeleteWallStatus}>
                        <StartingPointActiveContext.Provider value={startingButtonActive}>
                            <SetStartingPointContext.Provider value={toggleStartingButtonStatus}>
                                <GoalPointActiveContext.Provider value={goalButtonActive}>
                                    <SetGoalPointContext.Provider value={toggleGoalButtonStatus}>
                                        {children}                                
                                    </SetGoalPointContext.Provider>
                                </GoalPointActiveContext.Provider>
                            </SetStartingPointContext.Provider>
                        </StartingPointActiveContext.Provider>
                    </SetDeleteWallsContext.Provider>
                </SetWallsCreationContext.Provider>
            </DeleteWallsActiveContext.Provider>
        </CreateWallsActiveContext.Provider>
    );
};

export default MenuSelectionProvider;