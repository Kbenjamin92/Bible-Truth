import React, { useState } from "react";
import { Navigation } from './Navigation'

export const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleHamburger = () => {
    setIsOpen((prevState) => !prevState);
  }
  const closeDropDown = () => {
    setIsOpen(false);
  }

  return (
    <>
        <Navigation 
          toggleHamburger={toggleHamburger} 
          checkToggle={isOpen}
          closeDropDown={closeDropDown}
        />
    </>
)};
 
