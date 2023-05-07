import React from "react";
import Form from "react-bootstrap/Form";
import { dictionary } from "../dictionary";

interface UserInput {
    input: string;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleSubmit: (e: React.FormEvent<HTMLElement>) => void;
    badSearchReq: string;
  };

export const Search: React.FC<UserInput> = ({
  input, 
  handleChange, 
  handleSubmit, 
  badSearchReq
}) => {
  return (
    <div>
      <Form className='form-container' onSubmit={handleSubmit}>
        <Form.Group className='mb-3' controlId='formBasicEmail'>
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
              {dictionary.SEARCH_BUTTON_TEXT}
            </button>
          </div>
          <div className='sub-text'>
            <p className='error-message'>{badSearchReq}</p>
            <Form.Text className='text-muted'>{dictionary.SUB_TITLE_SCRIPTURE}</Form.Text>
          </div>
        </Form.Group>
      </Form>
    </div>
  )};