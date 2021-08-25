import React, {useState} from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);


    return (
        <>
            <nav className="navbar">
                <div className='navbar-container'></div>
                <Link path="/" className="navbar-logo"
            //     src='public/brandLogo112.png'
            //   label='Brand Logo'
            
              >Jessica Giannini<i class="fas fa-starship"></i></Link>
              <div className="menu-icon" onClick={handleClick}>
                  <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
              </div>
              <ul className={click ? 'nav-menu active' : 'nav-menu'}></ul>
                <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
              </li>
              <li>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                About
              </Link>
              </li>
              <li>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Projects
              </Link>
              </li>
              <li>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Contact
              </Link>
            </li>
           
            </nav>
        </>
    );
}

export default NavBar;
