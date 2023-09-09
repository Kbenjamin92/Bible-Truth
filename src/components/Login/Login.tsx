import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { dictionary } from "../../dictionary";
import { useLoginStyles } from "./useLoginStyles";

interface LoginProps {
  username: string;
  password: string;
  handleUsernameChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handlePasswordChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleLoginSubmit: (e: React.FormEvent<HTMLElement>) => void;
}

export const Login: React.FC<LoginProps> = ({
  username,
  password,
  handleUsernameChange,
  handlePasswordChange,
  handleLoginSubmit,
}) => {
  const classes = useLoginStyles();

  return (
    <div>
      <Form className={classes.formContainer} onSubmit={handleLoginSubmit}>
        <Form.Group className='mb-3' controlId='formBasicEmail'>
          <div>
            <h1 className={classes.loginTitle}>{dictionary.LOGIN_TITLE}</h1>
          </div>
          <div>
            <div>
              <Form.Control
                className={classes.loginInputField}
                name='username'
                type='text'
                placeholder={dictionary.USERNAME}
                onChange={handleUsernameChange}
                value={username}
                required
              />
            </div>
            <div>
              <Form.Control
                className={classes.loginInputField}
                name='password'
                type='password'
                placeholder={dictionary.PASSWORD}
                onChange={handlePasswordChange}
                value={password}
                required
              />
            </div>
            <div>
              <Button type='submit' className={classes.loginBtn}>
                {dictionary.LOGIN}
              </Button>
            </div>
          </div>
        </Form.Group>
      </Form>
    </div>
  );
};
