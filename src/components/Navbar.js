import { Link } from 'react-router-dom';
import './Navbar.css';

// banner component
function Banner(){
    return(
        <div className = 'banner flex ml-3'>
            <img className = 'mr-2' width="50px" height="50px" src='/logo.png' alt="logo" />
        </div>
    );
}

function Navbar(){
    return(
        <nav className = 'flex items-center ml-5 select-none'>
            <Link to='/'>
                <Banner />
            </Link>
        </nav>
    );
}

export default Navbar;