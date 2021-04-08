import React from 'react';
import { makeStyles } from '@material-ui/styles';

export const appStyles = makeStyles({
    app: {
        minWidth: '100vw',
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

export const searchBarStyles = makeStyles({
    searchBar: {
        marginBottom: 'auto',
        marginLeft: '25%',
        marginRight: '25%',
    },
    inputField: {
        minWidth: '90%',
        marginLeft: '5%',
        marginRight: 'auto',
    },

});

export const containerStyles = makeStyles({
    container: {
        maxWidth: '85vw',
        minHeight: '85vh',
        backgroundColor: '#ffffff',
        marginTop: '2vh',
    },

});