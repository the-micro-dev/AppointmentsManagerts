import React, { useState } from 'react'
import data1 from '../../common/SampleFiles/DetailsbyApproval.json'
import data2 from '../../common/SampleFiles/cloneitem.json'
interface Record {
    id: number;
    prodCadCode?: number;
    description: string;
    objectCode: string;
    phone: string;
    address: string;
}

const Page8: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'contracts' | 'cp1s'>('contracts');

    const handleTabChange = (tab: 'contracts' | 'cp1s') => {
        setActiveTab(tab);
    };


    const getCurrentTable = () => {
        if (activeTab === 'contracts') {
            return data1;
        } else if (activeTab === 'cp1s') {
            return data2;
        }
        return null;
    };
    const currentTable = getCurrentTable();
    const columns = currentTable && Object.keys(currentTable[0] || {});

    return (
        <div className="page1">
            <div className="sub-navbar">
                <ul>
                    <li
                        className={activeTab === 'contracts' ? 'active' : ''}
                        onClick={() => handleTabChange('contracts')}
                        style={{ margin: "auto" }}
                    >
                        Contracts
                    </li>
                    <li
                        className={activeTab === 'cp1s' ? 'active' : ''}
                        onClick={() => handleTabChange('cp1s')}
                        style={{ margin: "auto" }}
                    >
                        Associated CP1s
                    </li>
                </ul>
            </div>
            {activeTab === 'contracts' && (
                <div style={{ overflowX: "scroll" }}>

                    <input placeholder="find by.." style={{ width: "300px", marginLeft:"10px" }} /> 
                    {
                        currentTable && <table>
                        <thead>
                            <tr>
                                {columns.map((column, idx) => (
                                    <th key={idx}>{column}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {currentTable.map((row, rowIdx) => (
                                <tr key={rowIdx}>
                                    {columns.map((column, cellIdx) => (
                                        <td key={cellIdx}>{row[column]}</td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    }
                </div>
            )}

            {activeTab === 'cp1s' && (
                <div style={{ overflowX: "scroll" }}>
                    {
                        currentTable && <table>
                            <thead>
                                <tr>
                                    {columns.map((column, idx) => (
                                        <th key={idx}>{column}</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {currentTable.map((row, rowIdx) => (
                                    <tr key={rowIdx}>
                                        {columns.map((column, cellIdx) => (
                                            <td key={cellIdx}>{row[column]}</td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    }
                </div>
            )}
        </div>
    );
}

export default Page8;
