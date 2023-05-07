import React from "react";
import '../../styles/Header.css'
import { dictionary } from "../../dictionary";
import { Link } from 'react-router-dom';

interface NavigationInput {
  toggleHamburger: () => void;
  checkToggle: boolean;
  closeDropDown: () => void;
}

export const Navigation: React.FC<NavigationInput> = ({ 
    toggleHamburger, 
    checkToggle,
    closeDropDown,
     }) => {

  let navLinks = checkToggle ? 'open-hamburger-container ' : 'close-hamburger-container';

  const openHamburgerMenu: JSX.Element = (
    <div className={navLinks}> 
       <ul className="open-nav-list-container">
          <Link to="/about" className="open-nav-item" onClick={closeDropDown}>
            <li>{dictionary.ABOUT_PAGE_TITLE}</li>
          </Link>
          <Link to="/contact" className="open-nav-item" onClick={closeDropDown}>
            <li>{dictionary.CONTACT_PAGE_TITLE}</li>
          </Link>
        </ul>
    </div>
  );
  return (
      <div  className="header-container">
        <div>
          <Link to='/' className="header-content">
            <h1>{dictionary.PAGE_TITLE}</h1>
          </Link>
        </div>
        <button className="hamburger-container" onClick={() => toggleHamburger()}>
          <div className="hamburger-child">
            <div className="hamburger-border borderOne"></div>
            <div className="hamburger-border borderTwo"></div>
            <div className="hamburger-border borderThree"></div>
          </div>
        </button>
        {openHamburgerMenu}
      </div>
  )};
