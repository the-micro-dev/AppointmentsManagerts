import React, { useState, useEffect } from 'react';
import FormField from '../../../common/FormField';
import PickAgency from '../../../common/Page1/PickAgency'
import PickRecipient from '../../../common/Page1/PickRecipient'
import PickProject from '../../../common/Page1/PickProject'
import Modal from '../../../common/Modal/Modal';

interface AddItemProps {
    selectedAgency: IPickAgency;
    selectedRecipient: IDistributionRecipient;
    onSave: (data: any) => void;
}

const AddItem: React.FC<AddItemProps> = ({ selectedAgency, selectedRecipient, onSave }) => {


    const [showPopup, setShowPopup] = useState(false);
    const [showPopup1, setShowPopup1] = useState(false);
    const [showPopup2, setShowPopup2] = useState(false);
    const [formData, setFormData] = useState({
        agency: selectedAgency,
        recipient: selectedRecipient,
        mainAddress: '',
        // Add other fields here
    });

    // Toggle visibility functions
    const openModal = () => { setShowPopup(true); setShowPopup1(false); setShowPopup2(false) }
    const closeModal = () => {
        setShowPopup(false); setShowPopup1(false); setShowPopup2(false) 
    }
    const openModal1 = () => { setShowPopup1(true); setShowPopup(false); setShowPopup2(false) };
    const closeModal1 = () => { setShowPopup1(false); setShowPopup(false); setShowPopup2(false) };
    const openModal2 = () => { setShowPopup2(true); setShowPopup(false); setShowPopup1(false) };
    const closeModal2 = () => { setShowPopup2(false); setShowPopup(false); setShowPopup1(false) };
    const handleAgencySelect = (agency: any) => {
        setFormData(prev => ({ ...prev, agency }));
        closeModal2();
    };
    const handleRecipientSelect = (recipient: any) => {
        setFormData(prev => ({ ...prev, recipient }));
        closeModal2();
    };

    const handleSave = () => {
        onSave(formData);
    };


    return (
        <div className="add-item-container">
                <section>
                    <div style={{display:"flex"} }>
                    <h6>Project</h6>
                   
                    <button style={{ margin: "auto 0 auto auto" }} onClick={openModal2}>Pick Project</button>
                    <Modal isVisible={showPopup2} onClose={closeModal2} title="Pick Agency">
                        <PickProject></PickProject>
                    </Modal>
                    </div>
                <input></input>
                    <FormField
                        label="Project"
                        name="Project"
                    />
                    <input>
                    </input><textarea></textarea>
                </section>

            <section >
                <div style={{ display: "flex" }}>
                    <h6>Agency</h6>
                    <button style={{ margin: "auto 0 auto auto" }} onClick={openModal}>Pick Agency</button>
                    <Modal isVisible={showPopup} onClose={closeModal} title="Pick Agency">
                        <PickAgency onSelect={handleAgencySelect}></PickAgency>
                    </Modal>
                </div>
                <div></div>
                <div>
                    <FormField
                        label="Agency"
                        name="Agency"
                        defaultValue={formData.agency?.AgencyName}
                    />
                    <input defaultValue={formData.agency?.Division}></input>
                    <textarea defaultValue={formData.agency?.SaasCode}></textarea>
                </div>
                <div>
                    <FormField
                        label="Address"
                        name="Address"
                        defaultValue={formData.agency?.Address1}
                    />
                    <input defaultValue={formData.agency?.Address2}></input>
                </div>
                <div style={{ display: "contents" }}>
                    <FormField
                        label="City"
                        name="City"
                        defaultValue={formData.agency?.City}
                    />
                    <FormField
                        label="State"
                        name="State"
                        defaultValue={formData.agency?.State}
                    />
                    <FormField
                        label="Zip"
                        name="Zip"
                        defaultValue={formData.agency?.Zip}
                    />

                    <div style={{ display: "ruby" }}>
                        <input style={{ height: "15px", marginTop: "20px" }} type="checkbox" defaultChecked={formData.agency?.HandMail}></input>
                        <label>HandMail</label>
                    </div>

                </div>
            </section>

            <section>
                <div style={{ display: "flex" }}>
                    <h6>Recipient</h6>
                    <button style={{ margin: "auto 0 auto auto" }} onClick={openModal1}>Pick Recipient</button>
                    <Modal isVisible={showPopup1} onClose={closeModal1} title="Pick Recipient">
                        <PickRecipient onSelect={handleRecipientSelect}></PickRecipient>
                    </Modal>
                </div>
                <div style={{ display:"flex",gap:"5px" }}>
                    <input></input>
                    <input>
                    </input>
                    <input></input>
                </div>
                <FormField
                    label="RfpNo"
                    name="RfpNo"
                    defaultValue={formData.recipient?.id}
                />
                <input defaultValue={formData.recipient?.Email}>
                </input >
                <input defaultValue={formData.recipient?.FirstName} ></input>
                <FormField
                    label="ProcuremenetType"
                    name="ProcuremenetType"
                />
                <FormField
                    label="Approval_Category"
                    name="Approval_Category"
                />
                <FormField
                    label="Target_mm"
                    name="Target_mm"
                />
                <FormField
                    label="Target_yy"
                    name="Target_yy"
                />
                <FormField
                    label="Division"
                    name="Division"
                />
            </section>
            <button onClick={handleSave }>Save</button>

        </div>
    );
};

export default AddItem;