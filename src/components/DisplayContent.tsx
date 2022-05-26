import React from "react";
import '../styles/DisplayContent.css'
import { Link } from "react-router-dom";
import { returnHomeButton } from "../content";

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
        <div>
            <Link to="/">
                <button className='search-btn'>{returnHomeButton}</button>
            </Link>
            {bibleReference && bibleVerses && scripture}
        </div>
)};

export default DisplayContent;
