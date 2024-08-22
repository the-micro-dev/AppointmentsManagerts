// TabContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface TabContextProps {
    activeTab: string;
    setActiveTab: (tab: string) => void;
}

const TabContext = createContext<TabContextProps | undefined>(undefined);

export const TabProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [activeTab, setActiveTab] = useState('subcontent1');

    return (
        <TabContext.Provider value={{ activeTab, setActiveTab }}>
            {children}
        </TabContext.Provider>
    );
};

export const useTab = () => {
    const context = useContext(TabContext);
    if (!context) {
        throw new Error('useTab must be used within a TabProvider');
    }
    return context;
};
