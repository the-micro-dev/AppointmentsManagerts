
import React, { useEffect, useState } from 'react';
import Modal from '../../../common/Modal/Modal';
import sampledata from './cloneitem.json';
import { ICP1 } from '../../../common/Interfaces';

interface CloneModalProps {
    isVisible: boolean;
    onClose: () => void;
    onClone: (selectedRows: any[]) => void;
    data: any[]
}

const CloneModal: React.FC<CloneModalProps> = ({ isVisible, onClose, onClone,data }) => {
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
            <table className="clone-table" style={{ overflowX: "scroll", display:"block" }}>
                <thead>
                    <tr>
                        <th>select</th>
                        <th>Appr</th>
                        <th>S</th>
                        <th>PrNo</th>
                        <th>Contract</th>
                        <th>Replacement</th>
                        <th>AgySAAScode</th>
                        <th>PartnerCode</th>
                        <th>Partner</th>
                        <th>MptMagiccode</th>
                        <th>MptName</th>
                        <th>VendorMagiccode</th>
                        <th>VendorName</th>
                        <th>Frequency</th>
                        <th>Total</th>
                        <th>Acquisition</th>
                        <th>Approval</th>
                        <th>AthtyDate</th>
                        <th>ApprovedBy</th>
                        <th>AprrDate</th>
                        <th>RollDate</th>
                        <th>Add_UserID</th>
                        <th>Add_tds</th>
                        <th>Mod_UserID</th>
                        <th>Mod_tds</th>
                        <th>OldOrderVenCode</th>
                        <th>OldMPTCde</th>

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
                            <td>{row.Appr}</td>
                            <td>{row.S}</td>
                            <td>{row.Prno}</td>
                            <td>{row.Cp1no}</td>
                            <td>{row.Contract}</td>
                            <td>{row.Replacemnt}</td>
                            <td>{row.AgySAAScode}</td>
                            <td>{row.PartnerCode}</td>
                            <td>{row.partner}</td>
                            <td>{row.MptMagiccode}</td>
                            <td>{row.MptName}</td>
                            <td>{row.VendorMagiccode}</td>
                            <td>{row.VendorName}</td>
                            <td>{row.Frequency}</td>
                            <td>{row.Total}</td>
                            <td>{row.Acquisition}</td>
                            <td>{row.Approval}</td>
                            <td>{row.AthtyDate}</td>
                            <td>{row.ApprovedBy}</td>
                            <td>{row.ApprDate}</td>
                            <td>{row.RollDate}</td>
                            <td>{row.Add_UserID}</td>
                            <td>{row.Add_tds}</td>
                            <td>{row.Mod_UserID}</td>
                            <td>{row.Mod_tds}</td>
                            <td>{row.OldOrderVenCode}</td>
                            <td>{row.OldMPTCde}</td>
                            <td>{row.OldMPTCde}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button onClick={handleOkClick}>OK</button>
        </Modal>
    );
};

export default CloneModal;