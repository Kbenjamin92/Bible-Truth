import { createUseStyles } from "react-jss";

export const useMainPageStyles = createUseStyles({
  container: {
    margin: "0rem",
  },
  headerDisplayContainer: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  headerTitle: {
    fontWeight: "bold",
    fontSize: "2rem",
    textAlign: "start",
    marginRight: "6rem",
  },
  headerTitleContainer: {
    margin: "2rem 2rem 0 1rem",
  },
  headerImage: {
    height: "9rem",
    width: "8rem",
    marginRight: "1rem",
  },
});
