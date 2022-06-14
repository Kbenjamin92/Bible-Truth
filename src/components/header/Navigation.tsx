import React from "react";
import '../../styles/Header.css'
import { pageHeader } from '../../content';
import { Link } from 'react-router-dom';

type NavigationInput = {
  toggleHamburger: () => void;
  checkToggle: boolean;
  closeDropDown: () => void;
  // reference: any
}

const Navigation: React.FC<NavigationInput> = ({ 
    toggleHamburger, 
    checkToggle,
    closeDropDown,
     }) => {


  let navLinks = checkToggle ? 'open-hamburger-container ' : 'close-hamburger-container';

  const openHamburgerMenu: JSX.Element = (
    <div className={navLinks}> 
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

/*
- when the screen passes 768 the drop down container needs to a second item in the header container

- how do I determine when the nav links show up on the nav bar
*/


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
        {openHamburgerMenu}
        
      </div>
  )};

export default Navigation;
