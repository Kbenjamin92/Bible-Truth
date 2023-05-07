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
    searchBtn: {
        backgroundColor: 'gold',
        color: '#000',
        border: '1px solid transparent',
        borderRadius: '5px',
        padding: '7px',
        textDecoration: 'none',
        '&:hover': {
            backgroundColor:' gold',
            color: '#000',
            border: '1px solid transparent',
            borderRadius: '5px',
            boxShadow: '0px 8px 15px #fffbe5',
            padding: '7px',
            textDecoration: 'none',
        },
        '&:active': {
            outline: 'none',
            transform: 'scale(0.9)',
            boxShadow: '1px 6px 20px 5px rgba(0,0,0,0.1)',
            outLine: 'none',
        }
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