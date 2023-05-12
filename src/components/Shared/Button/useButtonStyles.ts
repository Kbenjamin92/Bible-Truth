import { createUseStyles } from "react-jss";

export const useButtonStyles = createUseStyles({
  searchBtn: {
    backgroundColor: "#FFC107",
    color: "#000",
    border: "1px solid transparent",
    borderRadius: "5px",
    padding: "0.3rem",
    textDecoration: "none",
    "&:hover": {
      backgroundColor: " gold",
      color: "#000",
      border: "1px solid transparent",
      borderRadius: "5px",
      boxShadow: "0px 8px 15px #fffbe5",
      padding: "0.3rem",
      textDecoration: "none",
    },
    "&:active": {
      outline: "none",
      transform: "scale(0.9)",
      backgroundColor: "#ffe766",
      boxShadow: "1px 2px 10px 2px rgba(0,0,0,0.1)",
      outLine: "none",
    },
  },
});
