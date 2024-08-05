import React, { useState, useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import './page1tab4.css'; // Ensure this file exists for styles
import FormField from '../../../common/FormField'

// Define options for the dropdown field
const jobOptions = ['A', 'B', 'C', 'D', 'E'];

const initialData = [
    { id: 1, name: 'A', Line: 30, Quantity: 30, Description: 'Engineer', Net: 'New York', ExtNet: 'USA' },
    { id: 2, name: 'B', Line: 25, Quantity: 30, Description: 'Designer', Net: 'San Francisco', ExtNet: 'USA' },
    { id: 3, name: 'C', Line: 35, Quantity: 30, Description: 'Teacher', Net: 'Chicago', ExtNet: 'USA' },
    // Add more data as needed
];

const Page1Tab4 = () => {
    const [data, setData] = useState(initialData);
    const [sortConfig, setSortConfig] = useState<{ key: string, direction: 'asc' | 'desc' }>({ key: '', direction: 'asc' });
    const [editCell, setEditCell] = useState<{ row: number | null, column: string | null }>({ row: null, column: null });
    const [editValue, setEditValue] = useState<string | null>('');

    const tableRef = useRef<HTMLDivElement>(null);

    const handleSort = (key: string) => {
        const direction = (sortConfig.key === key && sortConfig.direction === 'asc') ? 'desc' : 'asc';
        setSortConfig({ key, direction });
        setData(prevData => {
            return [...prevData].sort((a, b) => {
                if (a[key] < b[key]) return direction === 'asc' ? -1 : 1;
                if (a[key] > b[key]) return direction === 'asc' ? 1 : -1;
                return 0;
            });
        });
    };

    const handleDoubleClick = (rowIndex: number, columnName: string) => {
        setEditCell({ row: rowIndex, column: columnName });
        setEditValue(data[rowIndex][columnName]);
    };

    const handleEditChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setEditValue(e.target.value);
    };

    const handleEditSave = () => {
        if (editCell.row === null || editCell.column === null) return;

        const updatedData = [...data];
        updatedData[editCell.row][editCell.column] = editValue;
        setData(updatedData);
        setEditCell({ row: null, column: null });
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (tableRef.current && !tableRef.current.contains(event.target as Node)) {
                handleEditSave();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [editCell, editValue]);

    return (
        <div ref={tableRef}>
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
            <table>
                <thead>
                    <tr>
                        {['name', 'Line', 'Quantity', 'Description', 'Net','ExtNet'].map((column) => (
                            <th key={column} onClick={() => handleSort(column)}>
                                {column.charAt(0).toUpperCase() + column.slice(1)}
                                <span className={`sort-icon ${sortConfig.key === column ? sortConfig.direction : ''}`}></span>
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, rowIndex) => (
                        <tr key={row.id}>
                            {['name', 'Line', 'Quantity', 'Description', 'Net','ExtNet'].map((column) => (
                                <td
                                    key={column}
                                    onDoubleClick={() => handleDoubleClick(rowIndex, column)}
                                >
                                    {editCell.row === rowIndex && editCell.column === column ? (
                                        column === 'name' ? (
                                            <select
                                                value={editValue as string}
                                                onChange={handleEditChange}
                                                onBlur={handleEditSave}
                                                onKeyDown={(e) => {
                                                    if (e.key === 'Enter') handleEditSave();
                                                }}
                                            >
                                                {jobOptions.map((option) => (
                                                    <option key={option} value={option}>{option}</option>
                                                ))}
                                            </select>
                                        ) : (
                                            <input
                                                type="text"
                                                value={editValue}
                                                onChange={handleEditChange}
                                                onBlur={handleEditSave}
                                                style={{ width: column === 'Description' ? "200px" : "10px"} }
                                                onKeyDown={(e) => {
                                                    if (e.key === 'Enter') handleEditSave();
                                                }}
                                            />
                                        )
                                    ) : (
                                        row[column]
                                    )}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
            <div class="buttons-section" style={{ marginTop: "20px" }}>
                <button type="submit">Remove All</button>
                <button type="submit">Resequence</button>
                <input
                    type="text" style={{ width: "150px" }} />
                <input
                    type="text" style={{ width: "200px" }} />
            </div>
            <div class="buttons-section" style={{ marginTop: "20px" }}>
                <select name="cars" id="cars" style={{"width":"60px"} }>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                </select>
                <button type="submit">Add</button>
                <button type="submit">Edit</button>
                <button type="submit">Save</button>
                <button type="submit">Undo</button>
                <button type="submit">Delete</button>
            </div>
        </div>
    );
};

export default Page1Tab4;
