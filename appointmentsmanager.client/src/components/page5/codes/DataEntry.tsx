// EnterScreen.tsx
import React, { useEffect, useState } from 'react';
import './ReviewCodes.css'
interface Record {
    id: number;
    prodCadCode?: number;
    description: string;
    objectCode: string;
    phone: string;
    address: string;
}
interface DataEntryProps {
    record: Record | null;
    onSave: (record: Record) => void;
}

const DataEntry: React.FC<DataEntryProps> = ({ record, onSave }) => {
    const [formData, setFormData] = useState<Record>({
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
            <h4>
                ProdCatCodes:
                <input
                    type="text"
                    name="prodCadCode"
                    value={formData.prodCadCode}
                    onChange={handleChange}
                />
            </h4>
            <h4>
                Object Code:
                <input
                    type="text"
                    name="objectCode"
                    value={formData.objectCode}
                    onChange={handleChange}
                />
            </h4>
            <h4 style={{ marginTop: "30px" }}>
                Description:
                <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                />
            </h4>
            <button onClick={handleSave}>Save</button>
        </div>
    );
};

export default DataEntry;
