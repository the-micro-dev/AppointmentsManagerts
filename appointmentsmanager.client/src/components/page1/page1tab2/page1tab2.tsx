import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import FormField from '../../../common/FormField'
import './page1tab2.css'
import Modal from '../../../common/Modal/Modal';
import PickAgency from '../../../common/Page1/PickAgency'
import React, { useState, useEffect } from 'react';

// Define validation schema with Yup
const schema = Yup.object().shape({
    PartnerCodency: Yup.string(),
    address: Yup.string(),
    procurementtype: Yup.string(),
    saasCode: Yup.string(),
    city: Yup.string(),
    partnercode: Yup.number(),
    attn: Yup.number(),
    sendBy: Yup.number(),
    email: Yup.number(),
    department: Yup.number(),
    EffectiveDate: Yup.number(),
    CampusLocation: Yup.number(),
    fax: Yup.string(),
    AcquisitionMethod: Yup.string(),
    ExpirationDate: Yup.string(),
    AuthorityDate: Yup.string(),
    ApprovalCategory: Yup.string(),
    AnnualIncrease: Yup.number(),
    PaymentAmount: Yup.number(),
    ReplacementCategory: Yup.string(),
    GrandTotal: Yup.string(),
    Frequency: Yup.string(),
    NumPayments: Yup.number(),
    MNumPayments: Yup.number(),
    Link: Yup.string(),
    Consultant: Yup.string(),
    Project: Yup.string(),

});

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

const Ppartnercode1Tab2: React.FC = () => {
    const { handleSubmit, control, formState: { errors } } = useForm<FormValues>({
        resolver: yupResolver(schema),
        defaultValues: {
            terms: false,
            membership: false,
        },
    });

    const [showPopup, setShowPopup] = useState(false);

    // Toggle visibility functions
    const openModal = () => setShowPopup(true);
    const closeModal = () => setShowPopup(false);

    const onSubmit = (data: FormValues) => {
        console.log('Form data', data);
    };

    return (
        <div>
            <section className="upper-section">
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
                    <input style={{ height: "27px", marginTop: "25px", width: "30px"}} className="disabled"></input>
                    <input style={{ height: "27px", marginTop: "25px", marginLeft: "20px" }} className="disabled"></input>
                </div>
                
            </section>
            <form onSubmit={handleSubmit(onSubmit)} className="form-container tab2">
                    <FormField
                        label="Agency(Partner)"
                        name="PartnerCodency"
                        control={control}
                        errors={errors.PartnerCodency}
                />
                <button style={{ height: "27px", marginTop: "20px" }} onClick={openModal}>Pick</button>
                <Modal isVisible={showPopup} onClose={closeModal} title="Pick Agency">
                    <PickAgency></PickAgency>
                </Modal>


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
                        <input style={{ height: "15px", marginTop: "20px" }}type="checkbox"></input>
                        <label>HandMail</label>
                    </div>
                    <button style={{ height: "27px", marginTop: "20px" }}>Pick</button>
                </div>
                <FormField
                    label="Email"
                    name="email"
                    control={control}
                    errors={errors.email}
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
                    errors={errors.PaymentAmount}
                />
                <FormField
                    label="Frequcnyy"
                    name="Frequency"
                    as="select"
                    control={control}
                    options={[
                        { value: 'Onetime', label: 'Onetime' },
                        { value: '', label: '' }
                    ]}
                    errors={errors.Frequency}
                />
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
                <FormField
                    label="Link"
                    name="Link"
                    control={control}
                    errors={errors.Link}
                />
                <div style={{ display:"ruby" }}>
                    <input style={{ height: "15px", marginTop: "20px" }} type="checkbox"></input>
                    <label>Contract Doc Required</label>
                </div>
               

                <button type="submit">Edit </button>
                <label></label>
                <div class="buttons-section">
                    <button type="submit">Submit</button>
                    <button type="submit">Edit</button>
                    <button type="submit">Undo</button>
                    <button type="submit">Submit</button>
                    <button type="submit">Edit</button>
                    <button type="submit">Undo</button>
                </div>
            </form>
        </div>
    );
};
export default Ppartnercode1Tab2;
