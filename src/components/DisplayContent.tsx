import React from "react";
import '../styles/DisplayContent.css'
import { scripturePage } from "../content";

type DataFromAPI = {
    bibleReference: string;
    bibleVerses: string;
}

const DisplayContent: React.FC<DataFromAPI> = ({ bibleReference, bibleVerses }) => {
    let scripture: JSX.Element = (
        <div className="bible-verse-container">   
            <h2>{bibleReference}</h2>
            <hr />
            <p className="bible-verse">{bibleVerses}</p>
        </div> 
    );
    return (
        <>
            <section className="scripture-page-title-container">
                <h1 className="scripture-page-title">{scripturePage}</h1>
                <hr />
            </section>
            {bibleReference && bibleVerses && scripture}
        </>
)};

export default DisplayContent;
