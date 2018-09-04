import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LandingPage from './functions/LandingPage';
import App from "./App";
import DisplayFilm from "./components/DisplayFilm";
import CategorySearch from "./components/CategorySearch";
import SavedFilms from "./components/SavedFilms";

const Router = () => {
    return (
        <BrowserRouter basename='/'>
            <Switch>
                <Route exact path="/" component={LandingPage} />
                <Route path="/find" component={App} />
                <Route path="/find/categories" component={CategorySearch} />
                <Route path="/find/results" component={DisplayFilm} />
                <Route path="/find/saved" component={SavedFilms} />
            </Switch>
        </BrowserRouter>
    )
}

export default Router