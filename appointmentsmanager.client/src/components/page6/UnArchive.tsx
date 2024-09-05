// Table.tsx
import React, { useState, useEffect } from 'react';
import Modal from '../../common/Modal/Modal'
import { ICP1 } from '../../common/Interfaces'
import sampledata from '../../common/SampleFiles/cloneitem.json'

const UnArchive: React.FC<ReviewCodesProps> = () => {
    const [data, setData] = useState<ICP1[]>([]);
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [isFirstModalVisible, setFirstModalVisible] = useState(false);
    const [isSecondModalVisible, setSecondModalVisible] = useState(false);
    const [isErrorModalVisible, setErrorModalVisible] = useState(false);
    const [selectedRecord, setSelectedRecord] = useState<ICP1 | null>(null);

    const handleButtonClick = (record: ICP1) => {
        setFirstModalVisible(true);
        setSelectedRecord(record);
        console.log(selectedRecord);
    };

    const handleFirstModalConfirm = () => {
        setFirstModalVisible(false);
        setSecondModalVisible(true);
    };

    const handleFirstModalCancel = () => {
        setFirstModalVisible(false);
        setErrorModalVisible(true);
    };

    const handleSecondModalClose = () => {
        setSecondModalVisible(false);
    };

    const handleErrorModalClose = () => {
        setErrorModalVisible(false);
    };

    const filteredData = data.filter(record =>
        Object.values(record).some(value =>
            value.toString().toLowerCase().includes(searchTerm.toLowerCase())
        )
    );

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result: ICP1[] = sampledata;
                setData(result);
            } catch (error: any) {
                console.error('Error fetching data:', error.message);
            }
        };
        fetchData();
    }, []);

    return (
        <div style={{margin:"inherit"} }>
            <div className="reviewcodes-header">
                <input
                type="text"
                placeholder="Search..."
                />
                
            </div>
            <table className="sample-table" style={{ overflowX: "scroll", display: "block" }}>
                <thead>
                    <tr>
                        <th>Project_id</th>
                        <th>Cp1no</th>
                        <th>AgySAAScode</th>
                        <th>Agencycode</th>
                        <th>Agnname</th>
                        <th>MPTSaasCode</th>
                        <th>MPTName</th>
                        <th>select</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(row => (
                        <tr key={row.id}>
                            <td>{row.PrNo}</td>
                            <td>{row.CP1no}</td>
                            <td>{row.AgySAASCode}</td>
                            <td>{row.PartnerCode}</td>
                            <td>{row.Contract}</td>
                            <td>{row.VendorMagiccode}</td>
                            <td>{row.VendorName}</td>
                            <td>
                                <button onClick={() => handleButtonClick(row)}>UnArchive CP1</button>
                                {selectedRecord && (
                                    <Modal
                                        isVisible={isFirstModalVisible}
                                        onClose={() => setFirstModalVisible(false)}
                                        title="Confirm Action"
                                    >
                                        <div className="items-container">
                                            <div className="item" style={{ display: "block" }}>
                                                <label>
                                                    {selectedRecord.CP1no} for {selectedRecord.Contract} will appended to the active CP1 tables and deleted from the Archived CP1 tables.

                                                    <br></br>
                                                    <br></br>

                                                    Are you sure you want to continue?
                                                </label>
                                                <br></br>
                                                <div style={{ marginTop: "20px" }}>
                                                    <button onClick={handleFirstModalConfirm}>Yes</button>
                                                    <button onClick={handleFirstModalCancel} style={{ marginLeft: "15px" }}>No</button>
                                                </div>
                                            </div>
                                        </div>
                                    </Modal>)}
                            <Modal
                                isVisible={isSecondModalVisible}
                                onClose={handleSecondModalClose}
                                title="Success"
                            >
                                <p>Uniqueness of CP1 is violated</p>
                            </Modal>

                            <Modal
                                isVisible={isErrorModalVisible}
                                onClose={handleErrorModalClose}
                                title="Error"
                            >
                                <p>UnArchive Cancelled</p>
                                </Modal>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default UnArchive;
