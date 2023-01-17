import './Header.css';

function Header() {
    return (
        <div className="header">
            <img className="funbite-logo" alt='funbite-logo' src={require('../../../assets/images/logos/funbite.png')}></img>
        </div>
    );
}

export default Header;