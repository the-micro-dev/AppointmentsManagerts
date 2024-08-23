import React, { useEffect, useState } from 'react';
import './page2tab6.css'; // Import the CSS file for styling
import FormField from '../../../common/FormField'
import { useForm } from 'react-hook-form';
import FormSection from '../../../common/Page1/HeaderFormSection';

type FormValues = {
    MajCategory: string;
    ProductServices: string;
    Description: string;
    Comments: string;
    SubsequentActions: string;
    Consultant: string;
    Project: string;
    CP1: string;
    Agency: string;
};

const Page2Tab6: React.FC = () => {

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
        <div className="app-container" style={{display:"contents"} }>
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
            <form className="form-container" onSubmit={handleSubmit(onSubmit)} >
                <div>
                    <FormField
                        label="MajCategory"
                        name="Major Category"
                        as="select"
                        control={control}
                        options={[
                            { value: 'IT COMMODITIES', label: 'IT COMMODITIES' },
                            { value: 'IT EQUIPMENT', label: 'IT EQUIPMENT' },
                            { value: 'IT EQUIPMENT MAINT', label: 'IT EQUIPMENT MAINT' },
                            { value: 'IT PROFESSIONAL SVCS', label: 'IT PROFESSIONAL SVCS' },
                            { value: 'IT SOFTWARE', label: 'IT SOFTWARE' },
                            { value: 'IT USAGE FEES', label: 'IT USAGE FEES' }
                        ]}
                    />
                </div>
                <FormField
                    label="Product/Services"
                    name="Product/Services"
                    as="textarea"
                    control={control}
                />
                <FormField
                    label="Description"
                    name="Description"
                    as="textarea"
                    control={control}
                />
                <FormField
                    label="Comments"
                    name="Comments"
                    as="textarea"
                    control={control}
                />
                <FormField
                    label="Subsequent Actions"
                    name="Subsequent Actions"
                    as="textarea"
                    control={control}
                />
            </form>
        </div>
    );
};

export default Page2Tab6;
