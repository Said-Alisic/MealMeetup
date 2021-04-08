import React from 'react';
import { AppBar, Toolbar, IconButton } from '@material-ui/core';
import { Link as NavLink } from 'react-router-dom';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import HelpOutlineOutlinedIcon from '@material-ui/icons/HelpOutlineOutlined';
import { navBarStyles } from '../assets/styles/sharedStyles';

function NavBar() {
    const classes = navBarStyles();

    return (
        <div className={classes.container}>
            <AppBar className={classes.navBar} >
                <Toolbar>
                    <IconButton component={NavLink} 
                                to="/">
                        <HomeOutlinedIcon />
                    </IconButton>
                    <IconButton component={NavLink} 
                                to="/favorites">
                        <FavoriteBorderIcon />
                    </IconButton>
                    <IconButton component={NavLink} 
                                to="/about">
                        <HelpOutlineOutlinedIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>  
        </div>
         
    )
}

export default NavBar;