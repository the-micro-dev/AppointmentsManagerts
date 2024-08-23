import { useForm } from 'react-hook-form';
import FormField from '../../../common/FormField'
import './page2tab4.css'
import React, { useState } from 'react';
import { useData} from '../../../common/DataContextProvider';
import FormSection from '../../../common/Page1/HeaderFormSection';

type FormValues = {
    SecondName: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string;
    age: number;
    phoneNumber: string;
    address: string;
    city: string;
    state: string;
};

const initialData = [
    { id: 1, name: 'A', Line: 30, Quantity: 30, Description: 'Engineer', Net: 'New York', ExtNet: 'USA' },
    { id: 2, name: 'B', Line: 25, Quantity: 30, Description: 'Designer', Net: 'San Francisco', ExtNet: 'USA' },
    { id: 3, name: 'C', Line: 35, Quantity: 30, Description: 'Teacher', Net: 'Chicago', ExtNet: 'USA' },
    // Add more data as needed
];

const Page2Tab4: React.FC = () => {
    const [data, setData] = useState(initialData);
    const [sortConfig, setSortConfig] = useState<{ key: string, direction: 'asc' | 'desc' }>({ key: '', direction: 'asc' });
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
            <div style={{display:"grid"} }>
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
            <table>
                <thead>
                    <tr>
                        {['name', 'Line', 'Quantity', 'Description', 'Net', 'ExtNet'].map((column) => (
                            <th key={column} onClick={() => handleSort(column)}>
                                {column.charAt(0).toUpperCase() + column.slice(1)}
                                <span className={`sort-icon ${sortConfig.key === column ? sortConfig.direction : ''}`}></span>
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, rowIndex) => (
                        <tr key={row.id}>
                            {['name', 'Line', 'Quantity', 'Description', 'Net', 'ExtNet'].map((column) => (
                                <td
                                    key={column}
                                    onDoubleClick={() => handleDoubleClick(rowIndex, column)}
                                >
                                    {row[column]}
                                    
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
            <div class="buttons-section" style={{ marginTop: "20px", justifyContent:"flex-end" }}>
                <input
                    type="text" style={{ width: "150px" }} />
                <input
                    type="text" style={{ width: "200px" }} />
            </div>
        </div>
    );
};

export default Page2Tab4;

