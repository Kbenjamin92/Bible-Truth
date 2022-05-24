import React from "react";
import '../styles/SearchForm.css'
import Fetch from './Fetch';
import Form from 'react-bootstrap/Form'
import { 
  mainContent,
  subText,
  searchButton 
} from '../content'


const SearchForm = () => {

  return (
    <div className="container">
      <Form className="form-container">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="search-label">{mainContent}</Form.Label>
          <div className="search-operation">
            <Form.Control type="text" className="search-input-field" placeholder="Search Scriptures..." />
            <button className="search-btn">{searchButton}</button>
          </div>
          <div className="sub-text">
            <Form.Text className="text-muted">
              {subText}
            </Form.Text>
          </div>
        </Form.Group>
      </Form>
      <Fetch />
    </div>
)};

export default SearchForm;
