import { NavLink } from 'react-router-dom';
import './Navbar.css';

function NavbarMobile() {
    return (
        <div class="navbar-mobile">
            <NavLink activeClassName="active" to="/home"><i class="fa fa-home"></i></NavLink>
            <NavLink activeClassName="active" to="/search"><i className="fa fa-search"></i></NavLink>
            <NavLink activeClassName="active" to="/envelope"><i className="fa fa-envelope"></i></NavLink>
            <NavLink activeClassName="active" to="/globe"><i className="fa fa-globe"></i></NavLink>
            <NavLink activeClassName="active" to="/trash"><i className="fa fa-trash"></i></NavLink>
        </div>
    );
}

export default NavbarMobile;