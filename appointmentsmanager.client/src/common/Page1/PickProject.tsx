import React, { useState, useEffect } from 'react';
import { IPickProject } from '../Interfaces'
import sampledata from '../SampleFiles/pickproject.json'


const PickProject: React.FC = () => {
    // State for storing the data
    const [data, setData] = useState<IPickProject[]>([]);
    // State for storing the search query
    const [query, setQuery] = useState<string>('');
    // State for storing the filtered data
    const [filteredData, setFilteredData] = useState<IPickProject[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result: IPickProject[] = sampledata;/*await response.json();*/
                setData(result);
                setFilteredData(result)
            } catch (error: any) {
                setError(error.message);
            }
        };

        fetchData();
    }, []);

    // Filter data based on search query
    useEffect(() => {
        setFilteredData(
            data.filter(item =>
                item.name.toLowerCase().includes(query.toLowerCase()) ||
                item.email.toLowerCase().includes(query.toLowerCase())
            )
        );
    }, [query, data]);

    return (
        <div>
            <h1>Data Display with Search</h1>
            <input
                type="text"
                placeholder="Search..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <table id="data-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>PU</th>
                        <th>Agency Name</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredData.map(item => (
                        <tr key={item.project_id}>
                            <td>{item.pu}</td>
                            <td>{item.Agency_name}</td>
                            <td>{item.proj_desc}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default PickProject;