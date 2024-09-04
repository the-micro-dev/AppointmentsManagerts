import "./MainNavBar.css"
import { NavLink } from 'react-router-dom';
import React, { useState, useRef } from 'react';

export const Navbar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
    const [isDropdown2Open, setIsDropdown2Open] = useState<boolean>(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Toggle the dropdown menu
    const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
    const toggleDropdown2 = () => setIsDropdown2Open(!isDropdown2Open);

    return (
        < div className="main-navbar">
            <NavLink to="/page1" className={({ isActive }) => isActive ? 'active-link' : undefined}>Page1 </NavLink>
            <NavLink to="/page2" className={({ isActive }) => isActive ? 'active-link' : undefined}>Page2 </NavLink>
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
        </div >
    );
}