import "./MainNavBar.css"
import { NavLink } from 'react-router-dom';
import React, { useState, useRef } from 'react';

export const Navbar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
    const [isDropdown2Open, setIsDropdown2Open] = useState<boolean>(false);
    const [isDropdown3Open, setIsDropdown3Open] = useState<boolean>(false);
    const [isDropdown4Open, setIsDropdown4Open] = useState<boolean>(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Toggle the dropdown menu
    const toggleDropdown = () => { setIsDropdownOpen(!isDropdownOpen); setIsDropdown2Open(false); setIsDropdown3Open(false); setIsDropdown4Open(false) };
    const toggleDropdown2 = () => { setIsDropdown2Open(!isDropdown2Open); setIsDropdownOpen(false); setIsDropdown3Open(false); setIsDropdown4Open(false) };
    const toggleDropdown3 = () => { setIsDropdown3Open(!isDropdown3Open); setIsDropdownOpen(false); setIsDropdown2Open(false); setIsDropdown4Open(false) };
    const toggleDropdown4 = () => { setIsDropdown4Open(!isDropdown4Open); setIsDropdownOpen(false); setIsDropdown2Open(false); setIsDropdown3Open(false) };

    return (
        < div className="main-navbar">
            <NavLink to="/page1" className={({ isActive }) => isActive ? 'active-link' : undefined}>Page1 </NavLink>
            <NavLink to="/page2" className={({ isActive }) => isActive ? 'active-link' : undefined}>Page2 </NavLink>
            <NavLink to="/page3" className={({ isActive }) => isActive ? 'active-link' : undefined}>Page3 </NavLink>
            <div className="dropdown" ref={dropdownRef}>
                <NavLink
                    to="/page5"
                    className={({ isActive }) => isActive ? 'active-link' : undefined}
                >
                <div className="dropdown-toggle" onClick={toggleDropdown}>
                    Page5
                    </div>

                </NavLink>
                {isDropdownOpen && (
                    <ul className="dropdown-menu">
                        <li style={{ margin: "0px" }} onClick={toggleDropdown}><NavLink to="/codes" className={({ isActive }) => isActive ? 'active-link' : undefined}>Maintain Prod Cat Codes</NavLink></li>
                        <li style={{ margin: "0px" }} onClick={toggleDropdown}><NavLink to="/agencies" className={({ isActive }) => isActive ? 'active-link' : undefined}>Maintain Saas Agencies</NavLink></li>
                        <li style={{ pointerEvents: "none", margin: "0px" }} onClick={toggleDropdown}><NavLink to="/item3" className={({ isActive }) => isActive ? 'active-link' : undefined} style={{color:"gray"} }>Saas Processing</NavLink></li>
                    </ul>
                )}
            </div>
            <div className="dropdown" ref={dropdownRef}>
                <NavLink
                    to="/page6"
                    className={({ isActive }) => isActive ? 'active-link' : undefined}
                >
                    <div className="dropdown-toggle" onClick={toggleDropdown2}>
                        Page6
                    </div>

                </NavLink>
                {isDropdown2Open && (
                    <ul className="dropdown-menu">
                        <li style={{ margin: "0px" }} onClick={toggleDropdown2}><NavLink to="/directorApproval" className={({ isActive }) => isActive ? 'active-link' : undefined}>Director Approvals</NavLink></li>
                        <li style={{ margin: "0px" }} onClick={toggleDropdown2}><NavLink to="/unarchive" className={({ isActive }) => isActive ? 'active-link' : undefined}>UnArchive CP1</NavLink></li>
                    </ul>
                )}
            </div>
            <div className="dropdown" ref={dropdownRef}>
                    <div className="dropdown-toggle" onClick={toggleDropdown3}>
                        Other Reports
                    </div>
                {isDropdown3Open && (
                    <ul className="dropdown-menu">
                        <li style={{ margin: "0px" }} onClick={toggleDropdown3}><NavLink to="/reports" className={({ isActive }) => isActive ? 'active-link' : undefined}>Annual\Summary Reports</NavLink></li>
                    </ul>
                )}
            </div>
            <NavLink to="/contracts" className={({ isActive }) => isActive ? 'active-link' : undefined}>Review/Maint Contracts </NavLink>
            <div className="dropdown" ref={dropdownRef}>
                <div className="dropdown-toggle" onClick={toggleDropdown4}>
                    Utilities
                </div>
                {isDropdown4Open && (
                    <ul className="dropdown-menu">
                        <li style={{ margin: "0px" }} onClick={toggleDropdown4}><NavLink to="/cleanup" className={({ isActive }) => isActive ? 'active-link' : undefined}>Cleanup</NavLink></li>
                        <li style={{ margin: "0px" }} onClick={toggleDropdown4}><NavLink to="/maintaincodes" className={({ isActive }) => isActive ? 'active-link' : undefined}>Maintain Codes</NavLink></li>
                        <li style={{ margin: "0px" }} onClick={toggleDropdown4}><NavLink to="/archive" className={({ isActive }) => isActive ? 'active-link' : undefined}>Archiving</NavLink></li>
                        <li style={{ margin: "0px" }} onClick={toggleDropdown4}><NavLink to="/sanitychecks" className={({ isActive }) => isActive ? 'active-link' : undefined}>Sanity Checks</NavLink></li>
                    </ul>
                )}
            </div>
        </div >
    );
}