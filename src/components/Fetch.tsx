import React, { useEffect, useState }  from "react";
import axios from 'axios';


const Fetch = () => {

    const [bibleVerses, setBibleVerses] = useState('');
    const [searchTerm, setSearchTerm] = useState('');
  
    let url =`https://bible-api.com/genesis%201:1-10`;
    const getBibleData = async () => {
      try { 
        const req = await axios.get(url);
        const res = req.data.text;
        setBibleVerses(res);
      }
      catch (error) {console.log(error)}
    }
  
    useEffect(() => {
      // getBibleData();
    });

  return (
      <div>
          <p>{bibleVerses}</p>
      </div>
  )};

export default Fetch;
