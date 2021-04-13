import { makeStyles } from '@material-ui/core/styles';

export const appStyles = makeStyles({
    app: {
        // minWidth: '100vw',
        minHeight: '100vh',
        backgroundColor: '#F0DEB4',
        // 'linear-gradient(45 deg, #F0DEB4 50%, #F3E5C3 55%, #F5EACF 60%, #F7EED9 65%, #F9F1E1 70%, #FAF4E7 75%, #FBF6EC 80%, #FCF8F0 85%, #FDF9F3 90%, #FDFAF5 95%, %ffffff 100%)',

    },
}, {index: 1});

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
}, {index: 1});

export const searchBarStyles = makeStyles((theme) => ({
    searchBar: {
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: theme.spacing(5), 
        alignItems: 'center',
        display: 'flex',
        width: '35%',
    },
    searchBtn: {
        marginRight: 'auto',
    },
    inputField: {
        minWidth: '80%',
        marginLeft: '5%',
        marginRight: 'auto',
    },
}), {index: 1});

export const containerStyles = makeStyles({
    container: {
        maxWidth: '85vw',
        minHeight: '84vh',
        backgroundColor: '#ffffff',
        marginTop: '2vh',
    },
}, {index: 1});

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
}, {index: 1});

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
}, {index: 1});

export const mealGridStyles = makeStyles((theme) => ({
    grid: {
        background: '#ffffff', 
    },
    gridItem: {
        width:  '100%',
        height: '100%',
    },
    pagination: {
        marginTop: theme.spacing(2)
    }
}), {index: 1});

export const randomMealStyles = makeStyles((theme) => ({
    
    root: {
        paddingTop: '3%',
      },
      gridItem: {
        maxHeight: '100%',
        maxWidth: '100%',
        background: 'rgba(0, 0, 0, 0.0)',
      },
      image: {
        height: '100%', 
        width: '100%',
        marginRight: 'auto',
      },
      titleText: {
        fontStyle: 'oblique', 
        marginTop: 'auto',
      }
}), {index: 1});

export const textStyles = makeStyles({
    mainText: {
        paddingTop: '3%',
        textAlign: 'center',
        fontWeight: 600, 
    },
    infoText: {
        textAlign: 'center',
    },
}, {index: 1});