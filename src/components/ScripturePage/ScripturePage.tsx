import { useScripturePageStyles } from './useScripturePageStyles';
import { Like } from '../Shared/Like/Like';
import { ImSpinner9 } from 'react-icons/im';
import { styled, keyframes } from 'styled-components';

interface DataFromAPI {
  bibleReference: string;
  bibleVerse: any[]
  searchComponent: any;
  isLoading: boolean;
}

export const ScripturePage: React.FC<DataFromAPI> = ({
  bibleReference,
  bibleVerse,
  searchComponent,
  isLoading
}) => {

  const rotate = keyframes `
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(360deg);
    }
  `;

  const Rotate = styled.div`
  display: inline-block;
  animation: ${rotate} 2s linear infinite;
  padding: 2rem 1rem;
  font-size: 1.2rem;
`;

  const classes = useScripturePageStyles();

  return (
    <>
      { searchComponent }
      <section className={classes.scripturePageTitleContainer}>
        <h1 className={classes.scripturePageTitle}>
          { bibleReference }
        </h1>
      </section>
      <section className={classes.bibleVerseContainer}>
        <Like className={classes.heart} />
        {
          isLoading ? 
          <Rotate>
            <ImSpinner9 size={'30'}/>
          </Rotate>
          : null
        }
        {
        bibleVerse.map((item, keys) => (
          <div key={keys}>
            <p className={classes.bibleText}>
              <span className={classes.bibleVerseNumber}>{item.verse}</span> {item.text}
            </p>
          </div>
        ))
        }
      </section>
    </>
  );
};
