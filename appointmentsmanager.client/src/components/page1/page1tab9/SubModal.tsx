import React from 'react';
import Modal from '../../../common/Modal/Modal';
import { IDistribution } from '../../../common/Interfaces';

interface ChildFormModalProps {
    isVisible: boolean;
    onClose: () => void;
    formData: IDistribution;
    onFormChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
    onSave: () => void;
    onSearchOpen: () => void;
}

const SubModal: React.FC<ChildFormModalProps> = ({ isVisible, onClose, formData, onFormChange, onSave, onSearchOpen }) => {
    if (!isVisible) return null;

    return (
        <Modal isVisible={isVisible} onClose={onClose} title="Add/Edit Record">
            <div>
                <div style={{ display: "grid" }}>
                    <label htmlFor="lmn">
                        Only lmn Partners People/Contacts
                        <input type="radio" name="contactType" value="lmn" id="lmn" defaultChecked style={{ width: "auto" }} />
                    </label>
                    <label htmlFor="all">
                        All People/Contacts
                        <input type="radio" name="contactType" value="all" id="all" style={{ width: "auto" }} />
                    </label>
                    <button onClick={onSearchOpen}>Find</button>
                </div>

                <label>
                    Name:
                    <input type="text" name="name" value={formData.name} onChange={onFormChange} />
                </label>
                <label>
                    Agency:
                    <input type="text" name="agency" value={formData.agency} onChange={onFormChange} />
                </label>
                <label>
                    Address1:
                    <input type="text" name="address1" value={formData.address1} onChange={onFormChange} />
                </label>
                <label>
                    Address2:
                    <input type="text" name="address2" value={formData.address2} onChange={onFormChange} />
                </label>
                <label style={{ display: "flex", gap: "10px" }}>
                    <label style={{ alignSelf: "center" }}>City/State/Zip:</label>
                    <input type="text" name="city" value={formData.city} onChange={onFormChange} />
                    <input type="text" name="state" value={formData.state} onChange={onFormChange} />
                    <input type="number" name="zip" value={formData.zip} onChange={onFormChange} />
                    <input type="checkbox" name="handmail" checked={formData.handmail} onChange={onFormChange} style={{ width: "auto", height: "auto" }} />
                    <label htmlFor="handmail"> Hand Mail</label>
                </label>
                <label>
                    Fax:
                    <input type="text" name="fax" value={formData.fax} onChange={onFormChange} />
                </label>
                <label>
                    Email:
                    <input type="text" name="email" value={formData.email} onChange={onFormChange} />
                </label>
                <label>
                    Delivery Method:
                    <select name="deliverymethod" id="deliverymethod" value={formData.deliverymethod} onChange={onFormChange}>
                        <option value="email">Email</option>
                        <option value="fax">Fax</option>
                    </select>
                </label>
                <button onClick={onSave}>Confirm</button>
            </div>
        </Modal>
    );
};

export default SubModal;
