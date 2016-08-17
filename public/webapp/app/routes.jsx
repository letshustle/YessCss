import React from 'react';
import {Redirect, Route, IndexRoute, IndexRedirect} from 'react-router';

import App from './views/app';
import HomeView from './views/home';
import PeopleView from './views/people';



import RegisterView from './views/register';
import LoginView from './views/login';



import RouteNotFound from './views/routeNotFound';
import errorHandler from './utils/errorHandler';

/**
 * Adds trailing slash (/) to current URL
 * @param nextState
 * @param replace
 */
function appendTrailingSlash(nextState, replace) {
    let lastChar = nextState.location.pathname.slice(-1);
    if (lastChar !== '/') {
        replace(nextState, nextState.location.pathname + '/');
    }
}

let routes = (
    <Route path="/" component={errorHandler(App)}>
        <IndexRoute component={errorHandler(RegisterView)}/>
        <Route path="/home" component={errorHandler(HomeView)}/>
        <Route path="/people" component={errorHandler(PeopleView)}/>
        <Route path="*" component={errorHandler(RouteNotFound)} onEnter={appendTrailingSlash}/>
    </Route>
);

export default routes;
