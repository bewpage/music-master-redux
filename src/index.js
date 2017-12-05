import React from 'react';
import ReactDOM from 'react-dom';

import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import { createStore,  combineReducers, applyMiddleware  } from 'redux';
import { Provider } from 'react-redux';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';

import thunk from 'redux-thunk';

import reducer from "./reducers";

// import App from './components/App';
import Error from "./components/Error";
import Home from "./components/Home";
import User from "./components/User";
import Login from "./components/Login";

import './index.css';

// const createStoreWithMiddleware = applyMiddleware(thunk);

const store = createStore(
    combineReducers({
        reducer,
        routing: routerReducer
    }),applyMiddleware(thunk)
);


const history = syncHistoryWithStore(browserHistory, store);


ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Route path='/' component={Home}>
                <IndexRoute component={Login} />
                <Route path='/user/:access_token/:refresh_token' component={User} />
                <Route path='/error/:errorMsg' component={Error}/>
            </Route>
        </Router>
    </Provider>
    , document.getElementById('root'));
