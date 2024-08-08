import "./MainNavBar.css"
import { NavLink } from 'react-router-dom';

export const Navbar = () => {
    return (
        < div className="main-navbar">
            <NavLink to="/page1" className={({ isActive }) => isActive ? 'active-link' : undefined}>Page1 </NavLink>
            <NavLink to="/page2" className={({ isActive }) => isActive ? 'active-link' : undefined}>Page2 </NavLink>
        </div >
    );
}