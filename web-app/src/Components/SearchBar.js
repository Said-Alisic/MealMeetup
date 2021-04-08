import React from 'react';
import {  TextField, Paper  } from '@material-ui/core';
import { searchBarStyles } from '../assets/styles/sharedStyles';

function SearchBar() {
    const classes = searchBarStyles();

    return (
        <Paper className={classes.searchBar} component="form" >
                <TextField className={classes.inputField} 
                            noValidate 
                            autoComplete="off" 
                            id="standard-basic" 
                            label="Search for Meals"/>
        </Paper>
    )
}

export default SearchBar;