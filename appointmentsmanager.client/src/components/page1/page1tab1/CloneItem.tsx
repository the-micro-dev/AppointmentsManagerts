// CloneModal.tsx
import React, { useState } from 'react';
import Modal from '../../../common/Modal/Modal';

interface CloneModalProps {
    isVisible: boolean;
    onClose: () => void;
    onClone: (selectedRows: any[]) => void;
    data: any[];
}

const CloneModal: React.FC<CloneModalProps> = ({ isVisible, onClose, onClone, data }) => {
    const [selectedRows, setSelectedRows] = useState<number[]>([]);

    const handleCheckboxChange = (id: number) => {
        setSelectedRows(prev =>
            prev.includes(id) ? prev.filter(rowId => rowId !== id) : [...prev, id]
        );
    };

    const handleOkClick = () => {
        const selectedData = data.filter(row => selectedRows.includes(row.id));
        onClone(selectedData);
        onClose();
    };

    return (
        <Modal isVisible={isVisible} onClose={onClose} title="Clone Details">
            <table className="clone-table">
                <thead>
                    <tr>
                        <th>Select</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>City</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(row => (
                        <tr key={row.id}>
                            <td>
                                <input
                                    type="checkbox"
                                    checked={selectedRows.includes(row.id)}
                                    onChange={() => handleCheckboxChange(row.id)}
                                />
                            </td>
                            <td>{row.name}</td>
                            <td>{row.age}</td>
                            <td>{row.city}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button onClick={handleOkClick}>OK</button>
        </Modal>
    );
};

export default CloneModal;
