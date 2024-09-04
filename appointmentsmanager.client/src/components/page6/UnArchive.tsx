// Table.tsx
import React, { useState, useEffect } from 'react';
import Modal from '../../common/Modal/Modal'
import { ICP1 } from '../../common/Interfaces'
import sampledata from '../../common/SampleFiles/cloneitem.json'

const UnArchive: React.FC<ReviewCodesProps> = () => {
    const [data, setData] = useState<ICP1[]>([]);
    const [searchTerm, setSearchTerm] = useState<string>('');

    const filteredData = data.filter(record =>
        Object.values(record).some(value =>
            value.toString().toLowerCase().includes(searchTerm.toLowerCase())
        )
    );

    const handleSearchChange = (term: string) => {
        setSearchTerm(term);
    };

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
                <button>UnArchive CP1</button>
            </div>
            <table className="sample-table" style={{ overflowX: "scroll", display: "block" }}>
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
                    {filteredData.map(row => (
                        <tr key={row.id}>
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
        </div>
    );
};

export default UnArchive;
