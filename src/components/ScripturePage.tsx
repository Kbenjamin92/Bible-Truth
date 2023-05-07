import React from "react";
import '../styles/DisplayContent.css'
import { dictionary } from "../dictionary";

interface DataFromAPI {
    bibleReference: string;
    bibleVerse: any[];
    searchComponent: any;
}

 export const ScripturePage: React.FC<DataFromAPI> = ({ 
        bibleReference, 
        bibleVerse,
        searchComponent
     }) => {
    
    const bibleVerses = bibleVerse.map((item, keys) => {
        // fix <p> alignment for the verses
        return (
            <div key={keys}>
               <p className="bible-text"><span className='bible-verse-number'>{item.verse}</span> {item.text}</p>
            </div>
        )
    });
    return (
        <>
            { searchComponent }
            <section className="scripture-page-title-container">
                <h1 className="scripture-page-title">{dictionary.SCRIPTURE_PAGE_TITLE}</h1>
                <hr />
            </section>
            <section className="bible-verse-container">
                <h2>{bibleReference}</h2>
                {bibleVerses}
            </section>
        </>
)};
