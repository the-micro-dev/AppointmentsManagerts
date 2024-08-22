// DataContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { IComposite } from '../common/Interfaces'; 

const initialState: IComposite = {
    agency: null,
    recipient: null,
    project: null
};

interface DataContextProps {
    state: CurrentState;
    setState: React.Dispatch<React.SetStateAction<CurrentState>>;
}

const DataContext = createContext<DataContextProps | undefined>(undefined);

export const DataProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [state, setState] = useState<CurrentState>(initialState);

    return (
        <DataContext.Provider value={{ state, setState }}>
            {children}
        </DataContext.Provider>
    );
};

export const useData = () => {
    const context = useContext(DataContext);
    if (!context) {
        throw new Error('useData must be used within a DataProvider');
    }
    return context;
};
