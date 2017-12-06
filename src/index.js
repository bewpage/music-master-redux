import React from 'react';
import ReactDOM from 'react-dom';

import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import { createStore,  combineReducers, applyMiddleware  } from 'redux';
import { Provider } from 'react-redux';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';

import thunk from 'redux-thunk';
import reducer from "./reducers";


import App from "./components/App";
import User from "./components/User";
import Login from "./components/Login";
import Search from "./components/Search";
import Error from "./components/Error";

import './index.css';

import { loadState, saveState } from './localStorage';
import throttle from 'lodash/throttle';

const presistedState = loadState();
const reducers = combineReducers({
    reducer,
    routing: routerReducer
});

const store = createStore(
    reducers,
    presistedState,
    applyMiddleware(thunk)
);



store.subscribe(throttle(() => {
    saveState({
        reducer: store.getState().reducer
    });
}, 1000));


const history = syncHistoryWithStore(browserHistory, store);


ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Route path='/' component={App}>
                <IndexRoute component={Login} />
                <Route path='/user/:access_token/:refresh_token' component={User} />
                <Route path='/search' component={Search} />
                <Route path='/error/:errorMsg' component={Error}/>
            </Route>
        </Router>
    </Provider>
    , document.getElementById('root'));
