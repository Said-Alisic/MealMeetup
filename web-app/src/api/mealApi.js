import React from 'react';
import axios from 'axios';

const URL = "www.themealdb.com/api/json/v1/1"

export const getAllCategories = () => {
    axios.get(`${URL}/categories.php`)
        .then((res) => {
            return res.data
        }).catch((err) => {
            console.log(err);
        });
}

export const getMealsByCategory = (category) => {
    axios.get(`${URL}/filter.php?c=${category}`)
        .then((res) => {
            return res.data
        }).catch((err) => {
            console.log(err);
        });
}

export const getRandomMeal = () => {
    axios.get(`${URL}/random.php`)
        .then((res) => {
            return res.data
        }).catch((err) => {
            console.log(err);
        });
}

export const getMealByName = (name) => {
    axios.get(`${URL}/search.php?s=${name}`)
        .then((res) => {
            return res.data
        }).catch((err) => {
            console.log(err);
        });
}

export const getMealById = (id) => {
    axios.get(`${URL}/lookup.php?i=${id}`)
        .then((res) => {
            return res.data
        }).catch((err) => {
            console.log(err);
        });
}