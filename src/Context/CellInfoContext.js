import React,{useState, useContext} from 'react';

const StartingCellContext = React.createContext();
const SetStartingCellContext = React.createContext();
const GoalCellContext = React.createContext();
const SetGoalCellContext = React.createContext();

export const GetStartingCell = () => {
    return useContext(StartingCellContext);
};

export const SetStartingCell = () => {
    return useContext(SetStartingCellContext);
}

export const GetGoalCell = () => {
    return useContext(GoalCellContext);
};

export const SetGoalCell = () => {
    return useContext(SetGoalCellContext);
};

const CellInfoProvider = ({children}) => {
    const [startingCell, setStarting] = useState(null);
    const [goalCell, setGoal] = useState(null);

    const updateStatingCell = (position) => {
        setStarting(position);
    };

    const updateGoalCell = (position) => {
        setGoal(position);
    };

    return(
        <StartingCellContext.Provider value={startingCell}>
            <SetStartingCellContext.Provider value={updateStatingCell}>
                <GoalCellContext.Provider value={goalCell}>
                    <SetGoalCellContext.Provider value={updateGoalCell}>
                        {children}
                    </SetGoalCellContext.Provider>
                </GoalCellContext.Provider>
            </SetStartingCellContext.Provider>
        </StartingCellContext.Provider>
    )
};

export default CellInfoProvider;