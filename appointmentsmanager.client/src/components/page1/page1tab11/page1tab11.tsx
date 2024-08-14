import React, { useState,useEffect } from 'react';
import FormSection from '../../../common/Page1/HeaderFormSection';
import { useForm } from 'react-hook-form';
import FormField from '../../../common/FormField'
import { IContracts } from '../../../common/Interfaces';
import sampledata from './data.json'


const Page1Tab11: React.FC = () => {

    const { handleSubmit, control, formState: { errors } } = useForm<FormValues>({
        defaultValues: {
            terms: false,
            membership: false,
        },
    });
    const [data, setData] = useState<IContracts[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Replace './data.json' with the api code later
                /*const response = await fetch('/data.json');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }*/
                const result: IContracts[] = sampledata;/*await response.json();*/
                setData(result);
            } catch (error: any) {
                setError(error.message);
            } finally {
                //setLoading(false);
            }
        };

        fetchData();
    }, []);

    const onSubmit = (data: FormValues) => {
        console.log('Form data', data);
    };

    return (
        <div style={{ paddingleft :"20px"}} >
            <section style={{ width: "90px"}}>
                <FormField
                    label="Original Project"
                    name="Original Project"
                    control={control}

                />
            </section>
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
            <section style={{ display: "flex", gap: "30px"}}>
                <FormField
                    label="Contract"
                    name="Contract"
                    control={control}
                />
                <FormField
                    label="Partner"
                    name="Partner"
                    control={control}
                />
                <input style={{ height: "27px", marginTop: "24px",width:"60px" }} ></input>
                <input style={{ height: "27px", marginTop: "24px" }} ></input>

            </section>
                <FormField
                    label="Description"
                    name="Description"
                    as="textarea"
                    control={control}
                />
            <div style={{ display: "flex",gap:"30px" }} >
                <FormField
                    label="Vendor ID"
                    name="VendorID"
                    control={control}
                />
                <FormField
                    label="Vendor"
                    name="Vendor"
                    control={control}
                />
                <FormField
                    label="Start"
                    name="Start"
                    control={control}
                    />
                <FormField
                    label="End"
                    name="End"
                    control={control}
                    />
                <FormField
                    label="Amount"
                    name="Amount"
                    control={control}
                />
            </div>
            <hr></hr>
            <b>After applying</b>
            <div style={{ display: "flex", gap: "30px" }} >
                <FormField
                    label="Vendor ID"
                    name="VendorID"
                    control={control}
                />
                <FormField
                    label="Vendor"
                    name="Vendor"
                    control={control}
                />
                <FormField
                    label="Start"
                    name="Start"
                    control={control}
                />
                <FormField
                    label="End"
                    name="End"
                    control={control}
                />
                <FormField
                    label="Amount"
                    name="Amount"
                    control={control}
                />
            </div>
            <div style={{margin:"10px 0px"} }>
                <table>
                    <thead>
                        <tr><th colSpan="10" align="center">Associated CP1s</th></tr>
                        <tr>
                            <th>CP1No</th>
                            <th>Vendor</th>
                            <th>Effective</th>
                            <th>Expiration</th>
                            <th>Contract?</th>
                            <th>Status</th>
                            <th>Repl</th>
                            <th>Void</th>
                            <th>Void Date</th>
                            <th>Void Reason</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item) => (
                            <tr key={item.CP1No}>
                                <td>{item.CP1No}</td>
                                <td>{item.Vendor}</td>
                                <td>{item.Effective}</td>
                                <td>{item.Expiration}</td>
                                <td>{item.Contract}</td>
                                <td>{item.Status}</td>
                                <td>{item.Repl}</td>
                                <td>{item.Void}</td>
                                <td>{item.VoidDate}</td>
                                <td>{item.VoidReason}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <button>Assign</button>
        </div>
    );
};

export default Page1Tab11;