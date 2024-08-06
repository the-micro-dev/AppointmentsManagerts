import React, { useEffect, useState } from 'react';
import './page1tab7.css'; // Import the CSS file for styling

type TableData = {
    id: number;
    description: string;
};

const Page1Tab7: React.FC = () => {
    const sampleData: TableData[] = [
        { id: 1, name: 'John Doe', amount: 40 },
        { id: 2, name: 'Jane Smith', amount: 40 },
        { id: 3, name: 'Alice Johnson', amount: 40 },
        { id: 4, name: 'Bob Brown', amount: 40 },
        { id: 5, name: 'Charlie Davis', amount: 40 },
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
        <div>
            <section className="upper-section">
                <div style={{ display: "flex" }} >
                    <label>Consultant</label>
                    <input style={{ height: "27px", marginTop: "25px", width: "130px" }} className="disabled"></input>
                    <label>Project</label>
                    <input style={{ height: "27px", marginTop: "25px", width: "130px" }} className="disabled"></input>
                    <input style={{ height: "27px", marginTop: "25px", marginLeft: "60px" }} className="disabled"></input>
                </div>
                <div style={{ display: "flex" }} >
                    <label>CP1</label>
                    <input style={{ height: "27px", marginTop: "25px", width: "30px" }} className="disabled"></input>
                    <input style={{ height: "27px", marginTop: "25px", marginLeft: "20px" }} className="disabled"></input>
                </div>

                <div style={{ display: "flex" }} >
                    <label>Agency</label>
                    <input style={{ height: "27px", marginTop: "25px", width: "30px" }} className="disabled"></input>
                    <input style={{ height: "27px", marginTop: "25px", marginLeft: "20px" }} className="disabled"></input>
                    </div>
                </section>
                <div style={{ display:"flex" }} >
                    <label>Replace Reason</label>
                    <input style={{ margin: "0px", height: "30px" }}></input>
                    <button style={{ marginBottom: "10px", marginLeft: "20px", width:"150px" }}>Pick Reason</button>
                </div>
            <div className="table-container">
                <table>
                    <thead>
                        <tr>
                            <th style={{ width: '50px' }}>No</th>
                            <th style={{ width: '300px' }}>Reason</th>
                            <th style={{ width: '300px' }}>Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(item => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.amount}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            </div>
        </div>
    );
};

export default Page1Tab7;
