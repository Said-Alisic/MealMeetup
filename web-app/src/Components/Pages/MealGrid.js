import React, { useState, useEffect } from 'react';
import { Grid } from '@material-ui/core';
import { Pagination } from '@material-ui/lab';
import Meal from './Meal';
import SearchBar from '../SearchBar'
import { gridStyles } from '../../assets/styles/sharedStyles';
import { getMealByName } from '../../api/mealApi';
// import json_data from '../../assets/json/preset_meals.json';


function MealGrid() {
    const classes = gridStyles();

    const [meals, setMeals] = useState();
    const [input, setInput] = useState("");
    const [page, setPage] = useState(1);

    useEffect(() => {
      getMealByName("a")
        .then((res) => {
          setMeals(res.data.meals)
        })
        .catch((err) => {
          console.log(err);
        })
    }, [])

    const handleSubmit = (e) => {
      
      e.preventDefault()
      

      if(input) {
        getMealByName(input)
        .then((res) => {
          setMeals(res.data.meals)
          setInput("")
        })
        .catch((err) => {
          console.log(err);
        })
      }
    }

    const handleChange = (e) => {
      setInput(e.target.value)
    };
    

    const handlePageChange = (e, value) => {
      setPage(value);
    };

    if(meals) {
      return (
        <>
          <SearchBar input={input} handleChange={handleChange} handleSubmit={handleSubmit}/>
          <Grid className={classes.grid} container spacing={3}>
                {meals.slice((page - 1) * 8, page * 8).map((meal, index) => {
                  return (
                    <Grid className={classes.gridItem} item xs={6} sm={3} key={index}>
                      <Meal meal={meal} />
                    </Grid>
                  )})}
          </Grid>
          <Pagination 
              count={Math.ceil(meals.length / 8)} 
              page={page}
              defaultPage={1}
              boundaryCount={2}
              onChange={handlePageChange}                   
          />
        </>
      )
    } else {
      return (
        <>
          <SearchBar input={input} handleChange={handleChange} handleSubmit={handleSubmit}/>
          
        </>
      )
    
    }
    
}

export default MealGrid;