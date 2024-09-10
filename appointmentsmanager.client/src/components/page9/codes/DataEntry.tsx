// EnterScreen.tsx
import React, { useEffect, useState } from 'react';
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
            <section style={{width:"300px"} }>
            <h4>
                Key:
                <input
                    type="text"
                    name="prodCadCode"
                    value={formData.prodCadCode}
                    onChange={handleChange}
                />
            </h4>
            <h4>
                Cvalue1:
                <input
                    type="text"
                    name="objectCode"
                    value={formData.objectCode}
                    onChange={handleChange}
                />
            </h4>
            <h4>
                Cvalue2:
                <input
                    type="text"
                    name="objectCode"
                    value={formData.objectCode}
                    onChange={handleChange}
                />
            </h4>
            <h4>
                Nvalue1:
                <input
                    type="text"
                    name="objectCode"
                    value={formData.objectCode}
                    onChange={handleChange}
                />
            </h4>
            <h4>
                Dvalue:
                <input
                    type="text"
                    name="objectCode"
                    value={formData.objectCode}
                    onChange={handleChange}
                />
                </h4>
            </section>
            <div className="entry-dates">
                <h4>
                    Added:
                    <input
                        type="date"
                        name="added"
                    />
                </h4>
                <h4>
                    Last Modified:
                    <input
                        type="date"
                        name="modified"
                    />
                </h4>
            </div>
            <div>
                <button onClick={handleSave}>Save</button>
            </div>
        </div>
    );
};

export default DataEntry;
