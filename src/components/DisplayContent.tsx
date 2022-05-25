import React from "react";
import { Link } from "react-router-dom";
import { returnHomeButton } from "../content";

type DataFromAPI = {
    bibleReference: string;
    bibleVerses: string;
}

const DisplayContent: React.FC<DataFromAPI> = (props) => {
    const { bibleReference, bibleVerses } = props;
    console.log(bibleReference, bibleVerses);
    return (
        <div>
            <Link to="/">
                <button className='search-btn'>{returnHomeButton}</button>
            </Link>
            <h2>{bibleReference}</h2>
            <p>{bibleVerses}</p>
        </div>
)};

export default DisplayContent;
