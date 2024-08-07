import React, { useState } from 'react';
import Modal from '../../../common/Modal/Modal'; // Ensure you have this component
import './page1tab6.css'; // Import your CSS
import ModalContent from './ModalContent'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

type TableData = {
    id: number;
    code: string;
    description: string;
};

const Page1Tab6: React.FC = () => {
    const [data, setData] = useState<TableData[]>([]);
    const [selectedRow, setSelectedRow] = useState<TableData | null>(null);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isEditMode, setIsEditMode] = useState(false);
    const [isDeleteModalVisible, setisDeleteModalVisible] = useState(false);

    const openDeleteModal = () => setisDeleteModalVisible(true);
    const closeDeleteModal = () => setisDeleteModalVisible(false);

    const openModal = (editMode: boolean) => {
        setIsModalVisible(true);
        setIsEditMode(editMode);
    };

    const closeModal = () => {
        setIsModalVisible(false);
        setSelectedRow(null);
    };

    const handleAddOrUpdate = (newData: TableData) => {
        if (isEditMode && selectedRow) {
            setData(prevData => prevData.map(item => item.id === selectedRow.id ? newData : item));
        } else {
            setData(prevData => [...prevData, newData]);
        }
        closeModal();
    };

    const handleDelete = () => {
        if (selectedRow) {
            setData(prevData => prevData.filter(item => item.id !== selectedRow.id));
            setSelectedRow(null);
        }
    };

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Code</th>
                        <th>Options</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        (data?.length > 0) ?
                            (
                                data.map(item => (
                                    <tr key={item.id} className={selectedRow?.id === item.id ? 'selected' : ''} onClick={() => setSelectedRow(item)}>
                                        <td>{item.code}</td>
                                        <td>
                                            <FontAwesomeIcon icon={faEdit} onClick={() => openModal(true)} />
                                            <FontAwesomeIcon icon={faTrash} /*onClick={handleDelete}*/ onClick={openDeleteModal} style={{ marginLeft: "10px" }} /> 
                                            <Modal
                                                isVisible={isDeleteModalVisible}
                                                onClose={closeDeleteModal}
                                                title="Delete?"
                                            >
                                                <div className="items-container">
                                                    <div className="item" style={{ display:"block" }}>
                                                        <label>
                                                            Are you sure you want to delete the selected record?
                                                        </label>
                                                        <div style={{ marginTop:"20px" }}>
                                                            <button onClick={handleDelete}>Yes</button>
                                                            <button onClick={closeDeleteModal} style={{ marginLeft:"15px" }}>No</button>
                                                        </div>
                                                        
                                                    </div>
                                                </div>
                                            </Modal>
                                        </td>
                                    </tr>
                                ))
                            )
                         : (
                            <tr>
                                <td colSpan={2}>No data available</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>

            <Modal isVisible={isModalVisible} onClose={closeModal} title={isEditMode ? 'Edit Item' : 'Add Item'}>
                <ModalContent
                    onConfirm={handleAddOrUpdate}
                    onCancel={closeModal}
                    editMode={isEditMode}
                    item={selectedRow}
                />
            </Modal>
            <button onClick={() => openModal(false)} style={{ marginTop: "20px" }}>Add</button>
            
        </div>
    );
};

export default Page1Tab6;
