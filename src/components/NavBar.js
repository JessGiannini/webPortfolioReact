import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';


function NavBar() {
    const [click, setClick] = useState(false);
    const closeMobileMenu = () => setClick(false);


    return (
        <>
            <nav className="navbar">
                <div className='navbar-container'>
               <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
           
          </Link>
              <ul className={click ? 'nav-menu active' : 'nav-menu'}></ul>
              <li>
              <Link to='/aboutme' className='nav-links' onClick={closeMobileMenu}>
                About
              </Link>
              </li>
              <li>
              <Link to='/portfolio' className='nav-links' onClick={closeMobileMenu}>
                Portfolio
              </Link>
              </li>
              <li>
              <Link to='/resume' className='nav-links' onClick={closeMobileMenu}>
                Resume
              </Link>
            </li>
           <li>
              <Link to='/contact' className='nav-links' onClick={closeMobileMenu}>
                Contact
              </Link>
            </li>
            </div>
            </nav>
        </>
    );
}

export default NavBar;
