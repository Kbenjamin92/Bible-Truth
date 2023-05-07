import React from "react";
import "../styles/Main.css";
import bibleImage from '../icons/bible.png';
import { dictionary } from "../dictionary";

interface SearchType {
  searchComponent: any;
}

export const Main: React.FC<SearchType> = ({ searchComponent }) => {

  return (
    <div className='container'>
      <div className="header-display-container">
        <section className="header-title-container">
          <h1 className='header-title'>{dictionary.HEADER_TITLE}</h1>  
        </section>
        <section>
          <img src={bibleImage} alt='bible' className="header-image"/>
        </section>
      </div>
      { searchComponent }
    </div>
  );
};
