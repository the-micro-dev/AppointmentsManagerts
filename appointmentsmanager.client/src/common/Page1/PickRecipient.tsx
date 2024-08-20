import React, { useState, useEffect } from 'react';
import { IDistributionRecipient } from '../Interfaces'
import sampledata from '../SampleFiles/pickrecipient.json'

interface PickRecipientProps {
    onSelect: (agency: IDistributionRecipient) => void;
}


const PickRecipient: React.FC<PickRecipientProps> = (onSelect) => {
    // State for storing the data
    const [data, setData] = useState<IDistributionRecipient[]>([]);
    // State for storing the search query
    const [query, setQuery] = useState<string>('');
    const [selectedId, setSelectedId] = useState<number | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // const response = sampledata await fetch('../SampleFiles/pickagency.json'); // Fetch from the JSON file
                const result: IDistributionRecipient[] = sampledata;
                setData(result);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    const handleOk = () => {
        const selectedRecipient = data.find(item => item.id === selectedId);
        if (typeof onSelect === 'function') {
            const selectedRecipient = data.find(item => item.id === selectedId);
            if (selectedRecipient) {
                onSelect(selectedRecipient);
            }
        } else {
            console.error('onSelect is not a function');
        }
    };

    // Filter data based on search query
    const filteredData =
        data.filter(item =>
            item.FirstName.toLowerCase().includes(query.toLowerCase()) ||
            item.LastName.toLowerCase().includes(query.toLowerCase())
        );

    return (
        <div>
            <input
                type="text"
                placeholder="Search..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <table id="data-table">
                <thead>
                    <tr>
                    <th>Select</th>
                        <th>First Name</th>
                        <th>LastName</th>
                        <th>Email</th>
                        <th>MailingList</th>
                        <th>Partner</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredData.map(item => (
                        <tr key={item.id}>
                            <td>
                                <input
                                    type="checkbox"
                                    onChange={() => setSelectedId(item.id)}
                                />
                            </td>
                            <td>{item.FirstName}</td>
                            <td>{item.LastName}</td>
                            <td>{item.Email}</td>
                            <td>{item.MailingList}</td>
                            <td>{item.Partner}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button style={{ marginTop: "10px" }} onClick={handleOk}>Ok</button>
        </div>
    );
};

export default PickRecipient;