import { NavLink } from 'react-router-dom';
import './Navbar.css';

function NavbarMobile() {
    return (
        <div class="navbar-mobile">
            <NavLink activeClassName="active" to="/funbite-2023/home"><i class="fa fa-home"></i></NavLink>
            <NavLink activeClassName="active" to="/funbite-2023/games"><i className="fa fa-search"></i></NavLink>
            <NavLink activeClassName="active" to="/funbite-2023/video-of-the-day"><i className="fa fa-envelope"></i></NavLink>
            <NavLink activeClassName="active" to="/funbite-2023/google-search"><i className="fa fa-globe"></i></NavLink>
            <NavLink activeClassName="active" to="/funbite-2023/credits"><i className="fa fa-trash"></i></NavLink>
        </div>
    );
}

export default NavbarMobile;