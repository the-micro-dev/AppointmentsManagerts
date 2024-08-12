
import React, { useState } from 'react';
import SubModal from './SubModal';
import SearchModal from './SearchModel';
import './page1tab9.css'; // Custom CSS for styling
import { IDistribution } from '../../../common/Interfaces';
import FormField from '../../../common/FormField'

const initialData: IDistribution[] = [
    { id: 1, name: 'John Doe', email: 'john@example.com', phone: '123-456-7890', address: '123 Elm St' },
    // Add more records as needed
];

const Page1Tab9: React.FC = () => {
    const [data, setData] = useState<IDistribution[]>(initialData);
    const [isChildFormOpen, setIsChildFormOpen] = useState<boolean>(false);
    const [isSearchModalOpen, setIsSearchModalOpen] = useState<boolean>(false);
    const [formData, setFormData] = useState<Omit<IDistribution, 'id'>>({
        name: '',
        email: '',
        phone: '',
        address: '',
    });
    const [selectedRecord, setSelectedRecord] = useState<IDistribution | null>(null);

    const handleOpenChildForm = (record: IDistribution | null = null) => {
        if (record) {
            setFormData(record);
            setSelectedRecord(record);
        } else {
            setFormData({
                name: '',
                email: '',
                phone: '',
                address: '',
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

    const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSave = () => {
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
        handleCloseChildForm();
    };

    const handleDelete = (id: number) => {
        setData((prev) => prev.filter((item) => item.id !== id));
    };

    return (
        <div>
            <button onClick={() => handleOpenChildForm()}>Add</button>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Address</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((row) => (
                        <tr key={row.id}>
                            <td>{row.name}</td>
                            <td>{row.email}</td>
                            <td>{row.phone}</td>
                            <td>{row.address}</td>
                            <td>
                                <button onClick={() => handleOpenChildForm(row)}>Edit</button>
                                <button onClick={() => handleDelete(row.id)}>Delete</button>
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
                    setFormData(record);
                    setSelectedRecord(record);
                    handleCloseSearchModal();
                    handleOpenChildForm(record); // Open ChildFormModal with the selected record
                }}
            />
        </div>
    );
};

export default Page1Tab9;
