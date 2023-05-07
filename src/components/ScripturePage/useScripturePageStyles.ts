import { createUseStyles } from 'react-jss';

export const useScripturePageStyles = createUseStyles({
    bibleVerseContainer: {
        border: 'solid 1px transparent',
        borderRadius: '5px',
        margin: '2rem 2rem',
        padding: '1rem 1rem',
        boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
        '&:hover:': {
            border: 'solid 1px transparent',
            borderRadius: '5px',
            margin: '2rem 2rem,',
            padding: '1rem 1rem',
            boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
          }
      },
      bibleText: {
          textAlign: 'start',
      },
      bibleVerseNumber: {
        color: 'rgb(107, 107, 107)',
      },
      scripturePageTitleContainer: {
        margin: '3rem',
      },
      scripturePageTitle: {
        fontWeight: 'bold',
        fontSize: '2.2rem',
      }
});