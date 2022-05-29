import React, { useState } from "react";
import Navigation from './Navigation'

const Header = () => {

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleHamburger = () => {
    setIsOpen((prevState) => !prevState);
  }

  const closeDropDown = () => {
    setIsOpen(false);
  }

  return (
    <div>
        <Navigation 
          toggleHamburger={toggleHamburger} 
          checkToggle={isOpen}
          closeDropDown={closeDropDown}
        />
    </div>
)};

export default Header;
 
