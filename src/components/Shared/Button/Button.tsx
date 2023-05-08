import React from "react";
import { useButtonStyles } from './useButtonStyles';

interface ButtonProps {
    onClick?: () => void;
    children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ onClick, children }) => {
  const classes = useButtonStyles();
  return (
    <>
      <button onClick={onClick} className={classes.searchBtn}>
        {children}
      </button>
    </>
  )};


