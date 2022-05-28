import React, { useState } from "react";
import Navigation from './Navigation'

const Header = () => {

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleHamburger = () => {
    setIsOpen(prevState => !prevState);
    console.log(isOpen);
  }

  return (
    <div>
        <Navigation toggleHamburger={toggleHamburger}/>
    </div>
)};

export default Header;
 
