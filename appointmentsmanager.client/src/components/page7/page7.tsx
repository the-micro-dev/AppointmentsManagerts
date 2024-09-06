// Table.tsx
import React, { useState } from 'react';
import './page7.css'

const Page7: React.FC = () => {

    return (
        <div style={{
            display: "flex", justifyContent: "center", alignItems: "center"
        }} className="reports-comp">
            <div>
                <section style={{ marginTop: "30px", display: "flex"}}>
                    <h4>
                        Start Date:
                        <input
                            type="date"
                            name="startdate"
                        />
                    </h4>
                </section>
                <section style={{ display: "flex", justifyContent: "center" }}>

                    <h4 style={{ paddingRight:"30px" }}>
                        Stop Date:
                        <input
                            type="date"
                            name="stopdate"
                        />
                        <label>(Based on Roll Date)</label>
                    </h4>
                    <div style={{ display: "block", alignContent:"center" }}>
                        <input style={{ height: "15px" }} type="checkbox"></input>
                        <label>Browse instead of print</label>
                    </div>
                </section>
                <section style={{ display: "flex", flexDirection: "column",gap:"20px" }}>
                    <button>1. Print Details By Approval Cat,Type. Replacement Cat</button>
                    <button>2. Print Summary By Approval Cat,Type. Replacement Cat</button>
                    <button>3. Print Summary By AMajor Category</button>
                    <button>4. Create Vendor List Text File</button>
                    <button>5. Print Vendor Dollar Summary</button>
                    <button>5. Print Vendor Dollar Summary-Consulting Services</button>
                    <button>6. Print Details for General/Special RFP Counts</button>
                </section>
                <h4>
                    Report Subtitle:
                    <input
                        type="text"
                        name="startdate"
                    />
                </h4>
            </div>
        </div>
    );
};

export default Page7;
