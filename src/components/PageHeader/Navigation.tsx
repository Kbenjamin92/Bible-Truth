import React from "react";
import { dictionary } from "../../dictionary";
import { Link } from 'react-router-dom';
import { useNavigationStyles } from "./useNavigationStyles";
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

  const classes = useNavigationStyles();

  let navLinks = checkToggle ? classes.openHamburgerContainer : classes.closeHamburgerContainer;
  return (
      <div  className={classes.headerContainer}>
        <div>
          <Link to='/' className={classes.headerContent}>
            <h1>{dictionary.PAGE_TITLE}</h1>
          </Link>
        </div>
        <button className={classes.hamburgerContainer} onClick={() => toggleHamburger()}>
          <div className="hamburger-child">
            <div className={classes.hamburgerBorder}></div>
            <div className={classes.hamburgerBorder}></div>
            <div className={classes.hamburgerBorder}></div>
          </div>
        </button>
        <div className={navLinks}> 
          <ul className="open-nav-list-container">
            <Link to="/about" className={classes.openNavItem} onClick={closeDropDown}>
              <li>{dictionary.ABOUT_PAGE_TITLE}</li>
            </Link>
            <Link to="/contact" className={classes.openNavItem} onClick={closeDropDown}>
              <li>{dictionary.LOG_IN_PAGE_TITLE}</li>
            </Link>
            </ul>
        </div>
        <div className={classes.navListContainer}>
          <Link to="/about" className={classes.openNavItem} onClick={closeDropDown}>
            <li>{dictionary.ABOUT_PAGE_TITLE}</li>
          </Link>
          <Link to="/contact" className={classes.openNavItem} onClick={closeDropDown}>
            <li>{dictionary.LOG_IN_PAGE_TITLE}</li>
          </Link>
        </div>
      </div>
  )};
