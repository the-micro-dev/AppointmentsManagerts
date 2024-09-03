// Table.tsx
import React, { useState } from 'react';
import Modal from '../../../common/Modal/Modal';
import { IPickAgency } from '../../../common/Interfaces';
import sampledata from '../../../../public/pickagency.json'

interface ReviewCodesProps {
    data: IPickAgency[];
    onEdit: (record: IPickAgency) => void;
    onDelete: (id: number) => void;
    onAdd: () => void;
    searchTerm: string;
    onSearch: (term: string) => void;
}

const ReviewCodes: React.FC<ReviewCodesProps> = ({ data, onEdit, onDelete, onAdd, searchTerm, onSearch }) => {
    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onSearch(event.target.value);
    };

    const [isDeleteModalVisible, setisDeleteModalVisible] = useState(false);
    const closeDeleteModal = () => setisDeleteModalVisible(false);
    const openDeleteModal = () => setisDeleteModalVisible(true);


    const filteredData = data.filter(record =>
        Object.values(record).some(value =>
            value.toString().toLowerCase().includes(searchTerm.toLowerCase())
        )
    );

    const handleDelete = ()=>{
        closeDeleteModal();
    };

    return (
        <div style={{margin:"inherit"} }>
            <div className="reviewcodes-header">
            <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={handleSearchChange}
                />
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Agy Code/Comp ID</th>
                        <th>Agency Name/Company</th>
                        <th>Division</th>
                        <th>SaasCode</th>
                        <th>Address1</th>
                        <th>Address2</th>
                        <th>City</th>
                        <th>State</th>
                        <th>Zip</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredData.map(record => (
                        <tr key={record.id} >
                            <td>{record.id}</td>
                            <td>{record.AgencyName}</td>
                            <td>{record.Division}</td>
                            <td>{record.SaasCode}</td>
                            <td>{record.Address1}</td>
                            <td>{record.Address2}</td>
                            <td>{record.City}</td>
                            <td>{record.State}</td>
                            <td>{record.Zip}</td>
                            <td>
                                <button onClick={() => onEdit(record)} style={{ marginRight: "20px" }}>Edit</button>
                                <button onClick={() => onEdit(record)} style={{ marginRight: "20px" }}>Add</button>
                                <button onClick={openDeleteModal} >Delete</button>
                                <Modal
                                isVisible={isDeleteModalVisible}
                                onClose={closeDeleteModal}
                                title="Delete?"
                                            >
                                <div className="items-container">
                                    <div className="item" style={{ display: "block" }}>
                                        <label>
                                            Are you sure you want to delete the selected record?
                                        </label>
                                        <div style={{ marginTop: "20px" }}>
                                                <button
                                                    onClick={handleDelete}>Yes</button>
                                            <button onClick={closeDeleteModal} style={{ marginLeft: "15px" }}>No</button>
                                        </div>

                                    </div>
                                </div>
                            </Modal>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ReviewCodes;
