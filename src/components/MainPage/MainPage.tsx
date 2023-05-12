import React from "react";
import bibleImage from "../../icons/bible.png";
import { dictionary } from "../../dictionary";
import { useMainPageStyles } from "./useMainPageStyles";
import { styled, keyframes } from "styled-components";

interface SearchType {
  searchComponent: any;
}

export const MainPage: React.FC<SearchType> = ({ searchComponent }) => {
  const classes = useMainPageStyles();

  const bounce = keyframes`
  0% {
    transform: translateY(-5rem);
  }
  25% {
    transform: translateY(-4rem);
  }
  50% {
    transform: translateY(-5rem);
  }
  75% {
    transform: translateY(-4rem);
  }
  100% {
    transform: translateY(-5rem);
  }
`;

  const Bounce = styled.div`
    display: inline-block;
    animation: ${bounce} 7s linear infinite;
    position: absolute;
    right: 1px;
    z-index: -1;
  `;

  return (
    <div className={classes.container}>
      {searchComponent}
      <div className={classes.headerDisplayContainer}>
        <section className={classes.headerTitleContainer}>
          <h1 className={classes.headerTitle}>{dictionary.HEADER_TITLE}</h1>
        </section>
        <section>
          <Bounce>
            <img src={bibleImage} alt='bible' className={classes.headerImage} />
          </Bounce>
        </section>
      </div>
    </div>
  );
};
