import React, { useState, useEffect, useRef } from 'react';

// Define options for the dropdown field
const jobOptions = ['A', 'B', 'C', 'D', 'E'];

const initialData = [
    { id: 1, name: 'A', Line: 30, Quantity: 30, Description: 'Engineer', Net: 'New York', ExtNet: 'USA' },
    { id: 2, name: 'B', Line: 25, Quantity: 30, Description: 'Designer', Net: 'San Francisco', ExtNet: 'USA' },
    { id: 3, name: 'C', Line: 35, Quantity: 30, Description: 'Teacher', Net: 'Chicago', ExtNet: 'USA' },
    // Add more data as needed
];

const Archive = () => {
    const [data, setData] = useState(initialData);

    const tableRef = useRef<HTMLDivElement>(null);

    return (
        <div ref={tableRef}>
        <h3>NOTE: You must have exclusive use of the database before continuing</h3>
            <section className="upper-section">
                <div >
                    <label>Archive CP1 THRU</label>
                    <input style={{ height: "27px", marginTop: "25px", width: "130px" }} ></input>
                    <section>
                    <label>whose Expiration Date is PRIOR to</label>
                        <input style={{ height: "27px", marginTop: "25px", width: "130px" }} type="date"></input>
                    </section>
                </div>

            </section>
            <div class="buttons-section" style={{ marginTop: "20px", marginBottom:"30px" }}>
                
                <button type="submit">Check Users</button>
                <button type="submit">Archive Data</button>
                <button type="submit">Hash Totals CP1</button>
                <button type="submit">Has Totals CP1Lines</button>
            </div>
            <table>
                <thead>
                    <tr>
                        {['name', 'Line', 'Quantity', 'Description', 'Net', 'ExtNet'].map((column) => (
                            <th key={column} >
                                {column.charAt(0).toUpperCase() + column.slice(1)}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, rowIndex) => (
                        <tr key={row.id}>
                            {['name', 'Line', 'Quantity', 'Description', 'Net', 'ExtNet'].map((column) => (
                                <td>
                                    { row[column]}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Archive;
