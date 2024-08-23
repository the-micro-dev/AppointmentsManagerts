import { useForm } from 'react-hook-form';
import FormField from '../../../common/FormField'
import './page2tab2.css'
import React from 'react';
import { useData } from '../../../common/DataContextProvider';

type FormValues = {
    PartnerCodency: string;
    address: string;
    procurementtype: string;
    saasCode: string;
    city: string;
    partnercode: number;
    attn: string;
    sendBy: string;
    phoneNumber: string;
    fax: string;
    email: string;
    department: string;
    EffectiveDate: Date | null;
    CampusLocation: string;
    AcquisitionMethod: string;
    ExpirationDate: Date | null;
    AuthorityDate: Date | null;
    ApprovalCategory: string;
    AnnualIncrease: number;
    PaymentAmount: number;
    ReplacementCategory: string;
    GrandTotal: string;
    Frequency: string;
    NumPayments: number;
    MNumPayments: number;
    Link: string;
    Consultant: string;
    Project: string;
};

const Page2Tab2: React.FC = () => {
    const { handleSubmit, control, formState: { errors } } = useForm<FormValues>({
        defaultValues: {
            terms: false,
            membership: false,
        },
    });
    const { state, setState } = useData();

    const onSubmit = (data: FormValues) => {
        console.log('Form data', data);
    };

    return (
        <div>
            <section className="upper-section">
                <div style={{ display: "flex" }} >
                    <FormField
                        label="Consultant"
                        name="Agency_name"
                        control={control}
                        errors={errors.Consultant}
                        className="small-input disabled"
                        defaultValue={state.cp1?.Replacement}
                    />
                    <FormField
                        label="Project"
                        name="Project"
                        control={control}
                        errors={errors.Project}
                        className="small-input disabled"
                        defaultValue={state.project?.project_id}
                    />
                    <input style={{ height: "27px", marginTop: "25px", width: "30px" }} className="disabled"></input>
                </div>
                <FormField
                    label="AcquisitionMethod"
                    name="AcquisitionMethod"
                    as="select"
                    control={control}
                    options={[
                        { value: 'Purchase', label: 'Purchase' },
                        { value: 'Sell', label: 'Sell' }
                    ]}
                    errors={errors.AcquisitionMethod}
                />
                <div style={{ display: "flex" }} >
                    <label>CP1</label>
                    <input style={{ height: "27px", marginTop: "25px", width: "30px" }} className="disabled"></input>
                    <input style={{ height: "27px", marginTop: "25px", marginLeft: "20px" }} className="disabled"></input>
                </div>

            </section>
            <form onSubmit={handleSubmit(onSubmit)} className="form-container tab2">
                <FormField
                    label="Agency(Partner)"
                    name="PartnerCodency"
                    control={control}
                    errors={errors.PartnerCodency}
                    defaultValue={state.agency?.AgencyName}
                />
                <div></div>

                <FormField
                    label="Address"
                    name="address"
                    as="textarea"
                    control={control}
                    errors={errors.address}
                />
                <div>
                    <FormField
                        label="ProcurementType"
                        name="procurementtype"
                        as="select"
                        control={control}
                        options={[
                            { value: '', label: 'Select' },
                            { value: 'male', label: 'Male' },
                            { value: 'female', label: 'Female' },
                            { value: 'other', label: 'Other' }
                        ]}
                        errors={errors.procurementtype}
                    />
                    <FormField
                        label="Saas Code"
                        name="saasCode"
                        control={control}
                        errors={errors.saasCode} className="disabled"
                    />
                </div>

                <FormField
                    label="City/State/Zip"
                    name="city"
                    control={control}
                    errors={errors.city}
                />

                <FormField
                    label="Partner Code"
                    name="partnercode"
                    control={control}
                    errors={errors.city}
                />
                <FormField
                    label="Attn"
                    name="attn"
                    control={control}
                    errors={errors.city}
                />
                <div></div>
                <FormField
                    label="Send By"
                    name="sendBy"
                    as="select"
                    control={control}
                    options={[
                        { value: 'email', label: 'Email' },
                        { value: 'phone', label: 'Phone' },
                    ]}
                    errors={errors.sendBy}
                />

                <div style={{ display: "flex" }} >
                    <FormField
                        label="fax"
                        name="fax"
                        control={control}
                        errors={errors.fax}
                        className="small-input"
                    />
                    <div>
                        <input style={{ height: "15px", marginTop: "20px" }} type="checkbox"></input>
                        <label>HandMail</label>
                    </div>
                </div>
                <FormField
                    label="Email"
                    name="email"
                    control={control}
                    errors={errors.email}
                    defaultValue={state.recipient?.Email}
                />
                <div></div>

                <FormField
                    label="Departments(s)"
                    name="department"
                    control={control}
                    errors={errors.department}
                />
                <FormField
                    label="Effective date"
                    name="EffectiveDate"
                    type="date"
                    control={control}
                    className="right-half-field"
                    errors={errors.saasCode}
                />

                <FormField
                    label="CampusLocation"
                    name="CampusLocation"
                    as="textarea"
                    control={control}
                    errors={errors.CampusLocation}
                />
                <FormField
                    label="ExpirationDate"
                    name="ExpirationDate"
                    control={control}
                    type="date"
                    className="right-half-field"
                    errors={errors.ExpirationDate}
                />
                <FormField
                    label="AcquisitionMethod"
                    name="AcquisitionMethod"
                    as="select"
                    control={control}
                    options={[
                        { value: 'Purchase', label: 'Purchase' },
                        { value: 'Sell', label: 'Sell' }
                    ]}
                    errors={errors.AcquisitionMethod}
                />

                <FormField
                    label="AuthorityDate"
                    name="AuthorityDate"
                    control={control}
                    type="date"
                    className="right-half-field"
                    errors={errors.ExpirationDate}
                />
                <FormField
                    label="ApprovalCategory"
                    name="ApprovalCategory"
                    as="select"
                    control={control}
                    options={[
                        { value: 'Authority Apr', label: 'Authority Appr' },
                        { value: '', label: '' }
                    ]}
                    errors={errors.ApprovalCategory}
                />
                <div style={{display:"flex",gap:"2%"} }>
                <FormField
                    label="Max Annual Increase %"
                    name="AnnualIncrease"
                    control={control}
                    type="number"
                    errors={errors.ExpirationDate}
                />
                <FormField
                    label="Payment Amount"
                    name="PaymentAmount"
                    control={control}
                    type="number"
                    errors={errors.PaymentAmount}
                    />
                </div>
                <FormField
                    label="Replacement Category"
                    name="ReplacementCategory"
                    as="select"
                    control={control}
                    options={[
                        { value: 'Subsequent', label: 'Subsequent' },
                        { value: '', label: '' }
                    ]}
                    errors={errors.ReplacementCategory}
                />
                <FormField
                    label="Grand Total"
                    name="GrandTotal"
                    control={control}
                    type="number"
                    className="right-half-field"
                    errors={errors.PaymentAmount}
                />
                <FormField
                    label="Frequencyy"
                    name="Frequency"
                    as="select"
                    control={control}
                    options={[
                        { value: 'Onetime', label: 'Onetime' },
                        { value: '', label: '' }
                    ]}
                    errors={errors.Frequency}
                />
                <div></div>
                <div style={{ display: "flex" }} >
                    <FormField
                        label="Num Payments"
                        name="NumPayments"
                        control={control}
                        type="number"
                        errors={errors.NumPayments}
                        className="small-input"
                    />
                    <FormField
                        label="MNum Payments"
                        name="MNumPayments"
                        control={control}
                        type="number"
                        errors={errors.NumPayments}
                        className="small-input"
                    />
                </div>
                <div></div>
                <div style={{ display: "ruby" }}>
                    <input style={{ height: "15px", marginTop: "20px" }} type="checkbox"></input>
                    <label>Contract Doc Required</label>
                </div>


                <button type="submit" style={{ width: "fit-content" }} >Edit Check Cp1 </button>
            </form>
        </div>
    );
};
export default Page2Tab2;
