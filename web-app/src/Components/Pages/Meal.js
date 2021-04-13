import React from 'react';
import { 
    Card, CardHeader, CardMedia, 
    CardContent, Avatar, Typography  
} from '@material-ui/core';
import MealContent from './MealContent';
import { cardStyles } from '../../assets/styles/sharedStyles';


function Meal(props) {
    const classes = cardStyles();

    return (
        <Card className={classes.card}>
            <CardHeader avatar={
                            <Avatar className={classes.cardAvatar}>
                            Meal Meetup
                            </Avatar>}
                        action={
                            <MealContent meal={props.meal}/>
                        }
            />
        <CardMedia className={classes.cardImg} image={props.meal.strMealThumb} alt={props.meal.strMealThumb}/>
        <CardContent className={classes.cardContent}>
            <Typography  className={classes.cardOverline}>{props.meal.strArea} Dish</Typography> 
            <Typography className={classes.cardMainText}>{props.meal.strMeal}</Typography>  
            <Typography className={classes.cardInfoText}>• Category: {props.meal.strCategory}</Typography>     
            { props.meal.strTags 
                    ? <Typography className={classes.cardInfoText}>• Tags: {props.meal.strTags}</Typography> 
                    : <Typography className={classes.cardInfoText}>• No Tags</Typography> 
            }  
        </CardContent>
        </Card>
    );
}

export default Meal;