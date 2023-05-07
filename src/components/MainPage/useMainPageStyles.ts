import { createUseStyles } from 'react-jss';

export const useMainPageStyles = createUseStyles({
    container: {
        margin: "5rem",
    },
    headerDisplayContainer: {
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    headerTitle: {
        fontWeight: 'bold',
        fontSize: '1rem',
        textAlign: 'start',
    },
    headerTitleContainer: {
        margin: '1rem',
    },
    headerImage: {
        height: '8rem',
        width: '8rem',
        marginRight: '2rem',
    }
});