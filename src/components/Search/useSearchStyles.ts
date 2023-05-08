import { createUseStyles } from 'react-jss';

 export const useSearchStyles = createUseStyles({
    formContainer: {
        height: '30vh',
        backgroundColor: '#f8f8f8',
        padding: '1rem 2rem 0 2rem',
    },
    searchOperation: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: '10px',
    },
    subText: {
        marginTop: '15px',
        textAlign: 'start',
    },
    searchInputField: {
        marginRight: '10px',
    },
    errorMessage: {
        color: 'crimson',
        margin: '10px',
        textAlign: 'start',
    }
 });