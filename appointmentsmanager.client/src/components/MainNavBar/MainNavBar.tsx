import "./MainNavBar.css"
import { NavLink } from 'react-router-dom';

export const Navbar = () => {
    return (
        < div className="main-navbar">
                <NavLink to="/page1" activeClassName="active-link">Page1 </NavLink>
                <NavLink to="/page2" activeClassName="active-link">Page2 </NavLink>
                <NavLink to="/page3" activeClassName="active-link">Page3 </NavLink>
                <NavLink to="/page4" activeClassName="active-link">Page4 </NavLink>
                <NavLink to="/page5" activeClassName="active-link">Page5 </NavLink>
                <NavLink to="/page6" activeClassName="active-link">Page6 </NavLink>
                <NavLink to="/page7" activeClassName="active-link">Page7 </NavLink>
                <NavLink to="/page8" activeClassName="active-link">Page8 </NavLink>
                <NavLink to="/page9" activeClassName="active-link">Page9 </NavLink>
            <NavLink to="/page10" activeClassName="active-link">Page10 </NavLink>
            <NavLink to="/page7" activeClassName="active-link">Page7 </NavLink>
            <NavLink to="/page8" activeClassName="active-link">Page8 </NavLink>
            <NavLink to="/page9" activeClassName="active-link">Page9 </NavLink>
            <NavLink to="/page10" activeClassName="active-link">Page10 </NavLink>
            <NavLink to="/page7" activeClassName="active-link">Page7 </NavLink>
            <NavLink to="/page8" activeClassName="active-link">Page8 </NavLink>
            <NavLink to="/page9" activeClassName="active-link">Page9 </NavLink>
            <NavLink to="/page10" activeClassName="active-link">Page10 </NavLink>
        </div >
    );
}