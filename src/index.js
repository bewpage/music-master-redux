import React from 'react';
import ReactDOM from 'react-dom';

import { createStore,  combineReducers, applyMiddleware  } from 'redux';
import { Provider } from 'react-redux';

import { Route, Switch, matchPath } from 'react-router';
import createHistory from 'history/createBrowserHistory';
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux';

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


const history = createHistory();
const middleware = routerMiddleware(history)

const presistedState = loadState();
const reducers = combineReducers({
    reducer,
    routing: routerReducer
});

const store = createStore(
    reducers,
    presistedState,
    applyMiddleware(thunk, middleware)
);



store.subscribe(throttle(() => {
    saveState({
        reducer: store.getState().reducer
    });
}, 1000));



// const history = syncHistoryWithStore(browserHistory, store);

// console.log('history', browserHistory);

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter  history={history}>
            <div>
                <Switch>
                    <Route exact={true} path='/' component={Login} />
                    <Route path='/' component={App} />
                    <Route path='/search' component={Search} />
                    <Route path='/error/:errorMsg' component={Error}/>
                </Switch>
            </div>
        </ConnectedRouter >
    </Provider>
    , document.getElementById('root'));
