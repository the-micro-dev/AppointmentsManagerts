import './page2tab1.css';
import sampledata from './cloneitem.json';
import { ICP1 } from '../../../common/Interfaces';
import React, { useState, useEffect } from 'react';


export const Page2Tab1: React.FC = () => {
    useEffect(() => {
        const fetchData = async () => {
            try {
                const result: ICP1[] = sampledata;
            } catch (error: any) {
                console.error('Error fetching data:', error.message);
            }
        };
        fetchData();
    }, []);
    return (
        <div>
            <input placeholder="find by.." style={{ width: "300px" }} />
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
                    {sampledata.map(row => (
                        <tr key={row.id}>
                            <td>
                                <input
                                    type="checkbox"
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
            <h5>Approvals</h5>
            <div style={{ marginTop: "20px", display:"flex" }}>
                <div>
                <table className="sample-table" style={{ overflowX: "scroll", display: "block"}}>

                    <thead>
                        <tr>
                            <th>select</th>
                            <th>Level</th>
                            <th>Approved</th>
                            <th>Approved_tds</th>

                        </tr>
                    </thead>
                    <tbody>
                        {sampledata.map(row => (
                            <tr key={row.id}>
                                <td>
                                    <input
                                        type="checkbox"
                                    />
                                </td>
                                <td>{row.Appr}</td>
                                <td>{row.S}</td>
                                <td>{row.Prno}</td>
                            </tr>
                        ))}
                    </tbody>
                    </table>
                </div>
            </div>
            <div className="page2-buttons-section" style={{ display: "ruby" }}>
                <button type="submit">Print/Preview This CP1</button>
                <button type="submit">List CP1s for this projects</button>
                <button type="submit">Override Approval</button>
                <button type="submit">Remove Override Approval</button>
                <button type="submit">Final Approval</button>
                <button type="submit">Remove Final Approval</button>
            </div>
        </div>
    );
};
