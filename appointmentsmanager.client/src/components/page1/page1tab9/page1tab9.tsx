import React, { useState } from 'react';
import SubModal from './SubModal';
import SearchModal from './SearchModel';
import './page1tab9.css'; // Custom CSS for styling
import { IDistribution } from '../../../common/Interfaces';
import FormSection from '../../../common/Page1/HeaderFormSection';
import { useForm } from 'react-hook-form';
import Modal from '../../../common/Modal/Modal';

const initialData: IDistribution[] = [
    { id: 1, name: 'John Doe', email: 'john@example.com', phone: '123-456-7890', address: '123 Elm St' },
    {
        id: 2,
        name: 'John',
        agency: 'Health',
        address1: 'dfsga SE 123',
        address2: 'dga SE 123',
        city: 'abc',
        state: 'abc state',
        zip: 12345,
        handmail: true,
        fax: 'fax',
        deliverymethod: 'Email',
        email: 'email@gmail.com',
        phone: '123456789',
        address: 'SE 123 st'
    }
    // Add more records as needed
];

const Page1Tab9: React.FC = () => {
    const [data, setData] = useState<IDistribution[]>(initialData);
    const [isChildFormOpen, setIsChildFormOpen] = useState<boolean>(false);
    const [isSearchModalOpen, setIsSearchModalOpen] = useState<boolean>(false);
    const [recordToDelete, setRecordToDelete] = useState<number | null>(null);
    const [isDeleteModalVisible, setIsDeleteModalVisible] = useState<boolean>(false);
    const [formData, setFormData] = useState<Omit<IDistribution, 'id'>>({
        name: '',
        deliverymethod: '',
        agency: '',
        handmail: false,
        fax: '',
        email: '',
        phone: '',
        address: '',
        address1: '',
        address2: '',
        city: '',
        state: '',
        zip: 0
    });
    const [selectedRecord, setSelectedRecord] = useState<IDistribution | null>(null);

    const { control, formState: { errors } } = useForm();

    const handleOpenChildForm = (record: IDistribution | null = null) => {
        if (record) {
            setFormData({
                name: record.name || '',
                deliverymethod: record.deliverymethod || '',
                agency: record.agency || '',
                handmail: record.handmail || false,
                fax: record.fax || '',
                email: record.email || '',
                phone: record.phone || '',
                address: record.address || '',
                address1: record.address1 || '',
                address2: record.address2 || '',
                city: record.city || '',
                state: record.state || '',
                zip: record.zip || 0
            });
            setSelectedRecord(record);
        } else {
            setFormData({
                name: '',
                deliverymethod: '',
                agency: '',
                handmail: false,
                fax: '',
                email: '',
                phone: '',
                address: '',
                address1: '',
                address2: '',
                city: '',
                state: '',
                zip: 0
            });
            setSelectedRecord(null);
        }
        setIsChildFormOpen(true);
    };

    const handleCloseChildForm = () => {
        setIsChildFormOpen(false);
    };

    const handleOpenSearchModal = () => {
        setIsSearchModalOpen(true);
    };

    const handleCloseSearchModal = () => {
        setIsSearchModalOpen(false);
    };

    const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSave = () => {
        console.log("Form data on save:", formData); // Debug line
        if (selectedRecord) {
            setData((prev) =>
                prev.map((item) =>
                    item.id === selectedRecord.id ? { ...item, ...formData } : item
                )
            );
        } else {
            const newId = Math.max(...data.map((item) => item.id), 0) + 1;
            setData((prev) => [...prev, { id: newId, ...formData }]);
        }
        console.log("Updated data:", data); // Debug line
        handleCloseChildForm();
    };

    const handleDelete = () => {
        if (recordToDelete !== null) {
            setData((prev) => prev.filter((item) => item.id !== recordToDelete));
            setRecordToDelete(null);
        }
        setIsDeleteModalVisible(false);
    };

    const openDeleteModal = (id: number) => {
        setRecordToDelete(id);
        setIsDeleteModalVisible(true);
    };

    const closeDeleteModal = () => {
        setIsDeleteModalVisible(false);
        setRecordToDelete(null); // Reset recordToDelete when closing modal
    };

    return (
        <div>
            <div>
                <FormSection
                    consultantValue=""
                    projectValue=""
                    input1Value=""
                    input2Value=""
                    input3Value=""
                    input4Value=""
                    control={control}
                    errors={errors}
                />
                {/* Other components or content */}
            </div>
            <button onClick={() => handleOpenChildForm()}>Add</button>
            <table>
                <thead>
                    <tr>
                        <th>Dto_Name</th>
                        <th>Dto_Method</th>
                        <th>Dto_Agency</th>
                        <th>Dto_Email</th>
                        <th>Dto_Handmail</th>
                        <th>Dto_Fax</th>
                        <th>Options</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((row) => (
                        <tr key={row.id}>
                            <td>{row.name}</td>
                            <td>{row.deliverymethod}</td>
                            <td>{row.agency}</td>
                            <td>{row.email}</td>
                            <td>{row.handmail ? 'Yes' : 'No'}</td>
                            <td>{row.fax}</td>
                            <td>
                                <button onClick={() => handleOpenChildForm(row)}>Edit</button>
                                <button onClick={() => openDeleteModal(row.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <SubModal
                isVisible={isChildFormOpen}
                onClose={handleCloseChildForm}
                formData={formData}
                onFormChange={handleFormChange}
                onSave={handleSave}
                onSearchOpen={handleOpenSearchModal}
            />
            <SearchModal
                isVisible={isSearchModalOpen}
                onClose={handleCloseSearchModal}
                onSelect={(record) => {
                    setFormData({
                        name: record.name,
                        deliverymethod: record.deliverymethod,
                        agency: record.agency,
                        handmail: record.handmail,
                        fax: record.fax,
                        email: record.email,
                        phone: record.phone,
                        address: record.address,
                        address1: record.address1,
                        address2: record.address2,
                        city: record.city,
                        state: record.state,
                        zip: record.zip
                    });
                    setIsSearchModalOpen(false);
                }}
            />
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
                            <button onClick={handleDelete}>Yes</button>
                            <button onClick={closeDeleteModal} style={{ marginLeft: "15px" }}>No</button>
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export default Page1Tab9;
