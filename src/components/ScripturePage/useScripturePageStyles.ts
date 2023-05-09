import { createUseStyles } from 'react-jss';

export const useScripturePageStyles = createUseStyles({
    bibleVerseContainer: {
        border: 'solid 1px transparent',
        borderRadius: '5px',
        margin: '2rem 2rem',
        padding: '1rem 1rem',
        boxShadow: '0 3px 6px rgba(0,0,0,0.10), 0 3px 6px rgba(0,0,0,0.10)',
        '&:hover:': {
            border: 'solid 1px transparent',
            borderRadius: '5px',
            margin: '2rem 2rem,',
            padding: '1rem 1rem',
          }
      },
      bibleText: {
          textAlign: 'start',
      },
      bibleVerseNumber: {
        color: '#a6a6a6',
      },
      scripturePageTitleContainer: {
        margin: '2rem',
      },
      scripturePageTitle: {
        fontWeight: 'bold',
        fontSize: '2.2rem',
        borderBottom: '0.09rem solid #d8d8d8',
        paddingBottom: '0.7rem'
      },
      heart: {
        width: '1rem',
      }
});