import React from 'react';

function NavBar() {
    return (
        <div>
            <div className="menu-btn">
                <span className="menu-btn__burger"></span>
            </div>

            <nav className="nav">
                <ul className="menu-nav">
                    <li className="menu-nav__item active">
                        <a href="index.html" class="menu-nav__link">
                            Home
            </a>
                    </li>
                    <li className="menu-nav__item">
                        <a href="src/html/about.html" class="menu-nav__link">
                            About Me
            </a>
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