// FormSection.tsx
import React from 'react';
import FormField from '../FormField'; // Assuming FormField is a custom component
import {Form } from './Page1/HeaderFormSection'

const FormSection: React.FC<FormSectionProps> = ({
    consultantValue,
    projectValue,
    input1Value,
    input2Value,
    input3Value,
    input4Value,
    control,
    errors
}) => {
    return (
        <section className="upper-section" style={{ height: "fit-content" }}>
            <div style={{ display: "flex" }}>
                <FormField
                    label="Consultant"
                    name="Consultant"
                    control={control}
                    errors={errors.Consultant}
                    className="small-input disabled"
                    value={consultantValue}
                />
                <FormField
                    label="Project"
                    name="Project"
                    control={control}
                    errors={errors.Project}
                    className="small-input disabled"
                    value={projectValue}
                />
                <input
                    style={{ height: "27px", marginTop: "25px", width: "30px" }}
                    className="disabled"
                    value={input1Value}
                    readOnly
                />
            </div>
            <label></label>
            <div className="form-field">
                <label>CP1</label>
                <div style={{ display: "flex" }}>
                    <input
                        style={{ height: "27px", width: "30px" }}
                        className="disabled"
                        value={input2Value}
                        readOnly
                    />
                    <input
                        style={{ height: "27px", marginLeft: "20px",width:"90px" }}
                        className="disabled"
                        value={input3Value}
                        readOnly
                    />
                </div>
            </div>
            <div className="form-field">
                <label>Agency</label>
                <div style={{ display: "flex" }}>
                    <input
                        style={{ height: "27px", width: "50px" }}
                        className="disabled"
                        value={input4Value}
                        readOnly
                    />
                    <input
                        style={{ height: "27px", marginLeft: "20px" }}
                        className="disabled"
                        value={input3Value}
                        readOnly
                    />
                </div>
            </div>
        </section>
    );
};

export default FormSection;
