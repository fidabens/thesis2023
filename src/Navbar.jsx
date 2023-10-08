import React, { useState } from 'react';
import logo from './fidalogo.png';
import contactLogo from './fidacontact.png';
import notifLogo from './fidanotif.png';
import './Navbar.css';
import { Link, NavLink } from 'react-router-dom';

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isHovered, setHovered] = useState(false);

  return (
    <nav>
      <Link
        style={{ marginTop: '34px' }}
        to="/Home"
        className="title"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <img
          src={logo}
          alt="Home"
          style={{
            width: isHovered ? '102px' : '97px',
            height: isHovered ? '94px' : '88px',
            transition: 'all 0.3s ease-in-out',
          }}
        />
      </Link>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? 'open' : ''}>
        <li>
          <NavLink style={{ marginTop: '23px' }} to="/notifications">
            <img src={notifLogo} alt="Notifications" width="41" height="42" />
          </NavLink>
        </li>
        <li>
          <NavLink style={{ marginTop: '11px' }} to="/contact">
            <img src={contactLogo} alt="Contact" width="82" height="67" />
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
