import React from "react";
import bibleImage from "../../icons/bible.png";
import { dictionary } from "../../dictionary";
import { useMainPageStyles } from "./useMainPageStyles";

interface SearchType {
  searchComponent: any;
}

export const MainPage: React.FC<SearchType> = ({ searchComponent }) => {
  const classes = useMainPageStyles();

  return (
    <div className={classes.container}>
      <div className={classes.headerDisplayContainer}>
        <section className={classes.headerTitleContainer}>
          <h1 className={classes.headerTitle}>{dictionary.HEADER_TITLE}</h1>
        </section>
        <section>
          <img src={bibleImage} alt='bible' className={classes.headerImage} />
        </section>
      </div>
      {searchComponent}
    </div>
  );
};
