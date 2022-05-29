import React from "react";
import "../styles/SearchForm.css";
import Form from "react-bootstrap/Form";
import { searchHeader, subText, searchButton } from "../content";

type UserInput = {
  input: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLElement>) => void;
  userErrorMessage: string[];
};

const Main: React.FC<UserInput> = ({ 
  input, 
  handleChange, 
  handleSubmit, 
  userErrorMessage }) => {

  return (
    <div className='container'>
      <Form className='form-container' onSubmit={handleSubmit}>
        <Form.Group className='mb-3' controlId='formBasicEmail'>
          <Form.Label className='search-label'>{searchHeader}</Form.Label>
          <div className='search-operation'>
            <Form.Control
              name='input'
              type='text'
              className='search-input-field'
              placeholder='Search Scriptures...'
              onChange={handleChange}
              value={input}
              required
            />
            <button className='search-btn'>
              {searchButton}
            </button>
          </div>
          <div className='sub-text'>
            <p className='error-message'>{userErrorMessage}</p>
            <Form.Text className='text-muted'>{subText}</Form.Text>
          </div>
        </Form.Group>
      </Form>
    </div>
  );
};

export default Main;
