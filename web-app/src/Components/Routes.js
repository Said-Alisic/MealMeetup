import React from 'react';
import { Switch, Route } from 'react-router-dom';

function Routes() {
    return (
        <Switch>
            <Route exact path="/">[Home Page]</Route>
            <Route exact path="/favorites" >[Favorites Page]</Route>
            <Route exact path="/about">[About Page]</Route>
            <Route exact path="/*">[Error Page]</Route>
        </Switch>
    )
}

export default Routes;