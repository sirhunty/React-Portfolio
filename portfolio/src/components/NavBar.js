import React from 'react';
import { Link } from 'react-router-dom';


function NavBar() {
    return (
        <div>
            <div className="menu-btn">
                <span className="menu-btn__burger"></span>
            </div>
            <nav className="nav">
                <ul className="menu-nav">
                    <li className="menu-nav__item active">
                        <Link to="/" class="menu-nav__link">
                            Home
            </Link>
                    </li>
                    <li className="menu-nav__item">
                        <Link to="/about" class="menu-nav__link">
                            About Me
            </Link>
                    </li>
                    <li className="menu-nav__item">
                        <a href="src/html/projects.html" class="menu-nav__link">
                            My Projects
            </a>
                    </li>
                    <li className="menu-nav__item">
                        <a href="#!" onclick="pageAlert()" class="menu-nav__link">
                            My Art
            </a>
                    </li>
                    <li className="menu-nav__item">
                        <a href="src/html/contact.html" class="menu-nav__link">
                            Contact Me
            </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
export default NavBar;