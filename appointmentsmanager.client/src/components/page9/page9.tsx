import React, { useState } from 'react'
import data1 from '../../common/SampleFiles/DetailsbyApproval.json'
import data2 from '../../common/SampleFiles/cloneitem.json'
import { useLocation } from 'react-router-dom'
import './page9.css'
import Modal from '../../common/Modal/Modal';
import MainCodes from './codes/MainCodes'
import Archive from './archive'

const Page9Content: React.FC = () => {
    const location = useLocation();
    const pathname = location.pathname;
    const [showPopup, setShowPopup] = useState(false);
    const openModal = () => { setShowPopup(true)}
    const closeModal = () => {
        setShowPopup(false)
    }

    return (
        <>
            {pathname === '/cleanup' &&
                <div style={{
                    height: "500px", display: "flex", justifyContent: "center", alignItems: "center"
                }}>
                    <div className="utilities">
                        <h4>
                            For now processing, only top and bottom boxes
                            (NOT rebuild indexes) should be checked
                        </h4>
                        <ul className="utilities-checkbox">
                            <input id="checkid" type="checkbox" value="test" style={{ verticalAlign: "middle" }} />
                            <label htmlFor="checkid">   "Delete" Blank Records</label>
                        </ul>
                        <section style={{ display: "flex" }} className="wrapper">
                            <i>
                                You must have exclusive use of the data(i.e. no one else can be using this
                                application) for these processes to run successfully
                            </i>
                            <li className="utilities-checkbox">
                                <input id="checkid" type="checkbox" value="test" style={{ verticalAlign: "middle" }} />
                                <label htmlFor="checkid">   "Delete" Blank Records</label>
                            </li>
                            <li className="utilities-checkbox">
                                <input id="checkid" type="checkbox" value="test" style={{ verticalAlign: "middle" }} />
                                <label htmlFor="checkid">   "Delete" Blank Records</label>
                            </li>
                        </section>
                        <b >Do not run this from VFP with Project Manager Open</b>
                        <section style={{ marginTop: "30px", display: "flex", justifyContent: "center",gap:"20px" }}>
                            <button>Check Users</button>

                            <button onClick={openModal}>Clean</button>
                            <Modal isVisible={showPopup} onClose={closeModal} title="FYI">
                                <div>Your are about to run Cleanup. If you are running on a network;<br/>
                                    you must be the only
                                    one using the application.
                                    Are you sure you want to continue?</div>
                                <section style={{ marginTop:"20px" }}>
                                    <button onClick={closeModal}>Yes</button>

                                    <button onClick={closeModal} style={{ marginLeft:"20px" }}>No</button>
                                </section>
                            </Modal>
                        </section>
                    </div>
                </div>
            }
            {pathname === '/maintaincodes' && <MainCodes></MainCodes>}
            {pathname === '/archive' && <Archive></Archive>}
        </>
    );
}

const Page9: React.FC = () => (
    <Page9Content />
);

export default Page9;
