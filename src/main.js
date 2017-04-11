
///////////////////////////////////////////
// jquery and tether for bootstrap to use
// alternative is to link them in index.html
// import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import jquery from 'jquery';
import tether from 'tether';
window.$ = window.jQuery=jquery;
//window.Tether=require('tether');
window.Tether = tether;
// require('bootstrap/dist/js/bootstrap');
/////////////////////////////////////////////

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute} from 'react-router';

/////////////////////////////////////////////////////////////////////////
// browserHistory would be preferred over hashHistory, but browserHistory
// would require configuring the server. So we will use hashHistory here.
// Please change to browserHistory if you have your own backend server.
import {browserHistory as history} from 'react-router';
// import { useRouterHistory } from 'react-router';
// import { createHashHistory } from 'history'
// const history = useRouterHistory(createHashHistory)({ queryKey: false });
//////////////////////////////////////////////////////////////////////////



import App from './views/app';
import BoxGeneratorView from './views/boxGenerator';
import TextGeneratorView from './views/textGenerator';
import ButtonGeneratorView from './views/buttonGenerator';
import AnchorGeneratorView from './views/anchorGenerator';

import Test from './views/test';

import RouteNotFound from './views/routeNotFound';
import errorHandler from './utils/errorHandler';

import './index.scss';


ReactDOM.render(
  
    <Router history={history}>
        <Route path="/" component={errorHandler(App)}>
            <IndexRoute component={errorHandler(BoxGeneratorView)}/>
            <Route path="/test" component={errorHandler(Test)}/>
            <Route path="/boxgenerator" component={errorHandler(BoxGeneratorView)}/>
            <Route path="/textgenerator" component={errorHandler(TextGeneratorView)}/>
            <Route path="/buttongenrator" component={errorHandler(ButtonGeneratorView)}/>
            <Route path="/anchortaggenerator" component={errorHandler(AnchorGeneratorView)}/>
        
            <Route path="*" component={errorHandler(RouteNotFound)} />
        </Route>
    </Router>
  ,
  document.getElementById('app')
);
   
