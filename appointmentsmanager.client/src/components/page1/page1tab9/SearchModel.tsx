
import React, { useState, ChangeEvent } from 'react';
import Modal from '../../../common/Modal/Modal';
import { IDistribution } from '../../../common/Interfaces';

interface SearchModalProps {
    isVisible: boolean;
    onClose: () => void;
    onSelect: (record: IDistribution) => void;
}

const SearchModal: React.FC<SearchModalProps> = ({ isVisible, onClose, onSelect }) => {
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [selectedId, setSelectedId] = useState<number | null>(null);

    const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    };

    const handleCheckboxChange = (id: number) => {
        setSelectedId((prev) => (prev === id ? null : id));
    };

    const handleSave = () => {
        const detail = details.find((s) => s.id === selectedId);
        if (detail) {
            onSelect(detail);
            onClose(); // Close the search modal after selection
        }
    };

    const details: IDistribution[] = [
        { id: 1, name: 'Jane Doe', email: 'jane@example.com', phone: '987-654-3210', address: '456 Oak St' },
        { id: 2, name: 'John Smith', email: 'john.smith@example.com', phone: '555-555-5555', address: '789 Pine St' },
        {
            id: 3,
            name: 'abc',
            agency: 'Commercial',
            address1: 'abc SE 123',
            address2: 'abc SE 123',
            city: 'abc123',
            state: 'abc123 state',
            zip: 12235,
            handmail: true,
            fax: 'fax',
            deliverymethod: 'Email',
            email: 'abc@gmail.com',
            phone: '123456789',
            address: 'SE abc st'
        },
        {
            id: 4,
            name: 'efg',
            agency: 'efg agency',
            address1: 'efg SE 123',
            address2: 'efg SE 123',
            city: 'efg123',
            state: 'efg state',
            zip: 42135,
            handmail: false,
            fax: 'fax',
            deliverymethod: 'Email',
            email: 'efg@gmail.com',
            phone: '123456789',
            address: 'SE efg st'
        }
        // Add more detail records as needed
    ];

    const filtereddetails = details.filter((detail) =>
        `${detail.name} ${detail.email}`.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <Modal isVisible={isVisible} onClose={onClose} title="Select ">
            <div className="search-modal-content">
                <input
                    type="text"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={handleSearchChange}
                    className="search-input"
                />
                <table className="search-table">
                    <thead>
                        <tr>
                            <th>Select</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Address</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filtereddetails.length ? (
                            filtereddetails.map((detail) => (
                                <tr key={detail.id}>
                                    <td>
                                        <input
                                            type="checkbox"
                                            checked={selectedId === detail.id}
                                            onChange={() => handleCheckboxChange(detail.id)}
                                        />
                                    </td>
                                    <td>{detail.name}</td>
                                    <td>{detail.email}</td>
                                    <td>{detail.phone}</td>
                                    <td>{detail.address}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan={5}>No records found</td>
                            </tr>
                        )}
                    </tbody>
                </table>
                <button onClick={handleSave} className="save-button">Ok</button>
            </div>
        </Modal>
    );
};

export default SearchModal;
