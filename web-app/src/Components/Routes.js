import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Pages/Home';
import MealRandom from './Pages/MealRandom';
import Favorites from './Pages/Favorites';
import About from './Pages/About';
import Error404 from './Pages/Error404';


function Routes() {
    return (
        <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/random" component={MealRandom}></Route>
            <Route exact path="/favorites" component={Favorites}></Route>
            <Route exact path="/about" component={About}></Route>
            <Route exact path="/*" component={Error404}></Route>
        </Switch>
    )
}

export default Routes;