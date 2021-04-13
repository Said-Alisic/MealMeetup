import React from 'react';
import { Typography } from '@material-ui/core';
import { textStyles } from '../../assets/styles/sharedStyles';

function Favorites() {
    const classes = textStyles();

    return (
        <>
            <Typography className={classes.mainText} variant="h4">Favorites Page </Typography>
            <Typography className={classes.infoText} variant="h5">
            (Still under development)
            </Typography>
        </>
    )
}

export default Favorites;