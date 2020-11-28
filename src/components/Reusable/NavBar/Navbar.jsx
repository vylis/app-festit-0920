import React, { useState } from 'react';
import '../../../style/CSS/Reusable/Navbar/Navbar.css';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import Search from './Search';
import Toolbar from './Toolbar';

function Navbar() {
  const [topbar, setTopbar] = useState(false);

  const showTopbar = () => setTopbar(!topbar);

  const TopbarData = [
    {
      title: 'Accueil',
      path: '/',
      icons: <AiIcons.AiOutlineHome />,
      className: 'nav-text',
    },
    {
      title: 'Artistes',
      path: '/Artists',
      icons: <AiIcons.AiOutlineInfoCircle />,
      className: 'nav-text',
    },
    {
      title: 'Contact',
      path: '/contact',
      icons: <AiIcons.AiOutlineMessage />,
      className: 'nav-text',
    },
  ];

  return (
    <div className="Navbar">
      <div className="navbar">
        <div className="menu-bars">
          <FaIcons.FaBars onKeyDown={showTopbar} onClick={showTopbar} />
        </div>
      </div>
      <nav className={topbar ? 'nav-menu active' : 'nav-menu'}>
        <p className="navbar-toggle">
          <div className="menu-close">
            <AiIcons.AiOutlineClose
              onKeyDown={showTopbar}
              onClick={showTopbar}
            />
          </div>
        </p>
        <div className="nav-menu-items">
          <div className="searchbar">
            <Search />
          </div>
          {TopbarData.map((item) => {
            return (
              <div key={item.title} className={item.className} id="navbarlink">
                <Link to={item.path}>
                  {item.icons}
                  <span className="togglespan">{item.title}</span>
                </Link>
              </div>
            );
          })}
          <div className="placeToolbar">
            <Toolbar />
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
