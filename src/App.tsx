import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Header } from "./components/PageHeader/Header";
import { MainPage } from "./components/MainPage/MainPage";
import { ScripturePage } from "./components/ScripturePage/ScripturePage";
import { About } from "./components/About";
import { Login } from "./components/Login";
import { Search } from "./components/Search/Search";
import { DropdownComponent } from "./components/Shared/Dropdown/DropdownComponent";
import axios from "axios";
import { Routes, Route, useNavigate } from "react-router-dom";
import { dictionary } from "./dictionary";

export const App = () => {
  const [userInput, setUserInput] = useState<string>("");
  const [bibleReference, setBibleReference] = useState<string>("");
  const [bibleVerse, setBibleVerse] = useState<any[]>([]);
  const [badSearchReq, setBadSearchReq] = useState<string>("");
  const [searchBibleApi, setSearchBibleApi] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  let navigate = useNavigate();
  let connectVerseString = userInput.split(" ").join("");

  useEffect(() => {
    (async (userSearchTerm: string) => {
      let url = `https://bible-api.com/${userSearchTerm}`;
      if (searchBibleApi) {
        setIsLoading(false);
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
      } else {
        setIsLoading(true);
      }
    })(searchBibleApi);
  }, [searchBibleApi, navigate]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setUserInput(e.target.value);

  const handleSubmit = (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();
    setSearchBibleApi(connectVerseString);
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
              <DropdownComponent />
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
                isLoading={isLoading}
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
              <Login />
            </div>
          }></Route>
      </Routes>
    </div>
  );
};
