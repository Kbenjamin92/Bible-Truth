import React, { useState, useRef, useEffect } from "react";
import Navigation from './Navigation'

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // const menuRef = useRef();
  // console.log(menuRef);
  // useEffect (() => {
  //   document.addEventListener('click', (e) => {
  //     if(!menuRef.current){
  //       setIsOpen(false);
  //     }
  //   });
  // });

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
          // reference={menuRef}
        />
    </>
)};

export default Header;
 
