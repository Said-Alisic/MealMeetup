import React from 'react';
import { Grid } from '@material-ui/core';
import MealGrid from './MealGrid';

function Home() {

    return (
        <>
            <Grid container>
                <Grid item>
                    <h1>Meal Meetup</h1>
                </Grid>
                <Grid item>
                </Grid>
                <Grid item>
                </Grid>
            </Grid>
            <MealGrid/>
        </>
    )
}

export default Home;