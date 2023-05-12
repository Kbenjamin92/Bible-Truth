import { createUseStyles } from "react-jss";

export const useNavigationStyles = createUseStyles({
  headerContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: "1rem",
    backgroundColor: "#000",
    "@media only screen and (min-width: 768px)": {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      padding: "1rem",
      backgroundColor: "#000",
    },
  },
  headerContent: {
    color: "white",
    fontSize: "30px",
    fontWeight: "bold",
    textAlign: "start",
    textDecoration: "none",
    "&:visited": {
      color: "white",
      fontSize: "30px",
      fontWeight: "bold",
      textAlign: "start",
      textDecoration: "none",
    },
    "@media only screen and (min-width: 768px)": {
      color: "white",
      fontSize: "35px",
      fontWeight: "bold",
      textAlign: "start",
    },
  },
  navTitle: {
    display: "inline-block",
    marginLeft: "0.313rem",
  },
  bibleIcon: {
    display: "inline-block",
  },
  hamburgerContainer: {
    backgroundColor: "transparent",
    border: "transparent",
    width: "43px",
    "&:active": {
      backgroundColor: "#0c0c0c",
      border: "transparent",
      transform: "scale(0.9)",
      width: "43px",
    },
    "@media only screen and (min-width: 768px)": {
      display: "none",
    },
  },
  hamburgerBorder: {
    borderTop: "2px solid white",
    paddingTop: "5px",
    "@media only screen and (min-width: 768px)": {
      display: "none",
    },
  },
  openNavContainer: {
    display: "flex",
    flexDirection: "column",
  },
  navListContainer: {
    display: "flex",
    "@media only screen and (max-width: 768px)": {
      display: "none",
    },
  },
  openNavItem: {
    color: "white",
    listStyle: "none",
    padding: "5px 5px 5px 5px",
    textDecoration: "none",
    "&:hover": {
      color: "white",
      listStyle: "none",
      textDecoration: "none",
      borderRadius: "5px",
      backgroundColor: "#191919",
    },
    "&:active": {
      transform: "scale(0.9)",
    },
    "@media only screen and (min-width: 768px)": {
      "&:hover": {
        color: "white",
        listStyle: "none",
        textDecoration: "none",
        backgroundColor: "#191919",
        borderRadius: "5px",
      },
    },
  },
  openHamburgerContainer: {
    position: "absolute",
    top: "4.125rem",
    right: "0px",
    paddingRight: "25px",
    borderRadius: "5px",
    boxShadow: "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)",
    border: "1px solid #000",
    backgroundColor: "#000",
    height: "12vh",

    //     '@media only screen and (min-width: 200px) and (max-width: 768px)': {
    //         position: 'relative',
    //         cursor: 'pointer',
    //         width: '177px',
    //         height: '160px',
    //         left: '0',
    //         transition: 'left 8s cubic-bezier(0, 0, 1, 1)',
    //         transitionTimingFunction: 'linear',
    // },
  },
  closeHamburgerContainer: {
    display: "none",
    right: "-7rem",
    position: "absolute",
    top: "4.125rem",
    paddingRight: "25px",
    borderRadius: "5px",
    boxShadow: "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)",
    border: "1px solid #000",
    backgroundColor: "#000",
    height: "22vh",
    //     '@media only screen and (min-width: 200px) and (max-width: 768px)': {
    //         transform: 'translate(40%)',
    //         transitionProperty: 'transform',
    //         transitionDuration: '1s',
    //         transitionTimingFunction: 'linear',
    // }
  },
});
