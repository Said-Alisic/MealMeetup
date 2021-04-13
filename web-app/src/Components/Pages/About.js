import React from 'react';
import { Typography } from '@material-ui/core';
import { textStyles } from '../../assets/styles/sharedStyles';

function About() {
    const classes = textStyles();

    return (
        <>
            <Typography className={classes.mainText} variant="h4">About Page</Typography>
            <Typography className={classes.infoText} variant="h5">
                Meal Meetup! A simple web application connected to "TheMealDB" to display recipes by name or category, 
                additionally, you can also try your luck and look for a random meal that may (or may not?) satisfy 
                your appetite! It is built using React.js for functionality and Material UI for design, which is an easy-to-use 
                lightweight CSS framework for designing web applications. This web application is hosted on "Vercel App" - 
                a platform for hosting frontend applications on - through a github repository connection, (and the best part...) 
                all free of charge!
            </Typography>
            <Typography className={classes.infoText} variant="h5">
                If you wish to check some of my other works, 
                head over to my github right <i><a href="https://github.com/Said-Alisic">here!</a></i>
            
            </Typography>
        </>
    )
}

export default About;