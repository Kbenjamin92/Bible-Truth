import React from "react";
import { dictionary } from "../../dictionary";
import { Link } from "react-router-dom";
import { useNavigationStyles } from "./useNavigationStyles";
import { FaBible } from "react-icons/fa";
import { styled, keyframes } from "styled-components";
import { RxSlash } from "react-icons/rx";
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

  const slideMenuRight = keyframes`
    0% {
      transform: translateX(1rem);
    }
    100% {
      transform: translateX(5rem);
    }
    
  `;

  const slideMenuLeft = keyframes`
    0% {
      transform: translateX(5rem);
    }
    100% {
      transform: translateX(0rem);
    }
  `;

  const SlideMenu = styled.div`
    animation: ${slideMenuLeft} 0.3s linear;
  `;

  let navLinks = checkToggle
    ? classes.openHamburgerContainer
    : classes.closeHamburgerContainer;
  return (
    <div className={classes.headerContainer}>
      <div>
        <Link to='/' className={classes.headerContent}>
          <span>
            <FaBible color='white' size={20} className={classes.bibleIcon} />
          </span>
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
      <SlideMenu className={navLinks}>
        <ul className={classes.openNavContainer}>
          <Link
            to='/about'
            className={classes.openNavItem}
            onClick={closeDropDown}>
            <li>{dictionary.ABOUT_PAGE_TITLE}</li>
          </Link>
          <Link
            to='/login'
            className={classes.openNavItem}
            onClick={closeDropDown}>
            <li>{dictionary.LOG_IN_PAGE_TITLE}</li>
          </Link>
        </ul>
      </SlideMenu>
      <div className={classes.navListContainer}>
        <Link
          to='/about'
          className={classes.openNavItem}
          onClick={closeDropDown}>
          <li>{dictionary.ABOUT_PAGE_TITLE}</li>
        </Link>
        <span className={classes.slash}>
          <RxSlash color={"white"}></RxSlash>
        </span>

        <Link
          to='/login'
          className={classes.openNavItem}
          onClick={closeDropDown}>
          <li>{dictionary.LOG_IN_PAGE_TITLE}</li>
        </Link>
      </div>
    </div>
  );
};
