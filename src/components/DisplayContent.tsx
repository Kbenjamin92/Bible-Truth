import React from "react";
import { Link } from "react-router-dom";
import { returnHomeButton } from "../content";

type DataFromAPI = {
    renderContent: string;
}

const DisplayContent: React.FC<DataFromAPI> = (props) => {

    const { renderContent } = props;

    return (
        <div>
            <Link to="/">
                <button className='search-btn'>{returnHomeButton}</button>
            </Link>
            {renderContent}
        </div>
)};

export default DisplayContent;
