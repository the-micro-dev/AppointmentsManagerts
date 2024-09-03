// EnterScreen.tsx
import React, { useEffect, useState } from 'react';
import { IPickAgency } from '../../../common/Interfaces';
import sampledata from '../../../../public/pickagency.json'

interface DataEntryProps {
    record: IPickAgency | null;
    onSave: (record: IPickAgency) => void;
}

const DataEntry: React.FC<DataEntryProps> = ({ record, onSave }) => {
    const [formData, setFormData] = useState<IPickAgency>({
        prodCadCode: '',
        description: '',
        objectCode: '',
        phone: '',
        address: ''
    });

    useEffect(() => {
        if (record) {
            setFormData(record);
        } else {
            setFormData({ prodCadCode: '', description: '', objectCode: '', phone:'', address: '' });
        }
    }, [record]);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSave = () => {
        onSave(formData);
    };

    return (
        <div className="prodcatcode-dataentry">

           
            <div className="table-three-columns" style={{ border: "1px solid #ccc", padding: "50px" }}>
                <h4> Data from View</h4>
                <div >
                    <h4>
                        CompanyId:
                        <input
                            type="text"
                                name="id"
                                value={formData.id}
                            onChange={handleChange}
                            className="small-width-input"
                        />
                    </h4>
                    <h4>
                        Company:
                        <input
                            type="text"
                                name="AgencyName"
                                value={formData.AgencyName}
                            onChange={handleChange}
                        />
                    </h4>
                    <h4 >
                        Division:
                        <input
                                name="Division"
                                value={formData.Division}
                            onChange={handleChange}
                        />
                    </h4>
                </div>
                <div>
                <label>     </label>
                    <h4 >
                        SaasCode:
                        <input
                            name="SaasCode"
                            value={formData.SaasCode}
                            onChange={handleChange}
                            className="small-width-input"
                        />
                    </h4>
                    <h4 >
                        Saasdate:
                        <input
                            name="Saasdate"
                            value={formData.Saasdate}
                            onChange={handleChange}
                            className="small-width-input"
                        />
                    </h4>
                    <h4 >
                        Forissuse:
                        <input
                            name="forissuse"
                            value={formData.forissuse}
                            onChange={handleChange}
                            className="small-width-input"
                        />
                    </h4>
                </div>
            </div>
            <div style={{ padding: "50px" }} className="table-three-columns">
                <h4>Data from Saas Cross Reference File</h4>
                <div>
                <h4>
                    CompanyId:
                    <input
                        type="text"
                        name="id"
                        value={formData.id}
                        onChange={handleChange}
                        className="small-width-input"
                    />
                </h4>
                <h4>
                    Division:
                    <input
                        type="text"
                        name="Division"
                        value={formData.Division}
                        onChange={handleChange}
                    />
                </h4>
                <h4>
                    SaasCode:
                    <input
                        name="SaasCode"
                        value={formData.SaasCode}
                        onChange={handleChange}
                        className="small-width-input"
                    />
                </h4>
                <h4>
                    SaasDate:
                    <input
                        name="Saasdate"
                        value={formData.Saasdate}
                        onChange={handleChange}
                        className="small-width-input"
                    />
                    </h4>
                </div>
            </div>
            <button onClick={handleSave}>Save</button>
        </div>
    );
};

export default DataEntry;
