import React, { useState } from 'react';
import './page2tab9.css'; // Custom CSS for styling
import { IDistribution } from '../../../common/Interfaces';
import FormSection from '../../../common/Page1/HeaderFormSection';
import { useForm } from 'react-hook-form';

const initialData: IDistribution[] = [
    { id: 1, name: 'John Doe', email: 'john@example.com', phone: '123-456-7890', address: '123 Elm St' },
    {
        id: 2,
        name: 'John',
        agency: 'Health',
        address1: 'dfsga SE 123',
        address2: 'dga SE 123',
        city: 'abc',
        state: 'abc state',
        zip: 12345,
        handmail: true,
        fax: 'fax',
        deliverymethod: 'Email',
        email: 'email@gmail.com',
        phone: '123456789',
        address: 'SE 123 st'
    }
    // Add more records as needed
];

const Page2Tab9: React.FC = () => {
    const [data, setData] = useState<IDistribution[]>(initialData);
    const [formData, setFormData] = useState<Omit<IDistribution, 'id'>>({
        name: '',
        deliverymethod: '',
        agency: '',
        handmail: false,
        fax: '',
        email: '',
        phone: '',
        address: '',
        address1: '',
        address2: '',
        city: '',
        state: '',
        zip: 0
    });

    const { control, formState: { errors } } = useForm();


    return (
        <div>
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
            <table>
                <thead>
                    <tr>
                        <th>Dto_Name</th>
                        <th>Dto_Method</th>
                        <th>Dto_Agency</th>
                        <th>Dto_Email</th>
                        <th>Dto_Handmail</th>
                        <th>Dto_Fax</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((row) => (
                        <tr key={row.id}>
                            <td>{row.name}</td>
                            <td>{row.deliverymethod}</td>
                            <td>{row.agency}</td>
                            <td>{row.email}</td>
                            <td>{row.handmail ? 'Yes' : 'No'}</td>
                            <td>{row.fax}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Page2Tab9;
