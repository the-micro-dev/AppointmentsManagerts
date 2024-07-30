import React from 'react';
import './page1tab1.css'

export const Page1Tab1 = () => {
    const columns = ['Name', 'Age', 'City','Name1','Age1','City1','Name2','Age2','City2','Name3','Age3','City3'];
    const data = [
        { id: 1, name: '', age: 25, city: '', name1: '', age1: 25, city1: '', name2: '', age2: 25, city2: '', name3: '', age3: 25, city3: '' },
        { id: 2, name: '', age: 30, city: '', name1: '', age1: 25, city1: '', name2: '', age2: 25, city2: '', name3: '', age3: 25, city3: '' },
        { id: 3, name: '', age: 28, city: '', name1: '', age1: 25, city1: '', name2: '', age2: 25, city2: '', name3: '', age3: 25, city3: '' },
        { id: 4, name: '', age: 35, city: '', name1: '', age1: 25, city1: '', name2: '', age2: 25, city2: '', name3: '', age3: 25, city3: '' },
    ];
    return (
            <div>
                <table className="sample-table">
                    <thead>
                        <tr>
                            {columns.map(column => (
                                <th key={column}>{column}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(row => (
                            <tr key={row.id}>
                                <td>{row.name}</td>
                                <td>{row.age}</td>
                                <td>{row.city}</td>
                                <td>{row.name1}</td>
                                <td>{row.age1}</td>
                                <td>{row.city1}</td>
                                <td>{row.name2}</td>
                                <td>{row.age2}</td>
                                <td>{row.city2}</td>
                                <td>{row.name3}</td>
                                <td>{row.age3}</td>
                                <td>{row.city3}</td>
                                <td>{row.city1}</td>
                                <td>{row.name2}</td>
                                <td>{row.age2}</td>
                                <td>{row.city2}</td>
                                <td>{row.name3}</td>
                                <td>{row.age3}</td>
                                <td>{row.city3}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="page1tab1-bottom">
                    <div className="page1tab1-findby">
                        <p>Find By:</p>
                        <input></input>
                        <button>Filter</button>
                    </div>
                </div>
            </div>
    );
}


