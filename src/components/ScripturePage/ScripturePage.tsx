import React from "react";
import { dictionary } from "../../dictionary";
import { useScripturePageStyles } from './useScripturePageStyles'

interface DataFromAPI {
  bibleReference: string;
  bibleVerse: any[];
  searchComponent: any;
}

export const ScripturePage: React.FC<DataFromAPI> = ({
  bibleReference,
  bibleVerse,
  searchComponent,
}) => {

  const classes = useScripturePageStyles();
  const bibleVerses = bibleVerse.map((item, keys) => {
    // fix <p> alignment for the verses
    return (
      <div key={keys}>
        <p className={classes.bibleText}>
          <span className={classes.bibleVerseNumber}>{item.verse}</span> {item.text}
        </p>
      </div>
    );
  });
  return (
    <>
      {searchComponent}
      <section className={classes.scripturePageTitleContainer}>
        <h1 className={classes.scripturePageTitle}>
          {dictionary.SCRIPTURE_PAGE_TITLE}
        </h1>
        <hr />
      </section>
      <section className={classes.bibleVerseContainer}>
        <h2>{bibleReference}</h2>
        {bibleVerses}
      </section>
    </>
  );
};
