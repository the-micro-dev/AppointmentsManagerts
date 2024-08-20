import './page1tab1.css';
import React, { useState } from 'react';
import Modal from '../../../common/Modal/Modal';
import AddItem from './AddItem'

export const Page1Tab1: React.FC = () => {
    const columns = ['Name', 'Age', 'City', 'Name1', 'Age1', 'City1', 'Name2', 'Age2', 'City2', 'Name3', 'Age3', 'City3'];
    const data = [
        { id: 1, name: '', age: 25, city: '', name1: '', age1: 25, city1: '', name2: '', age2: 25, city2: '', name3: '', age3: 25, city3: '' },
        { id: 2, name: '', age: 30, city: '', name1: '', age1: 25, city1: '', name2: '', age2: 25, city2: '', name3: '', age3: 25, city3: '' },
        { id: 3, name: '', age: 28, city: '', name1: '', age1: 25, city1: '', name2: '', age2: 25, city2: '', name3: '', age3: 25, city3: '' },
        { id: 4, name: '', age: 35, city: '', name1: '', age1: 25, city1: '', name2: '', age2: 25, city2: '', name3: '', age3: 25, city3: '' },
    ];

    const [isModal1Visible, setIsModal1Visible] = useState<boolean>(false);
    const [isModal2Visible, setIsModal2Visible] = useState<boolean>(false);
    const [dropdownValue, setDropdownValue] = useState<string>('');
    const [isAddModalVisible, setIsAddModalVisible] = useState<boolean>(false);
    const [isCloneModalVisible, setIsCloneModalVisible] = useState<boolean>(false);
    const [selectedAgency, setSelectedAgency] = useState<IPickAgency>(null);
    const [selectedRecipient, setSelectedRecipient] = useState<IDistributionRecipient>(null); 

    // Toggle visibility functions
    const openModal1 = () => setIsModal1Visible(true);
    const closeModal1 = () => setIsModal1Visible(false);

    const openModal2 = () => setIsModal2Visible(true);
    const closeModal2 = () => setIsModal2Visible(false);

    const handleDropdownChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const value = event.target.value;
        setDropdownValue(value);
        if (value === 'Add') {
            setIsAddModalVisible(true);
        } else if (value === 'Clone') {
            setIsCloneModalVisible(true);
        }
    };

    const handleSubmit = () => {
        console.log('Form submitted');
        closeModal1();
    };

    return (
        <div>
            <div className="page1tab1-upper">
                <input type="radio" name="pending" defaultChecked />Pending
                <input type="radio" name="pending" />Current
            </div>
            <input placeholder="find by.." style={{ width: "300px" }} />
            <select onChange={handleDropdownChange} value={dropdownValue}>
                <option value="">Select Action</option>
                <option value="Add">Add</option>
                <option value="Clone">Clone</option>
            </select>
            {dropdownValue === 'Add' && isAddModalVisible && (
                <Modal
                    isVisible={isAddModalVisible}
                    onClose={() => setIsAddModalVisible(false)}
                    title="Add Details"
                >
                    <AddItem selectedAgency={selectedAgency} onSave={handleSubmit} selectedRecipient={selectedRecipient }></AddItem>
                </Modal>
            )}
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
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="page1tab1-bottom">
                <div className="page1tab1-findby">
                    <label style={{ alignSelf: "center" }}>Filter </label>
                    <input />
                    <button onClick={openModal1}>Filter</button>
                    <Modal
                        isVisible={isModal1Visible}
                        onClose={closeModal1}
                        title="Set Filter"
                    >
                        <form>
                            <div className="form-group">
                                <label style={{ pointerEvents: "none", background: "lightgrey" }}>Example</label>
                                <label style={{ pointerEvents: "none", background: "lightgrey" }}>Testing testing testing Testing testing testing Testing testing testing Testing testing testing</label>
                            </div>
                            <button type="button" onClick={handleSubmit} style={{ width: "max-content", margin: "10px 0px" }}>Show Expression</button>
                            <div className="form-group">
                                <textarea></textarea>
                            </div>
                            <div className="form-actions" style={{ display: "flex", marginTop: "10px" }}>
                                <button type="button" onClick={handleSubmit}>Set</button>
                                <button type="button" onClick={closeModal1}>Clear</button>
                                <button type="button" onClick={closeModal1}>Cancel</button>
                            </div>
                        </form>
                    </Modal>
                </div>
            </div>
            <div className="buttons-section" style={{ marginTop: "15px", justifyContent: "center" }}>
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
                    <input type="checkbox" style={{ width: "auto" }} />Printer Prompt
                </Modal>
                <button type="submit">Undo</button>
            </div>
        </div>
    );
};
