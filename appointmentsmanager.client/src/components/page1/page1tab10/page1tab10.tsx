import React, { useState, useEffect } from 'react';
import FormSection from '../../../common/Page1/HeaderFormSection';
import { useForm } from 'react-hook-form';
import { IApprovalInfo } from '../../../common/Interfaces';
import sampledata from './data.json'
import FormField from '../../../common/FormField'
import './page1tab10.css'

const Page1Tab10: React.FC = () => {

    const { control, formState: { errors } } = useForm();
    const [data, setData] = useState<IApprovalInfo[]>([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const result: IApprovalInfo[] = sampledata;/*await response.json();*/
                setData(result);
            } catch (error: any) {
                setError(error.message);
            }
        };

        fetchData();
    }, []);

    return (
        <div class="approval-info">
            <div>
                <FormSection
                    consultantValue=""
                    projectValue=""
                    input1Value=""
                    input2Value=""
                    input3Value=""
                    input4Value=""
                    control={control}
                    errors={errors}
                />
            </div>
            <hr></hr>
            <div style={{display:"flex",gap:"20px"} }>
                <section>
                    <table>
                        <thead>
                            <tr><th colSpan="10" align="center">Approvals</th></tr>
                            <tr>
                                <th>Level</th>
                                <th>Approved</th>
                                <th>Approved_tds</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((item) => (
                                <tr key={item.Level}>
                                    <td>{item.Level}</td>
                                    <td>{item.Approved}</td>
                                    <td>{item.Approved_tds}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <section>
                    <div style={{ marginTop: "20px" }}>
                        <button >Level1 Approval</button>
                        <button style={{ marginLeft: "15px" }}>Level1 approval w/Request for override</button>
                    </div>
                    <div style={{ marginTop: "20px" }}>
                        <button>Assign Cp1 No</button>
                            <button style={{ marginLeft: "15px" }} >Edit check cp1</button>
                        </div>
                        <button style={{ marginTop: "15px" }}>remove approval</button>
                    </section>

                </section>
                <hr style={{margin:"0px"} }></hr>
                <section>
                    <FormField
                        label="RollDate"
                        name="VendorID"
                        control={control}
                    />
                    <FormField
                        label="ReptDate"
                        name="Dir Apv Rept Date"
                        control={control}
                    />
                    <FormField
                        label="Added"
                        name="Start"
                        control={control}
                    />
                    <input></input>
                    <FormField
                        label="LastModified"
                        name="LastModified"
                        control={control}
                    />
                    <input></input>
                </section>
            </div>
            <hr></hr>
            <section style={{width:"fit-content"} }>
                <input type="checkbox" style={{ width: "auto" }}></input>Void
                <input></input>
                <input></input>
            </section>
        </div>
    );
};

export default Page1Tab10;