import React from "react";
import { dictionary } from "../../dictionary";
import { Link } from "react-router-dom";
import { useNavigationStyles } from "./useNavigationStyles";
import { FaBible } from "react-icons/fa";
// import { styled, keyframes } from 'styled-components';
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

  //   const rotate = keyframes `
  //   from {
  //     transition: 1s;
  //     left: 5;
  //   }

  //   to {
  //     transition: 1s;
  //   }
  // `;

  //   const Rotate = styled.div`
  //     // display: inline-block;
  //     // animation: ${rotate} 2s linear;
  //     transform: translate3d(-240px, 0, 0)
  //     transition: transform 0.35s
  //   `;

  let navLinks = checkToggle
    ? classes.openHamburgerContainer
    : classes.closeHamburgerContainer;
  return (
    <div className={classes.headerContainer}>
      <div>
        <Link to='/' className={classes.headerContent}>
          <FaBible color='white' size={20} className={classes.bibleIcon} />
          <h2 className={classes.navTitle}>{dictionary.PAGE_TITLE}</h2>
        </Link>
      </div>
      <button
        className={classes.hamburgerContainer}
        onClick={() => toggleHamburger()}>
        <div className='hamburger-child'>
          <div className={classes.hamburgerBorder}></div>
          <div className={classes.hamburgerBorder}></div>
          <div className={classes.hamburgerBorder}></div>
        </div>
      </button>
      {/* add sliding menu animation  */}
      <div className={navLinks}>
        <ul className='open-nav-list-container'>
          <Link
            to='/about'
            className={classes.openNavItem}
            onClick={closeDropDown}>
            <li>{dictionary.ABOUT_PAGE_TITLE}</li>
          </Link>
          <Link
            to='/contact'
            className={classes.openNavItem}
            onClick={closeDropDown}>
            <li>{dictionary.LOG_IN_PAGE_TITLE}</li>
          </Link>
        </ul>
      </div>
      <div className={classes.navListContainer}>
        <Link
          to='/about'
          className={classes.openNavItem}
          onClick={closeDropDown}>
          <li>{dictionary.ABOUT_PAGE_TITLE}</li>
        </Link>
        <Link
          to='/contact'
          className={classes.openNavItem}
          onClick={closeDropDown}>
          <li>{dictionary.LOG_IN_PAGE_TITLE}</li>
        </Link>
      </div>
    </div>
  );
};
