import React from "react";
import Form from "react-bootstrap/Form";
import { dictionary } from "../../dictionary";
import { useSearchStyles } from "./useSearchStyles";
import { Button } from "../Shared/Button/Button";

interface UserInput {
  input: string;
  handleSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSearchSubmit: (e: React.FormEvent<HTMLElement>) => void;
  badSearchReq: string;
}

export const Search: React.FC<UserInput> = ({
  input,
  handleSearchChange,
  handleSearchSubmit,
  badSearchReq,
}) => {
  const classes = useSearchStyles();

  return (
    <div>
      <Form className={classes.formContainer} onSubmit={handleSearchSubmit}>
        <Form.Group className='mb-3' controlId='formBasicEmail'>
          <div className={classes.searchOperation}>
            <Form.Control
              name='input'
              type='text'
              className={classes.searchInputField}
              placeholder={dictionary.SCRIPTURE_SEARCH}
              onChange={handleSearchChange}
              value={input}
              required
            />
            <Button>{dictionary.SEARCH_BUTTON_TEXT}</Button>
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
