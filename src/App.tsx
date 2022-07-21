import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/header/Header";
import Main from "./components/Main";
import DisplayContent from "./components/DisplayContent"
import About from './components/About'
import Contact from './components/Contact'
import Search from './components/Search'
import { userErrorMessage } from './content'
import axios from "axios";
import { Routes, Route, useNavigate } from "react-router-dom";

const App = () => {
  const [userInput, setUserInput] = useState<string>("");
  const [bibleReference, setBibleReference] = useState<string>("");
  const [bibleVerse, setBibleVerse] = useState<any[]>([]);
  const [badSearchReq, setBadSearchReq] = useState<string[]>([]);

  let navigate = useNavigate();
  let connectVerseString = userInput.split(' ').join('');

  const getBibleData = async (userSearchTerm: string) => {
    let url = `https://bible-api.com/${userSearchTerm}`;
    try {
      const req = await axios.get(url);
      const res = req.data;
      setBibleReference(res.reference);
      setBibleVerse(res.verses);
    } catch (error) {
        if (error) {
          navigate('/');
          setBadSearchReq(userErrorMessage);
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
    navigate('/bible-results');
    setBadSearchReq([]);
  };
  
  return (
    <div className='App'>
      <Routes>
        <Route
          path='/'
          element={
            <div>
              <Header />
              <Main searchComponent={
                <Search 
                  input={userInput}
                  handleChange={handleChange}
                  handleSubmit={handleSubmit}
                  userErrorMessage={badSearchReq}
                  />} 
                />
            </div>
          }></Route>

        <Route path='/bible-results' element={
          <div>
            <Header />
            <DisplayContent 
              bibleReference={bibleReference} 
              bibleVerse={bibleVerse}
              searchComponent={
                <Search 
                  input={userInput}
                  handleChange={handleChange}
                  handleSubmit={handleSubmit}
                  userErrorMessage={badSearchReq}
                  />} 
              />
          </div>
        }>
        </Route>
        <Route path='/about' element={
          <div>
            <Header />
            <About />
          </div>
        }>
        </Route>
        <Route path='/contact' element={
          <div>
            <Header />
            <Contact />
          </div>
        }>
        </Route>
      </Routes>
    </div>
  );
};

export default App;
