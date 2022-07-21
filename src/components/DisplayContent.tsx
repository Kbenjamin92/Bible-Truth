import React from "react";
import '../styles/DisplayContent.css'
import { scripturePage } from "../content";

type DataFromAPI = {
    bibleReference: string;
    bibleVerse: any[];
    searchComponent: any;
}

const DisplayContent: React.FC<DataFromAPI> = ({ 
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
                <h1 className="scripture-page-title">{scripturePage}</h1>
                <hr />
            </section>
            <section className="bible-verse-container">
                <h2>{bibleReference}</h2>
                {bibleVerses}
            </section>
        </>
)};

export default DisplayContent;
