import React from "react";
import Form from "react-bootstrap/Form";
import { dictionary } from "../../dictionary";
import { useSearchStyles } from "./useSearchStyles";

interface UserInput {
  input: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLElement>) => void;
  badSearchReq: string;
}

export const Search: React.FC<UserInput> = ({
  input,
  handleChange,
  handleSubmit,
  badSearchReq,
}) => {

  const classes = useSearchStyles();
  
  return (
    <div>
      <Form className={classes.formContainer} onSubmit={handleSubmit}>
        <Form.Group className='mb-3' controlId='formBasicEmail'>
          <div className={classes.searchOperation}>
            <Form.Control
              name='input'
              type='text'
              className={classes.searchInputField}
              placeholder='Search Scriptures...'
              onChange={handleChange}
              value={input}
              required
            />
            <button className={classes.searchBtn}>
              {dictionary.SEARCH_BUTTON_TEXT}
            </button>
          </div>
          <div className={classes.subText}>
            <p className={classes.errorMessage}>{badSearchReq}</p>
            <Form.Text className='text-muted'>
              {dictionary.SUB_TITLE_SCRIPTURE}
            </Form.Text>
          </div>
        </Form.Group>
      </Form>
    </div>
  );
};
