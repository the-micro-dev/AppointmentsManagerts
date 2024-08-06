// Popup.tsx
import React from 'react';

type TableData = {
    id: number;
    code: string;
    description: string;
    status: 'open' | 'closed'; // Add status for filtering,
    catcode: number;
    FA: string;
    FObject: number;
    name: string;
};

type PopupProps = {
    data: TableData[];
    filter: 'all' | 'open';
    setFilter: (filter: 'all' | 'open') => void;
    selectedRows: Set<number>;
    setSelectedRows: React.Dispatch<React.SetStateAction<Set<number>>>;
    onAddSelectedRows: () => void;
    onClose: () => void;
};

const Popup: React.FC<PopupProps> = ({
    data,
    filter,
    setFilter,
    selectedRows,
    setSelectedRows,
    onAddSelectedRows,
    onClose
}) => {
    // Filtered data based on the selected filter
    const filteredData = filter === 'all' ? data : data.filter(item => item.status === 'open');

    const toggleRowSelection = (id: number) => {
        setSelectedRows(prev => {
            const newSet = new Set(prev);
            if (newSet.has(id)) {
                newSet.delete(id);
            } else {
                newSet.add(id);
            }
            return newSet;
        });
    };

    const handleSelectAll = (selectAll: boolean) => {
        setSelectedRows(selectAll ? new Set(filteredData.map(item => item.id)) : new Set());
    };

    return (
        <div className="popup">
            <div className="popup-content">
                <div style={{ display:"flex" }}>
                <label>
                    <input
                        type="radio"
                        name="filter"
                        value="all"
                        checked={filter === 'all'}
                        onChange={() => setFilter('all')}
                    />
                    All
                </label>
                <label>
                    <input
                        type="radio"
                        name="filter"
                        value="open"
                        checked={filter === 'open'}
                        onChange={() => setFilter('open')}
                    />
                    Picked Only
                    </label>
                </div>
                <table style={{margin:"20px 0px"} }>
                    <thead>
                        <tr>
                            <th>
                                <input
                                    type="checkbox"
                                    checked={selectedRows.size === filteredData.length}
                                    onChange={e => handleSelectAll(e.target.checked)}
                                />
                            </th>
                            <th style={{ width: '150px' }}>Prod Cat Code</th>
                            <th style={{ width: '550px' }}>Description</th>
                            <th style={{ width: '50px' }}>FA</th>
                            <th style={{ width: '100px' }}>Object</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredData.map(item => (
                            <tr
                                key={item.id}
                                className={selectedRows.has(item.id) ? 'selected' : ''}
                            >
                                <td>
                                    <input
                                        type="checkbox"
                                        checked={selectedRows.has(item.id)}
                                        onChange={() => toggleRowSelection(item.id)}
                                    />
                                </td>
                                <td>{item.catcode}</td>
                                <td>{item.description}</td>
                                <td>{item.FA}</td>
                                <td>{item.FObject}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <button onClick={onAddSelectedRows}>Add</button>
            </div>
        </div>
    );
};

export default Popup;
