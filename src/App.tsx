import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header";
import SearchForm from "./components/SearchForm";
import axios from "axios";
import { Routes, Route } from "react-router-dom";

const App = () => {
  const [userInput, setUserInput] = useState<string>("");
  const [userOutput, setUserOutput] = useState<string>("");
  const [bibleVerses, setBibleVerses] = useState<string>("");

  const getBibleData = async (userSearchTerm: string) => {
    let url = `https://bible-api.com/${userSearchTerm}`;
    try {
      const req = await axios.get(url);
      const res = req.data.text;
      setBibleVerses(res);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();
    setUserOutput(userInput);
    getBibleData(userInput);
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
            <h1>New Page</h1>
          </div>
        }>
        </Route>
      </Routes>
    </div>
  );
};

export default App;
