import React, { useEffect, useState } from 'react';
import './page1tab6.css'; // Import the CSS file for styling
import FormField from '../../../common/FormField'
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

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

const Page1Tab6: React.FC = () => {

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
            <section className="upper-section" style={{ height:"fit-content" }}>
                <div style={{ display: "flex" }} >
                    <FormField
                        label="Consultant"
                        name="Consultant"
                        control={control}
                        errors={errors.Consultant}
                        className="small-input disabled"
                    />
                    <FormField
                        label="Project"
                        name="Project"
                        control={control}
                        errors={errors.Project}
                        className="small-input disabled"
                    />
                    <input style={{ height: "27px", marginTop: "25px", width: "30px" }} className="disabled"></input>
                </div>
                <label></label>
                <div className="form-field">
                    <label>cp1</label>
                    <div style={{ display:"flex" }}>
                        <input style={{ height: "27px",width: "30px" }} className="disabled"></input>
                        <input style={{ height: "27px",marginLeft: "20px" }} className="disabled"></input>
                    </div>
                </div>
                <div className="form-field">
                    <label>Agency</label>
                    <div style={{ display:"flex" }}>
                        <input style={{ height: "27px", width: "50px" }} className="disabled"></input>
                        <input style={{ height: "27px", marginLeft: "20px" }} className="disabled"></input>
                    </div>
                </div>
            </section>
            <form onSubmit={handleSubmit(onSubmit)} className="form-container">
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
                    <button style={{ marginTop: "20px" }}>Auto Summary</button>
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
            <div class="buttons-section">
                <button type="submit">Edit</button>
                <button type="submit">Save</button>
                <button type="submit">Undo</button>
            </div>
        </div>
    );
};

export default Page1Tab6;
