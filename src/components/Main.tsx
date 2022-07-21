import React from "react";
import "../styles/Main.css";
import { searchHeader } from "../content";
import bibleImage from '../icons/bible.png';

type SearchType = {
  searchComponent: any;
}

const Main: React.FC<SearchType> = ({ searchComponent }) => {

  return (
    <div className='container'>
      <div className="header-display-container">
        <section className="header-title-container">
          <h1 className='header-title'>{searchHeader}</h1>  
        </section>
        <section>
          <img src={bibleImage} alt='bible' className="header-image"/>
        </section>
      </div>
      { searchComponent }
    </div>
  );
};

export default Main;
