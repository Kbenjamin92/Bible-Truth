import React from "react";
import '../styles/Header.css';
import { pageHeader } from '../content';
import { Link } from 'react-router-dom';

type NavigationInput = {
  toggleHamburger: () => void;
}

const Navigation: React.FC<NavigationInput> = ({ toggleHamburger }) => {
  return (
      <div  className="header-container">
        <div>
          <h1 className="header-content">{pageHeader}</h1>
        </div>

          <div className="hamburger-container" onClick={() => toggleHamburger()}>
            <div className="hamburger-border"></div>
            <div className="hamburger-border"></div>
            <div className="hamburger-border"></div>
          </div>

        <ul className="nav-list-container">
          <Link to="/about" className="nav-item">
            <li>About</li>
          </Link>
          <Link to="/contact" className="nav-item">
            <li>Content</li>
          </Link>
        </ul>
      </div>
  )};

export default Navigation;
