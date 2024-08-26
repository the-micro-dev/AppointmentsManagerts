import React, { useState, useEffect } from 'react';


// Define the data type
type TableData = {
    id: number;
    code: string;
    description: string;
};

type ModalContentProps = {
    onConfirm: (item: TableData) => void;
    onCancel: () => void;
    editMode: boolean;
    item: TableData | null;
};


const sampleData: TableData[] = [
    { id: 1, code: 'Code 1', description: 'Description 1' },
    { id: 2, code: 'Code 2', description: 'Description 2' },
    { id: 3, code: 'Code 3', description: 'Description 3' }
];

const ModalContent: React.FC<ModalContentProps> = ({ onConfirm, onCancel, editMode, item }) => {
    const [data, setData] = useState<TableData[]>(sampleData); /*useState<TableData[]>([]);*/
    const [selectedId, setSelectedId] = useState<number | null>(item?.id || null);
    const [searchQuery, setSearchQuery] = useState<string>('');

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

    // Update selected ID if in edit mode and item is provided
    useEffect(() => {
        if (editMode && item) {
            setSelectedId(item.id);
        }
    }, [editMode, item]);

    // Filtered data based on the search query
    const filteredData = data.filter(item =>
        item.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleOk = () => {
        if (selectedId) {
            const selectedItem = data.find(data => data.id === selectedId);
            if (selectedItem) {
                onConfirm(selectedItem);
            }
        }
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{ marginBottom: '10px', padding: '8px', width: '100%' }}
            />
            <table style={{ marginBottom:"20px" }}>
                <thead>
                    <tr>
                        <th>Select</th>
                        <th>Code</th>
                        <th>OpeningDate</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredData.map(data => (
                        <tr key={data.id}>
                            <td>
                                <input
                                    type="checkbox"
                                    checked={selectedId === data.id}
                                    onChange={() => setSelectedId(data.id)}
                                />
                            </td>
                            <td>{data.code}</td>
                            <td>03/02/1984</td>
                            <td>{data.description}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button onClick={handleOk}>OK</button>
            <button onClick={onCancel} style={{ marginLeft:"10px" }}>Cancel</button>
        </div>
    );
};

export default ModalContent;
