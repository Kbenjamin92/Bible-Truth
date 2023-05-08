import { createUseStyles } from 'react-jss';

export const useButtonStyles = createUseStyles({
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
})