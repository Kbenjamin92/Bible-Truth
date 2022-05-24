import React from "react";
import '../styles/Header.css'
import { pageHeader } from '../content'


const Header = () => {
  return (
    <div className="header-container">
        <h1 className="header-content">{pageHeader}</h1>
    </div>
)};

export default Header;
 