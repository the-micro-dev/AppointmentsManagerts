import './page1tab1.css';
import React, { useState, useEffect } from 'react';
import Modal from '../../../common/Modal/Modal';
import AddItem from './AddItem'
import CloneModal from './CloneItem'
import { useData } from '../../../common/DataContextProvider';
import sampledata from './cloneitem.json';
import { ICP1, IDistributionRecipient, IPickAgency } from '../../../common/Interfaces';
import { useTab } from '../../../common/TabContextProvider'


export const Page1Tab1: React.FC = () => {
    const { state, setState } = useData();
    const [isModal1Visible, setIsModal1Visible] = useState<boolean>(false);
    const [isModal2Visible, setIsModal2Visible] = useState<boolean>(false);
    const [dropdownValue, setDropdownValue] = useState<string>('');
    const [isAddModalVisible, setIsAddModalVisible] = useState<boolean>(false);
    const [isCloneModalVisible, setIsCloneModalVisible] = useState<boolean>(false);
    const [selectedAgency, setSelectedAgency] = useState<IPickAgency>(null);
    const [selectedRecipient, setSelectedRecipient] = useState<IDistributionRecipient>(null);
    const [selectedProject, setselectedProject] = useState<IPickProject>(null); 
    const [selectedData, setSelectedData] = useState<any[]>([]);
    const [cp1data, setcp1Data] = useState<ICP1[]>([]);
    const [selectedRows, setSelectedRows] = useState<number[]>([]);
    const { setActiveTab } = useTab();

    const handleCheckboxChange = (id: number) => {
        setSelectedRows(prev =>
            prev.includes(id) ? prev.filter(rowId => rowId !== id) : [...prev, id]
        );
        setActiveTab('subcontent2');
    };

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

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result: ICP1[] = sampledata;
                setcp1Data(result);
            } catch (error: any) {
                console.error('Error fetching data:', error.message);
            }
        };

        fetchData();
    }, []);

    const handleSubmit = (formData: any) => {

        setState(prevState => {
            const updatedState = {
                ...prevState,
                project: formData.project
            };
            return updatedState;
        });
        closeModal1();
        closeModal2();
        setIsCloneModalVisible(false);
        setIsAddModalVisible(false);
    };


    const handleClone = (selectedRows: any[]) => {
        console.log("project" + selectedProject);
        setState(prevState => ({
            ...prevState,
            project: selectedProject
        }));
        setSelectedData(selectedRows);
        setIsCloneModalVisible(false);
        setIsAddModalVisible(true);
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
                    <AddItem selectedAgency={selectedAgency} onSave={handleSubmit} selectedRecipient={selectedRecipient} selectedProject={selectedProject }></AddItem>
                </Modal>
            )}
            {dropdownValue === 'Clone' && isCloneModalVisible && (
                <CloneModal
                    isVisible={isCloneModalVisible}
                    onClose={() => setIsCloneModalVisible(false)}
                    onClone={handleClone}
                    data={cp1data}
                />
            )}
            {selectedData.length > 0 && isAddModalVisible && (
                <Modal
                    isVisible={isAddModalVisible}
                    onClose={() => setIsAddModalVisible(false)}
                    title="Add Details"
                >
                    <AddItem selectedAgency={selectedAgency} onSave={handleSubmit} selectedRecipient={selectedRecipient} selectedProject={selectedProject}></AddItem>
                </Modal>
            )}
            <table className="sample-table" style={{ overflowX: "scroll", display:"block" }}>
                <thead>
                    <tr>
                        <th>select</th>
                        <th>Appr</th>
                        <th>S</th>
                        <th>PrNo</th>
                        <th>Contract</th>
                        <th>Replacement</th>
                        <th>AgySAAScode</th>
                        <th>PartnerCode</th>
                        <th>Partner</th>
                        <th>MptMagiccode</th>
                        <th>MptName</th>
                        <th>VendorMagiccode</th>
                        <th>VendorName</th>
                        <th>Frequency</th>
                        <th>Total</th>
                        <th>Acquisition</th>
                        <th>Approval</th>
                        <th>AthtyDate</th>
                        <th>ApprovedBy</th>
                        <th>AprrDate</th>
                        <th>RollDate</th>
                        <th>Add_UserID</th>
                        <th>Add_tds</th>
                        <th>Mod_UserID</th>
                        <th>Mod_tds</th>
                        <th>OldOrderVenCode</th>
                        <th>OldMPTCde</th>

                    </tr>
                </thead>
                <tbody>
                    {sampledata.map(row => (
                        <tr key={row.id}>
                            <td>
                                <input
                                    type="checkbox"
                                    checked={selectedRows.includes(row.id)}
                                    onChange={() => handleCheckboxChange(row.id)}
                                />
                            </td>
                            <td>{row.Appr}</td>
                            <td>{row.S}</td>
                            <td>{row.Prno}</td>
                            <td>{row.Cp1no}</td>
                            <td>{row.Contract}</td>
                            <td>{row.Replacemnt}</td>
                            <td>{row.AgySAAScode}</td>
                            <td>{row.PartnerCode}</td>
                            <td>{row.partner}</td>
                            <td>{row.MptMagiccode}</td>
                            <td>{row.MptName}</td>
                            <td>{row.VendorMagiccode}</td>
                            <td>{row.VendorName}</td>
                            <td>{row.Frequency}</td>
                            <td>{row.Total}</td>
                            <td>{row.Acquisition}</td>
                            <td>{row.Approval}</td>
                            <td>{row.AthtyDate}</td>
                            <td>{row.ApprovedBy}</td>
                            <td>{row.ApprDate}</td>
                            <td>{row.RollDate}</td>
                            <td>{row.Add_UserID}</td>
                            <td>{row.Add_tds}</td>
                            <td>{row.Mod_UserID}</td>
                            <td>{row.Mod_tds}</td>
                            <td>{row.OldOrderVenCode}</td>
                            <td>{row.OldMPTCde}</td>
                            <td>{row.OldMPTCde}</td>
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
