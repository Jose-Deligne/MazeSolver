import React,{useState, useContext} from 'react';

const CreateWallsActiveContext = React.createContext();
const DeleteWallsActiveContext = React.createContext();
const FillWallsActiveContext = React.createContext();
const SetWallsCreationContext = React.createContext();
const SetDeleteWallsContext = React.createContext();
const SetFillWallsContext = React.createContext();

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

export const GetFillWallStatus = () => {
    return useContext(FillWallsActiveContext);
}

export const SetFillWallStatus = () => {
    return useContext(SetFillWallsContext);
}

const MenuSelectionProvider = ({children}) => {
    const [wallCreationActive, setWallCreationActive] = useState(false);
    const [deleteWallCreationActive, setDeleteWallCreationActive] = useState(false);
    const [fillWalls, setFillWalls] = useState(false);

    const toggleCreateWallStatus = () => {
        setWallCreationActive(!wallCreationActive);
    };

    const toggleDeleteWallStatus = () => {
        setDeleteWallCreationActive(!deleteWallCreationActive);
    }

    const setFillWallStatus = () => {
        setFillWalls(!fillWalls);
    }

    return(
        <CreateWallsActiveContext.Provider value={wallCreationActive}>
            <DeleteWallsActiveContext.Provider value={deleteWallCreationActive}>
                <SetWallsCreationContext.Provider value={toggleCreateWallStatus}>
                    <SetDeleteWallsContext.Provider value={toggleDeleteWallStatus}>
                        <FillWallsActiveContext.Provider value={fillWalls}>
                            <SetFillWallsContext.Provider value={setFillWallStatus}>
                                {children}
                            </SetFillWallsContext.Provider>
                        </FillWallsActiveContext.Provider>
                    </SetDeleteWallsContext.Provider>
                </SetWallsCreationContext.Provider>
            </DeleteWallsActiveContext.Provider>
        </CreateWallsActiveContext.Provider>
    );
};

export default MenuSelectionProvider;