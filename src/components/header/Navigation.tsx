import React from "react";
import '../../styles/Header.css'
import { pageHeader } from '../../content';
import { Link } from 'react-router-dom';

type NavigationInput = {
  toggleHamburger: () => void;
  checkToggle: boolean;
  closeDropDown: () => void;
}

const Navigation: React.FC<NavigationInput> = ({ 
    toggleHamburger, 
    checkToggle,
    closeDropDown }) => {

  const openHamburgerMenu: JSX.Element = (
    <div className="open-hamburger"> 
       <ul className="open-nav-list-container">
          <Link to="/about" className="open-nav-item" onClick={closeDropDown}>
            <li>About</li>
          </Link>
          <Link to="/contact" className="open-nav-item" onClick={closeDropDown}>
            <li>Contact</li>
          </Link>
        </ul>
    </div>
  );
  const horizontalNavList: JSX.Element = (
    <ul className="nav-list-container">
      <Link to="/about" className="nav-item">
        <li>About</li>
      </Link>
      <hr />
      <Link to="/contact" className="nav-item">
        <li>Content</li>
      </Link>
    </ul>
  );
  return (
      <div  className="header-container">
        <div>
          <Link to='/' className="header-content">
            <h1>{pageHeader}</h1>
          </Link>
        </div>
        <button className="hamburger-container" onClick={() => toggleHamburger()}>
          <div className="hamburger-child">
            <div className="hamburger-border borderOne"></div>
            <div className="hamburger-border borderTwo"></div>
            <div className="hamburger-border borderThree"></div>
          </div>
        </button>

        {checkToggle && openHamburgerMenu}
        {horizontalNavList}
      </div>
  )};

export default Navigation;
