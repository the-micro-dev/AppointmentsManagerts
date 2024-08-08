import './page1tab1.css'
import React, { useState } from 'react';
import Modal from '../../../common/Modal/Modal';

export const Page1Tab1 = () => {
    const columns = ['Name', 'Age', 'City','Name1','Age1','City1','Name2','Age2','City2','Name3','Age3','City3'];
    const data = [
        { id: 1, name: '', age: 25, city: '', name1: '', age1: 25, city1: '', name2: '', age2: 25, city2: '', name3: '', age3: 25, city3: '' },
        { id: 2, name: '', age: 30, city: '', name1: '', age1: 25, city1: '', name2: '', age2: 25, city2: '', name3: '', age3: 25, city3: '' },
        { id: 3, name: '', age: 28, city: '', name1: '', age1: 25, city1: '', name2: '', age2: 25, city2: '', name3: '', age3: 25, city3: '' },
        { id: 4, name: '', age: 35, city: '', name1: '', age1: 25, city1: '', name2: '', age2: 25, city2: '', name3: '', age3: 25, city3: '' },
    ];

    const [isModal1Visible, setIsModal1Visible] = useState(false);
    const [isModal2Visible, setIsModal2Visible] = useState(false);

    // Toggle visibility functions
    const openModal1 = () => setIsModal1Visible(true);
    const closeModal1 = () => setIsModal1Visible(false);

    const openModal2 = () => setIsModal2Visible(true);
    const closeModal2 = () => setIsModal2Visible(false);

    const handleSubmit = () => {
        // Handle form submission here
        console.log('Form submitted');
        closeModal();
    };
    return (
             <div>
                <div className="page1tab1-upper">
                <input type="radio" name="pending" defaultChecked></input>Pending
                <input type="radio" name="pending" ></input>Current
            </div>
            <input placeholder="find by.." style={{ width:"300px" }}></input>
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
                    <label style={{ alignSelf:"center" }}>Filter </label>
                    <input></input>
                    <button onClick={openModal1}>Filter</button>
                    <Modal
                        isVisible={isModal1Visible}
                        onClose={closeModal1}
                        title="Set Filter"
                    >
                        <form>
                            <div className="form-group" >
                                <label style={{ pointerEvents: "none", background: "lightgrey" }}>Example</label>
                                <label style={{ pointerEvents: "none", background: "lightgrey" }}>Testing testing testing Testing testing testing Testing testing testing Testing testing testing</label>
                            </div>
                            <button type="button" onClick={handleSubmit} style={{ width:"max-content",margin:"10px 0px" }}>Show Expression</button>
                            <div className="form-group">
                                <textarea></textarea>
                            </div>
                            <div className="form-actions" style={{ display: "flex", marginTop:"10px" }}>
                                <button type="button" onClick={handleSubmit}>Set</button>
                                <button type="button" onClick={closeModal1}>Clear</button>
                                <button type="button" onClick={closeModal1}>Cancel</button>
                            </div>
                        </form>
                    </Modal>
                    </div>
            </div>
            <div className="buttons-section" style={{ marginTop: "15px", justifyContent:"center" }}>
                <button type="submit">Submit</button>
                <button type="submit" onClick={openModal2}>Edit</button>
                <Modal
                    isVisible={isModal2Visible}
                    onClose={closeModal2}
                    title="Print"
                >
                     <div className="items-container">
                            <div className="item">
                                <img src="https://via.placeholder.com/150" alt="Item 1" />
                                <div className="item-label">Item 1</div>
                            </div>
                            <div className="item">
                                <img src="https://via.placeholder.com/150" alt="Item 2" />
                            <div className="item-label">Item 2</div>
                            </div>
                            <div className="item">
                                <img src="https://via.placeholder.com/150" alt="Item 3" />
                                <div className="item-label">Item 3</div>
                        </div>
                        
                    </div>
                    <input type="checkbox" style={{width:"auto"} }></input>Printer Prompt
                </Modal>
                <button type="submit">Undo</button>
            </div>
            </div>
    );
}


