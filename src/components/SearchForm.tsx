import React from "react";
import "../styles/SearchForm.css";
import Form from "react-bootstrap/Form";
import { searchHeader, subText, searchButton } from "../content";
import { Link } from "react-router-dom";

type UserInput = {
  input: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLElement>) => void;
};

const SearchForm: React.FC<UserInput> = (props) => {
  const { input, handleChange, handleSubmit } = props;

  return (
    <div className='container' onSubmit={handleSubmit}>
      <Form className='form-container'>
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
            <Link to='/bible-results'>
              <button className='search-btn'>{searchButton}</button>
            </Link>
          </div>
          <div className='sub-text'>
            <Form.Text className='text-muted'>{subText}</Form.Text>
          </div>
        </Form.Group>
      </Form>
    </div>
  );
};

export default SearchForm;
