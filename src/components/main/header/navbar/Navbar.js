import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    return (
        <div className="navbar">
            <NavLink activeClassName="active" to="/home"><i class="fa fa-home"></i> Home</NavLink>
            <NavLink activeClassName="active" to="/games"><i className="fa fa-search"></i> Games</NavLink>
            <NavLink activeClassName="active" to="/video-of-the-day"><i className="fa fa-envelope"></i> Video of the Day</NavLink>
            <NavLink activeClassName="active" to="/google-search"><i className="fa fa-globe"></i> Google Search</NavLink>
            <NavLink activeClassName="active" to="/credits"><i className="fa fa-trash"></i> Credits</NavLink>
        </div>
    );
}

export default Navbar;