import React, { useState } from 'react'
import ReviewCodes from './codes/ReviewCodes'
import DataEntry from './codes/DataEntry'

interface Record {
    id: number;
    prodCadCode?: number;
    description: string;
    objectCode: string;
    phone: string;
    address: string;
}

const Page5Content: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'find' | 'enter'>('find');
    const [records, setRecords] = useState<Record[]>([
        { id: 1, prodCadCode: 11234555, description: 'Description for first prodcad', objectCode: '123452', phone: '1234567890', address: '123 Elm St' },
        { id: 2, prodCadCode: 129466529, description: 'Description for second prodcad', objectCode: '9724104', phone: '1234567890', address: '123 Elm St' }
    ]);
    const [selectedRecord, setSelectedRecord] = useState<Record | null>(null);
    const [searchTerm, setSearchTerm] = useState('');

    const handleTabChange = (tab: 'find' | 'enter') => {
        setActiveTab(tab);
    };

    const handleEdit = (record: Record) => {
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

    const handleSave = (updatedRecord: Record) => {
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
                        style={{margin:"auto"} }
                    >
                       Review/ Find
                    </li>
                    <li
                        className={activeTab === 'enter' ? 'active' : ''}
                        onClick={() => handleTabChange('enter')}
                        style={{ margin: "auto" }}
                    >
                        Data Entry
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
        </div>
    );
}

const Page5: React.FC = () => (
        <Page5Content />
);

export default Page5;
