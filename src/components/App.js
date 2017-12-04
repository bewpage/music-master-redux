import React, { Component } from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import Home from './Home';
import Login from './Login';
import Error from './Error';
import User from './User';

class App extends Component {


    render() {
        return (
            <Router history={browserHistory}>
                <Route path='/' component={Home}>
                    <IndexRoute component={Login} />
                    <Route path='/user/:access_token/:refresh_token' component={User} />
                    <Route path='/error/:errorMsg' component={Error}/>
                </Route>
            </Router>
        );
    }
}

export default App;
