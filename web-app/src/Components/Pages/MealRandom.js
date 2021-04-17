import React, { useState, useEffect } from 'react';
import { Container, Typography } from '@material-ui/core';
import { randomMealStyles } from '../../assets/styles/sharedStyles';
import { getRandomMeal } from '../../api/mealApi';
import Ingredients from '../Ingredients';
// import json_data from '../../assets/json/preset_meals.json';


function MealGrid() {
    const classes = randomMealStyles();

    const [random, setRandom] = useState();


    useEffect(() => {
        getRandomMeal()
        .then((res) => {
            setRandom(res.data.meals)
        })
        .catch((err) => {
          console.log(err);
        })
    }, [])

    if(random) {
      return (
        <Container className={classes.root}>
          <div>
            <Typography className={classes.mainText} variant="h4">How to make:<i> {random[0].strMeal}</i></Typography>
            <img className={classes.image} src={random[0].strMealThumb} alt={random[0].strMealThumb}/>
            <Typography className={classes.dishText}>{random[0].strArea}Dish</Typography> 
            <Typography className={classes.infoText}><b>• Category:</b> {random[0].strCategory}</Typography>
            {random[0].strTags 
                ? <Typography className={classes.infoText}><b>• Tags:</b> {random[0].strTags}</Typography> 
                : <Typography className={classes.infoText}><b>• No Tags</b></Typography> 
            } 
          </div>
          <div className={classes.inner}>
            
            <Typography className={classes.infoText}>{random[0].strInstructions}</Typography>
          </div>
          <div className={classes.inner}>
          <Ingredients meal={random[0]}/>
          </div>
     
        </Container>
      )
    } else {
      return (
        <>
            <Typography>Searching for random meal...</Typography>
          
        </>
      )
    
    }
    
}

export default MealGrid;