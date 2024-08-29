// Table.tsx
import React, { useState } from 'react';
import './ReviewCodes.css';
import Modal from '../../../common/Modal/Modal';
interface Record {
    id: number;
    prodCadCode?: number;
    description: string;
    objectCode: string;
    phone: string;
    address: string;
}

interface ReviewCodesProps {
    data: Record[];
    onEdit: (record: Record) => void;
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
                <button onClick={onAdd}>Add New Record</button>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>ProdCatCode</th>
                        <th>Description</th>
                        <th>Object Code</th>
                        <th>Address</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredData.map(record => (
                        <tr key={record.id} >
                            <td>{record.prodCadCode}</td>
                            <td>{record.description}</td>
                            <td>{record.objectCode}</td>
                            <td>{record.address}</td>
                            <td>
                                <button onClick={() => onEdit(record)} style={{ marginRight:"20px" }}>Edit</button>
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
