import React, { useState, useEffect } from 'react';
import { IPickAgency } from '../Interfaces'
import sampledata from '../SampleFiles/pickagency.json'


interface PickAgencyProps {
    onSelect: (agency: IPickAgency) => void;
}


const PickAgency: React.FC<PickAgencyProps> = ({onSelect }) => {
    // State for storing the data
    const [data, setData] = useState<IPickAgency[]>([]);
    // State for storing the search query
    const [query, setQuery] = useState<string>('');
    const [selectedId, setSelectedId] = useState<number | null>( null);

    /*useEffect(() => {
        const fetchData = async () => {
            try {
                const result: IPickAgency[] = sampledata;/*await response.json();*/
                /*setData(result);
                setFilteredData(result)
            } catch (error: any) {
                setError(error.message);
            }
        };

        fetchData();
    }, []);
    */

    const handleOk = () => {
        const selectedAgency = data.find(item => item.id === selectedId);
        if (typeof onSelect === 'function') {
            const selectedAgency = data.find(item => item.id === selectedId);
            if (selectedAgency) {
                onSelect(selectedAgency);
            }
        } else {
            console.error('onSelect is not a function');
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
               // const response = sampledata await fetch('../SampleFiles/pickagency.json'); // Fetch from the JSON file
                const result: IPickAgency[] = sampledata;
                setData(result);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    // Filter data based on search query
    const filteredData = 
        data.filter(item =>
            item.AgencyName.toLowerCase().includes(query.toLowerCase()) ||
            item.AgencyCode.toLowerCase().includes(query.toLowerCase())
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
                        <th>Agency Name</th>
                        <th>Division</th>
                        <th>SaasCode</th>
                        <th>Agency Code</th>
                        <th>Address1</th>
                        <th>Addres 2</th>
                        <th>City</th>
                        <th>State</th>
                        <th>Zip</th>
                        <th>Header1</th>
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
                            <td>{item.AgencyName}</td>
                            <td>{item.Division}</td>
                            <td>{item.SaasCode}</td>
                            <td>{item.AgencyCode}</td>
                            <td>{item.Address1}</td>
                            <td>{item.Address2}</td>
                            <td>{item.City}</td>
                            <td>{item.State}</td>
                            <td>{item.Zip}</td>
                            <td>{item.Header1}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button style={{ marginTop: "10px" }} onClick={handleOk}>Ok</button>
        </div>
    );
};

export default PickAgency;