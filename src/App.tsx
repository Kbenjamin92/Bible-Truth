import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header";
import SearchForm from "./components/SearchForm";
import DisplayContent from "./components/DisplayContent"
import axios from "axios";
import { Routes, Route } from "react-router-dom";

const App = () => {
  const [userInput, setUserInput] = useState<string>("");
  const [bibleReference, setBibleReference] = useState<string>("");
  const [bibleVerses, setBibleVerses] = useState<string>("");

  const getBibleData = async (userSearchTerm: string) => {
    let url = `https://bible-api.com/${userSearchTerm}`;
    try {
      const req = await axios.get(url);
      const res = req.data;
      setBibleReference(res.reference);
      setBibleVerses(res.text);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();
    let connectVerseString = userInput.split(' ').join('');
    getBibleData(connectVerseString);
    setUserInput("");
  };

  return (
    <div className='App'>
      <Routes>
        <Route
          path='/'
          element={
            <div>
              <Header />
              <SearchForm
                input={userInput}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
              />
            </div>
          }></Route>

        <Route path='/bible-results' element={
          <div>
            <Header />
            <DisplayContent bibleReference={bibleReference} bibleVerses={bibleVerses}/>
          </div>
        }>
        </Route>
      </Routes>
    </div>
  );
};

export default App;
