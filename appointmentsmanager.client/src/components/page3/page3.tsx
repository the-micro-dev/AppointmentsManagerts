import React, { useState,useEffect } from 'react'


const Page3: React.FC = () => {
    const sampleData: TableData[] = [
        { id: 1, code: 'SWMFT', description: 'SWMFT Memo'},
        { id: 2, code: 'SWMFT', description: 'report report report report report report report' },
        { id: 3, code: 'SWMFT', description: 'Report 9999999'},
        { id: 4, code: 'SWMFT', description: 'Report 123' },
        { id: 5, code: 'SWMFT', description: 'Report' },
        // Add more sample data as needed
    ];

    const [data, setData] = useState<TableData[]>(sampleData);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result: TableData[] = sampleData;
                setData(result);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="page3">
            <label className="reports-header">Reports</label>
            <div className="app-container">
                <div className="table-container">
                    <table>
                        <thead>
                            <tr className="header-row-page3">
                                <th style={{ width: '100px' }}></th>
                                <th style={{ width: '300px' }}>Code</th>
                                <th style={{ width: '300px' }}>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map(item => (
                                <tr key={item.id} style={{ backgroundColor: item.id % 2 === 0 ? 'lightblue' : 'white' }}>
                                    <td ><a href={item.id} style={{ color: "blue" }}>Select</a></td>
                                    <td>{item.code}</td>
                                    <td>{item.description}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Page3;
