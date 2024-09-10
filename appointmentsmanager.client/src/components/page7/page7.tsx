// Table.tsx
import React, { useState ,useEffect} from 'react';
import { ICP1 } from '../../common/Interfaces'
import Modal from '../../common/Modal/Modal'
import './page7.css'
import data1 from '../../common/SampleFiles/DetailsbyApproval.json'
import data2 from '../../common/SampleFiles/SummaryByApproval.json';
import data3 from '../../common/SampleFiles/SummaryOfCP1.json'
import data4 from '../../common/SampleFiles/VendorsList.json';
import data5 from '../../common/SampleFiles/VendorDollar.json'
import data6 from '../../common/SampleFiles/VendorDollar.json';

const Page7: React.FC = () => {

    /*const [data1, setData1] = useState<ICP1[]>([]);
    const [data2, setData2] = useState<DataRow[]>([]);*/
    const [activeModal, setActiveModal] = useState<number | null>(null);

    /*useEffect(() => {
        const fetchData1 = async () => {
            const response = await fetch('/cloneitem.json');
            console.log(response);
            const result = await response.json();
            setData1(result);
        };

        const fetchData2 = async () => {
            const response = await fetch('/pickagency.json');
            const result = await response.json();
            setData2(result);
        };

        fetchData1();
        fetchData2();
    }, []);*/

    const openModal = (index: number) => {
        setActiveModal(index);
    };

    const closeModal = () => {
        setActiveModal(null);
    };

    const getCurrentTable = () => {
        if (activeModal === 1) {
            return data1;
        } else if (activeModal === 2) {
            return data2;
        } else if (activeModal === 3) {
            return data3;
        } else if (activeModal === 4) {
            return data4;
        } else if (activeModal === 5) {
            return data5;
        } else if (activeModal === 6) {
            return data6;
        }
        return null;
    };

    const currentTable = getCurrentTable();
    const columns = currentTable && Object.keys(currentTable[0] || {});

    return (
        <div style={{
            display: "flex", justifyContent: "center", alignItems: "center"
        }} className="reports-comp">
            <div>
                <section style={{ marginTop: "30px", display: "flex"}}>
                    <h4>
                        Start Date:
                        <input
                            type="date"
                            name="startdate"
                        />
                    </h4>
                </section>
                <section style={{ display: "flex", justifyContent: "center" }}>

                    <h4 style={{ paddingRight:"30px" }}>
                        Stop Date:
                        <input
                            type="date"
                            name="stopdate"
                        />
                        <label>(Based on Roll Date)</label>
                    </h4>
                    <div style={{ display: "block", alignContent:"center" }}>
                        <input style={{ height: "15px" }} type="checkbox"></input>
                        <label>Browse instead of print</label>
                    </div>
                </section>
                <section style={{ display: "flex", flexDirection: "column",gap:"20px" }}>
                    <button onClick={() => openModal(1)}>1. Print Details By Approval Cat,Type. Replacement Cat</button>
                    <button onClick={() => openModal(2)}>2. Print Summary By Approval Cat,Type. Replacement Cat</button>
                    <button onClick={() => openModal(3)}>3. Print Summary By AMajor Category</button>
                    <button onClick={() => openModal(4)}>4. Create Vendor List Text File</button>
                    <button onClick={() => openModal(5)}>5. Print Vendor Dollar Summary</button>
                    <button onClick={() => openModal(5)}>5. Print Vendor Dollar Summary-Consulting Services</button>
                    <button onClick={() => openModal(6)}>6. Print Details for General/Special RFP Counts</button>
                    {currentTable && (
                        <Modal
                            isVisible={activeModal !== null}
                            onClose={closeModal}
                        >
                            <div style={{ overflowX: "scroll" }}>
                            <table>
                                <thead>
                                    <tr>
                                        {columns.map((column, idx) => (
                                            <th key={idx}>{column}</th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    {currentTable.map((row, rowIdx) => (
                                        <tr key={rowIdx}>
                                            {columns.map((column, cellIdx) => (
                                                <td key={cellIdx}>{row[column]}</td>
                                            ))}
                                        </tr>
                                    ))}
                                </tbody>
                                </table>
                            </div>
                        </Modal>
                    )}
                </section>
                <h4>
                    Report Subtitle:
                    <input
                        type="text"
                        name="startdate"
                    />
                </h4>
            </div>
        </div>
    );
};

export default Page7;
