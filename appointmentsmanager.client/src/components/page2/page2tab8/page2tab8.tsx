import React, { useState } from 'react';
import './page2tab8.css';
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

const Page2Tab8: React.FC = () => {
    const sampleData: TableData[] = [
        { id: 1, name: 'John Doe', rfpNo: 40 },
        { id: 2, name: 'Jane Smith', rfpNo: 40 },
        { id: 3, name: 'Alice Johnson', rfpNo: 40 },
        { id: 4, name: 'Bob Brown', rfpNo: 40 },
        { id: 5, name: 'Charlie Davis', rfpNo: 40 },
        // Add more sample data as needed
    ];

    const [selectedRow, setSelectedRow] = useState<TableData | null>(null);

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
            <div style={{ width: "20%", margin:"auto" }}>
                <table>
                <thead>
                    <tr>
                        <th>RfpNo</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map(item => (
                            <tr key={item.id}>
                                <td>{item.rfpNo}</td>
                            </tr>
                        ))
                    }
                </tbody>
                </table>
            </div>
            
        </div>
    );
};

export default Page2Tab8;
