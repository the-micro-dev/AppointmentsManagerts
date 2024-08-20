import React, { useState, useEffect } from 'react';
import { IPickProject } from '../Interfaces';
import sampledata from '../SampleFiles/pickproject.json';



const PickProject: React.FC = () => {
    // State for storing the data
    const [data, setData] = useState<IPickProject[]>([]);
    const [query, setQuery] = useState<string>('');
    const [selectedId, setSelectedId] = useState<number | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result: IPickProject[] = sampledata;/*await response.json();*/
                setData(result);
            } catch (error: any) {
                setError(error.message);
            }
        };
        fetchData();
    }, []);

    const filteredData =
        data.filter(item =>
            item.proj_desc.toLowerCase().includes(query.toLowerCase()) ||
            item.Agency_name.toLowerCase().includes(query.toLowerCase()) ||
            item.project_id
        );

    const handleOk = () => {
        const selectedProject = data.find(item => item.project_id === selectedId);
        if (selectedProject) {
            onSelect(selectedProject);
        }
    };

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
                    <th>Options</th>
                        <th>ID</th>
                        <th>PU</th>
                        <th>Agency Name</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredData.map(item => (
                        <tr key={item.project_id}>
                            <td>
                                <input
                                    type="checkbox"
                                    checked={selectedId === item.project_id}
                                    onChange={() => setSelectedId(item.project_id)}
                                />
                            </td>
                            <td>{item.project_id}</td>
                            <td>{item.pu}</td>
                            <td>{item.Agency_name}</td>
                            <td>{item.proj_desc}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button style={{ marginTop: "10px" }} onClick={handleOk }>Ok</button>
        </div>
    );
};

export default PickProject;