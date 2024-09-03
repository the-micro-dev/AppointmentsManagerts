import "./MainNavBar.css"
import { NavLink } from 'react-router-dom';
import React, { useState, useRef } from 'react';

export const Navbar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Toggle the dropdown menu
    const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

    return (
        < div className="main-navbar">
            <NavLink to="/page1" className={({ isActive }) => isActive ? 'active-link' : undefined}>Page1 </NavLink>
            <NavLink to="/page2" className={({ isActive }) => isActive ? 'active-link' : undefined}>Page2 </NavLink>
            <div className="dropdown" ref={dropdownRef}>
                <div className="dropdown-toggle" onClick={toggleDropdown}>
                    Page5
                </div>
                {isDropdownOpen && (
                    <ul className="dropdown-menu">
                        <li style={{ margin: "0px" }} onClick={toggleDropdown}><NavLink to="/codes" className={({ isActive }) => isActive ? 'active-link' : undefined}>Maintain Prod Cat Codes</NavLink></li>
                        <li style={{ margin: "0px" }} onClick={toggleDropdown}><NavLink to="/agencies" className={({ isActive }) => isActive ? 'active-link' : undefined}>Maintain Saas Agencies</NavLink></li>
                        <li style={{ pointerEvents: "none", margin: "0px" }} onClick={toggleDropdown}><NavLink to="/item3" className={({ isActive }) => isActive ? 'active-link' : undefined} style={{color:"gray"} }>Saas Processing</NavLink></li>
                    </ul>
                )}
            </div>
            <NavLink
                to="/page5"
                className={({ isActive }) => isActive ? 'active-link' : undefined}
            >
                Page5
            </NavLink>
        </div >
    );
}