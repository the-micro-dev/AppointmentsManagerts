import React, { useState } from 'react'

const options = ['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5'];
const options2=["Look in Lines","Look in Summary","Look in Comment"]

const Page3: React.FC = () => {

    const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value, checked } = event.target;
        if (checked) {
            // Add the selected option
            setSelectedOptions([...selectedOptions, value]);
        } else {
            // Remove the deselected option
            setSelectedOptions(selectedOptions.filter((option) => option !== value));
        }
    };

    return (
        <div className="page3">
            <div style={{ display: 'flex', justifyContent: 'space-between', width: '400px' }}>
                {/* First gender group */}
                <div>
                    <label style={{ fontWeight: 'bold' }}>Gender *</label>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <label style={{ display: 'inline-flex', alignItems: 'center' }}>
                            <input
                                type="radio"
                                name="gender1"
                                value="Male"
                                style={{ marginRight: '8px' }}
                            />
                            Male
                        </label>
                        <label style={{ display: 'inline-flex', alignItems: 'center' }}>
                            <input
                                type="radio"
                                name="gender1"
                                value="Female"
                                style={{ marginRight: '8px' }}
                            />
                            Female
                        </label>
                        <label style={{ display: 'inline-flex', alignItems: 'center' }}>
                            <input
                                type="radio"
                                name="gender1"
                                value="Other"
                                style={{ marginRight: '8px' }}
                            />
                            Other
                        </label>
                    </div>
                </div>

                {/* Second gender group */}
                <div>
                    <label style={{ fontWeight: 'bold' }}>Gender *</label>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <label style={{ display: 'inline-flex', alignItems: 'center' }}>
                            <input
                                type="radio"
                                name="gender2"
                                value="Male"
                                style={{ marginRight: '8px' }}
                            />
                            Male
                        </label>
                        <label style={{ display: 'inline-flex', alignItems: 'center' }}>
                            <input
                                type="radio"
                                name="gender2"
                                value="Female"
                                style={{ marginRight: '8px' }}
                            />
                            Female
                        </label>
                        <label style={{ display: 'inline-flex', alignItems: 'center' }}>
                            <input
                                type="radio"
                                name="gender2"
                                value="Other"
                                style={{ marginRight: '8px' }}
                            />
                            Other
                        </label>
                    </div>
                </div>

                <div>
                    <label style={{ fontWeight: 'bold' }}>Gender *</label>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <label style={{ display: 'inline-flex', alignItems: 'center' }}>
                            <input
                                type="radio"
                                name="gender1"
                                value="Male"
                                style={{ marginRight: '8px' }}
                            />
                            Male
                        </label>
                        <label style={{ display: 'inline-flex', alignItems: 'center' }}>
                            <input
                                type="radio"
                                name="gender1"
                                value="Female"
                                style={{ marginRight: '8px' }}
                            />
                            Female
                        </label>
                        <label style={{ display: 'inline-flex', alignItems: 'center' }}>
                            <input
                                type="radio"
                                name="gender1"
                                value="Other"
                                style={{ marginRight: '8px' }}
                            />
                            Other
                        </label>
                    </div>
                </div>
            </div>
            <div>
                <section style={{ display: "flex", flexDirection: "column" }}>
                    <b>Select By:</b>
                    {options.map((option) => (
                        <label key={option} style={{ display: 'inline-flex', alignItems: 'center' }}>
                            <input
                                type="checkbox"
                                value={option}
                                checked={selectedOptions.includes(option)}
                                onChange={handleCheckboxChange}
                                style={{ width:'20px' }}
                            />
                            {option}
                        </label>))}

                    <div style={{ display: "flex" }} >
                        <label>Consultant</label>
                        <input style={{ height: "27px", marginTop: "25px", width: "130px" }} className="disabled"></input>
                        <label>Project</label>
                        <input style={{ height: "27px", marginTop: "25px", width: "130px" }} className="disabled"></input>
                        <input style={{ height: "27px", marginTop: "25px", marginLeft: "60px" }} className="disabled"></input>
                    </div>
                </section>
                <section style={{ display: "flex", flexDirection: "column", border: "2px solid grey",padding:"20px" }}>
                {options2.map((option) => (
                    <label key={option} style={{ display: 'inline-flex', alignItems: 'center' }}>
                        <input
                            type="checkbox"
                            value={option}
                            checked={selectedOptions.includes(option)}
                            onChange={handleCheckboxChange}
                            style={{ width: '20px' }}
                        />
                        <label style={{ width:"-webkit-fill-available" }}>{option}</label>
                        <input></input>
                    </label>))}

                    <select >
                        <option value="">Select Action</option>
                        <option value="Add">Add</option>
                        <option value="Clone">Clone</option>
                    </select>
                </section>

                <label>
                    Hint:If you want to select "Print whole"
                </label>
                <label>Consultant</label>
                <input style={{ height: "27px", marginTop: "25px", display:"flex" }} className="disabled"></input>
                <section style={{ display: "flex", gap: "20px" }}>


                <button style={{ display:"block" }}>
                Run Report
                    </button>
                    <button style={{ display: "block" }}>
                        Run Report
                    </button>
                    <button style={{ display: "block" }}>
                        Run Report
                    </button>
                </section>
            </div>
        </div>
    );
}

export default Page3;
