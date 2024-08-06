// Page1Tab5.tsx
import React, { useEffect, useState } from 'react';
import Popup from './popup'; // Import the Popup component
import Modal from '../../../common/Modal/Modal'; // Import the Modal component
import './page1tab5.css'; // Import the CSS file for styling

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

const Page1Tab5: React.FC = () => {
    const sampleData: TableData[] = [
        { id: 1, code: 'John Doe', description: 'John Doe', status: 'open', catcode: 123456, FA: 'E', FObject:3561123 },
        { id: 2, code: 'Jane Smith', description: 'Jane Smith', status: 'closed', catcode: 123456, FA: 'E', FObject: 3561123 },
        { id: 3, code: 'Jim Brown', description: 'Jim Brown', status: 'open', catcode: 123456, FA: 'E', FObject: 3561123 },
        { id: 4, code: 'Jack White', description: 'Jack White', status: 'closed', catcode: 123456, FA: 'E', FObject: 3561123 },
        { id: 5, code: 'Jill Black', description: 'Jill Black', status: 'open', catcode: 123456, FA: 'E', FObject: 3561123 },
        // Add more sample data as needed
    ];

    const [data, setData] = useState<TableData[]>(sampleData);
    const [showPopup, setShowPopup] = useState(false);
    const [filter, setFilter] = useState<'all' | 'open'>('all');
    const [selectedRows, setSelectedRows] = useState<Set<number>>(new Set());

    // Toggle visibility functions
    const openModal = () => setShowPopup(true);
    const closeModal = () => setShowPopup(false);

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

    const handleAddSelectedRows = () => {
        // Add selected rows to the main data
        const selectedData = data.filter(item => selectedRows.has(item.id));
        setData(prevData => [...prevData, ...selectedData]);
        setSelectedRows(new Set()); // Clear selection after adding
        setShowPopup(false); // Close the popup after adding
    };

    return (
        <div className="app-container">
            <div className="table-container">
                <table>
                    <thead>
                        <tr>
                            <th style={{ width: '300px' }}>Code</th>
                            <th style={{ width: '300px' }}>Description</th>
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
                <div className="button-container">
                    <button className="button" onClick={openModal}>Pick</button>
                    <Modal isVisible={showPopup} onClose={closeModal} title="Pick product category codes">
                        <Popup
                            data={data}
                            filter={filter}
                            setFilter={setFilter}
                            selectedRows={selectedRows}
                            setSelectedRows={setSelectedRows}
                            onAddSelectedRows={handleAddSelectedRows}
                            onClose={closeModal}
                        />
                    </Modal>
                    <button className="button">pick</button>
                </div>
            </div>
        </div>
    );
};

export default Page1Tab5;
