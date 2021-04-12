import { makeStyles } from '@material-ui/core/styles';

export const appStyles = makeStyles({
    app: {
        // minWidth: '100vw',
        minHeight: '100vh',
        backgroundColor: '#F0DEB4',
        // 'linear-gradient(45 deg, #F0DEB4 50%, #F3E5C3 55%, #F5EACF 60%, #F7EED9 65%, #F9F1E1 70%, #FAF4E7 75%, #FBF6EC 80%, #FCF8F0 85%, #FDF9F3 90%, #FDFAF5 95%, %ffffff 100%)',

    },
});

export const navBarStyles = makeStyles({
    navBar: {
        background: '#ffffff',
        maxWidth: '88vw',
        minHeight: '8vh',
        maxHeight: '15vh',
        position: 'static',
        marginLeft: '6%',
    },
    container: {
        paddingTop: '0.5%',
        backgroundColor: '#F0DEB4',
    },
});

export const searchBarStyles = makeStyles((theme) => ({
    searchBar: {
        marginLeft: '25%',
        marginRight: '25%',
        marginBottom: theme.spacing(5), 
    },
    searchBtn: {
        marginRight: 'auto',
    },
    inputField: {
        minWidth: '90%',
        marginLeft: '5%',
        marginRight: 'auto',
    },
}));

export const containerStyles = makeStyles({
    container: {
        maxWidth: '85vw',
        minHeight: '84vh',
        backgroundColor: '#ffffff',
        marginTop: '2vh',
    },
});

export const dialogStyles = makeStyles({
    dialog: {
        background: '#ffffff',
    },
    dialogTitle: {
        color: 'black',
        fontStyle: 'oblique',
        background: '#F0DEB4',
    },
    dialogInfoText: {
        color: 'black',
        marginBottom: '5%',
    },
    dialogAction: {
        background: '#F0DEB4',
    },
    dialogBtn: {
        fontSize: '0.65rem',
        textDecorationLine: 'underline',
    },
    dialogIngredients: {
        textDecorationLine: 'underline',
        marginBottom: '2%',
    }
});

export const cardStyles = makeStyles({
    card: {
        width:  '100%',
        height: '100%',
        background: '#ffffff',
        borderStyle: 'solid',
        border: 1,
        '&:hover': {
            boxShadow: '0 7px 11px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.09)',
        },
    },
    cardAvatar: {
        fontSize: '0.65rem',
        textAlign: 'center',
    },
    cardImg: {
        paddingTop: '70.00%',
    },
    cardContent: {
        maxHeight: '35%',
        maxWidth: '100%',
    },
    cardMainText: {
        fontSize: '1.2rem',
        fontStyle: 'oblique', 
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",       
    },
    cardOverline: {
        fontWeight: 600, 
    },
    cardInfoText: {
        fontSize: '0.85rem',
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
    }
});

export const gridStyles = makeStyles({
    grid: {
        background: '#ffffff', 
    },
    gridItem: {
        width:  '100%',
        height: '100%',
    },
});

export const textStyles = makeStyles({
    mainText: {
        paddingTop: '3%',
        textAlign: 'center',
        fontWeight: 600, 
    },
    infoText: {
        textAlign: 'center',
    },
});