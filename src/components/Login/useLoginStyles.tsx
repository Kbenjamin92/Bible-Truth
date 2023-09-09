import { createUseStyles } from "react-jss";

export const useLoginStyles = createUseStyles({
  formContainer: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
    border: "solid 0.06rem transparent",
    margin: "3rem",
    borderRadius: "0.3rem",
    boxShadow: "0 3px 6px rgba(0,0,0,0.10), 0 3px 6px rgba(0,0,0,0.10)",
  },
  loginTitle: {
    margin: "1rem",
    display: "flex",
    justifyContent: "start",
  },
  loginBtn: {
    backgroundColor: "#FFC107",
    color: "#000",
    border: "1px solid transparent",
    borderRadius: "5px",
    padding: "0.3rem 0.8rem 0.3rem 0.8rem",
    textDecoration: "none",
    display: "flex",
    justifyContent: "start",
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
  loginInputField: {
    marginBottom: "0.7rem",
  },
});
