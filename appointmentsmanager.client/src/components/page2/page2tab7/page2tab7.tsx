import React, { useEffect, useState } from 'react';
import './page2tab7.css'; // Import the CSS file for styling
import { useForm } from 'react-hook-form';
import FormSection from '../../../common/Page1/HeaderFormSection';

type TableData = {
    id: number;
    description: string;
};

type FormValues = {
    Consultant: string;
    Project: string;
    CP1: string;
    Agency: string;
    ReplacementReason: string;
};

const Page2Tab7: React.FC = () => {
    const sampleData: TableData[] = [
        { id: 1, name: 'John Doe', amount: 40 },
        { id: 2, name: 'Jane Smith', amount: 40 },
        { id: 3, name: 'Alice Johnson', amount: 40 },
        { id: 4, name: 'Bob Brown', amount: 40 },
        { id: 5, name: 'Charlie Davis', amount: 40 },
        // Add more sample data as needed
    ];
    const [data, setData] = useState<TableData[]>(sampleData);

    const { handleSubmit, control, formState: { errors } } = useForm<FormValues>({
        defaultValues: {
            terms: false,
            membership: false,
        },
    });

    const onSubmit = (data: FormValues) => {
        console.log('Form data', data);
    };

    return (
        <div className="app-container">
        <div>
                    <div style={{ display: "grid" }}>
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
                <div className="table-container" style={{ marginTop:"10px" }}>
                    <table>
                        <thead>
                            <tr>
                                <th style={{ width: '50px' }}>Cp1No</th>
                                <th style={{ width: '300px' }}>VdReason</th>
                                <th style={{ width: '300px' }}>Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map(item => (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.amount}</td>
                                </tr>
                            ))}
                        </tbody>
                </table>
                    </div>
            </div>
        </div>
    );
};

export default Page2Tab7;
