import { useForm } from 'react-hook-form';
import FormField from '../../../common/FormField'
import './page2tab3.css'
import React from 'react';
import { useData } from '../../../common/DataContextProvider';
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

const Page2Tab3: React.FC = () => {
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
            <form onSubmit={handleSubmit(onSubmit)} className="form-container">
                <div style={{ display: "flex" }} >
                    <FormField
                        className="small-input"
                        label="First Name"
                        name="SecondName"
                        control={control}
                        errors={errors.SecondName}
                    />
                    <input style={{ height: "27px", marginTop: "20px" }} className="small-input"></input>
                </div>
                <FormField
                    label="Last Name"
                    name="lastName"
                    control={control}
                    errors={errors.lastName}
                />
                <FormField
                    label="Email"
                    name="email"
                    as="textarea"
                    control={control}
                    errors={errors.email}
                />
                <div style={{ display: "flex" }} >
                    <FormField
                        label="Password"
                        name="password"
                        type="password"
                        control={control}
                        errors={errors.password}
                        className="small-input"
                    />
                    <input style={{ height: "27px", marginTop: "20px" }} className="small-input"></input>
                </div>
                <FormField
                    label="Confirm Password"
                    name="confirmPassword"
                    type="password"
                    control={control}
                    errors={errors.confirmPassword}
                />

                <FormField
                    label="Address"
                    name="address"
                    as="textarea"
                    control={control}
                    errors={errors.address}
                />
            </form>
        </div>
    );
};

export default Page2Tab3;

