// Table.tsx
import React, { useState } from 'react';

const Approval: React.FC = () => {

    return (
        <div style={{
            height: "500px", display: "flex", justifyContent: "center", alignItems: "center"}}>
            <div>
                <h4>
                    Chapter Number:
                    <input
                        type="text"
                        name="chapterNumber"
                    />
                </h4>
                <section style={{ display:"flex" }}>
                    <div>
                        <input type="radio" name="option" defaultChecked /><label>Regular Monthly Processing</label>
                        <input type="radio" name="option" /><label> Processing</label>
                        <input type="radio" name="option" /><label>Remove Director Approval Report run on</label>
                    </div>
                    <h4>
                        Reprint for date:
                        <input
                            type="date"
                            name="date"
                        />
                    </h4>
                </section>
                <section style={{ marginTop: "30px", display: "flex", justifyContent:"center" }}>
                    <button>Reprint</button>
                </section>
            </div>
        </div>
    );
};

export default Approval;
