import React from "react";
import "../styles/SearchForm.css";
import Fetch from "./Fetch";
import Form from "react-bootstrap/Form";
import { mainContent, subText, searchButton } from "../content";

type UserInput = {
  input: string;
  handleChange: (e: React.ReactEventHandler) => void;
  handleSubmit: (e: React.FormEvent<HTMLElement>) => void;
};

const SearchForm: React.FC<UserInput> = (props) => {
  const { 
    input, 
    handleChange, 
    handleSubmit } = props;

  return (
    <div className='container' onSubmit={handleSubmit}>
      <Form className='form-container'>
        <Form.Group className='mb-3' controlId='formBasicEmail'>
          <Form.Label className='search-label'>{mainContent}</Form.Label>
          <div className='search-operation'>
            <Form.Control
              name='input'
              type='text'
              className='search-input-field'
              placeholder='Search Scriptures...'
              onChange={handleChange}
            />
            <button className='search-btn'>{searchButton}</button>
          </div>
          <div className='sub-text'>
            <Form.Text className='text-muted'>{subText}</Form.Text>
          </div>
        </Form.Group>
      </Form>

      <p>{input}</p>

      <Fetch />
    </div>
  );
};

export default SearchForm;
