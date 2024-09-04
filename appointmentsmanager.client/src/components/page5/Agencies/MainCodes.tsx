import React, { useState } from 'react'
import ReviewCodes from './ReviewCodes'
import DataEntry from './DataEntry'
import { IPickAgency } from '../../../common/Interfaces';
import sampledata from '../../../../public/pickagency.json'
import Modal from '../../../common/Modal/Modal';

const MainCodeContent: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'find' | 'enter' | 'report'>('find');
    const [records, setRecords] = useState<IPickAgency[]>(sampledata);
    const [selectedRecord, setSelectedRecord] = useState<IPickAgency | null>(null);
    const [searchTerm, setSearchTerm] = useState('');
    const openModal = () => setIsModalVisible(true);
    const closeModal = () => setIsModalVisible(false);
    const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

    const handleTabChange = (tab: 'find' | 'enter'| 'report') => {
        setActiveTab(tab);
    };

    const handleEdit = (record: IPickAgency) => {
        setSelectedRecord(record);
        setActiveTab('enter');
    };

    const handleDelete = (id: number) => {
        setRecords(records.filter(record => record.id !== id));
    };

    const handleAdd = () => {
        setSelectedRecord(null);
        setActiveTab('enter');
    };

    const handleSearch = (term: string) => {
        setSearchTerm(term);
    };

    const handleSave = (updatedRecord: IPickAgency) => {
        if (updatedRecord.id) {
            // Update existing record
            setRecords(records.map(r => r.id === updatedRecord.id ? updatedRecord : r));
        } else {
            // Add new record
            setRecords([...records, { ...updatedRecord, id: Date.now() }]);
        }
        setActiveTab('find');
    };

    return (
        <div className="page1">
            <div className="sub-navbar">
                <ul>
                    <li
                        className={activeTab === 'find' ? 'active' : ''}
                        onClick={() => handleTabChange('find')}
                        style={{ margin: "auto" }}
                    >
                        Find/Review
                    </li>
                    <li
                        className={activeTab === 'enter' ? 'active' : ''}
                        onClick={() => handleTabChange('enter')}
                        style={{ margin: "auto" }}
                    >
                        Edit
                    </li>
                    <li
                        className={activeTab === 'report' ? 'active' : ''}
                        onClick={() => handleTabChange('report')}
                        style={{ margin: "auto" }}
                    >
                        Report
                    </li>
                </ul>
            </div>
            {activeTab === 'find' && (
                <ReviewCodes
                    data={records}
                    onEdit={handleEdit}
                    onDelete={handleDelete}
                    onAdd={handleAdd}
                    searchTerm={searchTerm}
                    onSearch={handleSearch}
                />
            )}

            {activeTab === 'enter' && (
                <DataEntry
                    record={selectedRecord}
                    onSave={handleSave}
                />
            )}

            {activeTab === 'report' && (
                <div style={{
                    height: "500px", display: "flex", justifyContent: "center", alignItems: "center"
                }}>
                    <button onClick={openModal}>Print Saas Agencies</button>
                    <Modal
                        isVisible={isModalVisible}
                        onClose={closeModal}
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
                </div>
            )}
        </div>
    );
}

const AgenciesMainCodes: React.FC = () => (
    <MainCodeContent />
);

export default AgenciesMainCodes;
