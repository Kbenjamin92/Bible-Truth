import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header";
import SearchForm from "./components/SearchForm";

const App = () => {
  const [userInput, setUserInput] = useState<string>("");

  // add the proper type for the handleChange function parameter
  const handleChange = (e: React.FormEvent<HTMLElement>) => {
    
    console.log(e);
  }

  const handleSubmit = (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();
    console.log('form submited');
  }


  return (
    <div className='App'>
      <header>
        <Header />
      </header>
      <main>
        <SearchForm 
          input={userInput} 
          handleChange={handleChange} 
          handleSubmit={handleSubmit}
          />
      </main>
    </div>
  );
};

export default App;
