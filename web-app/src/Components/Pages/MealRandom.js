import React, { useState, useEffect } from 'react';
import { 
    Grid, Typography
} from '@material-ui/core';
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
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid className={classes.gridItem} item xs={3}>
                        <img className={classes.image} src={random[0].strMealThumb} alt={random[0].strMealThumb}/>
                </Grid>
                <Grid className={classes.gridItem} item xs={9}>
                    <Grid className={classes.gridItem} item xs={12}>
                        <Typography className={classes.titleText} variant="h4">How to make: {random[0].strMeal}</Typography>
                    </Grid>
                    <Grid className={classes.gridItem} item xs={12}>
                        { random[0].strTags 
                            ? <Typography>• Tags: {random[0].strTags}</Typography> 
                            : <Typography>• No Tags</Typography> 
                        }  
                    </Grid>
                </Grid>
                <Grid className={classes.gridItem} item xs={3}>
                    <Typography>{random[0].strArea}Dish</Typography> 
                </Grid>
                <Grid className={classes.gridItem} item xs={9}>
                   <Grid className={classes.gridItem} item xs={12}>
                        <Typography >{random[0].strInstructions}</Typography>
                    </Grid>
                    <Grid className={classes.gridItem} item xs={12}>
                        <Typography className={classes.titleText}><Ingredients meal={random[0]}/></Typography>
                    </Grid>
                    <Grid className={classes.gridItem} item xs={12}>
                        <Typography>• Category: {random[0].strCategory}</Typography>  
                    </Grid>
                </Grid>
            </Grid>
        </div>
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