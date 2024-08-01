import React, { useEffect, useState } from 'react';
import './page1tab5.css'; // Import the CSS file for styling

type TableData = {
    id: number;
    description: string;
};

const Page1Tab5: React.FC = () => {
    const sampleData: TableData[] = [
        { id: 1, name: 'John Doe' },
        { id: 2, name: 'Jane Smith' },
        { id: 3, name: 'Alice Johnson' },
        { id: 4, name: 'Bob Brown' },
        { id: 5, name: 'Charlie Davis' },
        // Add more sample data as needed
    ];
    const [data, setData] = useState<TableData[]>(sampleData);


    // Fetch data from API
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://api.example.com/data'); // Replace with your API endpoint
                const result: TableData[] = await response.json();
                setData(result);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="app-container">
            <div className="table-container">
                <table>
                    <thead>
                        <tr>
                            <th style={{ width: '50px' }}>ID</th>
                            <th style={{ width: '300px' }}>Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(item => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="button-container">
                    <button className="button">Button 1</button>
                    <button className="button">Button 2</button>
                </div>
            </div>
        </div>
    );
};

export default Page1Tab5;
