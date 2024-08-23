// page2Tab5.tsx
import React, { useEffect, useState } from 'react';
import './page2tab5.css'; // Import the CSS file for styling

type TableData = {
    id: number;
    code: string;
    description: string;
    catcode: number;
    FA: string;
    FObject: number;
    name: string;
    status: 'open' | 'closed'; // Add status for filtering,
};

const Page2Tab5: React.FC = () => {
    const sampleData: TableData[] = [
        { id: 1, code: 'John Doe', description: 'John Doe', status: 'open', catcode: 123456, FA: 'E', FObject:3561123 },
        { id: 2, code: 'Jane Smith', description: 'Jane Smith', status: 'closed', catcode: 123456, FA: 'E', FObject: 3561123 },
        { id: 3, code: 'Jim Brown', description: 'Jim Brown', status: 'open', catcode: 123456, FA: 'E', FObject: 3561123 },
        { id: 4, code: 'Jack White', description: 'Jack White', status: 'closed', catcode: 123456, FA: 'E', FObject: 3561123 },
        { id: 5, code: 'Jill Black', description: 'Jill Black', status: 'open', catcode: 123456, FA: 'E', FObject: 3561123 }
    ];

    const [data, setData] = useState<TableData[]>(sampleData);

    // Fetch data from API
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/data.json'); // Fetch from the JSON file
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
                            <th style={{ width: '150px' }}>Comm Code</th>
                            <th style={{ width: '300px' }}>Commodity Code Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(item => (
                            <tr key={item.id}>
                                <td>{item.code}</td>
                                <td>{item.description}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Page2Tab5;
