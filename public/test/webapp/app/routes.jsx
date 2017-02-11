import React from 'react';
import {Redirect, Route, IndexRoute, IndexRedirect} from 'react-router';

import App from './views/app';

import BoxGeneratorView from './views/BoxGenerator';
import TextGeneratorView from './views/textGenerator';
import ButtonGeneratorView from './views/buttonGenerator';
import AnchorGeneratorView from './views/anchorGenerator';
import PeopleView from './views/people';


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
        <IndexRoute component={errorHandler(BoxGeneratorView)}/>
        <Route path="/boxgenerator" component={errorHandler(BoxGeneratorView)}/>
        <Route path="/textgenerator" component={errorHandler(TextGeneratorView)}/>
        <Route path="/buttongenrator" component={errorHandler(ButtonGeneratorView)}/>
        <Route path="/anchortaggenerator" component={errorHandler(AnchorGeneratorView)}/>
        <Route path="/people" component={errorHandler(PeopleView)}/>
        <Route path="*" component={errorHandler(RouteNotFound)} onEnter={appendTrailingSlash}/>
    </Route>
);

export default routes;
