import React from 'react';
import { AppBar, Toolbar, IconButton, Button } from '@material-ui/core';
import { Link as NavLink } from 'react-router-dom';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import { navBarStyles } from '../assets/styles/sharedStyles';

function NavBar() {
    const classes = navBarStyles();

    return (
        <div className={classes.container}>
            <AppBar className={classes.navBar} >
                <Toolbar>
                    <IconButton className={classes.home} component={NavLink} 
                                to="/">
                        <HomeOutlinedIcon className={classes.homeBtn}/>
                    </IconButton>
                    <Button className={classes.btn} component={NavLink} 
                                to="/random">
                        Random Meal
                    </Button>
                    <Button className={classes.btn} component={NavLink} 
                                to="/favorites">
                        Favorites
                    </Button>
                    <Button className={classes.btn} component={NavLink} 
                                to="/about">
                        About
                    </Button>
                </Toolbar>
            </AppBar>  
        </div>
         
    )
}

export default NavBar;