import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Header } from "./components/PageHeader/Header";
import { MainPage } from "./components/MainPage/MainPage";
import { ScripturePage } from "./components/ScripturePage/ScripturePage";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Search } from "./components/Search/Search";
import axios from "axios";
import { Routes, Route, useNavigate } from "react-router-dom";
import { dictionary } from "./dictionary";

export const App = () => {
  const [userInput, setUserInput] = useState<string>("");
  const [bibleReference, setBibleReference] = useState<string>("");
  const [bibleVerse, setBibleVerse] = useState<any[]>([]);
  const [badSearchReq, setBadSearchReq] = useState<string>("");

  let navigate = useNavigate();
  let connectVerseString = userInput.split(" ").join("");

  const getBibleData = async (userSearchTerm: string) => {
    let url = `https://bible-api.com/${userSearchTerm}`;
    try {
      const req = await axios.get(url);
      const res = req.data;
      setBibleReference(res.reference);
      setBibleVerse(res.verses);
    } catch (error) {
      if (error) {
        navigate("/");
        setBadSearchReq(dictionary.USER_SEARCH_ERROR_MESSAGE);
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();
    getBibleData(connectVerseString);
    setUserInput("");
    navigate("/bible-results");
    setBadSearchReq("");
  };

  return (
    <div className='App'>
      <Routes>
        <Route
          path='/'
          element={
            <div>
              <Header />
              <MainPage
                searchComponent={
                  <Search
                    input={userInput}
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                    badSearchReq={badSearchReq}
                  />
                }
              />
            </div>
          }></Route>

        <Route
          path='/bible-results'
          element={
            <div>
              <Header />
              <ScripturePage
                bibleReference={bibleReference}
                bibleVerse={bibleVerse}
                searchComponent={
                  <Search
                    input={userInput}
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                    badSearchReq={badSearchReq}
                  />
                }
              />
            </div>
          }></Route>
        <Route
          path='/about'
          element={
            <div>
              <Header />
              <About />
            </div>
          }></Route>
        <Route
          path='/contact'
          element={
            <div>
              <Header />
              <Contact />
            </div>
          }></Route>
      </Routes>
    </div>
  );
};
